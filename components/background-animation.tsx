"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function BackgroundAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    containerRef.current.appendChild(renderer.domElement)

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 5000
    const posArray = new Float32Array(particlesCount * 3)
    const colorsArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Position
      posArray[i] = (Math.random() - 0.5) * 10
      posArray[i + 1] = (Math.random() - 0.5) * 10
      posArray[i + 2] = (Math.random() - 0.5) * 10

      // Color - teal to purple gradient
      const ratio = Math.random()
      colorsArray[i] = 0.2 + ratio * 0.4 // R: 0.2-0.6
      colorsArray[i + 1] = 0.5 + ratio * 0.3 // G: 0.5-0.8
      colorsArray[i + 2] = 0.8 // B: 0.8
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))
    particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colorsArray, 3))

    // Materials
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.015,
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
    })

    // Mesh
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    // Add some light effects
    const ambientLight = new THREE.AmbientLight(0x404040)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0x00ffff, 0.5)
    directionalLight.position.set(1, 1, 1)
    scene.add(directionalLight)

    // Mouse interaction
    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0
    const windowHalfX = window.innerWidth / 2
    const windowHalfY = window.innerHeight / 2

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - windowHalfX) / 100
      mouseY = (event.clientY - windowHalfY) / 100
    }

    document.addEventListener("mousemove", handleMouseMove)

    // Animation
    const clock = new THREE.Clock()

    const animate = () => {
      const elapsedTime = clock.getElapsedTime()

      // Smooth follow
      targetX = mouseX * 0.1
      targetY = mouseY * 0.1

      particlesMesh.rotation.y += 0.005
      particlesMesh.rotation.x += (targetY - particlesMesh.rotation.x) * 0.05
      particlesMesh.rotation.y += (targetX - particlesMesh.rotation.y) * 0.05

      // Wave effect
      const positions = particlesGeometry.attributes.position.array as Float32Array
      for (let i = 0; i < particlesCount * 3; i += 3) {
        const x = positions[i]
        const y = positions[i + 1]
        const z = positions[i + 2]

        // Apply wave effect
        positions[i + 1] = y + Math.sin(elapsedTime + x) * 0.01
      }
      particlesGeometry.attributes.position.needsUpdate = true

      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
      window.removeEventListener("resize", handleResize)
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return <div ref={containerRef} className="fixed top-0 left-0 w-full h-full z-0 opacity-80" />
}
