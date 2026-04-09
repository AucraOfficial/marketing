import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function UseCases() {
  return (
    <section className="py-32 bg-canvas relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-0 border border-faint/20">
          {/* Publishers */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-surface-1 p-12 flex flex-col border-r border-faint/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-faint uppercase">Node_Type: Publisher</div>
            <div className="mb-12">
              <span className="label-caps text-primary">Supply Side</span>
              <h3 className="text-4xl font-bold mt-6 text-ink uppercase tracking-tighter leading-none">Reclaim your <br /> value.</h3>
              <p className="text-ink-2 mt-6 text-sm leading-relaxed max-w-sm">
                Stop letting LLMs scrape your content for free. Aucra turns every AI visit into a revenue event by injecting ads at the source.
              </p>
            </div>

            <ul className="space-y-5 mb-12 flex-1">
              {[
                'Monetize non-human traffic',
                'Protect content from zero-click searches',
                'Direct-to-LLM ad inventory',
                'Real-time yield optimization'
              ].map((item) => (
                <li key={item} className="flex items-center gap-4 text-xs text-ink-2 font-medium">
                  <div className="w-1 h-1 bg-primary" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-primary hover:gap-5 transition-all group">
              Start Monetizing <ArrowRight size={14} />
            </button>
          </motion.div>

          {/* Advertisers */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-ink p-12 flex flex-col text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-ink-3 uppercase">Node_Type: Demand</div>
            <div className="mb-12">
              <span className="label-caps text-primary-lit">Demand Side</span>
              <h3 className="text-4xl font-bold mt-6 uppercase tracking-tighter leading-none">Be the <br /> answer.</h3>
              <p className="text-ink-3 mt-6 text-sm leading-relaxed max-w-sm">
                Reach users inside the chat interface. Our ads are injected into the context LLMs use to generate their responses.
              </p>
            </div>

            <ul className="space-y-5 mb-12 flex-1">
              {[
                '100% Share of Voice in responses',
                'Intent-based contextual targeting',
                'High-trust placement in AI answers',
                'Cross-platform LLM reach'
              ].map((item) => (
                <li key={item} className="flex items-center gap-4 text-xs text-ink-3 font-medium">
                  <div className="w-1 h-1 bg-primary-lit" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-primary-lit hover:gap-5 transition-all group">
              Launch Campaign <ArrowRight size={14} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
