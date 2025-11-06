"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Node {
  id: number
  x: number
  y: number
  vx: number
  vy: number
}

const AnimatedConnections = () => {
  const [nodes, setNodes] = useState<Node[]>([])
  const [dimensions, setDimensions] = useState({ width: 800, height: 400 })

  // Initialize nodes
  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth < 1024 ? 600 : 800,
        height: window.innerWidth < 1024 ? 300 : 400,
      })
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    const nodeCount = 12
    const initialNodes: Node[] = Array.from({ length: nodeCount }, (_, i) => ({
      id: i,
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }))

    setNodes(initialNodes)

    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  // Animate nodes
  useEffect(() => {
    if (nodes.length === 0) return

    const interval = setInterval(() => {
      setNodes((prevNodes) =>
        prevNodes.map((node) => {
          let newX = node.x + node.vx
          let newY = node.y + node.vy
          let newVx = node.vx
          let newVy = node.vy

          // Bounce off edges
          if (newX <= 0 || newX >= dimensions.width) {
            newVx = -node.vx
            newX = Math.max(0, Math.min(dimensions.width, newX))
          }
          if (newY <= 0 || newY >= dimensions.height) {
            newVy = -node.vy
            newY = Math.max(0, Math.min(dimensions.height, newY))
          }

          return {
            ...node,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
          }
        })
      )
    }, 30)

    return () => clearInterval(interval)
  }, [nodes.length, dimensions])

  // Calculate connections
  const getConnections = () => {
    const connections: Array<{ from: Node; to: Node; distance: number }> = []
    const maxDistance = 200

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x
        const dy = nodes[i].y - nodes[j].y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < maxDistance) {
          connections.push({
            from: nodes[i],
            to: nodes[j],
            distance,
          })
        }
      }
    }

    return connections
  }

  const connections = getConnections()

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-dark via-secondary to-dark rounded-3xl overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e940_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e940_1px,transparent_1px)] bg-[size:40px_40px]" />

      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        className="absolute inset-0"
      >
        {/* Define gradients */}
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.2" />
          </linearGradient>

          <radialGradient id="nodeGradient">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="1" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.6" />
          </radialGradient>
        </defs>

        {/* Draw connections */}
        {connections.map((conn, index) => {
          const opacity = 1 - conn.distance / 200
          return (
            <motion.line
              key={`line-${conn.from.id}-${conn.to.id}`}
              x1={conn.from.x}
              y1={conn.from.y}
              x2={conn.to.x}
              y2={conn.to.y}
              stroke="url(#lineGradient)"
              strokeWidth="1"
              opacity={opacity * 0.6}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: index * 0.05 }}
            />
          )
        })}

        {/* Draw nodes */}
        {nodes.map((node, index) => (
          <g key={`node-${node.id}`}>
            {/* Outer glow */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="12"
              fill="url(#nodeGradient)"
              opacity="0.2"
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            />
            {/* Main node */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="6"
              fill="#0ea5e9"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            />
            {/* Inner core */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="3"
              fill="#ffffff"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            />
          </g>
        ))}

        {/* Animated particles along connections */}
        {connections.slice(0, 6).map((conn, index) => (
          <motion.circle
            key={`particle-${conn.from.id}-${conn.to.id}`}
            r="2"
            fill="#0ea5e9"
            initial={{
              cx: conn.from.x,
              cy: conn.from.y,
            }}
            animate={{
              cx: [conn.from.x, conn.to.x, conn.from.x],
              cy: [conn.from.y, conn.to.y, conn.from.y],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.5,
              ease: "linear",
            }}
          />
        ))}
      </svg>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none" />
    </div>
  )
}

export default AnimatedConnections
