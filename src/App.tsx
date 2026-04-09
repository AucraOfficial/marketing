import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import UseCases from './components/UseCases';
import InjectionFlow from './components/InjectionFlow';
import Logo from './components/Logo';
import { Github, Twitter, Linkedin } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary/20 selection:text-primary">
      <Navbar />
      
      <main>
        <Hero />
        <InjectionFlow />
        <Features />
        <UseCases />
        
        {/* CTA Section */}
        <section className="py-24 bg-primary text-on-primary">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to bridge the gap between content and AI?</h2>
            <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto">
              Join the network of 5,000+ publishers and 200+ advertisers already shaping the future of the agentic web.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-primary px-8 py-4 rounded-lg font-bold font-display hover:bg-surface-1 transition-colors">
                Get Started Now
              </button>
              <button className="bg-primary-dim border border-white/20 px-8 py-4 rounded-lg font-bold font-display hover:bg-primary-dim/80 transition-colors">
                Schedule a Demo
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-surface border-b border-faint/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[1px] w-12 bg-primary" />
                  <span className="label-caps text-primary">Contact_Us</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Get in touch</h2>
                <p className="text-ink-2 text-lg mb-8">
                  Interested in joining the network? Have questions about the protocol? We'd love to hear from you.
                </p>
                <div className="space-y-4 text-sm">
                  <div>
                    <div className="label-caps text-ink mb-2">Email</div>
                    <a href="mailto:hello@aucra.io" className="text-primary hover:underline">hello@aucra.io</a>
                  </div>
                  <div>
                    <div className="label-caps text-ink mb-2">Response_Time</div>
                    <p className="text-ink-2">Typically within 24-48 hours</p>
                  </div>
                </div>
              </div>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="label-caps text-ink mb-3 block">Name_Identifier</label>
                  <input type="text" className="input-underline w-full text-sm font-mono" placeholder="YOUR_NAME" />
                </div>
                <div>
                  <label className="label-caps text-ink mb-3 block">Email_Protocol</label>
                  <input type="email" className="input-underline w-full text-sm font-mono" placeholder="YOUR@EMAIL.COM" />
                </div>
                <div>
                  <label className="label-caps text-ink mb-3 block">Message_Body</label>
                  <textarea className="input-underline w-full text-sm font-mono min-h-[120px] resize-none" placeholder="Describe your inquiry or proposal..." />
                </div>
                <button type="submit" className="btn-primary w-full py-4 text-[10px] uppercase tracking-widest">Transmit_Message</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-canvas border-t border-faint/20 py-24 relative overflow-hidden">
        {/* Architectural Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(var(--color-faint) 1px, transparent 1px), linear-gradient(90deg, var(--color-faint) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-12 gap-16 mb-24">
            <div className="md:col-span-5">
              <div className="flex items-center gap-4 mb-8">
                <Logo className="h-8 w-auto grayscale opacity-80" />
                <div className="h-4 w-[1px] bg-faint/30" />
                <span className="font-display text-sm font-bold tracking-tighter text-ink uppercase">Network_Infrastructure</span>
              </div>
              <p className="text-ink-3 text-xs max-w-sm leading-relaxed font-medium uppercase tracking-wider">
                The architectural standard for LLM-native advertising. Building the infrastructure for a world where agents are the primary consumers.
              </p>
              <div className="mt-12 flex gap-8">
                <a href="#" className="text-ink-3 hover:text-primary transition-colors"><Twitter size={16} /></a>
                <a href="#" className="text-ink-3 hover:text-primary transition-colors"><Github size={16} /></a>
                <a href="#" className="text-ink-3 hover:text-primary transition-colors"><Linkedin size={16} /></a>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h4 className="label-caps text-ink mb-8">Protocol</h4>
              <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest text-ink-3">
                <li><a href="#" className="hover:text-primary transition-colors">Publishers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Advertisers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Nodes</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Consensus</a></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="label-caps text-ink mb-8">Resources</h4>
              <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest text-ink-3">
                <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Whitepaper</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">API Status</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Open Source</a></li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <h4 className="label-caps text-ink mb-8">Newsletter</h4>
              <div className="flex flex-col gap-4">
                <input type="email" placeholder="NODE_EMAIL@PROTOCOL.IO" className="input-underline text-[10px] font-mono" />
                <button className="btn-primary py-2 text-[10px] uppercase tracking-widest">Subscribe</button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-faint/10 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-ok" />
              <p className="text-[9px] text-ink-3 font-mono uppercase tracking-[0.2em]">
                System_Status: Operational // © 2026 AUCRA TECHNOLOGIES INC.
              </p>
            </div>
            <div className="flex gap-12 text-[9px] font-mono text-faint uppercase tracking-widest">
              <span>LAT: 37.7749° N</span>
              <span>LON: 122.4194° W</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
