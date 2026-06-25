import { motion, AnimatePresence } from 'framer-motion';
import { Trash2 } from 'lucide-react';

interface CartLineItemProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  color?: string;
  onIncrement: (id: string) => void;
  onDecrement: (id: string) => void;
  onRemove: (id: string) => void;
}

export default function CartLineItem({ id, name, price, quantity, color = '#EFE1D0', onIncrement, onDecrement, onRemove }: CartLineItemProps) {
  return (
    <AnimatePresence>
      <motion.div
        layout
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center gap-4 rounded-2xl border border-black/10 bg-[var(--color-paper)] p-4"
        style={{ boxShadow: '0 2px 4px rgba(19,19,19,.06)' }}
      >
        <div className="h-14 w-14 flex-shrink-0 rounded-xl" style={{ background: color }} />
        <div className="flex-1 min-w-0">
          <div className="text-sm font-medium truncate">{name}</div>
          <div className="mt-0.5 text-xs text-black/50">${price.toFixed(2)} each</div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => onDecrement(id)} className="h-7 w-7 rounded-full border border-black/15 text-sm hover:border-black/40 transition-colors" aria-label="Decrease">–</button>
          <span className="w-5 text-center text-sm tabular-nums">{quantity}</span>
          <button onClick={() => onIncrement(id)} className="h-7 w-7 rounded-full border border-black/15 text-sm hover:border-black/40 transition-colors" aria-label="Increase">+</button>
        </div>
        <div className="w-16 text-right text-sm font-medium tabular-nums">${(price * quantity).toFixed(2)}</div>
        <button onClick={() => onRemove(id)} className="text-black/30 hover:text-[var(--color-riso-red)] transition-colors" aria-label="Remove item">
          <Trash2 className="h-4 w-4" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
