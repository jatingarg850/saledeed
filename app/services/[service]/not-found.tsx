import Link from 'next/link'

export default function ServiceNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <div className="w-24 h-24 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
          <i data-lucide="file-x" className="w-12 h-12 text-red-600 dark:text-red-400"></i>
        </div>
        
        <h1 className="text-4xl font-bold text-text-light dark:text-text-dark mb-4">
          Service Not Found
        </h1>
        
        <p className="text-lg text-subtext-light dark:text-subtext-dark mb-8 max-w-md mx-auto">
          The service you're looking for doesn't exist or may have been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            <i data-lucide="arrow-left" className="w-4 h-4"></i>
            Back to Services
          </Link>
          
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 text-primary border-2 border-primary px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300"
          >
            <i data-lucide="phone" className="w-4 h-4"></i>
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}