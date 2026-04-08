"use client"

import Image from "next/image"
import { useState } from "react"

type RemoteAvatarProps = {
  primarySrc: string
  fallbackSrc: string
  alt?: string
  size?: number
  className?: string
}

export default function RemoteAvatar({
  primarySrc,
  fallbackSrc,
  alt = "",
  size = 24,
  className,
}: RemoteAvatarProps) {
  const [src, setSrc] = useState(primarySrc)

  return (
    <Image
      className={className}
      src={src}
      alt={alt}
      width={size}
      height={size}
      onError={() => setSrc(fallbackSrc)}
    />
  )
}
