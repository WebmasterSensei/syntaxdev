import { IconCloud } from "@/components/ui/icon-cloud"

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "firebase",
  "nginx",
  "vercel",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "androidstudio",
  "figma",
]

export function IconCloudComponent() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  )

  return (
    <div className="relative  flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  )
}
