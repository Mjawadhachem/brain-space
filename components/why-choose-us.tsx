"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Zap,
  ShieldCheck,
  CloudCog,
  Smartphone,
  Scale,
  Users2,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Clock,
  Award,
  Target,
  Rocket,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const features = [
  {
    title: "Lightning Fast Setup",
    description: "Get your entire business running in under 15 minutes with our AI-powered onboarding assistant.",
    icon: Zap,
    color: "from-yellow-400 to-orange-500",
    bgColor: "bg-yellow-500/10",
    metric: "15min",
    metricLabel: "Setup Time",
    delay: 0.1,
    position: "left",
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade encryption, SOC 2 compliance, and zero-trust architecture protect your data 24/7.",
    icon: ShieldCheck,
    color: "from-green-400 to-emerald-600",
    bgColor: "bg-green-500/10",
    metric: "99.9%",
    metricLabel: "Uptime SLA",
    delay: 0.2,
    position: "right",
  },
  {
    title: "Cloud-Native Platform",
    description: "Built for the cloud from day one. Auto-scaling, global CDN, and instant deployments worldwide.",
    icon: CloudCog,
    color: "from-blue-400 to-cyan-500",
    bgColor: "bg-blue-500/10",
    metric: "50ms",
    metricLabel: "Response Time",
    delay: 0.3,
    position: "left",
  },
  {
    title: "Mobile-First Design",
    description: "Native iOS & Android apps with offline capabilities. Manage your business from anywhere.",
    icon: Smartphone,
    color: "from-purple-400 to-pink-500",
    bgColor: "bg-purple-500/10",
    metric: "4.9★",
    metricLabel: "App Store Rating",
    delay: 0.4,
    position: "right",
  },
  {
    title: "Infinite Scalability",
    description: "From startup to enterprise. Our architecture grows with you, handling millions of transactions.",
    icon: Scale,
    color: "from-indigo-400 to-blue-600",
    bgColor: "bg-indigo-500/10",
    metric: "10M+",
    metricLabel: "Transactions/Day",
    delay: 0.5,
    position: "left",
  },
  {
    title: "24/7 Expert Support",
    description: "Dedicated success team with average 2-minute response time. We're here when you need us.",
    icon: Users2,
    color: "from-rose-400 to-red-500",
    bgColor: "bg-rose-500/10",
    metric: "2min",
    metricLabel: "Response Time",
    delay: 0.6,
    position: "right",
  },
]

const floatingElements = [
  { icon: TrendingUp, color: "text-green-500", position: { top: "10%", left: "5%" } },
  { icon: Clock, color: "text-blue-500", position: { top: "20%", right: "8%" } },
  { icon: Award, color: "text-yellow-500", position: { bottom: "25%", left: "3%" } },
  { icon: Target, color: "text-purple-500", position: { bottom: "15%", right: "5%" } },
  { icon: Rocket, color: "text-orange-500", position: { top: "50%", left: "2%" } },
  { icon: Sparkles, color: "text-pink-500", position: { top: "60%", right: "3%" } },
]

