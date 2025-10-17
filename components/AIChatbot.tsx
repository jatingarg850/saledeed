'use client'

import { useState, useRef, useEffect } from 'react'

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

interface AIChatbotProps {
  isOpen: boolean
  onClose: () => void
}

export default function AIChatbot({ isOpen, onClose }: AIChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your property documentation assistant. I can help you understand different types of deeds, legal requirements, and guide you to the right service. What property documentation question can I help you with today?",
      isUser: false,
      timestamp: new Date()
    }
  ])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const predefinedResponses = {
    'sale deed': {
      text: "A Sale Deed is the final ownership transfer document. It's executed when you're ready to complete the property purchase and take full ownership. This document provides complete legal protection and is registered at the Sub-Registrar office.",
      suggestions: ["What documents do I need for Sale Deed?", "How long does Sale Deed registration take?", "Get Sale Deed Service"]
    },
    'gift deed': {
      text: "A Gift Deed allows you to transfer property to family members without monetary exchange. It's perfect for family transfers and estate planning. The deed must be registered and is irrevocable once executed.",
      suggestions: ["What are Gift Deed tax implications?", "Can I gift property to anyone?", "Get Gift Deed Service"]
    },
    'will': {
      text: "A Will Agreement specifies how your assets should be distributed after death. It's essential for estate planning and ensures your wishes are legally protected. You can update it during your lifetime.",
      suggestions: ["What makes a Will legally valid?", "Do I need witnesses for Will?", "Get Will Drafting Service"]
    },
    'partition deed': {
      text: "A Partition Deed divides jointly owned property among co-owners, giving each party exclusive ownership of their portion. It's used to resolve co-ownership disputes and create individual titles.",
      suggestions: ["How is property divided in Partition?", "Do all co-owners need to agree?", "Get Partition Deed Service"]
    },
    'relinquishment deed': {
      text: "A Relinquishment Deed allows a co-owner to give up their share in favor of other co-owners. It's commonly used in family settlements and inheritance matters.",
      suggestions: ["Can I get my share back after relinquishment?", "What documents are needed?", "Get Relinquishment Service"]
    },
    'agreement to sell': {
      text: "An Agreement to Sell is your safety net when buying property. It protects your advance money and ensures the seller can't back out or sell to someone else. It's executed before the final Sale Deed.",
      suggestions: ["What's the difference from Sale Deed?", "How much advance should I pay?", "Get Agreement Service"]
    },
    'documents needed': {
      text: "Document requirements vary by deed type, but commonly needed are: Identity proof (Aadhaar/Passport), Property documents, PAN card, Address proof, Property tax receipts, and Encumbrance certificate.",
      suggestions: ["Sale Deed documents", "Gift Deed documents", "Will documents"]
    },
    'registration process': {
      text: "Property registration involves: Document verification, Deed drafting, Stamp duty payment, Registration at Sub-Registrar office, and Final document delivery. We handle the entire process for you.",
      suggestions: ["How much is stamp duty?", "How long does registration take?", "Book registration service"]
    },
    'stamp duty': {
      text: "Stamp duty varies by state and property value, typically 3-10% of property value. We provide accurate calculations and handle payment. Some states offer concessions for women buyers.",
      suggestions: ["Calculate stamp duty", "State-wise rates", "Women concessions"]
    },
    'legal compliance': {
      text: "All our documents are drafted by qualified lawyers and comply with latest legal requirements. We ensure proper registration, stamp duty payment, and legal validity.",
      suggestions: ["Are your lawyers qualified?", "What if there are legal issues?", "Get legal consultation"]
    }
  }

  const quickSuggestions = [
    "What is Sale Deed?",
    "Difference between Sale Deed and Agreement to Sell",
    "Documents needed for property registration",
    "How to transfer property to family?",
    "What is stamp duty?",
    "How long does registration take?"
  ]

  const getAIResponse = (userMessage: string): { text: string; suggestions: string[] } => {
    const message = userMessage.toLowerCase()
    
    // Check for specific keywords and return appropriate responses
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (message.includes(key)) {
        return response
      }
    }

    // Service-specific responses
    if (message.includes('buying') || message.includes('purchase')) {
      return {
        text: "For property buying, you'll need an Agreement to Sell first (to protect your advance payment), followed by a Sale Deed for final ownership transfer. I can guide you through both processes.",
        suggestions: ["What is Agreement to Sell?", "Sale Deed process", "Documents needed for buying", "Get buying assistance"]
      }
    }

    if (message.includes('selling')) {
      return {
        text: "When selling property, you'll execute a Sale Deed to transfer ownership to the buyer. We ensure all legal requirements are met and handle the registration process.",
        suggestions: ["Sale Deed for sellers", "Documents needed", "Registration process", "Get selling help"]
      }
    }

    if (message.includes('family') || message.includes('transfer') || message.includes('gift')) {
      return {
        text: "For family property transfers, you can use a Gift Deed (no money involved) or Sale Deed (with consideration). Gift Deeds are popular for estate planning and family settlements.",
        suggestions: ["Gift Deed vs Sale Deed", "Tax implications", "Family transfer process", "Get family transfer help"]
      }
    }

    if (message.includes('inheritance') || message.includes('death') || message.includes('estate')) {
      return {
        text: "For inheritance planning, a Will Agreement is essential. It ensures your assets are distributed according to your wishes and prevents family disputes after your death.",
        suggestions: ["How to make a Will", "Will vs Gift Deed", "Inheritance tax", "Get Will drafting service"]
      }
    }

    // Default responses for common queries
    if (message.includes('help') || message.includes('assist')) {
      return {
        text: "I'm here to help with all your property documentation needs! I can explain different types of deeds, legal requirements, and guide you to the right service. What specific property matter are you dealing with?",
        suggestions: ["Sale Deed", "Gift Deed", "Will Agreement", "Property Registration"]
      }
    }

    if (message.includes('cost') || message.includes('price') || message.includes('fee')) {
      return {
        text: "Our service costs vary based on the type of deed and complexity. We offer transparent pricing with no hidden charges. Contact us for a personalized quote based on your specific needs.",
        suggestions: ["Get quote", "Contact for pricing", "Service packages", "Free consultation"]
      }
    }

    if (message.includes('time') || message.includes('duration') || message.includes('how long')) {
      return {
        text: "Processing time varies by service: Sale Deed (same day registration), Gift Deed (5-7 days), Will Agreement (3-5 days), Partition Deed (10-15 days). We keep you updated throughout the process.",
        suggestions: ["Sale Deed timeline", "Gift Deed process", "Registration time", "Track my application"]
      }
    }

    if (message.includes('lawyer') || message.includes('legal') || message.includes('expert')) {
      return {
        text: "All our documents are drafted by qualified, government-registered lawyers with extensive experience in property law. We ensure 100% legal compliance and provide expert guidance throughout.",
        suggestions: ["Meet our lawyers", "Legal compliance", "Expert consultation", "Get legal help"]
      }
    }

    // Default response
    return {
      text: "I understand you're looking for property documentation help. Could you be more specific about what you need? For example, are you buying, selling, gifting property, or need estate planning?",
      suggestions: ["I'm buying property", "I want to gift property", "I need a will", "Property registration help"]
    }
  }

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputText.trim()
    if (!messageText) return

    // Handle service redirects
    if (messageText.includes('Get ') && messageText.includes('Service')) {
      const serviceName = messageText.toLowerCase()
      if (serviceName.includes('sale deed')) {
        window.open('/services/sale-deed', '_blank')
        return
      } else if (serviceName.includes('gift deed')) {
        window.open('/services/gift-deed', '_blank')
        return
      } else if (serviceName.includes('will')) {
        window.open('/services/will-agreement', '_blank')
        return
      } else if (serviceName.includes('partition')) {
        window.open('/services/partition-deed', '_blank')
        return
      } else if (serviceName.includes('relinquishment')) {
        window.open('/services/relinquishment-deed', '_blank')
        return
      } else if (serviceName.includes('agreement')) {
        window.open('/services/agreement-to-sell', '_blank')
        return
      }
    }

    // Handle contact/consultation requests
    if (messageText.toLowerCase().includes('contact') || messageText.toLowerCase().includes('consultation') || messageText.toLowerCase().includes('quote')) {
      window.open('/contact', '_blank')
      return
    }

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsTyping(true)

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse = getAIResponse(messageText)
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse.text,
        isUser: false,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, aiMessage])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000) // Random delay between 1-2 seconds
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  if (!isOpen) return null

  return (
    <div
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className={`bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-2xl h-[600px] flex flex-col overflow-hidden transform transition-all duration-300 ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <i data-lucide="bot" className="w-5 h-5"></i>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Property Documentation Assistant</h3>
                  <p className="text-white/80 text-sm">Ask me anything about deeds and legal documents</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <i data-lucide="x" className="w-4 h-4"></i>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.isUser
                      ? 'bg-gradient-to-r from-primary to-secondary text-white'
                      : 'bg-gray-100 dark:bg-slate-700 text-text-light dark:text-text-dark'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <p className={`text-xs mt-1 ${message.isUser ? 'text-white/70' : 'text-gray-500'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-slate-700 rounded-2xl px-4 py-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions */}
          {messages.length === 1 && (
            <div className="px-4 pb-2">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {quickSuggestions.slice(0, 3).map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSendMessage(suggestion)}
                    className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full hover:bg-primary hover:text-white transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-200 dark:border-slate-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about property documentation..."
                className="flex-1 px-4 py-3 border border-gray-200 dark:border-slate-600 rounded-full bg-white dark:bg-slate-700 text-text-light dark:text-text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputText.trim()}
                className="w-12 h-12 bg-gradient-to-r from-primary to-secondary text-white rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <i data-lucide="send" className="w-4 h-4"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }