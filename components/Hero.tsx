import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-4 text-4xl font-extrabold md:text-5xl"
      >
        讓智慧浮出雜訊海
      </motion.h1>
      <p className="mx-auto mb-8 max-w-2xl text-white/80">
        <em>Let wisdom surface from the sea of noise.</em> 一個讓創意不被忽視的地方。
      </p>
      <div className="flex justify-center gap-4">
        <Link href="/submit" className="btn-primary">發表你的好點子</Link>
        <a className="btn-ghost cursor-not-allowed">探索靈感宇宙（soon）</a>
      </div>
    </section>
  );
}
