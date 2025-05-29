"use client"

import { Badge } from "@/components/ui/badge"

export default function TechnologySection() {
  const techStack = [
    { name: "Vue.js", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Flutter", category: "Mobile" },
    { name: "Python", category: "AI/ML" },
    { name: "C++", category: "Systems" },
    { name: "AWS", category: "Cloud" },
    { name: "Firebase", category: "Database" },
    { name: "Docker", category: "DevOps" },
    { name: "Kubernetes", category: "Orchestration" },
    { name: "TensorFlow", category: "ML" },
    { name: "Blockchain", category: "Web3" },
    { name: "GraphQL", category: "API" },
  ]

  const capabilities = [
    "Cloud-native architecture with 99.99% uptime",
    "AI-driven security monitoring and threat detection",
    "Quantum-resistant encryption protocols",
    "Scalable microservices infrastructure",
  ]

  return (
    <section id="technology" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-8 text-gray-900 dark:text-white">
              Technology
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 font-light leading-relaxed">
              Cutting-edge technologies powering our decentralized infrastructure, machine learning pipelines, and
              cybersecurity systems for maximum performance and security.
            </p>

            <div className="space-y-4 mb-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">{capability}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">Technology Stack</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {techStack.map((tech, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="p-4 text-center border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors cursor-pointer justify-center"
                >
                  <div>
                    <div className="font-semibold text-sm text-gray-900 dark:text-white">{tech.name}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{tech.category}</div>
                  </div>
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
