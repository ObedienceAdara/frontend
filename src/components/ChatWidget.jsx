// frontend/src/components/ChatWidget.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MessageSquare, Loader } from 'lucide-react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: "Hello! Welcome to Lambo Homes. 🏠 I'm your AI assistant. How can I help you find your dream property today?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(() => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
  const [error, setError] = useState(null);
  
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  // Send message to AI
  const sendMessage = async (text) => {
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      text: text.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_URL}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: text.trim(),
          sessionId: sessionId
        })
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();

      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        text: data.response,
        timestamp: new Date(),
        isQuickReply: data.isQuickReply
      };

      setMessages(prev => [...prev, botMessage]);

    } catch (err) {
      console.error('Chat error:', err);
      setError('Connection error. Please try again or WhatsApp us at +234 704 275 5901');
      
      // Add error message to chat
      const errorMessage = {
        id: Date.now() + 1,
        type: 'bot',
        text: "I'm having trouble connecting right now. Please try again, or contact us directly:\n\n📞 WhatsApp: +234 704 275 5901\n📧 Email: mercyekeofficial@gmail.com",
        timestamp: new Date(),
        isError: true
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  // Quick reply buttons
  const quickReplies = [
    "Show me available properties",
    "What are your payment plans?",
    "Schedule an inspection",
    "Investment opportunities"
  ];

  const handleQuickReply = (reply) => {
    sendMessage(reply);
  };

  // Format message text (handle line breaks, links, etc.)
  const formatMessage = (text) => {
    return text.split('\n').map((line, i) => (
      <React.Fragment key={i}>
        {line}
        {i < text.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <>
      {/* Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-yellow-500 hover:bg-yellow-400 text-gray-900 rounded-full shadow-2xl flex items-center justify-center transition-all"
          >
            <MessageSquare className="w-8 h-8" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
              1
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0, y: 100 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 100 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] md:w-[420px] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[600px]"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-gray-900 text-lg">
                    LH
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-gray-900 rounded-full" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Lambo Homes AI</h4>
                  <p className="text-yellow-500 text-xs flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    Online - Powered by AI
                  </p>
                </div>
              </div>
              <motion.button
                whileHover={{ rotate: 90 }}
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 bg-gray-50 overflow-y-auto space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-yellow-500 text-gray-900 rounded-tr-none'
                        : message.isError
                        ? 'bg-red-50 border border-red-200 text-red-800 rounded-tl-none'
                        : 'bg-white border border-gray-200 text-gray-800 rounded-tl-none shadow-sm'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{formatMessage(message.text)}</p>
                    <p className="text-xs opacity-60 mt-1">
                      {message.timestamp.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Loading indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-2">
                    <Loader className="w-4 h-4 animate-spin text-yellow-500" />
                    <span className="text-sm text-gray-600">Typing...</span>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length <= 2 && !isLoading && (
              <div className="px-4 py-2 bg-gray-50 border-t">
                <p className="text-xs text-gray-500 mb-2">Quick actions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      className="text-xs px-3 py-1.5 bg-white hover:bg-yellow-50 border border-gray-200 hover:border-yellow-500 rounded-full transition-all"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-200">
              {error && (
                <div className="mb-2 text-xs text-red-600 bg-red-50 p-2 rounded">
                  {error}
                </div>
              )}
              
              <div className="flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2 border border-gray-200 focus-within:border-yellow-500 focus-within:ring-1 focus-within:ring-yellow-500 transition-all">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about properties, pricing..."
                  disabled={isLoading}
                  className="bg-transparent flex-1 outline-none text-sm disabled:opacity-50"
                />
                <motion.button
                  type="submit"
                  disabled={isLoading || !inputValue.trim()}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5 text-yellow-500" />
                </motion.button>
              </div>

              <p className="text-center text-[10px] text-gray-400 mt-2">
                Powered by <span className="font-bold text-gray-600">Plex Hedge AI</span>
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;