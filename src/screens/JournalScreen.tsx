import AuroraFrame from '../components/aurora/AuroraFrame';
import CollageCard from '../components/aurora/CollageCard';
import WatercolorPanel from '../components/aurora/WatercolorPanel';
import { screenCopy } from '../packages/copy/screen-copy';

const entries = [
  ['The useful pause', 'How quieter interfaces can make choice feel more confident instead of more empty.', '5 min read'],
  ['Ink has memory', 'Designing digital states from registration shifts, paper pressure, and the logic of imperfect reproduction.', '7 min read'],
  ['A storefront can feel held', 'What changes when conversion design is treated as hospitality rather than pressure.', '6 min read'],
];

export default function JournalScreen() {
  return (
    <AuroraFrame>
      <section className="relative overflow-hidden px-4 py-14 md:px-6 md:py-20">
        <WatercolorPanel className="pointer-events-none absolute right-[5%] top-8 h-64 w-64" color="#5E4B88" opacity={0.14} />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-black/40">Notes from the material surface</div>
            <h1 className="mt-3 text-6xl md:text-8xl">{screenCopy.journal.title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-black/60 md:text-lg">{screenCopy.journal.body} A living editorial layer for product context, process evidence, care knowledge, and ideas worth returning to.</p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
            <CollageCard className="min-h-[360px] p-8 md:p-10" elevation={3} rotation={-0.35}>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-black/35">Featured field note</div>
              <h2 className="mt-16 max-w-xl text-4xl md:text-5xl">When the interface stops shouting, the object can speak.</h2>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-black/60">A study in reducing urgency while strengthening confidence: clearer hierarchy, material cues, honest product evidence, and interactions that reward attention instead of exploiting it.</p>
              <button className="mt-8 rounded-full border border-black/15 px-5 py-2.5 text-sm transition-colors hover:border-black/40">Read the note</button>
            </CollageCard>
            <div className="grid gap-4">
              {entries.map(([title, body, meta], index) => (
                <article key={title} className="border-b border-black/10 p-5 last:border-b-0 md:p-6">
                  <div className="flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-black/35"><span>0{index + 1}</span><span>{meta}</span></div>
                  <h3 className="mt-5 text-2xl">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-black/58">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </AuroraFrame>
  );
}
