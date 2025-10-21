'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface PropertyDocument {
  title: string
  description: string
  images: string[]
  link: string
}

interface PropertyDocumentCardProps {
  document: PropertyDocument
}

export default function PropertyDocumentCard({ document }: PropertyDocumentCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % document.images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [document.images.length])

  return (
    <div className="property-card bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      {/* Image Slider */}
      <div className="relative h-64 overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {document.images.map((image, index) => (
            <div key={index} className="min-w-full h-full flex-shrink-0">
              <img
                src={image}
                alt={`${document.title} - Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        
        {/* Slider Indicators */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
          {document.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? 'bg-white w-6'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-3">
          {document.title}
        </h3>
        <p className="text-subtext-light dark:text-subtext-dark text-sm leading-relaxed mb-4 line-clamp-4">
          {document.description}
        </p>
        <Link
          href={document.link}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
        >
          Learn More
          <i data-lucide="arrow-right" className="w-4 h-4"></i>
        </Link>
      </div>
    </div>
  )
}
