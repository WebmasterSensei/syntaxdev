"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"

const reviews = [
  {
    name: "GC",
    username: "@gc",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/images/gc.jpg", // Make sure this exists in /public/images/
  },
  {
    name: "Alturush",
    username: "@rush",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "/images/alturush.png",
  },
  {
    name: "Ccm",
    username: "@ccm",
    body: "This blew my mind. The attention to detail is incredible.",
    img: "/images/ccm.png",
  },
  {
    name: "Variance",
    username: "@var",
    body: "This blew my mind. The attention to detail is incredible.",
    img: "/images/var.png",
  },
  {
    name: "BankRs",
    username: "@brs",
    body: "This blew my mind. The attention to detail is incredible.",
    img: "/images/bankrs.svg",
  },
]

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string
  name: string
  username: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-36 cursor-pointer overflow-hidden rounded-xl border p-4 transition-colors duration-300",
        // Light mode
        "border-gray-950/[.1] bg-gray-950/[.02] hover:bg-gray-950/[.05]",
        // Dark mode
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.08] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-1 mb-2">
        <img
          src={img}
          alt={name}
          className="rounded w-[70px] h-[50px] object-contain filter grayscale hover:grayscale-0 hover:scale-150
           transition-transform duration-300"
        />
      </div>


    </figure>
  )
}

export function MarqueeComponent() {
  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden py-3">
      {/* Single marquee row */}
      <Marquee pauseOnHover className="[--duration:20s]">
        {reviews.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>


    </div>
  )
}
