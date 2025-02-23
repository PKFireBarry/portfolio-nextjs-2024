import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from './ui/card'
import github from '../app/github.svg'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link: string
  tags: string[]
  website: string
}

export default function ProjectCard({ title, description, image, link, tags, website }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full bg-white/90">
      <div className="relative aspect-video">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-4 flex-grow">
        <h3 className="font-semibold text-2xl mb-2 line-clamp-1">{title}</h3>
        <p className="text-sm text-black text-muted-foreground mt-0 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical' }}>
          {description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2 items-center">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Link href={link} target="_blank" className="inline-flex items-center gap-2 text-sm hover:underline">
          <Image src={github} alt="github" className="w-6 h-6" />
          View on GitHub
        </Link>
        <Link href={website} target="_blank" className="inline-flex items-center gap-2 text-sm hover:underline">
          Visit Website
        </Link>
      </CardFooter>
    </Card>
  )
}