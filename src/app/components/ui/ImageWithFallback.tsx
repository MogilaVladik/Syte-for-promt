"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fallback?: React.ReactNode;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  width?: number;
  height?: number;
}

export default function ImageWithFallback({
  src,
  alt,
  fallback,
  className = "",
  fill = false,
  priority = false,
  sizes,
  width,
  height,
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={className}>
        {fallback || (
          <div className="flex items-center justify-center w-full h-full text-gray-400">
            <span>Image not available</span>
          </div>
        )}
      </div>
    );
  }

  const imageProps = fill
    ? {
        fill: true as const,
        sizes: sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
      }
    : {
        width: width || 400,
        height: height || 400,
      };

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      priority={priority}
      {...imageProps}
    />
  );
}

