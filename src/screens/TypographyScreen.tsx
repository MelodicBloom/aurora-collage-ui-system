import AuroraFrame from '../components/aurora/AuroraFrame';
import { screenCopy } from '../packages/copy/screen-copy';

export default function TypographyScreen() {
  return (
    <AuroraFrame>
      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-black/40">Type specimen / governed hierarchy</div>
        <h1 className="mt-3 text-5xl md:text-7xl">{screenCopy.typography.title}</h1>
        <p className="mt-4 max-w-2xl text-black/60">{screenCopy.typography.subtitle}. The specimen is intentionally responsive so typography can be judged as interface behavior, not only as static samples.</p>

        <div className="mt-12 space-y-6">
          <section className="rounded-[2rem] border border-black/10 bg-[var(--color-warm-paper)] p-6 md:p-10">
            <div className="flex flex-wrap items-baseline justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-black/35"><span>Display</span><span>{screenCopy.typography.displayFamily}</span></div>
            <div className="mt-8 font-[Playfair_Display] text-5xl leading-[.98] md:text-8xl">The quiet surface remembers pressure.</div>
          </section>
          <section className="grid gap-5 md:grid-cols-2">
            <div className="rounded-[2rem] border border-black/10 p-6 md:p-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-black/35">Body / {screenCopy.typography.bodyFamily}</div>
              <p className="mt-7 text-base leading-8 text-black/70">{screenCopy.typography.sampleText} AURORA uses neutral body text as structural calm around more expressive material and display moments.</p>
              <p className="mt-5 text-sm leading-7 text-black/55">Responsive text should preserve legibility before theatrical scale. Line length, contrast, hierarchy, and content density are part of the system contract.</p>
            </div>
            <div className="rounded-[2rem] border border-black/10 bg-[var(--color-ink)] p-6 text-[var(--color-paper)] md:p-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">Mono / {screenCopy.typography.monoFamily}</div>
              <div className="mt-7 break-words font-mono text-sm leading-7 text-white/80">{screenCopy.typography.alphabet}<br />{screenCopy.typography.alphabetLower}<br />{screenCopy.typography.numerals}<br />{screenCopy.typography.punctuation}</div>
            </div>
          </section>
          <section className="border-y border-black/10 py-10">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {['Editorial authority', 'Commercial clarity', 'Material annotation', 'Accessible rhythm'].map((label, index) => <div key={label} className="p-4"><div className="font-mono text-[10px] text-black/30">0{index + 1}</div><div className="mt-8 text-2xl">{label}</div></div>)}
            </div>
          </section>
        </div>
      </section>
    </AuroraFrame>
  );
}
