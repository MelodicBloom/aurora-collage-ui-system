// Optional audio engine — opt-in only, requires user gesture
type AudioEvent = 'buttonHover' | 'buttonPress' | 'pageTransition' | 'cartAdd';

class AudioEngine {
  private audioContext: AudioContext | null = null;
  private enabled = false;
  private reducedMotion = false;

  constructor() {
    if (typeof window !== 'undefined') {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      this.reducedMotion = mq.matches;
      mq.addEventListener('change', (e) => { this.reducedMotion = e.matches; });
    }
  }

  async initialize(): Promise<void> {
    if (this.reducedMotion) return;
    try {
      this.audioContext = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      await this.audioContext.resume();
    } catch {
      // Optional enhancement: unavailable audio must never block interface use.
    }
  }

  play(_event: AudioEvent): void {
    if (!this.enabled || !this.audioContext || this.reducedMotion) return;
    // Synth sounds omitted for brevity — see audio-spec.json
  }

  setEnabled(enabled: boolean): void {
    this.enabled = enabled;
    if (enabled && !this.audioContext) void this.initialize();
  }
}

export const audioEngine = new AudioEngine();

export function useAudio() {
  return {
    play: (event: AudioEvent) => audioEngine.play(event),
    setEnabled: (enabled: boolean) => audioEngine.setEnabled(enabled),
  };
}

if (typeof window !== 'undefined') {
  const init = () => { void audioEngine.initialize(); };
  window.addEventListener('click', init, { once: true, passive: true });
}
