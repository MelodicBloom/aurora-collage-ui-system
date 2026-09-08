import AuroraFrame from '../components/aurora/AuroraFrame';
import ProductTile from '../components/aurora/ProductTile';
import NewspaperStrip from '../components/aurora/NewspaperStrip';
import { screenCopy } from '../packages/copy/screen-copy';

const products = [
  ['Quiet Form Vase', '$48', '#EFE1D0', '#E94F4F', 'Object'],
  ['Morning Fold Journal', '$28', '#F6EDE3', '#F7B74D', 'Paper'],
  ['Tide Study Print', '$36', '#DDEBE7', '#4CABA2', 'Edition'],
  ['Soft Index Tray', '$42', '#E9DDD2', '#5E4B88', 'Desk'],
  ['Field Notes Set', '$18', '#F1E7CE', '#E94F4F', 'Paper'],
  ['Waterline Scarf', '$64', '#DDE8E5', '#F7B74D', 'Textile'],
] as const;

export default function CollectionScreen() {
  return (
    <AuroraFrame>
      <NewspaperStrip text="AURORA EDITION 01 · QUIET COMMERCE · MATERIAL STUDIES · SMALL-BATCH OBJECTS" />
      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-6 border-b border-black/10 pb-9 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-black/40">Collection / 2026</div>
            <h1 className="mt-3 text-5xl md:text-7xl">{screenCopy.collection.title}</h1>
            <p className="mt-4 max-w-xl text-black/60">{screenCopy.collection.body} Hover, focus, and product navigation deliberately preserve the tactile paper metaphor without slowing the purchasing path.</p>
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            {['All', 'Objects', 'Paper', 'Textile'].map((label, index) => (
              <button key={label} className={`rounded-full border px-4 py-2 transition-colors ${index === 0 ? 'border-black bg-[var(--color-ink)] text-[var(--color-paper)]' : 'border-black/15 hover:border-black/40'}`}>{label}</button>
            ))}
          </div>
        </div>

        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map(([name, price, color, accent, category]) => (
            <ProductTile key={name} name={name} price={price} color={color} accent={accent} category={category} />
          ))}
        </div>
      </section>
    </AuroraFrame>
  );
}
