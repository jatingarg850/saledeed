'use client'

import { useState } from 'react'

interface Document {
    id: string
    title: string
    description: string
    category: string
    fileName: string
    fileSize: string
    pages: number
    downloadCount: number
    lastUpdated: string
    tags: string[]
}

interface DocumentCardProps {
    document: Document
    onPreview: (fileName: string) => void
    onDownload: (fileName: string, title: string) => void
}

export default function DocumentCard({ document, onPreview, onDownload }: DocumentCardProps) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className="group bg-white dark:bg-slate-800/50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-slate-700 overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Document Preview */}
            <div 
                className="relative h-48 cursor-pointer overflow-hidden rounded-t-2xl group"
                onClick={() => document.fileName.endsWith('.pdf') ? onPreview(document.fileName) : onDownload(document.fileName, document.title)}
            >
                {/* Thumbnail Image */}
                <img 
                    src="/thumbnails/thumbnail.png" 
                    alt={document.title}
                    className={`w-full h-full object-cover transition-all duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}
                />

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 flex items-center justify-center ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                }`}>
                    <div className="text-center text-white">
                        <i data-lucide="download" className="w-12 h-12 mx-auto mb-2"></i>
                        <p className="text-sm font-semibold">Click to {document.fileName.endsWith('.pdf') ? 'Preview' : 'Download'}</p>
                    </div>
                </div>

                {/* Page Count Badge */}
                <div className="absolute top-3 right-3 bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg backdrop-blur-sm">
                    {document.pages} pages
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-white/90 dark:bg-slate-800/90 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium shadow-lg backdrop-blur-sm">
                    {document.category}
                </div>

                {/* File Type Badge */}
                <div className="absolute bottom-3 left-3 bg-black/60 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg backdrop-blur-sm flex items-center gap-1">
                    {document.fileName.endsWith('.pdf') ? (
                        <>
                            <i data-lucide="file-text" className="w-3 h-3"></i>
                            PDF
                        </>
                    ) : document.fileName.endsWith('.doc') || document.fileName.endsWith('.docx') ? (
                        <>
                            <i data-lucide="file-type" className="w-3 h-3"></i>
                            DOC
                        </>
                    ) : (
                        <>
                            <i data-lucide="file" className="w-3 h-3"></i>
                            FILE
                        </>
                    )}
                </div>
            </div>

            {/* Document Info */}
            <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-lg text-text-light dark:text-text-dark group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                        {document.title}
                    </h3>
                </div>

                <p className="text-subtext-light dark:text-subtext-dark text-sm mb-4 line-clamp-3 leading-relaxed">
                    {document.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                    {document.tags.slice(0, 3).map((tag, index) => (
                        <span
                            key={index}
                            className="bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded text-xs"
                        >
                            #{tag}
                        </span>
                    ))}
                    {document.tags.length > 3 && (
                        <span className="text-gray-400 text-xs px-2 py-1">
                            +{document.tags.length - 3} more
                        </span>
                    )}
                </div>

                {/* File Info */}
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                            <i data-lucide="hard-drive" className="w-3 h-3"></i>
                            {document.fileSize}
                        </span>
                        <span className="flex items-center gap-1">
                            <i data-lucide="download" className="w-3 h-3"></i>
                            {document.downloadCount.toLocaleString()}
                        </span>
                    </div>
                    <span>Updated {document.lastUpdated}</span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                    {document.fileName.endsWith('.pdf') ? (
                        <button
                            onClick={() => onPreview(document.fileName)}
                            className="flex-1 bg-primary/10 text-primary px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            <i data-lucide="eye" className="w-4 h-4"></i>
                            Preview
                        </button>
                    ) : (
                        <button
                            onClick={() => onDownload(document.fileName, document.title)}
                            className="flex-1 bg-blue-500/10 text-blue-600 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            <i data-lucide="external-link" className="w-4 h-4"></i>
                            Open
                        </button>
                    )}
                    <button
                        onClick={() => onDownload(document.fileName, document.title)}
                        className="flex-1 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                        <i data-lucide="download" className="w-4 h-4"></i>
                        Download
                    </button>
                </div>
            </div>
        </div>
    )
}