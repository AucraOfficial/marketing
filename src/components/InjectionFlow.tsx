import { motion } from 'motion/react';
import { Globe, Cpu, Database, ArrowRight, Server, Search } from 'lucide-react';

export default function InjectionFlow() {
  return (
    <section className="py-32 bg-surface relative overflow-hidden">
      {/* Architectural Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(var(--color-faint) 1px, transparent 1px), linear-gradient(90deg, var(--color-faint) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <span className="label-caps text-primary">Protocol Visualization</span>
          <h2 className="text-5xl font-bold mt-6 text-ink uppercase tracking-tighter">The Edge Injection <br /> <span className="text-primary">Lifecycle</span>.</h2>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-faint/20 -translate-y-1/2 hidden lg:block" />

          <div className="grid lg:grid-cols-4 gap-12 relative">
            {/* Step 1: Publisher Page */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-faint/30 p-8 relative z-10"
            >
              <div className="w-12 h-12 bg-surface-2 flex items-center justify-center mb-6 border border-faint/20">
                <Globe size={24} className="text-ink-2" />
              </div>
              <h4 className="text-sm font-bold uppercase tracking-tight mb-4">01. Publisher Content</h4>
              <p className="text-[11px] text-ink-3 leading-relaxed uppercase font-medium">
                Standard web content is hosted on the publisher's origin server.
              </p>
              <div className="absolute -right-6 top-1/2 -translate-y-1/2 hidden lg:block">
                <ArrowRight size={16} className="text-faint" />
              </div>
            </motion.div>

            {/* Step 2: Aucra Edge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-primary p-8 relative z-10 shadow-xl"
            >
              <div className="w-12 h-12 bg-white/10 flex items-center justify-center mb-6 border border-white/20">
                <Server size={24} className="text-white" />
              </div>
              <h4 className="text-sm font-bold uppercase tracking-tight mb-4 text-white">02. Edge Injection</h4>
              <p className="text-[11px] text-white/80 leading-relaxed uppercase font-medium">
                Aucra nodes intercept the request at the CDN edge and inject ad context into the source.
              </p>
              <div className="absolute -right-6 top-1/2 -translate-y-1/2 hidden lg:block">
                <ArrowRight size={16} className="text-white/30" />
              </div>
            </motion.div>

            {/* Step 3: LLM Crawler */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white border border-faint/30 p-8 relative z-10"
            >
              <div className="w-12 h-12 bg-surface-2 flex items-center justify-center mb-6 border border-faint/20">
                <Search size={24} className="text-ink-2" />
              </div>
              <h4 className="text-sm font-bold uppercase tracking-tight mb-4">03. LLM Ingestion</h4>
              <p className="text-[11px] text-ink-3 leading-relaxed uppercase font-medium">
                The LLM crawler ingests the modified content, treating the ad as native context.
              </p>
              <div className="absolute -right-6 top-1/2 -translate-y-1/2 hidden lg:block">
                <ArrowRight size={16} className="text-faint" />
              </div>
            </motion.div>

            {/* Step 4: LLM Response */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-ink p-8 relative z-10 text-white"
            >
              <div className="w-12 h-12 bg-white/10 flex items-center justify-center mb-6 border border-white/10">
                <Cpu size={24} className="text-primary-lit" />
              </div>
              <h4 className="text-sm font-bold uppercase tracking-tight mb-4">04. Native Response</h4>
              <p className="text-[11px] text-ink-3 leading-relaxed uppercase font-medium">
                The LLM serves the ad as part of its generated response to the end user.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
