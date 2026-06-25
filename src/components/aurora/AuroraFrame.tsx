import { Link, useLocation } from 'react-router-dom';
import { Menu, ShoppingBag } from 'lucide-react';
import { screenCopy } from '../../packages/copy/screen-copy';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/collection', label: 'Collection' },
  { href: '/journal', label: 'Journal' },
  { href: '/product', label: 'Product' },
  { href: '/cart', label: 'Cart' },
  { href: '/typography', label: 'Typography' },
  { href: '/design-system', label: 'Design System' },
];

export default function AuroraFrame({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[var(--color-paper)] texture-cardstock text-[var(--color-ink)]">
      <div className="pointer-events-none fixed inset-0 texture-litho opacity-70" />
      <header className="sticky top-0 z-40 border-b border-black/10 bg-[rgba(246,237,227,0.8)] backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-6">
          <Link to="/" className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-black/60">{screenCopy.brand.name}</span>
          </Link>
          <nav className="hidden items-center gap-5 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  'text-sm transition-colors hover:text-[var(--color-riso-red)]',
                  location.pathname === item.href ? 'text-[var(--color-riso-red)]' : 'text-black/70'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/cart" className="rounded-full border border-black/10 p-2 hover-paper-lift">
              <ShoppingBag className="h-4 w-4" />
            </Link>
            <button className="rounded-full border border-black/10 p-2 md:hidden" aria-label="Menu">
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>
      <motion.main
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10"
      >
        {children}
      </motion.main>
    </div>
  );
}
