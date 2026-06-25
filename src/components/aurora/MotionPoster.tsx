import { motion } from 'framer-motion';

export default function MotionPoster() {
  return (
    <div className="relative h-[480px] overflow-hidden rounded-[2.5rem] bg-[var(--color-warm-paper)] border border-black/10">
      <motion.div className="absolute left-[10%] top-[12%] h-48 w-48 rounded-full bg-[#E94F4F]" style={{ opacity: 0.38 }}
        animate={{ x: [0, 18, -8, 0], y: [0, -12, 8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div className="absolute right-[12%] top-[22%] h-36 w-36 rounded-full bg-[#F7B74D]" style={{ opacity: 0.32 }}
        animate={{ x: [0, -14, 10, 0], y: [0, 10, -8, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      />
      <motion.div className="absolute bottom-[15%] left-[22%] h-40 w-40" style={{ opacity: 0.26, background: '#4CABA2', borderRadius: '48% 52% 46% 54%/50% 42% 58% 50%', filter: 'blur(6px)' }}
        animate={{ scale: [1, 1.06, 1], rotate: [0, 6, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />
      <div className="absolute inset-x-0 bottom-8 flex flex-col items-center">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/40">Motion Poster</div>
        <div className="mt-2 text-4xl font-light tracking-tight text-[var(--color-ink)]">AURORA</div>
      </div>
    </div>
  );
}
