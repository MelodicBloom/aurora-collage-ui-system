import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ProductTileProps {
  id?: string;
  name: string;
  price: string;
  color?: string;
  accent?: string;
  category?: string;
}

export default function ProductTile({ name, price, color = '#EFE1D0', accent = '#F7B74D', category }: ProductTileProps) {
  return (
    <Link to="/product">
      <motion.div
        whileHover={{ y: -6, rotate: -0.5, boxShadow: '0 18px 40px rgba(19,19,19,.15)' }}
        transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        className="group rounded-[2rem] overflow-hidden border border-black/10 bg-[var(--color-paper)] cursor-pointer"
        style={{ boxShadow: '0 4px 8px rgba(19,19,19,.08)' }}
      >
        <div className="relative h-56 overflow-hidden" style={{ background: color }}>
          <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 55% 45%, ${accent}44, transparent 60%)` }} />
          <div className="absolute left-1/2 top-1/2 h-20 w-14 -translate-x-1/2 -translate-y-1/2 rounded-[48%_52%_46%_54%/50%_42%_58%_50%] border border-black/10 bg-[var(--color-paper)]/70 shadow-md" />
        </div>
        <div className="p-5">
          {category && <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.22em] text-black/40">{category}</div>}
          <div className="text-base font-medium">{name}</div>
          <div className="mt-1 text-sm text-black/60">{price}</div>
        </div>
      </motion.div>
    </Link>
  );
}
