'use client'

import Link from 'next/link'
import { ChevronDown, Lock } from 'lucide-react'
import { useState } from 'react'

export function Sidebar() {
  const [openSections, setOpenSections] = useState({
    gettingStarted: true,
    courses: false,
    article: false,
    scroll: false,
    mouse: false,
    misc: false,
    '3d': false,
  })

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-4 space-y-4 h-screen overflow-y-auto">
      <div className="mb-8">
        <div className="h-8 w-8 bg-red-500 rounded-full" />
      </div>
      
      <nav className="space-y-2">
        {/* Existing sections */}
        <div>
          <button
            onClick={() => toggleSection('gettingStarted')}
            className="flex items-center justify-between w-full text-left px-2 py-1 hover:bg-gray-100 rounded"
          >
            <span className="font-medium">Getting Started</span>
            <ChevronDown className={`w-4 h-4 transform transition-transform ${openSections.gettingStarted ? 'rotate-180' : ''}`} />
          </button>
          {openSections.gettingStarted && (
            <div className="ml-4 mt-1 space-y-1">
              <Link href="/introduction" className="block px-2 py-1 text-gray-600 hover:text-gray-900">
                Introduction
              </Link>
              <Link href="/gallery" className="block px-2 py-1 text-gray-600 hover:text-gray-900">
                Gallery
              </Link>
            </div>
          )}
        </div>

        {/* Mouse section */}
        <div>
          <button
            onClick={() => toggleSection('mouse')}
            className="flex items-center justify-between w-full text-left px-2 py-1 hover:bg-gray-100 rounded"
          >
            <span className="font-medium">Mouse</span>
            <ChevronDown className={`w-4 h-4 transform transition-transform ${openSections.mouse ? 'rotate-180' : ''}`} />
          </button>
          {openSections.mouse && (
            <div className="ml-4 mt-1 space-y-1">
              <Link href="/mouse/image-distortion" className="block px-2 py-1 text-gray-600 hover:text-gray-900">
                Mouse Image Distortion
              </Link>
              <Link href="/mouse/paint-reveal" className="block px-2 py-1 text-gray-600 hover:text-gray-900">
                Paint Reveal
              </Link>
              <Link href="/mouse/blend-mode-cursor" className="block px-2 py-1 text-gray-600 hover:text-gray-900">
                Blend Mode Cursor
              </Link>
              <div className="flex items-center px-2 py-1 text-gray-400">
                Creative Buttons
                <Lock className="w-3 h-3 ml-1" />
              </div>
              <div className="flex items-center px-2 py-1 text-gray-400">
                Gradient Mouse Move
                <Lock className="w-3 h-3 ml-1" />
              </div>
              <Link href="/mouse/text-gooey" className="block px-2 py-1 text-gray-600 hover:text-gray-900">
                Text Gooey
              </Link>
              <Link href="/mouse/sticky-cursor" className="block px-2 py-1 text-gray-600 hover:text-gray-900">
                Sticky Cursor
              </Link>
            </div>
          )}
        </div>

        {/* Misc section */}
        <div>
          <button
            onClick={() => toggleSection('misc')}
            className="flex items-center justify-between w-full text-left px-2 py-1 hover:bg-gray-100 rounded"
          >
            <span className="font-medium">Misc</span>
            <ChevronDown className={`w-4 h-4 transform transition-transform ${openSections.misc ? 'rotate-180' : ''}`} />
          </button>
          {openSections.misc && (
            <div className="ml-4 mt-1 space-y-1">
              <div className="flex items-center px-2 py-1 text-gray-400">
                Mask Entry
                <Lock className="w-3 h-3 ml-1" />
              </div>
              <div className="flex items-center px-2 py-1 text-gray-400">
                Capsule Physics
                <Lock className="w-3 h-3 ml-1" />
              </div>
              <div className="flex items-center px-2 py-1 text-gray-400">
                Image Pixel Loading
                <Lock className="w-3 h-3 ml-1" />
              </div>
            </div>
          )}
        </div>

        {/* 3D section */}
        <div>
          <button
            onClick={() => toggleSection('3d')}
            className="flex items-center justify-between w-full text-left px-2 py-1 hover:bg-gray-100 rounded"
          >
            <span className="font-medium">3D</span>
            <ChevronDown className={`w-4 h-4 transform transition-transform ${openSections['3d'] ? 'rotate-180' : ''}`} />
          </button>
          {openSections['3d'] && (
            <div className="ml-4 mt-1 space-y-1">
              <div className="flex items-center px-2 py-1 text-gray-400">
                Ripple Shader
                <Lock className="w-3 h-3 ml-1" />
              </div>
              <div className="flex items-center px-2 py-1 text-gray-400">
                Bulge Effect
                <Lock className="w-3 h-3 ml-1" />
              </div>
              <Link href="/3d/wave-on-scroll" className="block px-2 py-1 text-gray-600 hover:text-gray-900">
                3D Wave on Scroll
              </Link>
              <Link href="/3d/glass-effect" className="block px-2 py-1 text-gray-600 hover:text-gray-900">
                3D Glass Effect
              </Link>
              <Link href="/3d/creative-404" className="block px-2 py-1 text-gray-600 hover:text-gray-900">
                Creative 404
              </Link>
              <div className="flex items-center px-2 py-1 text-gray-400">
                3D Parallax Letters
                <Lock className="w-3 h-3 ml-1" />
              </div>
            </div>
          )}
        </div>
      </nav>
    </aside>
  )
}
