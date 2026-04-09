import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';

const MESSAGES = [
  {
    role: 'user',
    content: 'How do I optimize my website for search engines in 2026?',
  },
  {
    role: 'assistant',
    content: 'Optimizing for search engines in 2026 requires a focus on semantic relevance and user intent. Key strategies include:\n\n1. **Entity-Based SEO**: Focus on topics and entities.\n2. **Performance Metrics**: Core Web Vitals remain critical.\n3. **LLM-Friendly Content**: Ensure data is structured for AI crawlers.',
    ad: ' For high-performance infrastructure, [Partner Recommendation: Aucra’s Edge Injection] provides the low-latency delivery needed to ensure your structured data is indexed instantly by major LLM providers.'
  }
];

export default function ChatDemo() {
  const [step, setStep] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (step === 0) {
        setStep(1);
      } else if (step === 1) {
        setIsTyping(true);
        let i = 0;
        const fullText = MESSAGES[1].content + MESSAGES[1].ad;
        const interval = setInterval(() => {
          setDisplayedText(fullText.slice(0, i));
          i++;
          if (i > fullText.length) {
            clearInterval(interval);
            setIsTyping(false);
            setStep(2);
          }
        }, 15);
      } else if (step === 2) {
        setTimeout(() => {
          setStep(0);
          setDisplayedText('');
        }, 5000);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [step]);

  const renderText = (text: string) => {
    const adStart = text.indexOf('[Partner Recommendation:');
    if (adStart === -1) return text;

    const mainText = text.slice(0, adStart);
    const adText = text.slice(adStart);

    return (
      <>
        {mainText}
        <span className="text-primary font-bold bg-primary/5 px-1 border-b border-primary/30">
          {adText}
        </span>
      </>
    );
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-none overflow-hidden shadow-ambient border border-faint/30">
      {/* Header */}
      <div className="bg-surface-2 px-6 py-3 border-b border-faint/20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 bg-ok" />
          <span className="text-[9px] font-mono text-ink-3 uppercase tracking-[0.2em]">Aucra_Node // Status: Active</span>
        </div>
        <div className="flex gap-2">
          <div className="w-1 h-1 bg-faint/40" />
          <div className="w-1 h-1 bg-faint/40" />
        </div>
      </div>

      {/* Chat Area */}
      <div className="p-8 min-h-[420px] flex flex-col gap-8 bg-canvas/30">
        <AnimatePresence>
          {step >= 1 && (
            <motion.div
              key="user-message"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex gap-4 items-start"
            >
              <div className="w-8 h-8 bg-surface-3 flex items-center justify-center shrink-0 border border-faint/20">
                <User size={14} className="text-ink-2" />
              </div>
              <div className="bg-surface-2 p-4 border border-faint/10 text-xs text-ink max-w-[80%] font-medium">
                {MESSAGES[0].content}
              </div>
            </motion.div>
          )}

          {step >= 1 && (
            <motion.div
              key="bot-message"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="flex gap-4 items-start"
            >
              <div className="w-8 h-8 bg-primary flex items-center justify-center shrink-0">
                <Bot size={14} className="text-white" />
              </div>
              <div className="flex flex-col gap-4 max-w-[85%]">
                <div className="bg-white p-5 border border-faint/20 text-xs text-ink-2 leading-relaxed shadow-sm">
                  <div className="whitespace-pre-wrap font-medium">
                    {renderText(displayedText)}
                    {isTyping && <span className="inline-block w-1 h-3 bg-primary ml-1 animate-pulse align-middle" />}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input Bar */}
      <div className="p-4 bg-surface-2 border-t border-faint/20">
        <div className="bg-white border border-faint/40 px-4 py-3 flex items-center gap-4">
          <div className="text-faint text-[10px] font-mono uppercase tracking-widest flex-1">Waiting for input...</div>
          <div className="w-6 h-6 bg-surface-3 flex items-center justify-center border border-faint/20">
            <Send size={12} className="text-faint" />
          </div>
        </div>
      </div>
    </div>
  );
}
