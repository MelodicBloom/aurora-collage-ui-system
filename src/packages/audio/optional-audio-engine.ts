/**
 * Optional ambient audio engine — opt-in only, gated behind user gesture.
 * All audio is disabled by default and respects prefers-reduced-motion.
 */

type AudioEvent = 'buttonHover' | 'buttonPress' | 'pageTransition' | 'cartAdd'

interface AudioEngineConfig {
  enabled: boolean
  uiVolume: number
  ambientVolume: number
}

const defaultConfig: AudioEngineConfig = {
  enabled: false,
  uiVolume: 0.18,
  ambientVolume: 0.06,
}

let _config: AudioEngineConfig = { ...defaultConfig }
let _initialized = false
let _audioCtx: AudioContext | null = null

function getReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function initAudio(): void {
  if (_initialized || getReducedMotion()) return
  _audioCtx = new AudioContext()
  _initialized = true
}

export function enableAudio(): void {
  if (getReducedMotion()) return
  if (!_initialized) initAudio()
  _config.enabled = true
}

export function disableAudio(): void {
  _config.enabled = false
}

export function isAudioEnabled(): boolean {
  return _config.enabled && _initialized
}

export function playUiEvent(_event: AudioEvent): void {
  if (!isAudioEnabled() || !_audioCtx) return
  // Placeholder — replace with actual AudioBuffer playback per event
  const osc = _audioCtx.createOscillator()
  const gain = _audioCtx.createGain()
  osc.connect(gain)
  gain.connect(_audioCtx.destination)
  gain.gain.setValueAtTime(_config.uiVolume * 0.1, _audioCtx.currentTime)
  gain.gain.exponentialRampToValueAtTime(0.0001, _audioCtx.currentTime + 0.18)
  osc.start()
  osc.stop(_audioCtx.currentTime + 0.18)
}

export function configureAudio(overrides: Partial<AudioEngineConfig>): void {
  _config = { ..._config, ...overrides }
}
