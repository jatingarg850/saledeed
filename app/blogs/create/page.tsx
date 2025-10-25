'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Navigation from '../../../components/Navigation'

const ADMIN_KEY = 'saledeed2025admin' // Change this to your secure key

export default function CreateBlogPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [authKey, setAuthKey] = useState('')
  const [authError, setAuthError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [blogData, setBlogData] = useState({
    title: '',
    slug: '',
    category: 'Sale Deed',
    tags: '',
    image: '',
    excerpt: '',
    content: '',
    readTime: '5 min read'
  })

  const categories = [
    'Sale Deed',
    'Gift Deed',
    'Agreement to Sell',
    'Will Testament',
    'Partition Deed',
    'Relinquishment Deed',
    'Power of Attorney',
    'Rent Agreement',
    'Exchange Deed',
    'Mutation',
    'Property Law',
    'Real Estate'
  ]

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault()
    if (authKey === ADMIN_KEY) {
      setIsAuthenticated(true)
      setAuthError('')
    } else {
      setAuthError('Invalid authentication key. Please try again.')
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setBlogData(prev => ({
      ...prev,
      [name]: value
    }))

    // Auto-generate slug from title
    if (name === 'title') {
      const slug = value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')
      setBlogData(prev => ({
        ...prev,
        slug
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Convert tags string to array
      const tagsArray = blogData.tags.split(',').map(tag => tag.trim()).filter(tag => tag)

      const newBlog = {
        ...blogData,
        tags: tagsArray,
        id: Date.now(),
        createdAt: new Date().toISOString()
      }

      // Here you would typically send this to your backend/database
      // For now, we'll just log it and show success
      console.log('New Blog:', newBlog)

      // Create the blog file structure
      const blogContent = `
import Navigation from '../../../components/Navigation'

export default function BlogPost() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark">
      <div className="layout-container flex h-full grow flex-col">
        <Navigation currentPage="blogs" />
        
        <main className="px-6 md:px-10 lg:px-20 py-10">
          <article className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-medium">
                  ${blogData.category}
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  ${blogData.readTime}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-text-light dark:text-text-dark mb-4">
                ${blogData.title}
              </h1>
              
              <p className="text-xl text-subtext-light dark:text-subtext-dark">
                ${blogData.excerpt}
              </p>
            </div>

            {/* Featured Image */}
            <div className="mb-8 rounded-2xl overflow-hidden">
              <img
                src="${blogData.image}"
                alt="${blogData.title}"
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              ${blogData.content.split('\n').map(para => para.trim() ? `<p>${para}</p>` : '').join('\n              ')}
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-slate-700">
              <h3 className="text-lg font-bold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                ${tagsArray.map(tag => `<span className="bg-yellow-100 dark:bg-slate-700 text-amber-800 dark:text-amber-200 px-3 py-1 rounded-full text-sm">
                  ${tag}
                </span>`).join('\n                ')}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Need Help with ${blogData.category}?
              </h3>
              <p className="text-white/90 mb-6">
                Our experts are here to assist you with all your property documentation needs.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-yellow-50 transition-colors"
              >
                Get Expert Help
                <i data-lucide="arrow-right" className="w-4 h-4"></i>
              </a>
            </div>

            {/* Back to Blogs */}
            <div className="mt-12 text-center">
              <a
                href="/blogs"
                className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-medium"
              >
                <i data-lucide="arrow-left" className="w-4 h-4"></i>
                Back to All Blogs
              </a>
            </div>
          </article>
        </main>
      </div>
    </div>
  )
}
`

      // Show success message
      alert(`Blog created successfully!\n\nSlug: ${blogData.slug}\n\nTo complete the setup:\n1. Create folder: app/blogs/${blogData.slug}\n2. Create file: app/blogs/${blogData.slug}/page.tsx\n3. Copy the generated content\n\nThe blog structure has been logged to console.`)

      // Redirect back to blogs page
      setTimeout(() => {
        router.push('/blogs')
      }, 2000)

    } catch (error) {
      console.error('Error creating blog:', error)
      alert('Error creating blog. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="relative flex h-screen w-full items-center justify-center bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="w-full max-w-md p-8">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 border border-yellow-200/50 dark:border-slate-700">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <i data-lucide="lock" className="w-8 h-8 text-white"></i>
              </div>
              <h1 className="text-2xl font-bold text-text-light dark:text-text-dark mb-2">
                Admin Authentication
              </h1>
              <p className="text-subtext-light dark:text-subtext-dark">
                Enter your admin key to create a new blog post
              </p>
            </div>

            <form onSubmit={handleAuth} className="space-y-6">
              <div>
                <label htmlFor="authKey" className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
                  Authentication Key
                </label>
                <input
                  type="password"
                  id="authKey"
                  value={authKey}
                  onChange={(e) => setAuthKey(e.target.value)}
                  placeholder="Enter admin key"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {authError && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <p className="text-red-600 dark:text-red-400 text-sm">{authError}</p>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all duration-300"
              >
                Authenticate
              </button>

              <div className="text-center">
                <a
                  href="/blogs"
                  className="text-sm text-primary hover:text-secondary transition-colors"
                >
                  ← Back to Blogs
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark">
      <div className="layout-container flex h-full grow flex-col">
        <Navigation currentPage="blogs" />

        <main className="px-6 md:px-10 lg:px-20 py-10">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-text-light dark:text-text-dark mb-4">
                Create New Blog Post
              </h1>
              <p className="text-subtext-light dark:text-subtext-dark text-lg">
                Fill in the details below to create a new blog post
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
                  Blog Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={blogData.title}
                  onChange={handleInputChange}
                  placeholder="Enter blog title"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Slug (Auto-generated) */}
              <div>
                <label htmlFor="slug" className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
                  URL Slug (Auto-generated)
                </label>
                <input
                  type="text"
                  id="slug"
                  name="slug"
                  value={blogData.slug}
                  onChange={handleInputChange}
                  placeholder="blog-url-slug"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-gray-50 dark:bg-slate-700 text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  URL: /blogs/{blogData.slug || 'your-blog-slug'}
                </p>
              </div>

              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  value={blogData.category}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Tags */}
              <div>
                <label htmlFor="tags" className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
                  Tags (comma-separated) *
                </label>
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  value={blogData.tags}
                  onChange={handleInputChange}
                  placeholder="Property Law, Legal Guide, Real Estate"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Featured Image URL */}
              <div>
                <label htmlFor="image" className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
                  Featured Image URL *
                </label>
                <input
                  type="url"
                  id="image"
                  name="image"
                  value={blogData.image}
                  onChange={handleInputChange}
                  placeholder="https://images.unsplash.com/..."
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Excerpt */}
              <div>
                <label htmlFor="excerpt" className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
                  Excerpt (Short Description) *
                </label>
                <textarea
                  id="excerpt"
                  name="excerpt"
                  value={blogData.excerpt}
                  onChange={handleInputChange}
                  placeholder="A brief description of your blog post..."
                  required
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary resize-vertical"
                />
              </div>

              {/* Read Time */}
              <div>
                <label htmlFor="readTime" className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
                  Read Time
                </label>
                <input
                  type="text"
                  id="readTime"
                  name="readTime"
                  value={blogData.readTime}
                  onChange={handleInputChange}
                  placeholder="5 min read"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Content */}
              <div>
                <label htmlFor="content" className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
                  Blog Content *
                </label>
                <textarea
                  id="content"
                  name="content"
                  value={blogData.content}
                  onChange={handleInputChange}
                  placeholder="Write your blog content here... (Each paragraph on a new line)"
                  required
                  rows={15}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary resize-vertical font-mono text-sm"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Tip: Write each paragraph on a new line for better formatting
                </p>
              </div>

              {/* Submit Buttons */}
              <div className="flex gap-4 pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-primary to-secondary text-white py-4 rounded-lg font-bold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Creating Blog...' : 'Create Blog Post'}
                </button>
                <a
                  href="/blogs"
                  className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-bold hover:bg-yellow-50 dark:hover:bg-slate-700 transition-colors"
                >
                  Cancel
                </a>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  )
}
