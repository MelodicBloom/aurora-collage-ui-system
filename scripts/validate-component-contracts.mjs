#!/usr/bin/env node
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const root = new URL('../src/system/contracts/', import.meta.url);
const allowedStates = new Set(['rest','hover','focus-visible','pressed','selected','pending','listening','success','error','disabled','deactivated']);
const required = ['id','component','purpose','states','accessibility','responsive','motion','businessEvidence','evidenceStatus'];

function assert(condition, message, errors) {
  if (!condition) errors.push(message);
}

function validate(contract, file) {
  const errors = [];
  for (const key of required) assert(key in contract, `${file}: missing ${key}`, errors);
  assert(/^[a-z0-9-]+$/.test(contract.id ?? ''), `${file}: id must be kebab-case`, errors);
  assert(Array.isArray(contract.states) && contract.states.length > 0, `${file}: states must be non-empty`, errors);
  for (const state of contract.states ?? []) assert(allowedStates.has(state), `${file}: unsupported state ${state}`, errors);
  assert(contract.accessibility?.focusVisible === true, `${file}: focusVisible must be true`, errors);
  assert(Array.isArray(contract.accessibility?.keyboard) && contract.accessibility.keyboard.length > 0, `${file}: keyboard contract required`, errors);
  assert(Array.isArray(contract.responsive?.viewports) && contract.responsive.viewports.includes(390) && contract.responsive.viewports.includes(1440), `${file}: include mobile and wide desktop fixtures`, errors);
  assert(contract.motion?.deterministicTestMode === true, `${file}: deterministic motion test mode required`, errors);
  assert(Array.isArray(contract.businessEvidence?.observableEvents) && contract.businessEvidence.observableEvents.length > 0, `${file}: observable events required`, errors);
  assert(Array.isArray(contract.businessEvidence?.guardrails) && contract.businessEvidence.guardrails.length > 0, `${file}: guardrail metrics required`, errors);
  if (contract.evidenceStatus === 'measured') {
    assert(Array.isArray(contract.sourceRefs) && contract.sourceRefs.length > 0, `${file}: measured claims require sourceRefs`, errors);
  }
  return errors;
}

try {
  const files = (await readdir(root)).filter((name) => name.endsWith('.json')).sort();
  if (!files.length) {
    console.error('No component contracts found in src/system/contracts');
    process.exit(1);
  }
  const errors = [];
  for (const file of files) {
    const contract = JSON.parse(await readFile(join(root.pathname, file), 'utf8'));
    errors.push(...validate(contract, file));
  }
  if (errors.length) {
    console.error(errors.join('\n'));
    process.exit(1);
  }
  console.log(`Validated ${files.length} AURORA component contract(s).`);
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
