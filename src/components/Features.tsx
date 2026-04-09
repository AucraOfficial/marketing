import { Shield, Zap, Target, BarChart3, Globe, Cpu } from 'lucide-react';

const FEATURES = [
  {
    title: 'Edge Injection',
    description: 'Our proprietary CDN-level technology injects ads into content before it reaches the LLM crawler.',
    icon: Zap,
  },
  {
    title: 'Native LLM Format',
    description: 'Ads are formatted as natural text extensions, ensuring they are included in the final model response.',
    icon: Cpu,
  },
  {
    title: 'Publisher Control',
    description: 'Granular control over which LLMs can access your content and what ad categories are allowed.',
    icon: Shield,
  },
  {
    title: 'Contextual Targeting',
    description: 'Target users based on the specific intent of their LLM queries in real-time.',
    icon: Target,
  },
  {
    title: 'Global Scale',
    description: 'Deployed across 200+ edge locations worldwide for sub-millisecond processing.',
    icon: Globe,
  },
  {
    title: 'Advanced Analytics',
    description: 'Track token-level attribution and conversion metrics for AI-driven traffic.',
    icon: BarChart3,
  }
];

export default function Features() {
  return (
    <section className="py-32 bg-surface relative overflow-hidden">
      {/* Structural Lines */}
      <div className="absolute top-0 left-[20%] w-[1px] h-full bg-faint/10" />
      <div className="absolute top-0 left-[80%] w-[1px] h-full bg-faint/10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 grid lg:grid-cols-2 items-end gap-12">
          <div>
            <span className="label-caps text-primary">Core Infrastructure</span>
            <h2 className="text-5xl font-bold mt-6 text-ink uppercase tracking-tighter">Built for the <br /> <span className="text-primary">Agentic</span> Web.</h2>
          </div>
          <div className="max-w-md">
            <p className="text-ink-3 text-sm leading-relaxed border-l border-primary/30 pl-6">
              Our network architecture is designed for sub-millisecond injection at the CDN edge, ensuring your ads are part of the LLM's primary context.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border border-faint/20">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="p-10 bg-white group hover:bg-surface-1 transition-colors border-r border-b border-faint/20 last:border-r-0 lg:[&:nth-child(3n)]:border-r-0">
              <div className="w-10 h-10 bg-surface-2 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                <feature.icon size={20} />
              </div>
              <h3 className="text-lg font-bold mb-4 text-ink uppercase tracking-tight">{feature.title}</h3>
              <p className="text-xs text-ink-3 leading-relaxed">
                {feature.description}
              </p>
              <div className="mt-8 font-mono text-[9px] text-faint opacity-0 group-hover:opacity-100 transition-opacity">
                MODULE_ID: 0x{feature.title.slice(0, 2).toUpperCase()}FA
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
