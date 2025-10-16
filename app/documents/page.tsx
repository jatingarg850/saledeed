'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import PDFViewer from '../../components/PDFViewer'
import DocumentCard from '../../components/DocumentCard'

export default function DocumentsPage() {
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const documents = [
    {
      id: '1',
      title: 'Sale Deed Template',
      description: 'Standard sale deed format for property transactions with all legal clauses and requirements.',
      category: 'Property Transfer',
      fileName: '1.pdf',
      fileSize: '2.3 MB',
      pages: 8,
      downloadCount: 1250,
      lastUpdated: '2024-01-15',
      tags: ['sale', 'property', 'transfer', 'legal']
    },
    {
      id: '2', 
      title: 'Gift Deed Format',
      description: 'Comprehensive gift deed template for transferring property as a gift to family members.',
      category: 'Property Transfer',
      fileName: '2.pdf',
      fileSize: '1.8 MB',
      pages: 6,
      downloadCount: 890,
      lastUpdated: '2024-01-12',
      tags: ['gift', 'family', 'transfer', 'legal']
    },
    {
      id: '3',
      title: 'Agreement to Sell',
      description: 'Legal agreement template for property sale with terms, conditions and payment schedules.',
      category: 'Agreements',
      fileName: '3.pdf',
      fileSize: '2.1 MB', 
      pages: 7,
      downloadCount: 1100,
      lastUpdated: '2024-01-10',
      tags: ['agreement', 'sale', 'contract', 'legal']
    },
    {
      id: '4',
      title: 'Power of Attorney',
      description: 'General and special power of attorney formats for property and legal matters.',
      category: 'Legal Documents',
      fileName: '4.pdf',
      fileSize: '1.5 MB',
      pages: 5,
      downloadCount: 750,
      lastUpdated: '2024-01-08',
      tags: ['power', 'attorney', 'legal', 'authorization']
    },
    {
      id: '5',
      title: 'Lease Agreement',
      description: 'Comprehensive rental and lease agreement template with tenant and landlord clauses.',
      category: 'Agreements',
      fileName: '5.pdf',
      fileSize: '2.7 MB',
      pages: 10,
      downloadCount: 1350,
      lastUpdated: '2024-01-05',
      tags: ['lease', 'rental', 'tenant', 'landlord']
    },
    {
      id: '6',
      title: 'Will Testament',
      description: 'Legal will and testament format for property and asset distribution.',
      category: 'Legal Documents',
      fileName: '6.pdf',
      fileSize: '1.9 MB',
      pages: 6,
      downloadCount: 680,
      lastUpdated: '2024-01-03',
      tags: ['will', 'testament', 'inheritance', 'legal']
    },
    {
      id: '7',
      title: 'Property Valuation Report',
      description: 'Standard format for property valuation and assessment reports.',
      category: 'Valuation',
      fileName: '7.pdf',
      fileSize: '3.2 MB',
      pages: 12,
      downloadCount: 920,
      lastUpdated: '2024-01-01',
      tags: ['valuation', 'assessment', 'property', 'report']
    },
    {
      id: '8',
      title: 'NOC Certificate Format',
      description: 'No Objection Certificate template for various property and legal purposes.',
      category: 'Certificates',
      fileName: '8.pdf',
      fileSize: '1.2 MB',
      pages: 3,
      downloadCount: 560,
      lastUpdated: '2023-12-28',
      tags: ['noc', 'certificate', 'clearance', 'legal']
    },
    {
      id: '9',
      title: 'Partition Deed',
      description: 'Legal partition deed format for dividing joint property among co-owners.',
      category: 'Property Transfer',
      fileName: '9.pdf',
      fileSize: '2.4 MB',
      pages: 9,
      downloadCount: 780,
      lastUpdated: '2023-12-25',
      tags: ['partition', 'division', 'co-owners', 'legal']
    },
    {
      id: '10',
      title: 'Mortgage Deed',
      description: 'Mortgage agreement template for property financing and loan documentation.',
      category: 'Financial',
      fileName: '10.pdf',
      fileSize: '2.8 MB',
      pages: 11,
      downloadCount: 1020,
      lastUpdated: '2023-12-22',
      tags: ['mortgage', 'loan', 'financing', 'bank']
    },
    {
      id: '11',
      title: 'Affidavit Format',
      description: 'General affidavit template for various legal declarations and statements.',
      category: 'Legal Documents',
      fileName: '11.pdf',
      fileSize: '1.1 MB',
      pages: 4,
      downloadCount: 640,
      lastUpdated: '2023-12-20',
      tags: ['affidavit', 'declaration', 'statement', 'legal']
    },
    {
      id: '12',
      title: 'Registration Documents Checklist',
      description: 'Complete checklist of documents required for property registration process.',
      category: 'Checklists',
      fileName: '12.pdf',
      fileSize: '1.6 MB',
      pages: 5,
      downloadCount: 1180,
      lastUpdated: '2023-12-18',
      tags: ['checklist', 'registration', 'documents', 'process']
    }
  ]

  const categories = [
    'all',
    'Property Transfer',
    'Agreements', 
    'Legal Documents',
    'Certificates',
    'Financial',
    'Valuation',
    'Checklists'
  ]

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleDownload = (fileName: string, title: string) => {
    const link = document.createElement('a')
    link.href = `/assests/${fileName}`
    link.download = `${title}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Navigation currentPage="documents" />

        {/* Main Content */}
        <main className="flex-1 px-6 md:px-10 lg:px-20 py-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-8">
            <Link href="/" className="text-primary hover:underline">Home</Link>
            <i className="text-gray-400" data-lucide="chevron-right"></i>
            <span className="text-text-light dark:text-text-dark">Document Library</span>
          </div>

          {/* Hero Section */}
          <div className="relative overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-orange-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 rounded-3xl mb-16">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="relative max-w-6xl mx-auto px-8 py-16 md:py-20">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg">
                  <i data-lucide="file-text" className="w-4 h-4"></i>
                  Legal Document Library
                </div>

                <h1 className="text-text-light dark:text-text-dark text-5xl md:text-7xl font-black tracking-tight font-display mb-8 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    Document
                  </span>
                  <span className="block">Library</span>
                </h1>

                <p className="text-subtext-light dark:text-subtext-dark text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-12 font-medium">
                  Access our comprehensive collection of legal document templates, formats, and guides for all your property needs.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center gap-3 p-4 bg-white/80 dark:bg-slate-800/80 rounded-xl backdrop-blur-sm shadow-md">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      <i data-lucide="download" className="w-6 h-6 text-blue-600 dark:text-blue-400"></i>
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-text-light dark:text-text-dark">Free Downloads</div>
                      <div className="text-sm text-subtext-light dark:text-subtext-dark">All Templates</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-3 p-4 bg-white/80 dark:bg-slate-800/80 rounded-xl backdrop-blur-sm shadow-md">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      <i data-lucide="eye" className="w-6 h-6 text-green-600 dark:text-green-400"></i>
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-text-light dark:text-text-dark">Preview Available</div>
                      <div className="text-sm text-subtext-light dark:text-subtext-dark">Before Download</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-3 p-4 bg-white/80 dark:bg-slate-800/80 rounded-xl backdrop-blur-sm shadow-md">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                      <i data-lucide="shield-check" className="w-6 h-6 text-purple-600 dark:text-purple-400"></i>
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-text-light dark:text-text-dark">Legal Compliance</div>
                      <div className="text-sm text-subtext-light dark:text-subtext-dark">Verified Templates</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-6 border border-blue-200/50 dark:border-blue-700/50">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <i data-lucide="file-text" className="w-6 h-6 text-white"></i>
                </div>
                <div>
                  <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">{documents.length}</p>
                  <p className="text-sm text-blue-600 dark:text-blue-400">Total Documents</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-6 border border-green-200/50 dark:border-green-700/50">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <i data-lucide="download" className="w-6 h-6 text-white"></i>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-700 dark:text-green-300">
                    {documents.reduce((sum, doc) => sum + doc.downloadCount, 0).toLocaleString()}
                  </p>
                  <p className="text-sm text-green-600 dark:text-green-400">Total Downloads</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl p-6 border border-purple-200/50 dark:border-purple-700/50">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                  <i data-lucide="folder" className="w-6 h-6 text-white"></i>
                </div>
                <div>
                  <p className="text-2xl font-bold text-purple-700 dark:text-purple-300">{categories.length - 1}</p>
                  <p className="text-sm text-purple-600 dark:text-purple-400">Categories</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl p-6 border border-orange-200/50 dark:border-orange-700/50">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                  <i data-lucide="clock" className="w-6 h-6 text-white"></i>
                </div>
                <div>
                  <p className="text-2xl font-bold text-orange-700 dark:text-orange-300">24/7</p>
                  <p className="text-sm text-orange-600 dark:text-orange-400">Available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Search and Filter Section */}
          <div className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-xl border border-yellow-200/50 dark:border-slate-700 p-8 mb-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="flex-1 w-full">
                <div className="relative">
                  <i data-lucide="search" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"></i>
                  <input
                    type="text"
                    placeholder="Search documents by title, description, or tags..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-text-light dark:text-text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                        : 'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-primary/10 dark:hover:bg-primary/20'
                    }`}
                  >
                    {category === 'all' ? 'All Categories' : category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Documents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            {filteredDocuments.map((doc) => (
              <DocumentCard
                key={doc.id}
                document={doc}
                onPreview={setSelectedDocument}
                onDownload={handleDownload}
              />
            ))}
          </div>

          {/* No Results */}
          {filteredDocuments.length === 0 && (
            <div className="text-center py-16">
              <i data-lucide="search-x" className="w-16 h-16 text-gray-400 mx-auto mb-4"></i>
              <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-2">No Documents Found</h3>
              <p className="text-subtext-light dark:text-subtext-dark">Try adjusting your search terms or category filter.</p>
            </div>
          )}

          {/* CTA Section */}
          <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary rounded-3xl p-12 text-center">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative">
              <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">Need Custom Documentation?</h3>
              <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
                Our legal experts can create customized documents tailored to your specific requirements
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <i data-lucide="message-circle" className="w-5 h-5"></i>
                Get Custom Documents
              </Link>
            </div>
          </div>
        </main>

        {/* PDF Viewer Modal */}
        {selectedDocument && (
          <PDFViewer
            fileName={selectedDocument}
            onClose={() => setSelectedDocument(null)}
          />
        )}
      </div>
    </div>
  )
}