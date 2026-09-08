import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import AuroraFrame from '../components/aurora/AuroraFrame';
import CollageCard from '../components/aurora/CollageCard';
import MotionPoster from '../components/aurora/MotionPoster';
import ProductTile from '../components/aurora/ProductTile';
import RisoButton from '../components/aurora/RisoButton';
import WatercolorPanel from '../components/aurora/WatercolorPanel';
import { screenCopy } from '../packages/copy/screen-copy';

const products = [
  { name: 'Quiet Form Vase', price: '$48', category: 'Object', color: '#EFE1D0', accent: '#E94F4F' },
  { name: 'Morning Fold Journal', price: '$28', category: 'Paper', color: '#F6EDE3', accent: '#F7B74D' },
  { name: 'Tide Study Print', price: '$36', category: 'Edition', color: '#DDEBE7', accent: '#4CABA2' },
];

export default function HomeScreen() {
  return (
    <AuroraFrame>
      <section className="relative overflow-hidden border-b border-black/10 px-4 py-16 md:px-6 md:py-24">
        <WatercolorPanel className="pointer-events-none absolute -right-16 -top-20 h-80 w-80" color="#E94F4F" opacity={0.16} />
        <WatercolorPanel className="pointer-events-none absolute -bottom-28 left-[10%] h-72 w-72" color="#4CABA2" opacity={0.18} />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <div className="mb-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.26em] text-black/50">
              <Sparkles className="h-3.5 w-3.5" /> {screenCopy.home.eyebrow}
            </div>
            <h1 className="max-w-3xl text-5xl leading-[.96] sm:text-6xl md:text-7xl lg:text-8xl">{screenCopy.home.title}</h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-black/65 md:text-lg">{screenCopy.home.body}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/collection"><RisoButton showArrow>{screenCopy.home.cta}</RisoButton></Link>
              <Link to="/design-system" className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm text-black/60 transition-colors hover:text-black">See the system <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
          <MotionPoster />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-black/40">Shop the study</div>
            <h2 className="mt-2 text-3xl md:text-4xl">Objects with a slower pulse.</h2>
          </div>
          <Link to="/collection" className="hidden text-sm text-black/55 hover:text-black sm:inline">View all</Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => <ProductTile key={product.name} {...product} />)}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-4 pb-20 md:grid-cols-3 md:px-6">
        {[
          ['Quiet commerce', 'Reduce visual pressure while keeping product decisions clear and actionable.'],
          ['Tactile evidence', 'Texture, depth, and motion communicate material character without hiding function.'],
          ['Editorial memory', 'Interfaces behave like collected pages: layered, revisitable, and designed to be shared.'],
        ].map(([title, body], index) => (
          <CollageCard key={title} rotation={index === 1 ? 0.4 : index === 2 ? -0.5 : 0} className="p-7">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-black/35">0{index + 1}</div>
            <h3 className="mt-8 text-2xl">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-black/60">{body}</p>
          </CollageCard>
        ))}
      </section>
    </AuroraFrame>
  );
}
