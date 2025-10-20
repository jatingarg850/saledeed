import Navigation from '../../components/Navigation';

export default function BlogsPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Agreement to Sell: Your Safety Net in Property Deals",
      slug: "agreement-to-sell-safety-net",
      category: "Agreement to Sell",
      tags: ["Property Security", "Legal Protection", "Smart Buying"],
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      excerpt: "Think of it as your property insurance policy - here's why every smart buyer needs an Agreement to Sell before putting down serious money.",
      readTime: "6 min read"
    },
    {
      id: 2,
      title: "Understanding a Sale Deed",
      slug: "understanding-sale-deed",
      category: "Sale Deed",
      tags: ["Property Transfer", "Legal Document"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      excerpt: "A comprehensive guide to understanding sale deeds and their importance in property transactions.",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "What is a Gift Deed?",
      slug: "what-is-gift-deed",
      category: "Gift Deed",
      tags: ["Family Transfer", "Legal Agreement"],
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      excerpt: "Learn about gift deeds and how they facilitate property transfers within families.",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Partition Deed Explained",
      slug: "partition-deed-explained",
      category: "Partition Deed",
      tags: ["Property Rights", "Property Division", "Legal Rights"],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      excerpt: "Understanding partition deeds and their role in dividing jointly owned properties.",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "The Importance of a Will Agreement",
      slug: "importance-will-agreement",
      category: "Will",
      tags: ["Inheritance", "Legal Planning"],
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      excerpt: "Why having a will is crucial for estate planning and protecting your family's future.",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "Rent Agreement Essentials",
      slug: "rent-agreement-essentials",
      category: "Rent Agreement",
      tags: ["Tenancy", "Landlord-Tenant", "Legal Contract"],
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      excerpt: "Essential elements every rent agreement should contain to protect both parties.",
      readTime: "5 min read"
    },
    {
      id: 6,
      title: "Exchange Deed: The Smart Way to Swap Properties",
      slug: "exchange-deed-smart-property-swap",
      category: "Exchange Deed",
      tags: ["Property Exchange", "Smart Trading", "No Cash Deals"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      excerpt: "Want to upgrade your home without cash hassles? Here's how property exchange can be your smartest real estate move.",
      readTime: "5 min read"
    },
    {
      id: 7,
      title: "Power of Attorney for NRIs: Your Property Lifeline",
      slug: "power-of-attorney-nri-guide",
      category: "Power of Attorney",
      tags: ["NRI Property", "Remote Management", "Legal Authorization"],
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      excerpt: "Living abroad but own property in India? Here's how Power of Attorney becomes your remote control for property management.",
      readTime: "6 min read"
    },
    {
      id: 8,
      title: "Sale Deed vs Agreement to Sell: Know the Difference",
      slug: "sale-deed-vs-agreement-difference",
      category: "Sale Deed",
      tags: ["Property Ownership", "Legal Documents", "Property Transfer"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      excerpt: "Confused between Sale Deed and Agreement to Sell? Here's the simple breakdown that could save you from costly mistakes.",
      readTime: "5 min read"
    },
    {
      id: 9,
      title: "Why Every Family Needs a Will (Real Stories Inside)",
      slug: "why-every-family-needs-will",
      category: "Will Testament",
      tags: ["Family Protection", "Estate Planning", "Legal Security"],
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      excerpt: "Think you're too young for a will? These real family stories will change your mind about protecting your loved ones.",
      readTime: "7 min read"
    },
    {
      id: 10,
      title: "Mutation of Property",
      slug: "mutation-of-property",
      category: "Mutation",
      tags: ["Property Records", "Property Records Update"],
      image: "https://images.unsplash.com/photo-1554224154-26032fced8bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      excerpt: "Understanding the mutation process and its importance in updating property records.",
      readTime: "4 min read"
    }
  ];

  const categories = ["All", "Agreement to Sell", "Sale Deed", "Will Testament", "Exchange Deed", "Power of Attorney", "Gift Deed", "Partition Deed", "Rent Agreement", "Mutation"];

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark">
      <div className="layout-container flex h-full grow flex-col">
        <div className="w-full">
          <Navigation currentPage="blogs" />

          {/* Main Content */}
          <main className="px-6 md:px-10 lg:px-20 py-10">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-black dark:text-text-dark text-4xl md:text-6xl font-extrabold tracking-tighter font-display mb-6">
                The Land Journal
              </h1>
              <p className="text-black dark:text-subtext-dark text-lg md:text-xl max-w-3xl mx-auto">
                Insights, stories & guides from the world of real estate
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-2 rounded-full border-2 border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white transition-all duration-300 text-sm font-medium"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-lg border border-yellow-200/50 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-primary to-secondary text-white px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-black dark:text-text-dark text-xl font-bold font-display mb-3 group-hover:text-amber-700 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-black dark:text-subtext-dark text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-yellow-100 dark:bg-slate-700 text-amber-800 dark:text-amber-200 px-2 py-1 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More */}
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 dark:text-gray-400 text-xs">
                        {post.readTime}
                      </span>
                      <a 
                        href={`/blogs/${post.slug}`}
                        className="text-amber-700 dark:text-secondary hover:text-amber-800 dark:hover:text-amber-300 font-medium text-sm transition-colors flex items-center gap-1"
                      >
                        Read More
                        <i className="text-xs" data-lucide="arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Newsletter Section */}
            <div className="bg-gradient-to-r from-primary to-yellow-800 dark:from-primary/80 dark:to-yellow-900 p-8 md:p-12 rounded-xl shadow-2xl mt-16 text-center">
              <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight font-display mb-4">
                Stay Updated with Property Insights
              </h2>
              <p className="text-yellow-50 dark:text-yellow-200 text-lg mb-8 max-w-2xl mx-auto">
                Get the latest articles, guides, and legal updates delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-full border-0 text-black focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="px-8 py-3 bg-white text-primary font-bold rounded-full hover:bg-yellow-50 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
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