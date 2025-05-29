"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, ArrowRight, User, Search, Rss, Mail } from "lucide-react"

export default function BlogContent() {
  const featuredPost = {
    title: "Building SCOS: The Future of Infrastructure Intelligence",
    excerpt:
      "Deep dive into the architecture and design principles behind our Synthetic Cognition Operating System, targeting critical infrastructure verticals with nanosecond response times.",
    category: "Product Update",
    author: "Afolabi Oluwatosin",
    date: "2025-12-15",
    readTime: "8 min read",
    image: "/placeholder.svg?height=300&width=600",
    featured: true,
  }

  const posts = [
    {
      title: "Digital Sovereignty in the Age of AI",
      excerpt:
        "Exploring the intersection of artificial intelligence and user privacy, and why digital sovereignty matters more than ever in our interconnected world.",
      category: "Thought Leadership",
      author: "Adegbite Ifeoluwapo",
      date: "2025-12-10",
      readTime: "6 min read",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Taskr Development Update: Q4 2025 Progress",
      excerpt:
        "Latest features and improvements in our service marketplace platform, including new features, user feedback, upcoming milestones, and market expansion plans.",
      category: "Development",
      author: "Engineering Team",
      date: "2025-12-05",
      readTime: "4 min read",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Zero-Knowledge Architecture: Privacy by Design",
      excerpt:
        "Technical overview of implementing zero-knowledge protocols in modern applications, with real-world examples from our security-first projects.",
      category: "Technical",
      author: "Security Team",
      date: "2025-11-28",
      readTime: "10 min read",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "The Economics of Decentralized Infrastructure",
      excerpt:
        "Analysis of cost structures, scalability challenges, and economic models for decentralized technology platforms in emerging markets.",
      category: "Analysis",
      author: "Afolabi Oluwatosin",
      date: "2025-11-20",
      readTime: "7 min read",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Homevy: Revolutionizing Rental Markets with AI",
      excerpt:
        "How machine learning and predictive analytics are transforming the property rental experience for both tenants and landlords globally.",
      category: "Product Update",
      author: "AI Team",
      date: "2025-11-15",
      readTime: "5 min read",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  const categories = [
    { name: "Product Updates", count: 12, color: "blue" },
    { name: "Thought Leadership", count: 8, color: "purple" },
    { name: "Technical", count: 15, color: "red" },
    { name: "Development", count: 10, color: "green" },
    { name: "Company News", count: 6, color: "indigo" },
    { name: "Analysis", count: 9, color: "orange" },
  ]

  const popularTags = [
    "SCOS",
    "Digital Sovereignty",
    "AI/ML",
    "Security",
    "Privacy",
    "Blockchain",
    "Infrastructure",
    "Taskr",
    "Homevy",
    "Zero-Knowledge",
  ]

  const getCategoryColor = (category: string) => {
    const colors = {
      "Product Update": "blue",
      "Thought Leadership": "purple",
      Development: "green",
      Technical: "red",
      Analysis: "orange",
      "Company News": "indigo",
    }
    return colors[category as keyof typeof colors] || "gray"
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Featured Post */}
            <Card className="border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto">
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge
                    className={`bg-${getCategoryColor(featuredPost.category)}-100 text-${getCategoryColor(featuredPost.category)}-800 w-fit mb-4`}
                  >
                    Featured
                  </Badge>
                  <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">{featuredPost.title}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <Button className="bg-[#1A1A1A] hover:bg-gray-800 text-white w-fit">
                    Read Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </div>
            </Card>

            {/* Regular Posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post, index) => (
                <Card
                  key={index}
                  className="border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="aspect-video">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <Badge
                      className={`bg-${getCategoryColor(post.category)}-100 text-${getCategoryColor(post.category)}-800 w-fit mb-3`}
                    >
                      {post.category}
                    </Badge>
                    <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <User className="w-3 h-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center">
              <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                Load More Articles
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Search */}
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">Search Articles</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input placeholder="Search..." className="pl-10 border-gray-300" />
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                    >
                      <span className="text-gray-700">{category.name}</span>
                      <Badge variant="outline" className={`bg-${category.color}-100 text-${category.color}-800`}>
                        {category.count}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="border border-gray-200 bg-gradient-to-br from-blue-50 to-purple-50">
              <CardContent className="p-6 text-center">
                <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Stay Updated</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Get the latest insights and updates delivered to your inbox.
                </p>
                <Button className="w-full bg-[#1A1A1A] hover:bg-gray-800 text-white">Subscribe to Newsletter</Button>
              </CardContent>
            </Card>

            {/* Popular Tags */}
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="cursor-pointer hover:bg-gray-100 transition-colors">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* RSS Feed */}
            <Card className="border border-gray-200">
              <CardContent className="p-6 text-center">
                <Rss className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                <h3 className="font-semibold text-[#1A1A1A] mb-2">RSS Feed</h3>
                <p className="text-gray-600 text-sm mb-4">Subscribe to our RSS feed for real-time updates.</p>
                <Button variant="outline" size="sm">
                  Subscribe to RSS
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