export default function WhyChooseUs() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const floatingY = useTransform(scrollYProgress, [0, 1], ["0px", "-100px"])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        })
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
      return () => container.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section
      ref={containerRef}
      id="features"
      className="relative min-h-screen py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
    >
      {/* Animated Background */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,179,0,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(255,179,0,0.05)_50%,transparent_70%)]"></div>

        {/* Floating Geometric Shapes */}
        <motion.div
          style={{ y: floatingY }}
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-xl"
        ></motion.div>
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0px", "-150px"]) }}
          className="absolute bottom-40 right-32 w-48 h-48 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-xl"
        ></motion.div>
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0px", "-80px"]) }}
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-full blur-xl"
        ></motion.div>
      </motion.div>

      {/* Interactive Mouse Follower */}
      <motion.div
        className="absolute pointer-events-none z-10"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          scale: hoveredFeature !== null ? 1.5 : 1,
          opacity: hoveredFeature !== null ? 0.8 : 0.3,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <div className="w-32 h-32 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-2xl"></div>
      </motion.div>

      {/* Floating Icons */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute z-20 pointer-events-none"
          style={element.position}
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 0.6, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ delay: 1 + index * 0.2, duration: 0.8 }}
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4 + index,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
          >
            <element.icon className={`h-6 w-6 ${element.color}`} />
          </motion.div>
        </motion.div>
      ))}

      <div className="container relative z-30">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-400/30 rounded-full px-6 py-3 mb-8"
          >
            <Sparkles className="h-5 w-5 text-yellow-400" />
            <span className="text-sm font-semibold text-yellow-400">Why Choose BrainSpace</span>
            <ArrowRight className="h-4 w-4 text-yellow-400" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight"
          >
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent">
              Beyond
            </span>
            <br />
            <span className="text-white">Ordinary ERP</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto"
          >
            Experience the next generation of business management with cutting-edge technology, unmatched performance,
            and revolutionary features that set us apart.
          </motion.p>
        </motion.div>

        {/* Features Grid with Diagonal Layout */}
        <div className="relative">
          {/* Central Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-yellow-400/50 to-transparent transform -translate-x-1/2 hidden lg:block"></div>

          <div className="space-y-24">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: feature.position === "left" ? -100 : 100, y: 50 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0, y: 0 }
                    : { opacity: 0, x: feature.position === "left" ? -100 : 100, y: 50 }
                }
                transition={{ delay: feature.delay, duration: 0.8, ease: "easeOut" }}
                className={`flex items-center gap-12 ${feature.position === "right" ? "lg:flex-row-reverse" : ""}`}
                onHoverStart={() => setHoveredFeature(index)}
                onHoverEnd={() => setHoveredFeature(null)}
              >
                {/* Feature Card */}
                <div className="flex-1 max-w-lg">
                  <Card className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 hover:border-yellow-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-400/20">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`p-4 rounded-2xl bg-gradient-to-br ${feature.color} shadow-lg relative overflow-hidden`}
                        >
                          <feature.icon className="h-8 w-8 text-white relative z-10" />
                          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </motion.div>

                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                            {feature.title}
                          </h3>
                          <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                            {feature.description}
                          </p>
                        </div>
                      </div>

                      {/* Hover Effect Overlay */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                          opacity: hoveredFeature === index ? 1 : 0,
                          scale: hoveredFeature === index ? 1 : 0.8,
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 pointer-events-none"
                      ></motion.div>
                    </CardContent>
                  </Card>
                </div>

                {/* Metric Display */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ delay: feature.delay + 0.3, duration: 0.6 }}
                  whileHover={{ scale: 1.1 }}
                  className="hidden lg:flex flex-col items-center justify-center w-32 h-32 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-full border border-white/20 hover:border-yellow-400/50 transition-all duration-300 group"
                >
                  <motion.div
                    animate={{
                      scale: hoveredFeature === index ? 1.2 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-center"
                  >
                    <div className="text-2xl font-black bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                      {feature.metric}
                    </div>
                    <div className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors">
                      {feature.metricLabel}
                    </div>
                  </motion.div>
                </motion.div>

                {/* Connecting Dot */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: feature.delay + 0.5, duration: 0.4 }}
                  className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg"
                  style={{
                    top: `${20 + index * 16}%`,
                    boxShadow:
                      hoveredFeature === index ? "0 0 20px rgba(255, 179, 0, 0.6)" : "0 0 10px rgba(255, 179, 0, 0.3)",
                  }}
                ></motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-32 text-center"
        >
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-3xl blur-xl"></div>
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
              <Image
                src="/images/growth-potential.png"
                alt="Unleash your growth potential with BrainSpace"
                width={400}
                height={200}
                className="mx-auto mb-8 rounded-xl opacity-80"
              />
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Experience the{" "}
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Future
                </span>
                ?
              </h3>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
                Join thousands of forward-thinking businesses that have already transformed their operations with
                BrainSpace.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white text-lg px-10 py-4 shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 group"
              >
                <Link href="/signup">
                  Start Your Transformation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
