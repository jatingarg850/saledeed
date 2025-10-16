'use client'

import { useState, useEffect } from 'react'

interface PDFViewerProps {
  fileName: string
  onClose: () => void
}

export default function PDFViewer({ fileName, onClose }: PDFViewerProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const [scale, setScale] = useState(1)

  const pdfUrl = `/assests/${fileName}`

  useEffect(() => {
    setIsLoading(true)
    setError(false)
  }, [fileName])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handlePrint = () => {
    const printWindow = window.open(pdfUrl, '_blank')
    if (printWindow) {
      printWindow.onload = () => {
        printWindow.print()
      }
    }
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-6xl h-full max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-slate-700 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-slate-800 dark:to-slate-700">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <i data-lucide="file-text" className="w-5 h-5 text-white"></i>
            </div>
            <div>
              <h3 className="font-bold text-lg text-text-light dark:text-text-dark">Document Preview</h3>
              <p className="text-sm text-subtext-light dark:text-subtext-dark">{fileName}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Zoom Controls */}
            <div className="flex items-center gap-2 bg-white dark:bg-slate-700 rounded-lg p-1 border border-gray-200 dark:border-slate-600">
              <button
                onClick={() => setScale(Math.max(0.5, scale - 0.25))}
                className="p-2 hover:bg-gray-100 dark:hover:bg-slate-600 rounded transition-colors"
                title="Zoom Out"
              >
                <i data-lucide="zoom-out" className="w-4 h-4 text-gray-600 dark:text-gray-300"></i>
              </button>
              <span className="px-2 text-sm font-medium text-gray-600 dark:text-gray-300 min-w-[60px] text-center">
                {Math.round(scale * 100)}%
              </span>
              <button
                onClick={() => setScale(Math.min(3, scale + 0.25))}
                className="p-2 hover:bg-gray-100 dark:hover:bg-slate-600 rounded transition-colors"
                title="Zoom In"
              >
                <i data-lucide="zoom-in" className="w-4 h-4 text-gray-600 dark:text-gray-300"></i>
              </button>
            </div>

            {/* Action Buttons */}
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
              title="Download PDF"
            >
              <i data-lucide="download" className="w-4 h-4"></i>
              <span className="hidden sm:inline">Download</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-2 bg-white dark:bg-slate-700 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-slate-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-slate-600 transition-all duration-300"
              title="Print PDF"
            >
              <i data-lucide="printer" className="w-4 h-4"></i>
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
              title="Close"
            >
              <i data-lucide="x" className="w-5 h-5 text-gray-600 dark:text-gray-300"></i>
            </button>
          </div>
        </div>

        {/* PDF Content */}
        <div className="flex-1 overflow-auto bg-gray-100 dark:bg-slate-900 p-4">
          {isLoading && (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600 dark:text-gray-300">Loading PDF...</p>
              </div>
            </div>
          )}

          {error && (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <i data-lucide="alert-circle" className="w-16 h-16 text-red-500 mx-auto mb-4"></i>
                <h3 className="text-lg font-bold text-text-light dark:text-text-dark mb-2">Failed to Load PDF</h3>
                <p className="text-subtext-light dark:text-subtext-dark mb-4">
                  There was an error loading the PDF file. Please try again.
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Retry
                </button>
              </div>
            </div>
          )}

          {!error && (
            <div className="flex justify-center">
              <div 
                className="bg-white shadow-2xl rounded-lg overflow-hidden"
                style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }}
              >
                <iframe
                  src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                  width="800"
                  height="1000"
                  className="border-0"
                  onLoad={() => setIsLoading(false)}
                  onError={() => {
                    setIsLoading(false)
                    setError(true)
                  }}
                  title={`PDF Preview: ${fileName}`}
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800">
          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-4">
              <span>Use scroll wheel or zoom controls to adjust view</span>
            </div>
            <div className="flex items-center gap-4">
              <span>Press ESC to close</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

