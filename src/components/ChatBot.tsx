import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm an AI assistant. Ask me about the portfolio, projects, or anything else!",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('portfolio') || lowerMessage.includes('project')) {
      return "The portfolio showcases 3 main projects: an AI-powered web app, an intelligent chatbot platform, and an e-commerce mobile app. Each demonstrates modern web technologies and innovative solutions.";
    }
    
    if (lowerMessage.includes('skill') || lowerMessage.includes('technology')) {
      return "Key technologies include React, TypeScript, Node.js, AI/ML integration, Three.js for 3D graphics, and modern design systems. The focus is on cutting-edge web development and AI integration.";
    }
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('hire')) {
      return "You can reach out through the contact form below or email directly at hello@portfolio.dev. Response time is usually within 24 hours!";
    }
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return "Hello! Thanks for visiting the portfolio. What would you like to know about the projects or experience?";
    }
    
    return "That's an interesting question! Feel free to ask about the portfolio projects, technologies used, or how to get in touch for collaborations.";
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateBotResponse(input),
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="hero"
          size="icon"
          className="w-14 h-14 rounded-full shadow-electric"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <MessageCircle className="h-6 w-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-24 right-6 z-40 w-80 h-96"
          >
            <Card className="bg-gradient-card border-electric/20 h-full flex flex-col shadow-card">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-electric">
                  <Bot className="h-5 w-5" />
                  AI Assistant
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col p-4 pt-0">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto space-y-3 mb-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex gap-2 ${
                        message.sender === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      {message.sender === 'bot' && (
                        <div className="w-6 h-6 bg-electric/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <Bot className="h-3 w-3 text-electric" />
                        </div>
                      )}
                      <div
                        className={`max-w-[75%] p-3 rounded-lg text-sm ${
                          message.sender === 'user'
                            ? 'bg-electric text-cosmic-deep'
                            : 'bg-cosmic-stellar text-foreground'
                        }`}
                      >
                        {message.content}
                      </div>
                      {message.sender === 'user' && (
                        <div className="w-6 h-6 bg-electric/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <User className="h-3 w-3 text-electric" />
                        </div>
                      )}
                    </motion.div>
                  ))}
                  
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-2 justify-start"
                    >
                      <div className="w-6 h-6 bg-electric/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="h-3 w-3 text-electric" />
                      </div>
                      <div className="bg-cosmic-stellar p-3 rounded-lg">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-electric rounded-full animate-pulse" />
                          <div className="w-2 h-2 bg-electric rounded-full animate-pulse delay-100" />
                          <div className="w-2 h-2 bg-electric rounded-full animate-pulse delay-200" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="flex gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything..."
                    className="bg-cosmic border-electric/30 focus:border-electric text-sm"
                  />
                  <Button
                    onClick={handleSendMessage}
                    variant="electric"
                    size="icon"
                    disabled={!input.trim() || isTyping}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;