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
      content: "Hey there! I'm Snehashis's AI assistant. Got any questions about my work? Ask away!",
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
      return "Snehashis has worked on some cool stuff! You can check out projects like a Virtual Zoo, his portfolio site, and even some data analysis on ramen. Anything specific you want to know?";
    }
    
    if (lowerMessage.includes('skill') || lowerMessage.includes('technology')) {
      return "He's got a bunch of skills! We're talking React, TypeScript, Node.js, AI/ML stuff, and a good eye for design. He's a bit of a tech playground enthusiast!";
    }
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('hire')) {
      return "Want to get in touch? The best way is through the contact form on this page or by shooting an email to roysnehashis2004@gmail.com. He's pretty quick to respond!";
    }
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return "Hey! Glad you're here. Feel free to ask me anything about Snehashis's work.";
    }

    if (lowerMessage.includes('education') || lowerMessage.includes('college') || lowerMessage.includes('university')) {
      return "Snehashis is currently pursuing a B.Tech in Computer Science and Engineering at The Assam Kaziranga University, expected to graduate in 2026.";
    }

    if (lowerMessage.includes('hobbies') || lowerMessage.includes('fun')) {
      return "When he's not coding, Snehashis enjoys exploring new design trends, playing video games, and diving into sci-fi movies. He's also a big fan of trying out different kinds of ramen!";
    }

    if (lowerMessage.includes('react')) {
      return "He loves React! It's his go-to for building dynamic and interactive user interfaces. You can see it in action in his portfolio website project.";
    }

    if (lowerMessage.includes('python')) {
      return "Python is one of his favorite languages, especially for data analysis and AI/ML projects. His Ramen Data Analysis and FaceTrack+ projects are great examples of his Python skills.";
    }
    
    const randomResponses = [
        "That's an interesting question! Let me check...",
        "I'm not sure about that, but I can tell you about his projects!",
        "Good one! Why don't you ask him that directly through the contact form?",
        "I'm just a bot, but I'm learning! Try asking me about his skills."
    ];

    return randomResponses[Math.floor(Math.random() * randomResponses.length)];
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
        whileHover={{ scale: 1.1 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="default"
          size="icon"
          className="w-14 h-14 rounded-full shadow-playful animate-bounce-light"
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
            className="fixed bottom-24 right-6 z-40 w-80 h-[28rem]"
          >
            <Card className="bg-background/80 backdrop-blur-lg border-border h-full flex flex-col shadow-card">
              <CardHeader className="pb-4 border-b">
                <CardTitle className="flex items-center gap-3 text-primary">
                  <Bot className="h-5 w-5" />
                  AI Assistant
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col p-0 overflow-hidden">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto space-y-4 p-4 pr-2 scrollbar-thin">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex gap-2.5 ${
                        message.sender === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      {message.sender === 'bot' && (
                        <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <Bot className="h-4 w-4 text-primary" />
                        </div>
                      )}
                      <div
                        className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                          message.sender === 'user'
                            ? 'bg-primary text-primary-foreground rounded-br-none'
                            : 'bg-secondary text-secondary-foreground rounded-bl-none'
                        }`}
                      >
                        {message.content}
                      </div>
                      {message.sender === 'user' && (
                        <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                          <User className="h-4 w-4 text-secondary-foreground" />
                        </div>
                      )}
                    </motion.div>
                  ))}
                  
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-2.5 justify-start"
                    >
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="h-4 w-4 text-primary" />
                      </div>
                      <div className="bg-secondary p-3 rounded-2xl rounded-bl-none">
                        <div className="flex gap-1.5">
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse [animation-delay:0.2s]" />
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse [animation-delay:0.4s]" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="flex gap-2 border-t p-4">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything..."
                    className="bg-background border-input focus:border-primary text-sm"
                  />
                  <Button
                    onClick={handleSendMessage}
                    variant="default"
                    size="icon"
                    disabled={!input.trim() || isTyping}
                    className="w-10 h-10"
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
