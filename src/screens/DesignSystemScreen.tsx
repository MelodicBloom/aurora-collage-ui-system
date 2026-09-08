import AuroraFrame from '../components/aurora/AuroraFrame';
import CollageCard from '../components/aurora/CollageCard';
import MotionPoster from '../components/aurora/MotionPoster';
import RisoButton from '../components/aurora/RisoButton';
import TextureSwatch from '../components/aurora/TextureSwatch';
import { screenCopy } from '../packages/copy/screen-copy';

const colors = [
  ['Ink', '#131313'], ['Paper', '#F6EDE3'], ['Warm paper', '#EFE1D0'], ['Riso red', '#E94F4F'],
  ['Riso gold', '#F7B74D'], ['Water teal', '#4CABA2'], ['Violet ink', '#5E4B88'], ['Newsprint', '#B8A891'],
] as const;

export default function DesignSystemScreen() {
  return (
    <AuroraFrame>
      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-black/40">AURORA / system surface / v0.1</div>
        <h1 className="mt-3 text-5xl md:text-7xl">{screenCopy.designSystem.title}</h1>
        <p className="mt-4 max-w-3xl text-black/60">{screenCopy.designSystem.subtitle}. This page is a runnable inventory—not yet Storybook. Its job is to expose the current visual grammar clearly enough to audit what should become isolated, typed, testable component contracts next.</p>

        <section className="mt-12">
          <div className="mb-5 flex items-center justify-between"><h2 className="text-3xl">{screenCopy.designSystem.sections.colors}</h2><span className="font-mono text-[10px] text-black/35">canonical CSS variables</span></div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {colors.map(([name, value]) => <div key={name}><div className="aspect-square rounded-2xl border border-black/10" style={{ background: value }} /><div className="mt-2 text-xs">{name}</div><code className="text-[10px] text-black/40">{value}</code></div>)}
          </div>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <h2 className="text-3xl">{screenCopy.designSystem.sections.textures}</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <TextureSwatch name="Cardstock" description="Warm structural surface" color="#EFE1D0" pattern="solid" />
              <TextureSwatch name="Newsprint" description="Editorial line rhythm" color="#B8A891" pattern="newsprint" />
              <TextureSwatch name="Grain" description="Subtle print tooth" color="#F6EDE3" pattern="grain" />
              <TextureSwatch name="Halftone" description="Riso dot vocabulary" color="#F7B74D" pattern="halftone" />
            </div>
          </div>
          <div>
            <div className="mb-5 flex items-center justify-between"><h2 className="text-3xl">Motion</h2><span className="font-mono text-[10px] text-black/35">material, not ornamental</span></div>
            <MotionPoster />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl">Interaction primitives</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <CollageCard className="p-6"><div className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/35">Button</div><div className="mt-8 flex flex-wrap gap-2"><RisoButton>Primary</RisoButton><RisoButton variant="outline">Outline</RisoButton><RisoButton variant="ghost">Ghost</RisoButton></div></CollageCard>
            <CollageCard className="p-6"><div className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/35">Form field</div><label className="mt-8 block text-xs">Email<input className="mt-2 w-full rounded-xl border border-black/15 bg-transparent px-4 py-3 text-sm" placeholder="hello@example.com" /></label></CollageCard>
            <CollageCard className="p-6"><div className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/35">State target</div><div className="mt-8 space-y-2 text-sm text-black/60"><div>rest → hover → focus-visible</div><div>pressed → selected → loading</div><div>success / error → disabled</div></div></CollageCard>
          </div>
        </section>
      </section>
    </AuroraFrame>
  );
}
