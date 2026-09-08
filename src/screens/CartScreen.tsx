import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import AuroraFrame from '../components/aurora/AuroraFrame';
import CartLineItem from '../components/aurora/CartLineItem';
import RisoButton from '../components/aurora/RisoButton';
import { screenCopy } from '../packages/copy/screen-copy';

type Item = { id: string; name: string; price: number; quantity: number; color: string };

const initialItems: Item[] = [
  { id: 'vase', name: 'Quiet Form Vase', price: 48, quantity: 1, color: '#EFE1D0' },
  { id: 'journal', name: 'Morning Fold Journal', price: 28, quantity: 1, color: '#F1E7CE' },
];

export default function CartScreen() {
  const [items, setItems] = useState(initialItems);
  const subtotal = useMemo(() => items.reduce((sum, item) => sum + item.price * item.quantity, 0), [items]);

  const change = (id: string, delta: number) => setItems((current) => current.map((item) => item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item));
  const remove = (id: string) => setItems((current) => current.filter((item) => item.id !== id));

  return (
    <AuroraFrame>
      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-black/40">Checkout rehearsal</div>
        <h1 className="mt-3 text-5xl md:text-7xl">{screenCopy.cart.title}</h1>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
          <div className="space-y-3">
            {items.length ? items.map((item) => (
              <CartLineItem key={item.id} {...item} onIncrement={(id) => change(id, 1)} onDecrement={(id) => change(id, -1)} onRemove={remove} />
            )) : (
              <div className="rounded-[2rem] border border-dashed border-black/15 p-12 text-center">
                <div className="text-xl">{screenCopy.cart.empty}</div>
                <Link to="/collection" className="mt-4 inline-block text-sm underline underline-offset-4">{screenCopy.cart.cta}</Link>
              </div>
            )}
          </div>

          <aside className="rounded-[2rem] border border-black/10 bg-[var(--color-warm-paper)] p-6 shadow-[0_12px_32px_rgba(19,19,19,.08)] lg:sticky lg:top-24">
            <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-black/38">Order summary</div>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-black/55">{screenCopy.cart.subtotal}</span><span>${subtotal.toFixed(2)}</span></div>
              <div className="flex justify-between"><span className="text-black/55">{screenCopy.cart.shipping}</span><span>{subtotal >= 75 ? 'Free' : '$8.00'}</span></div>
            </div>
            <div className="mt-5 flex justify-between border-t border-black/10 pt-5 text-lg font-medium"><span>{screenCopy.cart.total}</span><span>${(subtotal + (subtotal >= 75 || subtotal === 0 ? 0 : 8)).toFixed(2)}</span></div>
            <RisoButton className="mt-6 w-full justify-center" disabled={!items.length}>{screenCopy.cart.checkout}</RisoButton>
            <p className="mt-4 text-center text-[11px] leading-relaxed text-black/45">Prototype flow: quantity, removal, threshold shipping, disabled empty-state checkout.</p>
          </aside>
        </div>
      </section>
    </AuroraFrame>
  );
}
