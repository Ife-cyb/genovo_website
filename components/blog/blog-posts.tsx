"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"

export default function BlogPosts() {
  const posts = [
    {
      title: "Building SCOS: The Future of Infrastructure Intelligence",
      excerpt:
        "Deep dive into the architecture and design principles behind our Synthetic Cognition Operating System, targeting critical infrastructure verticals.",
      category: "Product Update",
      author: "Afolabi Oluwatosin",
      date: "2024-12-15",
      readTime: "8 min read",
      featured: true,
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      title: "Digital Sovereignty in the Age of AI",
      excerpt:
        "Exploring the intersection of artificial intelligence and user privacy, and why digital sovereignty matters more than ever.",
      category: "Thought Leadership",
      author: "Adegbite Ifeoluwapo",
      date: "2024-12-10",
      readTime: "6 min read",
      featured: false,
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      title: "Taskr Development Update: Q4 2024",
      excerpt:
        "Progress report on our service marketplace platform, including new features, user feedback, and upcoming milestones.",
      category: "Development",
      author: "Engineering Team",
      date: "2024-12-05",
      readTime: "4 min read",
      featured: false,
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      title: "Zero-Knowledge Architecture: Privacy by Design",
      excerpt:
        "Technical overview of implementing zero-knowledge protocols in modern applications, with real-world examples from our projects.",
      category: "Technical",
      author: "Security Team",
      date: "2024-11-28",
      readTime: "10 min read",
      featured: false,
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      title: "The Economics of Decentralized Infrastructure",
      excerpt:
        "Analysis of cost structures, scalability challenges, and economic models for decentralized technology platforms.",
      category: "Analysis",
      author: "Afolabi Oluwatosin",
      date: "2024-11-20",
      readTime: "7 min read",
      featured: false,
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      title: "Homevy: Revolutionizing Rental Markets with AI",
      excerpt:
        "How machine learning and predictive analytics are transforming the property rental experience for both tenants and landlords.",
      category: "Product Update",
      author: "AI Team",
      date: "2024-11-15",
      readTime: "5 min read",
      featured: false,
      image: "/placeholder.svg?height=300&width=600",
    },
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

  const featuredPost = posts.find((post) => post.featured)
  const regularPosts = posts.filter((post) => !post.featured)

  return (
    <div className="space-y-12">
      {/* Featured Post */}
      {featuredPost && (
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
      )}

      {/* Regular Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {regularPosts.map((post, index) => (
          <Card
            key={index}
            className="border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <div className="aspect-video">
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
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
        <Button variant="outline" size="lg">
          Load More Articles
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}
