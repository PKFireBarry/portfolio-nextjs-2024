import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link: string
  tags: string[]
  website: string
  features?: string[]
}

export default function ProjectCard({ title, description, image, link, tags, website, features }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="group bg-zinc-900/50 border border-zinc-800/50 rounded-lg overflow-hidden hover:border-zinc-700/50 transition-all duration-300">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={800}
          height={450}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          quality={100}
          unoptimized={title === "zkkeynest"}
          priority={title === "zkkeynest"}
          onError={(e) => {
            if (e.currentTarget instanceof HTMLImageElement) {
              e.currentTarget.src = '/placeholder.svg';
              e.currentTarget.onerror = null;
            }
          }}
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-medium text-white mb-3 group-hover:text-gray-300 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs text-gray-300 bg-zinc-800/50 rounded border border-zinc-700/50"
            >
              {tag}
            </span>
          ))}
          {tags.length > 4 && (
            <span className="px-2 py-1 text-xs text-gray-400">
              +{tags.length - 4} more
            </span>
          )}
        </div>

        {features && features.length > 0 && (
          <>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-4 w-full justify-center py-2 border border-zinc-700/50 rounded-lg hover:border-zinc-600/50"
            >
              <span>Key Features</span>
              {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            {isExpanded && (
              <div className="mb-4 space-y-3 animate-in slide-in-from-top-2 duration-300">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
        
        <div className="flex items-center gap-4">
          <Link 
            href={link} 
            target="_blank" 
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <Github size={16} />
            Code
          </Link>
          <Link 
            href={website} 
            target="_blank" 
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <ExternalLink size={16} />
            Live Site
          </Link>
        </div>
      </div>
    </div>
  )
}