'use client'

import { useState, useEffect } from 'react'

interface SaleDeedLoaderProps {
  onComplete: () => void
}

export default function SaleDeedLoader({ onComplete }: SaleDeedLoaderProps) {
  const [animationPhase, setAnimationPhase] = useState<'intro' | 'document' | 'folder' | 'lock' | 'complete'>('intro')
  const [isVisible, setIsVisible] = useState(true)
  const [sparkles, setSparkles] = useState<Array<{id: number, x: number, y: number, delay: number}>>([])

  useEffect(() => {
    // Generate sparkle positions
    const newSparkles = Array.from({length: 12}, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2
    }))
    setSparkles(newSparkles)

    const timeline = [
      { phase: 'intro', duration: 800 },
      { phase: 'document', duration: 1200 },
      { phase: 'folder', duration: 1000 },
      { phase: 'lock', duration: 800 },
      { phase: 'complete', duration: 1000 }
    ]

    let currentIndex = 0
    const runAnimation = () => {
      if (currentIndex < timeline.length) {
        const current = timeline[currentIndex]
        setAnimationPhase(current.phase as any)
        
        setTimeout(() => {
          currentIndex++
          if (currentIndex < timeline.length) {
            runAnimation()
          } else {
            // Animation complete, fade out and call onComplete
            setTimeout(() => {
              setIsVisible(false)
              setTimeout(onComplete, 500)
            }, 800)
          }
        }, current.duration)
      }
    }

    // Start animation after a brief delay
    setTimeout(runAnimation, 500)
  }, [onComplete])

  if (!isVisible) return null

  return (
    <div className={`fixed inset-0 z-[9999] bg-gradient-to-br from-yellow-50 via-white to-orange-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center transition-all duration-500 ${!isVisible ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 animate-pulse"></div>
        
        {/* Floating Sparkles */}
        {sparkles.map((sparkle) => (
          <div
            key={sparkle.id}
            className="absolute w-1 h-1 bg-primary rounded-full animate-twinkle"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              animationDelay: `${sparkle.delay}s`
            }}
          />
        ))}
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-secondary/15 to-primary/15 rounded-full blur-3xl animate-float-slow-reverse"></div>
      </div>
      
      <div className="text-center relative z-10">
        {/* Logo and Brand */}
        <div className={`mb-16 transition-all duration-800 ${animationPhase === 'intro' ? 'animate-logo-entrance' : 'animate-logo-steady'}`}>
          <div className="relative">
            <div className="bg-gradient-to-r from-primary to-secondary px-16 py-4 rounded-2xl shadow-2xl mb-8 inline-block relative overflow-hidden">
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer-continuous"></div>
              <h1 className="text-white text-4xl font-bold tracking-wide relative z-10">SaleDeed.com</h1>
            </div>
            
            {/* Glowing ring around logo */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary to-secondary opacity-20 blur-xl animate-pulse-glow"></div>
          </div>
          
          <div className="relative">
            <p className="text-primary text-xl font-semibold animate-text-glow">
              Privacy kept at every step.
            </p>
            {/* Underline animation */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary to-secondary animate-expand-width"></div>
          </div>
        </div>

        {/* Enhanced Animation Container */}
        <div className="relative w-96 h-48 mx-auto mb-12">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-green-500/10 rounded-3xl blur-2xl animate-pulse-gentle"></div>
          
          {/* Document Icon with real image */}
          <div className={`absolute left-0 top-1/2 transform -translate-y-1/2 transition-all duration-1000 ease-out ${
            animationPhase === 'intro' ? 'translate-x-0 opacity-0 scale-50 rotate-12' :
            animationPhase === 'document' ? 'translate-x-0 opacity-100 scale-100 rotate-0' :
            animationPhase === 'folder' ? 'translate-x-32 opacity-90 scale-95 rotate-3' :
            'translate-x-40 opacity-0 scale-75 rotate-12'
          }`}>
            <div className="relative group">
              {/* Document shadow */}
              <div className="absolute inset-0 bg-black/20 rounded-xl blur-lg transform translate-y-2 scale-110"></div>
              
              {/* Document container */}
              <div className="relative w-20 h-24 bg-white dark:bg-slate-100 rounded-xl shadow-2xl border-2 border-primary/30 overflow-hidden animate-document-float">
                {/* Document icon from internet */}
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/337/337946.png" 
                  alt="Document"
                  className="w-full h-full object-contain p-2"
                />
                
                {/* Scanning line effect */}
                {animationPhase === 'document' && (
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/30 to-transparent h-2 animate-scan-line"></div>
                )}
                
                {/* Sparkle effects */}
                {animationPhase === 'document' && (
                  <>
                    <div className="absolute top-1 right-1 w-2 h-2 bg-yellow-400 rounded-full animate-sparkle-1"></div>
                    <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-blue-400 rounded-full animate-sparkle-2"></div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Folder Icon with real image */}
          <div className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ease-out ${
            animationPhase === 'intro' || animationPhase === 'document' ? 'scale-0 opacity-0 rotate-45' :
            animationPhase === 'folder' ? 'scale-100 opacity-100 rotate-0' :
            animationPhase === 'lock' ? 'scale-110 opacity-95 rotate-2' :
            'scale-100 opacity-100 rotate-0'
          }`}>
            <div className="relative group">
              {/* Folder shadow */}
              <div className="absolute inset-0 bg-black/20 rounded-xl blur-lg transform translate-y-2 scale-110"></div>
              
              {/* Folder container */}
              <div className="relative w-28 h-22 animate-folder-bounce">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/716/716784.png" 
                  alt="Folder"
                  className="w-full h-full object-contain"
                />
                
                {/* Folder opening effect */}
                {animationPhase === 'folder' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-200/50 to-amber-300/50 rounded-lg animate-folder-glow"></div>
                )}
                
                {/* Files sliding into folder */}
                {animationPhase === 'folder' && (
                  <div className="absolute top-2 left-4 w-4 h-5 bg-white rounded-sm shadow-md animate-slide-into-folder"></div>
                )}
              </div>
            </div>
          </div>

          {/* Lock Icon with real image */}
          <div className={`absolute right-0 top-1/2 transform -translate-y-1/2 transition-all duration-800 ease-out ${
            animationPhase === 'lock' || animationPhase === 'complete' ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-0 rotate-180'
          }`}>
            <div className="relative group">
              {/* Lock shadow */}
              <div className="absolute inset-0 bg-black/20 rounded-xl blur-lg transform translate-y-2 scale-110"></div>
              
              {/* Lock container */}
              <div className="relative w-16 h-18 animate-lock-secure">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/159/159478.png" 
                  alt="Lock"
                  className="w-full h-full object-contain"
                />
                
                {/* Lock closing animation */}
                {animationPhase === 'complete' && (
                  <>
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-400 rounded-full animate-success-ping"></div>
                    <div className="absolute inset-0 bg-green-400/20 rounded-full animate-success-glow"></div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Enhanced Connection lines with particles */}
          <div className="absolute top-1/2 left-20 right-20 h-1 transform -translate-y-1/2">
            <div className="relative h-full bg-gradient-to-r from-primary/20 via-secondary/20 to-green-500/20 rounded-full">
              <div className={`h-full bg-gradient-to-r from-primary via-secondary to-green-500 rounded-full transition-all duration-1500 ease-out ${
                animationPhase === 'intro' || animationPhase === 'document' ? 'w-0' :
                animationPhase === 'folder' ? 'w-1/2' :
                'w-full'
              }`}>
                {/* Moving particle */}
                {(animationPhase === 'folder' || animationPhase === 'lock' || animationPhase === 'complete') && (
                  <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg animate-particle-move"></div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Loading Text */}
        <div className="space-y-4 animate-fadeInUp animate-delay-400">
          <div className="text-text-light dark:text-text-dark font-semibold text-xl">
            {animationPhase === 'intro' && (
              <span className="animate-type-writer">Initializing secure platform...</span>
            )}
            {animationPhase === 'document' && (
              <span className="animate-type-writer">📄 Scanning your documents...</span>
            )}
            {animationPhase === 'folder' && (
              <span className="animate-type-writer">📁 Organizing safely...</span>
            )}
            {animationPhase === 'lock' && (
              <span className="animate-type-writer">🔒 Encrypting data...</span>
            )}
            {animationPhase === 'complete' && (
              <span className="animate-type-writer text-green-600">✅ Privacy secured!</span>
            )}
          </div>
          
          {/* Enhanced Progress indicator */}
          <div className="flex justify-center space-x-3">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  (animationPhase === 'intro' && i === 0) ||
                  (animationPhase === 'document' && i === 1) ||
                  (animationPhase === 'folder' && i === 2) ||
                  (animationPhase === 'lock' && i === 3) ||
                  (animationPhase === 'complete' && i === 4)
                    ? 'bg-primary scale-125 animate-pulse-strong' 
                    : i < (['intro', 'document', 'folder', 'lock', 'complete'].indexOf(animationPhase))
                    ? 'bg-green-500 scale-100'
                    : 'bg-gray-300 dark:bg-gray-600 scale-75'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Enhanced Tagline */}
        <div className="mt-12 space-y-2 animate-fadeInUp animate-delay-800">
          <div className="text-subtext-light dark:text-subtext-dark text-lg font-medium">
            Your trusted property documentation partner
          </div>
          <div className="text-xs text-subtext-light/70 dark:text-subtext-dark/70">
            Powered by advanced security protocols
          </div>
        </div>
      </div>
    </div>
  )
}