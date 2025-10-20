import Navigation from '../../../components/Navigation';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  // Blog posts data (in a real app, this would come from a database or CMS)
  const blogPosts = [
    {
      id: 1,
      title: "Understanding a Sale Deed",
      slug: "understanding-sale-deed",
      category: "Sale Deed",
      tags: ["Property Transfer", "Legal Document"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      excerpt: "A comprehensive guide to understanding sale deeds and their importance in property transactions.",
      readTime: "5 min read",
      publishDate: "December 15, 2025",
      author: "Legal Team",
      content: `
        <p>A Sale Deed is one of the most important legal documents in property transactions. It serves as conclusive proof of the transfer of ownership from the seller to the buyer.</p>
        
        <h2>What is a Sale Deed?</h2>
        <p>A Sale Deed is a legal document that records the sale of immovable property. It contains all the terms and conditions of the sale, including the consideration amount, property details, and the rights and obligations of both parties.</p>
        
        <h2>Key Components of a Sale Deed</h2>
        <ul>
          <li><strong>Property Description:</strong> Detailed description of the property being sold</li>
          <li><strong>Consideration Amount:</strong> The agreed-upon price for the property</li>
          <li><strong>Parties Details:</strong> Complete information about buyer and seller</li>
          <li><strong>Title Details:</strong> Clear title and ownership history</li>
          <li><strong>Encumbrance Certificate:</strong> Proof of clear title</li>
        </ul>
        
        <h2>Legal Requirements</h2>
        <p>For a Sale Deed to be legally valid, it must be:</p>
        <ul>
          <li>Executed on stamp paper of appropriate value</li>
          <li>Signed by both parties in presence of witnesses</li>
          <li>Registered with the Sub-Registrar office</li>
          <li>Accompanied by all necessary documents</li>
        </ul>
        
        <h2>Why is Registration Important?</h2>
        <p>Registration of a Sale Deed is mandatory under the Registration Act, 1908. An unregistered Sale Deed cannot be used as evidence in court and does not provide legal protection to the buyer.</p>
        
        <h2>Documents Required</h2>
        <ul>
          <li>Original title documents</li>
          <li>Encumbrance certificate</li>
          <li>Property tax receipts</li>
          <li>Identity and address proofs</li>
          <li>No Objection Certificate (if applicable)</li>
        </ul>
        
        <p>Understanding these aspects of a Sale Deed ensures a smooth and legally compliant property transaction. Always consult with legal experts to ensure all requirements are met.</p>
      `
    },
    {
      id: 2,
      title: "What is a Gift Deed?",
      slug: "what-is-gift-deed",
      category: "Gift Deed",
      tags: ["Family Transfer", "Legal Agreement"],
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      excerpt: "Learn about gift deeds and how they facilitate property transfers within families.",
      readTime: "4 min read",
      publishDate: "December 12, 2025",
      author: "Legal Team",
      content: `
        <p>A Gift Deed is a legal document that facilitates the transfer of property from one person to another without any monetary consideration. It's commonly used for transferring property within families.</p>
        
        <h2>Understanding Gift Deeds</h2>
        <p>Unlike a Sale Deed, a Gift Deed involves no exchange of money. The transfer is made out of love, affection, or natural relationship between the parties.</p>
        
        <h2>Key Features</h2>
        <ul>
          <li>No monetary consideration involved</li>
          <li>Transfer based on love and affection</li>
          <li>Irrevocable once executed and registered</li>
          <li>Must be registered to be legally valid</li>
        </ul>
        
        <h2>Legal Requirements</h2>
        <p>For a Gift Deed to be valid:</p>
        <ul>
          <li>The donor must be the rightful owner</li>
          <li>The donor must be of sound mind</li>
          <li>The gift must be made voluntarily</li>
          <li>The deed must be registered</li>
        </ul>
        
        <h2>Tax Implications</h2>
        <p>Gift Deeds have specific tax implications that both parties should understand before proceeding with the transfer.</p>
      `
    },
    {
      id: 3,
      title: "Partition Deed Explained",
      slug: "partition-deed-explained",
      category: "Partition Deed",
      tags: ["Property Rights", "Property Division", "Legal Rights"],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      excerpt: "Understanding partition deeds and their role in dividing jointly owned properties.",
      readTime: "6 min read",
      publishDate: "December 10, 2025",
      author: "Legal Team",
      content: `
        <p>A Partition Deed is a legal document used to divide jointly owned property among co-owners. It helps in clearly defining individual ownership rights.</p>
        
        <h2>When is Partition Needed?</h2>
        <p>Partition becomes necessary when multiple people own a property jointly and wish to divide it among themselves.</p>
        
        <h2>Types of Partition</h2>
        <ul>
          <li><strong>Partition by Agreement:</strong> Mutual consent among co-owners</li>
          <li><strong>Partition by Court:</strong> When agreement cannot be reached</li>
        </ul>
        
        <h2>Legal Process</h2>
        <p>The partition process involves proper documentation, valuation, and registration to ensure legal validity.</p>
      `
    },
    {
      id: 4,
      title: "The Importance of a Will Agreement",
      slug: "importance-will-agreement",
      category: "Will",
      tags: ["Inheritance", "Legal Planning"],
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      excerpt: "Why having a will is crucial for estate planning and protecting your family's future.",
      readTime: "7 min read",
      publishDate: "December 8, 2025",
      author: "Legal Team",
      content: `
        <p>A Will is a legal document that specifies how a person's assets should be distributed after their death. It's an essential part of estate planning.</p>
        
        <h2>Why You Need a Will</h2>
        <p>Having a will ensures your assets are distributed according to your wishes and can prevent family disputes.</p>
        
        <h2>Components of a Valid Will</h2>
        <ul>
          <li>Clear identification of the testator</li>
          <li>List of assets and beneficiaries</li>
          <li>Appointment of executor</li>
          <li>Proper signatures and witnesses</li>
        </ul>
      `
    },
    {
      id: 5,
      title: "Rent Agreement Essentials",
      slug: "rent-agreement-essentials",
      category: "Rent Agreement",
      tags: ["Tenancy", "Landlord-Tenant", "Legal Contract"],
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      excerpt: "Essential elements every rent agreement should contain to protect both parties.",
      readTime: "5 min read",
      publishDate: "December 5, 2025",
      author: "Legal Team",
      content: `
        <p>A Rent Agreement is a legal contract between a landlord and tenant that outlines the terms and conditions of the rental arrangement.</p>
        
        <h2>Essential Clauses</h2>
        <ul>
          <li>Rent amount and payment schedule</li>
          <li>Security deposit details</li>
          <li>Duration of tenancy</li>
          <li>Maintenance responsibilities</li>
          <li>Termination conditions</li>
        </ul>
        
        <h2>Legal Protection</h2>
        <p>A properly drafted rent agreement protects both landlord and tenant rights and helps avoid disputes.</p>
      `
    },
    {
      id: 6,
      title: "Mutation of Property",
      slug: "mutation-of-property",
      category: "Mutation",
      tags: ["Property Records", "Property Records Update"],
      image: "https://images.unsplash.com/photo-1554224154-26032fced8bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      excerpt: "Understanding the mutation process and its importance in updating property records.",
      readTime: "4 min read",
      publishDate: "December 3, 2025",
      author: "Legal Team",
      content: `
        <p>Mutation is the process of updating property records in government databases to reflect the current ownership status.</p>
        
        <h2>Why Mutation is Important</h2>
        <p>Mutation ensures that property records are up-to-date and helps in establishing clear ownership for legal and tax purposes.</p>
        
        <h2>Mutation Process</h2>
        <ul>
          <li>Application submission</li>
          <li>Document verification</li>
          <li>Site inspection (if required)</li>
          <li>Record update</li>
        </ul>
        
        <h2>Required Documents</h2>
        <p>The mutation process requires specific documents to prove the transfer of ownership.</p>
      `
    }
  ];

  // Find the current blog post
  const currentPost = blogPosts.find(post => post.slug === params.slug);

  // If post not found, show 404
  if (!currentPost) {
    return (
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark">
        <div className="layout-container flex h-full grow flex-col">
          <div className="w-full">
            <Navigation currentPage="blogs" />
            <main className="px-6 md:px-10 lg:px-20 py-10 text-center">
              <h1 className="text-4xl font-bold text-black dark:text-text-dark mb-4">Blog Post Not Found</h1>
              <p className="text-black dark:text-subtext-dark mb-8">The blog post you're looking for doesn't exist.</p>
              <a href="/blogs" className="text-amber-700 hover:text-amber-800 font-medium">← Back to Blog</a>
            </main>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark">
      <div className="layout-container flex h-full grow flex-col">
        <div className="w-full">
          <Navigation currentPage="blogs" />

          {/* Main Content */}
          <main className="px-6 md:px-10 lg:px-20 py-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-8 text-sm">
              <a href="/blogs" className="text-amber-700 hover:text-amber-800 transition-colors">Blog</a>
              <span className="text-gray-400">›</span>
              <span className="text-black dark:text-subtext-dark">{currentPost.title}</span>
            </div>

            {/* Article */}
            <article className="max-w-4xl mx-auto">
              {/* Header */}
              <header className="mb-8">
                <div className="mb-4">
                  <span className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-medium">
                    {currentPost.category}
                  </span>
                </div>
                
                <h1 className="text-black dark:text-text-dark text-4xl md:text-5xl font-extrabold tracking-tight font-display mb-6">
                  {currentPost.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-6">
                  <div className="flex items-center gap-2">
                    <i className="text-amber-700" data-lucide="calendar"></i>
                    <span>{currentPost.publishDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="text-amber-700" data-lucide="user"></i>
                    <span>{currentPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="text-amber-700" data-lucide="clock"></i>
                    <span>{currentPost.readTime}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {currentPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-yellow-100 dark:bg-slate-700 text-amber-800 dark:text-amber-200 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </header>

              {/* Featured Image */}
              <div className="mb-8">
                <img
                  src={currentPost.image}
                  alt={currentPost.title}
                  className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>

              {/* Content */}
              <div 
                className="prose prose-lg max-w-none text-black dark:text-subtext-dark prose-headings:text-black dark:prose-headings:text-text-dark prose-headings:font-display prose-a:text-amber-700 prose-strong:text-black dark:prose-strong:text-text-dark prose-ul:text-black dark:prose-ul:text-subtext-dark prose-li:text-black dark:prose-li:text-subtext-dark"
                dangerouslySetInnerHTML={{ __html: currentPost.content }}
              />

              {/* Back to Blog */}
              <div className="mt-12 pt-8 border-t border-yellow-200 dark:border-slate-700">
                <a 
                  href="/blogs"
                  className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 font-medium transition-colors"
                >
                  <i className="text-sm" data-lucide="arrow-left"></i>
                  Back to Blog
                </a>
              </div>
            </article>
          </main>

          {/* Footer */}
          <footer className="bg-yellow-50 dark:bg-gray-900 text-subtext-light dark:text-subtext-dark mt-16 font-body">
            <div className="px-6 md:px-10 lg:px-20 py-16">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
                <div className="col-span-2 lg:col-span-2">
                  <div className="flex items-center gap-3">
                    <i className="text-primary" data-lucide="home"></i>
                    <h2 className="text-text-light dark:text-text-dark text-2xl font-bold font-display">SaleDeed.com</h2>
                  </div>
                  <p className="mt-4 text-base">Simplifying property documentation for everyone across India.</p>
                </div>
                
                <div>
                  <h3 className="font-bold text-text-light dark:text-text-dark text-lg font-display">Services</h3>
                  <ul className="mt-4 space-y-3 text-base">
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="#">Deed Drafting</a></li>
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="#">Document Verification</a></li>
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="#">Registration Assistance</a></li>
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="#">Stamp Duty Calculation</a></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-text-light dark:text-text-dark text-lg font-display">Company</h3>
                  <ul className="mt-4 space-y-3 text-base">
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="/about">About Us</a></li>
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="/contact">Contact Us</a></li>
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="#">Careers</a></li>
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="#">Press</a></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-text-light dark:text-text-dark text-lg font-display">Legal</h3>
                  <ul className="mt-4 space-y-3 text-base">
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="#">Terms of Service</a></li>
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="#">Privacy Policy</a></li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-16 border-t border-yellow-200 dark:border-slate-700 pt-8 flex flex-col sm:flex-row justify-between items-center">
                <p className="text-base">© 2025 SaleDeed.com. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 sm:mt-0">
                  <a className="hover:text-primary dark:hover:text-secondary transition-colors" href="#">
                    <i data-lucide="facebook"></i>
                  </a>
                  <a className="hover:text-primary dark:hover:text-secondary transition-colors" href="#">
                    <i data-lucide="twitter"></i>
                  </a>
                  <a className="hover:text-primary dark:hover:text-secondary transition-colors" href="#">
                    <i data-lucide="linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}