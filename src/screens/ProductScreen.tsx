import { useState } from 'react';
import { Check, Heart, Minus, Plus } from 'lucide-react';
import AuroraFrame from '../components/aurora/AuroraFrame';
import RisoButton from '../components/aurora/RisoButton';
import WatercolorPanel from '../components/aurora/WatercolorPanel';
import { screenCopy } from '../packages/copy/screen-copy';

const swatches = [
  { name: 'Newsprint', value: '#EFE1D0' },
  { name: 'Water teal', value: '#4CABA2' },
  { name: 'Riso red', value: '#E94F4F' },
];

export default function ProductScreen() {
  const [selected, setSelected] = useState(swatches[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  return (
    <AuroraFrame>
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-10 md:px-6 md:py-14 lg:grid-cols-[1.08fr_.92fr] lg:gap-14">
        <div className="relative min-h-[520px] overflow-hidden rounded-[2.5rem] border border-black/10 bg-[var(--color-warm-paper)] md:min-h-[680px]">
          <WatercolorPanel className="absolute -left-12 top-16 h-72 w-72" color={selected.value} opacity={0.34} blur={12} />
          <WatercolorPanel className="absolute -right-16 bottom-10 h-80 w-80" color="#F7B74D" opacity={0.18} blur={16} />
          <div className="absolute left-1/2 top-1/2 h-64 w-44 -translate-x-1/2 -translate-y-1/2 rounded-[46%_54%_48%_52%/42%_44%_56%_58%] border border-black/10 bg-[var(--color-paper)]/80 shadow-[0_26px_70px_rgba(19,19,19,.14)] md:h-80 md:w-56" />
          <div className="absolute bottom-5 left-5 font-mono text-[10px] uppercase tracking-[0.24em] text-black/35">Material study / ceramic / 01</div>
        </div>

        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-black/40">Small batch object</div>
          <h1 className="mt-3 text-5xl md:text-6xl">{screenCopy.productScreen.title}</h1>
          <div className="mt-3 text-lg text-black/60">{screenCopy.productScreen.price}</div>
          <p className="mt-6 max-w-xl text-sm leading-7 text-black/62">{screenCopy.productScreen.body} The product view demonstrates clear buying decisions without abandoning AURORA's soft material atmosphere.</p>

          <div className="mt-8 border-t border-black/10 pt-6">
            <div className="mb-3 text-xs font-medium">{screenCopy.productUI.colors}</div>
            <div className="flex gap-3">
              {swatches.map((swatch) => {
                const active = swatch.name === selected.name;
                return (
                  <button key={swatch.name} onClick={() => setSelected(swatch)} aria-pressed={active} className={`relative h-11 w-11 rounded-full border-2 transition-transform hover:scale-105 ${active ? 'border-[var(--color-ink)]' : 'border-transparent'}`} style={{ background: swatch.value }} aria-label={swatch.name}>
                    {active && <Check className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2" />}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-7 flex items-end justify-between gap-4 border-t border-black/10 pt-6">
            <div>
              <div className="mb-3 text-xs font-medium">{screenCopy.productUI.quantity}</div>
              <div className="inline-flex items-center gap-4 rounded-full border border-black/15 px-3 py-2">
                <button onClick={() => setQuantity((value) => Math.max(1, value - 1))} aria-label="Decrease quantity"><Minus className="h-4 w-4" /></button>
                <span className="w-5 text-center text-sm tabular-nums">{quantity}</span>
                <button onClick={() => setQuantity((value) => value + 1)} aria-label="Increase quantity"><Plus className="h-4 w-4" /></button>
              </div>
            </div>
            <button className="rounded-full border border-black/10 p-3 transition-colors hover:border-black/35" aria-label="Save product"><Heart className="h-4 w-4" /></button>
          </div>

          <div className="mt-7">
            <RisoButton className="w-full justify-center" disabled={added} onClick={() => setAdded(true)}>{added ? screenCopy.productUI.addedToCart : screenCopy.productUI.addToCart}</RisoButton>
            <div aria-live="polite" className="mt-3 min-h-5 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-black/45">{added ? `Added ${quantity} · ${selected.name}` : 'Free shipping over $75 · 30-day returns'}</div>
          </div>

          <details className="mt-8 border-t border-black/10 py-5" open><summary className="cursor-pointer text-sm font-medium">{screenCopy.productUI.description}</summary><p className="mt-3 text-sm leading-7 text-black/58">Thrown in a deliberately irregular silhouette, finished in a quiet matte glaze, and sized for one branch or a small field arrangement.</p></details>
          <details className="border-t border-black/10 py-5"><summary className="cursor-pointer text-sm font-medium">{screenCopy.productUI.shipping}</summary><p className="mt-3 text-sm leading-7 text-black/58">Ships within 2–3 business days in recyclable molded-paper protection.</p></details>
        </div>
      </section>
    </AuroraFrame>
  );
}
