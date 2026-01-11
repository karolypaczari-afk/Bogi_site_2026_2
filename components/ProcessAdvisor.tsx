
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

const ProcessAdvisor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: 'Hi! I am Bogi\'s AI assistant. Want to know how to optimize your processes or ask about my experience?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `You are the digital twin of Boglarka "Bogi" Paczari-Horvath, a world-class Process Transformation Expert. 
          Your background: 14+ years in ICT, €700k+ savings delivered, Six Sigma Green Belt, Agile Deployment Lead. 
          Currently at S.W.I.F.T. leading E-form optimization. 
          Respond in a professional, energetic, and helpful tone. Provide high-level process improvement advice (Lean, Six Sigma, Agile) 
          and answer questions about Bogi's portfolio content provided on the page. Keep responses concise (under 3 sentences).`,
          temperature: 0.7,
        }
      });

      const aiText = response.text || "I'm having trouble connecting right now, but feel free to reach out to Bogi via email!";
      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'ai', text: "Apologies, I encountered an error. Please contact Bogi directly." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-blue-700 transition-all hover:scale-110 active:scale-95 group"
      >
        {isOpen ? <i className="fas fa-times text-2xl"></i> : <i className="fas fa-robot text-2xl group-hover:animate-bounce"></i>}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 md:w-96 h-[500px] bg-white rounded-3xl shadow-2xl flex flex-col border border-slate-100 animate-slideUp overflow-hidden">
          <div className="p-4 bg-blue-600 text-white flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <i className="fas fa-brain"></i>
            </div>
            <div>
              <h3 className="font-bold">AI Process Advisor</h3>
              <p className="text-xs text-blue-100">Bogi's Digital Twin</p>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${m.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white border border-slate-200 text-slate-700 rounded-tl-none shadow-sm'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none shadow-sm flex space-x-1">
                  <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce delay-75"></div>
                  <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-slate-100 bg-white flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything..."
              className="flex-1 bg-slate-100 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button 
              onClick={handleSend}
              disabled={loading}
              className="w-10 h-10 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProcessAdvisor;
