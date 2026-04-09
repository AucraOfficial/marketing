import { motion } from 'motion/react';
import ChatDemo from './ChatDemo';

export default function Hero() {
  return (
    <section className="relative pt-40 pb-32 overflow-hidden border-b border-faint/10">
      {/* Architectural Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(var(--color-ink) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-primary" />
              <span className="label-caps text-primary">System Architecture: Edge Injection</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold leading-[0.85] mb-10 text-ink uppercase tracking-tighter">
              Monetize the <br />
              <span className="text-primary">Agentic</span> Layer.
            </h1>
            
            <div className="max-w-xl border-l-2 border-primary/20 pl-8 mb-12">
              <p className="text-lg text-ink-2 leading-relaxed">
                Aucra is the first SSP built for a world where LLMs are the primary consumers. 
                We inject native ad units directly into the model's context window at the CDN edge.
              </p>
            </div>

            <div className="flex flex-wrap gap-0">
              <button className="btn-primary px-10">Deploy Publisher Node</button>
              <button className="btn-secondary px-10 border-l-0">View Network Demand</button>
            </div>

            <div className="mt-20 grid grid-cols-3 gap-0 border border-faint/20">
              <div className="p-6 border-r border-faint/20">
                <div className="text-[10px] font-mono text-ink-3 mb-2">LATENCY_MAX</div>
                <div className="text-3xl font-display font-bold text-ink">2.4ms</div>
              </div>
              <div className="p-6 border-r border-faint/20">
                <div className="text-[10px] font-mono text-ink-3 mb-2">FILL_RATE_AVG</div>
                <div className="text-3xl font-display font-bold text-ink">98.2%</div>
              </div>
              <div className="p-6">
                <div className="text-[10px] font-mono text-ink-3 mb-2">NODES_ACTIVE</div>
                <div className="text-3xl font-display font-bold text-ink">14.2k</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Technical Annotations */}
            <div className="absolute -top-8 -left-8 font-mono text-[9px] text-faint uppercase tracking-widest rotate-90 origin-bottom-left">
              Visual_Demo // 37.7749° N, 122.4194° W
            </div>
            <div className="border border-faint/30 p-2 bg-canvas shadow-ambient">
              <ChatDemo />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
