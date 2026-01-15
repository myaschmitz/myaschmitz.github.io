'use client'

import { useState, useEffect } from "react"
import { CameraIcon } from "@heroicons/react/24/outline"

export default function Images() {
  const [mounted, setMounted] = useState(false)

	useEffect(() => {
			setMounted(true)
		}, [])
  
  // Don't render anything until mounted to avoid hydration mismatch
  if (!mounted) {
    return null
  }
  
  return (
    <a href="/images" className="hidden md:block fixed top-8 left-8 p-2 rounded-lg hover:cursor-pointer z-50">
    	<CameraIcon className="w-6 h-6" />
    </a>
  )
}