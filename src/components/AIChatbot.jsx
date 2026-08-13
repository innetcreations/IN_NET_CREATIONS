'use client';

import { useState, useRef, useEffect } from 'react';

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, sender: 'ai', text: 'Hi there! 👋 I am the IN NET CREATIONS AI assistant. How can I help you today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage = { id: Date.now(), sender: 'user', text: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const lowerText = userMessage.text.toLowerCase();
      let aiResponse = "Thanks for reaching out! I'm the IN NET CREATIONS AI assistant. Our human team would love to help you with this — would you like to book a free discovery call?";
      
      if (lowerText.includes('price') || lowerText.includes('cost') || lowerText.includes('much')) {
        aiResponse = "Our websites typically range from ₹15,000 to ₹75,000 depending on complexity. All our quotes are fixed-price with no hidden fees. Would you like a custom estimate?";
      } else if (lowerText.includes('time') || lowerText.includes('long')) {
        aiResponse = "Most websites take 2–4 weeks to launch. Web and mobile apps usually take 4–8 weeks. We always provide a firm timeline before starting!";
      } else if (lowerText.includes('contact') || lowerText.includes('phone') || lowerText.includes('call')) {
        aiResponse = "You can call or WhatsApp us at +91 95852 66673 or +91 63690 36210. You can also email hello@innetcreations.in. We're based in Madurai!";
      } else if (lowerText.includes('service') || lowerText.includes('do you do') || lowerText.includes('offer')) {
        aiResponse = "We offer Web Development, App Development, SEO, Branding, Video/Photo Editing, and Social Media Management. Which of those are you interested in?";
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, sender: 'ai', text: aiResponse }]);
      setIsTyping(false);
    }, 1200);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="ai-chatbot-container">
      {/* Chat Window */}
      {isOpen && (
        <div className="ai-chat-window reveal-up">
          <div className="ai-chat-header">
            <div className="ai-chat-header-info">
              <span className="ai-chat-icon">✨</span>
              <div>
                <h4>IN NET AI</h4>
                <p>We typically reply instantly</p>
              </div>
            </div>
            <button className="ai-chat-close" onClick={() => setIsOpen(false)} aria-label="Close chat">
              ×
            </button>
          </div>

          <div className="ai-chat-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`ai-message-wrapper ${msg.sender}`}>
                <div className="ai-message">
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="ai-message-wrapper ai">
                <div className="ai-message typing">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="ai-chat-input-area">
            <input 
              type="text" 
              placeholder="Ask anything..." 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button onClick={handleSend} disabled={!inputValue.trim()}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button 
        className={`ai-chat-toggle ${isOpen ? 'active' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle AI Chat"
      >
        {isOpen ? (
          <span style={{ fontSize: '24px' }}>×</span>
        ) : (
          <span style={{ fontSize: '20px' }}>✨</span>
        )}
      </button>
    </div>
  );
}
