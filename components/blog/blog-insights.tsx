"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight, Rss } from "lucide-react"

export default function BlogInsights() {
  const posts = [
    {
      title: "Building SCOS: The Future of Infrastructure Intelligence",
      excerpt:
        "Deep dive into our approach to creating a revolutionary operating system for critical infrastructure with nanosecond response times.",
      category: "Dev Updates",
      author: "Afolabi Oluwatosin",
      date: "Dec 15, 2025",
      readTime: "8 min read",
      featured: true,
    },
    {
      title: "Digital Sovereignty: Why Privacy-First Architecture Matters",
      excerpt:
        "Exploring the importance of zero-knowledge systems and how they're shaping the future of digital privacy.",
      category: "Thought Leadership",
      author: "Adegbite Ifeoluwapo",
      date: "Dec 10, 2025",
      readTime: "6 min read",
      featured: false,
    },
    {
      title: "Taskr MVP Progress: Lessons from Building a Marketplace",
      excerpt: "Technical insights and challenges we've overcome while building our AI-powered service marketplace.",
      category: "Product Launches",
      author: "Genovo Team",
      date: "Dec 5, 2025",
      readTime: "5 min read",
      featured: false,
    },
    {
      title: "2025 Roadmap: Scaling Our Product Ecosystem",
      excerpt: "Our vision for the next year including Homevy launch, SCOS alpha, and expanding into new markets.",
      category: "Roadmaps",
      author: "Afolabi Oluwatosin",
      date: "Dec 1, 2025",
      readTime: "7 min read",
      featured: false,
    },
    {
      title: "The African Tech Renaissance: Building Global Solutions",
      excerpt:
        "How African startups are pioneering the next generation of privacy-first, globally scalable technology solutions.",
      category: "Founder Thoughts",
      author: "Afolabi Oluwatosin",
      date: "Nov 28, 2025",
      readTime: "9 min read",
      featured: false,
    },
    {
      title: "Zero-Knowledge Architecture: Technical Deep Dive",
      excerpt:
        "Understanding the cryptographic principles behind our privacy-first approach to building secure applications.",
      category: "Future-Tech Analysis",
      author: "Adegbite Ifeoluwapo",
      date: "Nov 25, 2025",
      readTime: "12 min read",
      featured: false,
    },
  ]

  const categories = [
    { name: "All Posts", count: 6 },
    { name: "Dev Updates", count: 2 },
    { name: "Product Launches", count: 1 },
    { name: "Roadmaps", count: 1 },
    { name: "Founder Thoughts", count: 1 },
    { name: "Thought Leadership", count: 1 },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="space-y-8">
              {posts.map((post, index) => (
                <Card
                  key={index}
                  className={`border border-gray-200 hover:shadow-lg transition-all duration-300 ${
                    post.featured ? "border-blue-200 bg-blue-50/30" : ""
                  }`}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <Badge variant={post.featured ? "default" : "outline"} className="mb-2">
                        {post.category}
                      </Badge>
                      {post.featured && (
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                          Featured
                        </Badge>
                      )}
                    </div>

                    <h2 className="text-2xl font-bold text-[#1A1A1A] mb-3 hover:text-blue-600 cursor-pointer transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 leading-relaxed mb-6">{post.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <span>{post.readTime}</span>
                      </div>

                      <Button variant="ghost" className="text-gray-600 hover:text-[#1A1A1A]">
                        Read More
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button
                size="lg"
                variant="outline"
                className="border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white"
              >
                Load More Posts
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Categories */}
              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                      >
                        <span className="text-gray-600">{category.name}</span>
                        <Badge variant="outline" className="text-xs">
                          {category.count}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">Stay Updated</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Get the latest insights and updates from Genovo directly in your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <Button className="w-full bg-[#1A1A1A] hover:bg-gray-800 text-white">Subscribe</Button>
                  </div>
                </CardContent>
              </Card>

              {/* RSS Feed */}
              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Rss className="w-5 h-5 text-orange-500" />
                    <h3 className="text-lg font-semibold text-[#1A1A1A]">RSS Feed</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">Subscribe to our RSS feed for automatic updates.</p>
                  <Button variant="outline" className="w-full">
                    Subscribe to RSS
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
