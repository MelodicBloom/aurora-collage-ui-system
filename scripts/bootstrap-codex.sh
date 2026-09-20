#!/usr/bin/env bash
set -euo pipefail

MODE="${1:-current}"
PNPM_VERSION="9.15.4"
NODE_MIN_MAJOR=22

echo "== AURORA Codex bootstrap =="
echo "mode: ${MODE}"

if ! command -v node >/dev/null 2>&1; then
  echo "ERROR: Node is required. Use Node 22.23.2 in the Codex environment." >&2
  exit 2
fi

NODE_VERSION="$(node -p "process.versions.node")"
NODE_MAJOR="$(node -p "Number(process.versions.node.split('.')[0])")"
echo "node: ${NODE_VERSION}"

if [ "${NODE_MAJOR}" -lt "${NODE_MIN_MAJOR}" ]; then
  echo "ERROR: Node 22+ required for this build order; Storybook 10 requires a sufficiently recent Node 20/22 runtime." >&2
  exit 2
fi

corepack enable
corepack prepare "pnpm@${PNPM_VERSION}" --activate

echo "pnpm: $(pnpm --version)"

case "${MODE}" in
  current)
    # Current inherited branch has no committed lockfile yet.
    pnpm install --no-frozen-lockfile
    ;;
  storybook)
    pnpm install --no-frozen-lockfile
    pnpm add -D       storybook@10.6.0       @storybook/react-vite@10.6.0       @storybook/addon-a11y@10.6.0       vitest@5.0.1       @vitest/browser-playwright@5.0.1       @playwright/test@1.63.0
    pnpm exec playwright install chromium
    ;;
  frozen)
    test -f pnpm-lock.yaml || { echo "ERROR: pnpm-lock.yaml missing"; exit 3; }
    pnpm install --frozen-lockfile
    ;;
  *)
    echo "Usage: $0 {current|storybook|frozen}" >&2
    exit 2
    ;;
esac

pnpm contracts:validate
pnpm lint
pnpm typecheck
pnpm build

echo "Bootstrap verification passed."
