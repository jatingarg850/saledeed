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
    // Core Services
    'sale deed': {
      text: "A Sale Deed is the final ownership transfer document. It's executed when you're ready to complete the property purchase and take full ownership. This document provides complete legal protection and is registered at the Sub-Registrar office. Processing time: Same day registration.",
      suggestions: ["Sale Deed documents needed", "Sale Deed vs Agreement to Sell", "Get Sale Deed Service"]
    },
    'gift deed': {
      text: "A Gift Deed allows you to transfer property to family members without monetary exchange. It's perfect for family transfers and estate planning. The deed must be registered and is irrevocable once executed. Processing time: 5-7 business days.",
      suggestions: ["Gift Deed tax implications", "Gift Deed documents", "Get Gift Deed Service"]
    },
    'will agreement': {
      text: "A Will Agreement specifies how your assets should be distributed after death. It's essential for estate planning and ensures your wishes are legally protected. You can update it during your lifetime. Processing time: 3-5 business days.",
      suggestions: ["Will validity requirements", "Will vs Gift Deed", "Get Will Drafting Service"]
    },
    'partition deed': {
      text: "A Partition Deed divides jointly owned property among co-owners, giving each party exclusive ownership of their portion. It's used to resolve co-ownership disputes and create individual titles. Processing time: 10-15 business days.",
      suggestions: ["Partition process", "Co-owner consent", "Get Partition Deed Service"]
    },
    'relinquishment deed': {
      text: "A Relinquishment Deed allows a co-owner to give up their share in favor of other co-owners. It's commonly used in family settlements and inheritance matters. Processing time: 7-10 business days.",
      suggestions: ["Relinquishment process", "Required documents", "Get Relinquishment Service"]
    },
    'agreement to sell': {
      text: "An Agreement to Sell is your safety net when buying property. It protects your advance money and ensures the seller can't back out or sell to someone else. It's executed before the final Sale Deed. Processing time: 2-3 business days.",
      suggestions: ["Agreement vs Sale Deed", "Advance payment protection", "Get Agreement Service"]
    },

    // Document Requirements
    'sale deed documents': {
      text: "For Sale Deed you need: 1) Original property documents 2) Identity proof of buyer & seller 3) Property tax receipts 4) Encumbrance certificate 5) Property valuation certificate 6) NOC certificates 7) Previous Agreement to Sell (if any).",
      suggestions: ["Document verification process", "Missing documents help", "Get Sale Deed Service"]
    },
    'gift deed documents': {
      text: "For Gift Deed you need: 1) Identity proof of donor & donee 2) Property documents 3) PAN cards of both parties 4) Address proof 5) Property valuation certificate 6) NOC from family members 7) Passport size photographs.",
      suggestions: ["Gift Deed tax implications", "Family consent requirements", "Get Gift Deed Service"]
    },
    'will documents': {
      text: "For Will Agreement you need: 1) Identity proof of testator 2) Property documents 3) Beneficiary details 4) Asset valuation documents 5) Medical certificate 6) Witness information 7) Address proof.",
      suggestions: ["Will validity requirements", "Witness requirements", "Get Will Drafting Service"]
    },

    // Legal Information
    'stamp duty calculation': {
      text: "Stamp duty varies by state: Delhi (6%), Maharashtra (5%), Karnataka (5%), Tamil Nadu (7%), UP (7%). Women buyers get 1-2% discount in most states. Calculated on property value or circle rate, whichever is higher.",
      suggestions: ["State-wise stamp duty", "Women buyer benefits", "Calculate my stamp duty"]
    },
    'registration fees': {
      text: "Registration fees are typically 1% of property value (max ₹30,000 in most states). Additional charges: Documentation (₹500-2000), Lawyer fees (₹5000-15000), Stamp paper cost varies by deed type.",
      suggestions: ["Total cost breakdown", "Payment methods", "Get cost estimate"]
    },
    'legal validity': {
      text: "For legal validity, documents must be: 1) Properly stamped 2) Registered at Sub-Registrar office 3) Signed by all parties 4) Witnessed (2 witnesses minimum) 5) Notarized where required. We ensure 100% compliance.",
      suggestions: ["Registration process", "Witness requirements", "Legal consultation"]
    },

    // Process Information
    'registration process': {
      text: "Registration process: 1) Document verification & drafting 2) Stamp duty calculation & payment 3) Appointment booking at Sub-Registrar office 4) Biometric verification of parties 5) Document registration 6) Certified copy collection.",
      suggestions: ["Required presence", "Biometric process", "Timeline details"]
    },
    'property verification': {
      text: "We verify: 1) Clear title & ownership chain 2) Encumbrance certificate check 3) Property tax clearance 4) Legal compliance 5) Pending litigation check 6) Approval certificates 7) NOC from authorities.",
      suggestions: ["Verification report", "Title clearance", "Legal due diligence"]
    },

    // Tax Information
    'capital gains tax': {
      text: "Capital gains tax applies on property sale: Short-term (held <2 years): 30% tax. Long-term (held >2 years): 20% with indexation benefit. Exemptions available under Section 54, 54F for reinvestment in residential property.",
      suggestions: ["Tax exemptions", "Indexation benefits", "Tax planning"]
    },
    'gift deed tax': {
      text: "Gift Deed tax implications: 1) No tax for donor 2) Recipient pays tax if gift value >₹50,000 (non-relatives) 3) No tax between relatives 4) Stamp duty applicable 5) TDS may apply in some cases.",
      suggestions: ["Relative definition", "Tax exemptions", "Gift Deed benefits"]
    },

    // Comparison Queries
    'sale deed vs agreement': {
      text: "Key differences: Agreement to Sell - Conditional transfer, protects advance payment, can be cancelled. Sale Deed - Absolute transfer, final ownership, cannot be cancelled. Agreement comes first, Sale Deed completes the transaction.",
      suggestions: ["When to use Agreement", "When to use Sale Deed", "Complete buying process"]
    },
    'gift deed vs will': {
      text: "Gift Deed: Immediate transfer during lifetime, irrevocable, immediate tax implications. Will: Transfer after death, revocable during lifetime, no immediate tax impact. Choose based on when you want transfer to happen.",
      suggestions: ["Estate planning options", "Tax implications", "Family planning advice"]
    },

    // Specific Situations
    'nri property': {
      text: "NRI property transactions require: 1) FEMA compliance 2) RBI approval for certain transactions 3) Repatriation certificates 4) NRE/NRO account usage 5) Tax clearance certificates. We handle all NRI documentation.",
      suggestions: ["NRI buying process", "FEMA compliance", "Repatriation rules"]
    },
    'joint property': {
      text: "Joint property ownership types: 1) Joint Tenancy - Equal shares, survivorship rights 2) Tenancy in Common - Unequal shares possible 3) Coparcenary - HUF property rights. Each has different legal implications.",
      suggestions: ["Ownership types", "Partition rights", "Joint property sale"]
    },
    'property disputes': {
      text: "Common property disputes: 1) Title disputes 2) Boundary issues 3) Co-ownership conflicts 4) Inheritance disputes 5) Fraud cases. We provide legal documentation to prevent and resolve disputes.",
      suggestions: ["Dispute prevention", "Legal remedies", "Documentation protection"]
    },

    // Government Authorities
    'sub registrar office': {
      text: "Sub-Registrar Office handles: 1) Document registration 2) Stamp duty collection 3) Biometric verification 4) Legal compliance check 5) Certified copy issuance. We assist with entire SRO process including appointments.",
      suggestions: ["SRO appointment", "Required presence", "Registration timeline"]
    },
    'mcd clearance': {
      text: "MCD (Municipal Corporation of Delhi) clearances needed: 1) Property tax clearance 2) Building plan approval 3) Completion certificate 4) NOC for construction 5) Trade license (commercial properties).",
      suggestions: ["MCD process", "Clearance timeline", "Required documents"]
    },

    // Property Types
    'residential property': {
      text: "Residential property documentation: 1) Occupancy certificate 2) Approved building plans 3) Society NOC 4) Utility connections 5) Property tax records. Different rules for apartments vs independent houses.",
      suggestions: ["Apartment documentation", "Independent house papers", "Society clearances"]
    },
    'commercial property': {
      text: "Commercial property requires: 1) Commercial land use certificate 2) Trade license 3) Fire NOC 4) Pollution clearance 5) Shop establishment license 6) GST registration documents.",
      suggestions: ["Commercial documentation", "License requirements", "Compliance checklist"]
    },

    // Emergency/Urgent Cases
    'urgent registration': {
      text: "For urgent registration: 1) Same-day service available for Sale Deeds 2) Express processing for ₹2000 extra 3) Direct SRO coordination 4) Document preparation in 2-4 hours 5) Immediate appointment booking.",
      suggestions: ["Same day service", "Express charges", "Emergency contact"]
    },
    'missing documents': {
      text: "Missing document solutions: 1) Duplicate title deed from SRO 2) Affidavit for lost documents 3) Court decree for disputed papers 4) Revenue records from Tehsildar 5) Alternative proof arrangements.",
      suggestions: ["Document recovery", "Affidavit process", "Legal alternatives"]
    },

    // Services & Support
    'doorstep service': {
      text: "Our doorstep service includes: 1) Home visit by legal expert 2) Document collection & verification 3) Consultation & guidance 4) Process explanation 5) Regular updates. Available across Delhi NCR for ₹1999.",
      suggestions: ["Book doorstep service", "Service areas", "What's included"]
    },
    'legal consultation': {
      text: "Free legal consultation includes: 1) 15-minute expert advice 2) Document review 3) Process guidance 4) Cost estimation 5) Timeline discussion. Book online or call for immediate assistance.",
      suggestions: ["Book consultation", "Expert advice", "Contact lawyer"]
    },
    'track application': {
      text: "Track your application: 1) SMS updates at each stage 2) WhatsApp status messages 3) Online portal access 4) Direct coordinator contact 5) Real-time progress tracking. You'll never be left wondering about status.",
      suggestions: ["Login to portal", "Contact coordinator", "Status inquiry"]
    }
  }

  const quickSuggestions = [
    "What is Sale Deed?",
    "Documents needed for property registration",
    "How to transfer property to family?",
    "What is stamp duty calculation?",
    "NRI property buying process",
    "Property tax implications",
    "Urgent registration service",
    "Legal consultation booking",
    "Track my application status",
    "Doorstep service details",
    "Property verification process",
    "Joint property ownership",
    "Missing documents help",
    "Commercial property documentation",
    "Gift Deed vs Will comparison"
  ]

  const getAIResponse = (userMessage: string): { text: string; suggestions: string[] } => {
    const message = userMessage.toLowerCase()
    
    // Check for specific keywords and return appropriate responses
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (message.includes(key.replace(/\s+/g, ' '))) {
        return response
      }
    }

    // Command-based responses
    if (message.includes('/help') || message === 'help') {
      return {
        text: "Available commands:\n• Ask about any deed type (Sale, Gift, Will, Partition, Relinquishment)\n• Document requirements for any service\n• Tax implications and calculations\n• Registration process and timeline\n• Legal compliance and verification\n• NRI property procedures\n• Emergency/urgent services\n• Cost estimates and consultation booking",
        suggestions: ["Show all services", "Document checklist", "Tax calculator", "Book consultation"]
      }
    }

    if (message.includes('/services') || message.includes('show all services')) {
      return {
        text: "Our complete service portfolio:\n🏠 Sale Deed - Final ownership transfer\n🎁 Gift Deed - Family property transfer\n📜 Will Agreement - Estate planning\n⚖️ Partition Deed - Property division\n🤝 Relinquishment Deed - Share transfer\n📋 Agreement to Sell - Buyer protection\n🏢 Commercial documentation\n🌍 NRI property services",
        suggestions: ["Sale Deed details", "Gift Deed info", "Will Agreement", "Commercial property"]
      }
    }

    // Situation-based responses
    if (message.includes('buying') || message.includes('purchase') || message.includes('buyer')) {
      return {
        text: "Property buying process: 1) Property verification & due diligence 2) Agreement to Sell (protects advance) 3) Loan approval (if needed) 4) Final Sale Deed execution 5) Registration & possession. We handle end-to-end process with legal protection.",
        suggestions: ["Agreement to Sell", "Property verification", "Buying checklist", "Get buying assistance"]
      }
    }

    if (message.includes('selling') || message.includes('seller')) {
      return {
        text: "Property selling process: 1) Property valuation 2) Title verification 3) Tax clearance 4) Sale Deed preparation 5) Registration with buyer 6) Capital gains tax planning. We ensure smooth, legally compliant sale.",
        suggestions: ["Sale Deed process", "Tax implications", "Seller documents", "Get selling help"]
      }
    }

    if (message.includes('family') || message.includes('transfer') || message.includes('gift')) {
      return {
        text: "Family property transfer options: Gift Deed (no money, immediate transfer), Will (transfer after death), Sale Deed (with consideration). Each has different tax implications and legal requirements.",
        suggestions: ["Gift Deed vs Will", "Tax implications", "Family planning", "Get transfer help"]
      }
    }

    if (message.includes('inheritance') || message.includes('death') || message.includes('estate') || message.includes('succession')) {
      return {
        text: "Estate planning essentials: Will Agreement (asset distribution), Gift Deed (lifetime transfer), Succession certificate (legal heir proof), Family settlement (dispute prevention). Plan early to avoid family conflicts.",
        suggestions: ["Will Agreement", "Succession planning", "Family settlement", "Get estate planning"]
      }
    }

    if (message.includes('nri') || message.includes('non-resident') || message.includes('overseas')) {
      return {
        text: "NRI property services: FEMA compliance, RBI approvals, repatriation certificates, NRE/NRO account guidance, tax clearances, power of attorney for representation. Complete NRI documentation support.",
        suggestions: ["NRI buying process", "FEMA compliance", "Power of attorney", "Get NRI help"]
      }
    }

    if (message.includes('urgent') || message.includes('emergency') || message.includes('same day') || message.includes('fast')) {
      return {
        text: "Emergency services available: Same-day Sale Deed registration, express document preparation (2-4 hours), immediate SRO appointments, urgent legal consultation, emergency documentation. Additional charges apply for express service.",
        suggestions: ["Same day service", "Express charges", "Emergency contact", "Urgent booking"]
      }
    }

    if (message.includes('tax') || message.includes('duty') || message.includes('calculation')) {
      return {
        text: "Tax & duty information: Stamp duty (3-10% by state), registration fees (1%), capital gains tax (20% long-term), gift tax implications, TDS requirements, exemptions available. We provide accurate calculations.",
        suggestions: ["Stamp duty calculator", "Capital gains tax", "Tax exemptions", "Get tax advice"]
      }
    }

    if (message.includes('document') || message.includes('papers') || message.includes('certificate')) {
      return {
        text: "Document services: Verification, preparation, registration, duplicate copies, legal compliance check, missing document recovery, affidavit preparation, notarization. Complete documentation support.",
        suggestions: ["Document checklist", "Verification process", "Missing documents", "Get document help"]
      }
    }

    if (message.includes('cost') || message.includes('price') || message.includes('fee') || message.includes('charge')) {
      return {
        text: "Transparent pricing: Government fees (stamp duty + registration), our service charges (₹5000-15000 based on complexity), doorstep service (₹1999), express service (₹2000 extra). No hidden charges, detailed cost breakdown provided.",
        suggestions: ["Get quote", "Service packages", "Payment options", "Cost breakdown"]
      }
    }

    if (message.includes('time') || message.includes('duration') || message.includes('how long') || message.includes('timeline')) {
      return {
        text: "Service timelines: Sale Deed (same day), Agreement to Sell (2-3 days), Gift Deed (5-7 days), Will Agreement (3-5 days), Partition Deed (10-15 days), Property verification (3-5 days). Express service available.",
        suggestions: ["Timeline details", "Express service", "Track application", "Process stages"]
      }
    }

    if (message.includes('lawyer') || message.includes('legal') || message.includes('expert') || message.includes('consultation')) {
      return {
        text: "Legal expertise: Government-registered lawyers, 10+ years experience, specialized in property law, free 15-minute consultation, doorstep legal advice, court representation if needed. 100% legal compliance guaranteed.",
        suggestions: ["Book consultation", "Meet lawyers", "Legal compliance", "Expert advice"]
      }
    }

    if (message.includes('track') || message.includes('status') || message.includes('progress')) {
      return {
        text: "Application tracking: Real-time SMS updates, WhatsApp notifications, online portal access, dedicated coordinator contact, stage-wise progress tracking. You'll always know your application status.",
        suggestions: ["Login portal", "Contact coordinator", "Status inquiry", "Update preferences"]
      }
    }

    if (message.includes('joint') || message.includes('co-owner') || message.includes('shared')) {
      return {
        text: "Joint property solutions: Partition Deed (divide property), Relinquishment Deed (give up share), Joint Sale (sell together), Family settlement (resolve disputes). Each co-owner has specific rights and obligations.",
        suggestions: ["Partition process", "Relinquishment deed", "Co-owner rights", "Joint property sale"]
      }
    }

    if (message.includes('dispute') || message.includes('conflict') || message.includes('problem') || message.includes('issue')) {
      return {
        text: "Dispute resolution: Legal documentation to prevent disputes, family settlement agreements, court-ready documents, mediation support, title clarification, boundary dispute resolution. Prevention is better than cure.",
        suggestions: ["Dispute prevention", "Family settlement", "Legal remedies", "Court documentation"]
      }
    }

    if (message.includes('commercial') || message.includes('business') || message.includes('office') || message.includes('shop')) {
      return {
        text: "Commercial property services: Trade license documentation, commercial land use certificates, GST registration support, lease deed preparation, NOC arrangements, compliance documentation. Complete commercial property support.",
        suggestions: ["Commercial documentation", "Trade license", "Lease agreements", "Get commercial help"]
      }
    }

    // Default responses for common queries
    if (message.includes('help') || message.includes('assist')) {
      return {
        text: "I'm your property documentation expert! I can help with: deed explanations, document requirements, legal processes, tax calculations, timeline queries, cost estimates, and service bookings. What specific help do you need?",
        suggestions: ["Show all services", "Document checklist", "Cost calculator", "Book consultation"]
      }
    }

    // Greeting responses
    if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('good')) {
      return {
        text: "Hello! Welcome to SaleDeed.com. I'm here to help with all your property documentation needs. Whether you're buying, selling, gifting property, or need estate planning - I can guide you to the right solution.",
        suggestions: ["I'm buying property", "I want to gift property", "I need a will", "Show all services"]
      }
    }

    // Default response with helpful suggestions
    return {
      text: "I can help you with property documentation! Try asking about:\n• Specific deed types (Sale, Gift, Will, Partition)\n• Document requirements\n• Registration process\n• Tax implications\n• Timeline and costs\n• Legal compliance\n\nWhat would you like to know?",
      suggestions: ["Show all services", "Document requirements", "Tax calculator", "Book consultation"]
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