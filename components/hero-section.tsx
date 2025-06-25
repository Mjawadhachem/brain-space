"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  Clock,
  Zap,
  Star,
  Play,
  LayoutDashboard,
  ShoppingCart,
  FolderKanban,
  DollarSign,
  Target,
  Package,
  Calendar,
  BarChart3,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface HeroModule {
  id: string
  name: string
  icon: LucideIcon
  imageSrc: string
  title: string
  subtitle: string
  description: string
  metrics: Array<{
    label: string
    value: string
    color: string
    bgColor: string
    icon: LucideIcon
  }>
}

const heroModules: HeroModule[] = [
  {
    id: "erp-core",
    name: "ERP Core",
    icon: LayoutDashboard,
    imageSrc: "/images/dashboard-preview.png",
    title: "Unify Your",
    subtitle: "Business Operations",
    description:
      "Integrate finance, HR, inventory, and more into a single, powerful platform. Streamline operations and gain real-time insights to make smarter decisions.",
    metrics: [
      { label: "Efficiency", value: "+67%", color: "text-green-500", bgColor: "bg-green-500/10", icon: TrendingUp },
      { label: "Time Saved", value: "-45%", color: "text-blue-500", bgColor: "bg-blue-500/10", icon: Clock },
      { label: "Data Accuracy", value: "99.8%", color: "text-purple-500", bgColor: "bg-purple-500/10", icon: Target },
      {
        label: "Cost Reduction",
        value: "-32%",
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
        icon: DollarSign,
      },
    ],
  },
  {
    id: "crm",
    name: "CRM",
    icon: Users,
    imageSrc: "/images/crm-dashboard-preview.png",
    title: "Transform Your",
    subtitle: "Customer Relationships",
    description:
      "Track leads, manage interactions, and automate sales workflows. Nurture customer loyalty and drive growth with our comprehensive CRM tools.",
    metrics: [
      {
        label: "Lead Conversion",
        value: "+89%",
        color: "text-green-500",
        bgColor: "bg-green-500/10",
        icon: TrendingUp,
      },
      { label: "Customer Retention", value: "94%", color: "text-blue-500", bgColor: "bg-blue-500/10", icon: Users },
      { label: "Sales Cycle", value: "-38%", color: "text-purple-500", bgColor: "bg-purple-500/10", icon: Clock },
      {
        label: "Revenue Growth",
        value: "+156%",
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
        icon: DollarSign,
      },
    ],
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    icon: ShoppingCart,
    imageSrc: "/images/hero-ecommerce-module.png",
    title: "Scale Your",
    subtitle: "Online Business",
    description:
      "Manage your online store, products, orders, and payments. Our integrated e-commerce solution helps you reach more customers and grow your sales.",
    metrics: [
      { label: "Online Sales", value: "+234%", color: "text-green-500", bgColor: "bg-green-500/10", icon: TrendingUp },
      { label: "Order Processing", value: "-67%", color: "text-blue-500", bgColor: "bg-blue-500/10", icon: Clock },
      {
        label: "Inventory Accuracy",
        value: "99.5%",
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
        icon: Package,
      },
      {
        label: "Customer Satisfaction",
        value: "98%",
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
        icon: Star,
      },
    ],
  },
  {
    id: "projects",
    name: "Projects",
    icon: FolderKanban,
    imageSrc: "/images/hero-projects-module.png",
    title: "Master Your",
    subtitle: "Project Delivery",
    description:
      "Plan, track, and collaborate on projects with powerful management tools. Ensure on-time delivery and keep your team aligned and productive.",
    metrics: [
      { label: "On-Time Delivery", value: "96%", color: "text-green-500", bgColor: "bg-green-500/10", icon: Calendar },
      {
        label: "Team Productivity",
        value: "+78%",
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
        icon: TrendingUp,
      },
      {
        label: "Project Visibility",
        value: "+145%",
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
        icon: BarChart3,
      },
      {
        label: "Resource Utilization",
        value: "+52%",
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
        icon: Target,
      },
    ],
  },
]

const dynamicWords = ["Streamline", "Optimize", "Revolutionize", "Transform"]

export default function HeroSection() {
  const [activeModuleId, setActiveModuleId] = useState<string>(heroModules[0].id)
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const activeModule = heroModules.find((m) => m.id === activeModuleId) || heroModules[0]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % dynamicWords.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-orange-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.slate.200/.3)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.slate.200/.3)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,theme(colors.slate.700/.3)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.slate.700/.3)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="container relative z-10 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-sm border border-yellow-200/50 dark:border-yellow-700/50 rounded-full px-4 py-2 w-fit"
            >
              <Zap className="h-4 w-4 text-yellow-500" />
              <span className="text-sm font-medium text-yellow-600 dark:text-yellow-400">Next-Gen ERP Platform</span>
              <ArrowRight className="h-3 w-3 text-yellow-500" />
            </motion.div>

            {/* Module Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Tabs value={activeModuleId} onValueChange={setActiveModuleId} className="w-full">
                <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto p-1 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-xl shadow-lg">
                  {heroModules.map((module) => (
                    <TabsTrigger
                      key={module.id}
                      value={module.id}
                      className="flex-col items-center gap-2 px-3 py-3 text-xs font-medium data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-orange-500 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-lg transition-all duration-300"
                    >
                      <module.icon className="h-4 w-4" />
                      <span className="hidden sm:inline">{module.name}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </motion.div>

            {/* Dynamic Headline */}
            <div className="space-y-4">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={activeModule.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight"
                >
                  <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-600 bg-clip-text text-transparent">
                    {activeModule.title}
                  </span>
                  <br />
                  <span className="text-slate-900 dark:text-white relative">
                    {activeModule.subtitle}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                      className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-30 rounded-full"
                    ></motion.div>
                  </span>
                </motion.h1>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={activeModule.id + "-desc"}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed"
                >
                  {activeModule.description}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300"
                asChild
              >
                <Link href="/signup">
                  <span className="relative z-10 flex items-center">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="group border-2 border-slate-300 dark:border-slate-600 hover:border-yellow-500 dark:hover:border-yellow-400 px-8 py-4 text-lg font-semibold backdrop-blur-sm bg-white/50 dark:bg-slate-800/50 hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all duration-300"
                asChild
              >
                <Link href="#demo">
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Link>
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex flex-wrap items-center gap-6 text-sm text-slate-500 dark:text-slate-400"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Setup in minutes</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image with Floating Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center items-center"
          >
            {/* Main Image Container */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeModule.id + "-image"}
                  initial={{ scale: 0.8, opacity: 0, rotateY: 90 }}
                  animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                  exit={{ scale: 0.8, opacity: 0, rotateY: -90 }}
                  className="relative w-[660px] h-[390px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 dark:border-slate-700/50 backdrop-blur-sm"
                >
                  <Image
                    src={activeModule.imageSrc || "/placeholder.svg"}
                    alt={`${activeModule.name} module preview`}
                    fill
                    className="object-cover"
                    sizes="660px"
                    priority={activeModule.id === heroModules[0].id}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                  {/* Module indicator overlay */}
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-lg px-3 py-2 flex items-center space-x-2">
                    <activeModule.icon className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{activeModule.name}</span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Floating Metric Cards */}
              <AnimatePresence mode="wait">
                {activeModule.metrics.map((metric, index) => {
                  const positions = [
                    { top: "10%", left: "-20%", rotate: "-5deg" },
                    { top: "25%", right: "-25%", rotate: "8deg" },
                    { bottom: "30%", left: "-15%", rotate: "3deg" },
                    { bottom: "10%", right: "-20%", rotate: "-8deg" },
                  ]

                  return (
                    <motion.div
                      key={activeModule.id + "-metric-" + index}
                      initial={{ opacity: 0, scale: 0, rotate: 0 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        rotate: positions[index].rotate.replace("deg", ""),
                      }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{
                        delay: 0.3 + index * 0.1,
                        duration: 0.6,
                        type: "spring",
                        stiffness: 100,
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotate: 0,
                        transition: { duration: 0.2 },
                      }}
                      className="absolute z-10 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/50 dark:border-slate-700/50 min-w-[140px]"
                      style={positions[index]}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${metric.bgColor}`}>
                          <metric.icon className={`h-4 w-4 ${metric.color}`} />
                        </div>
                        <div>
                          <div className={`text-lg font-bold ${metric.color}`}>{metric.value}</div>
                          <div className="text-xs text-slate-600 dark:text-slate-400">{metric.label}</div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </AnimatePresence>

              {/* Floating Play Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0, duration: 0.6, type: "spring" }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
              >
                <button className="w-16 h-16 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-full shadow-2xl border border-white/50 dark:border-slate-700/50 flex items-center justify-center group hover:bg-yellow-500 transition-all duration-300">
                  <Play className="h-6 w-6 text-yellow-600 group-hover:text-white ml-1" />
                </button>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1.0 }}
                className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 blur-xl"
              ></motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.7, duration: 1.0 }}
                className="absolute -bottom-10 -left-10 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-20 blur-xl"
              ></motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section - Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">Trusted by innovative companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 hover:opacity-80 transition-opacity duration-300">
            {["TechNova Inc.", "Retail Solutions", "StyleHub", "Global Logistics", "Innovate Corp"].map(
              (company, index) => (
                <motion.div
                  key={company}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.7 + index * 0.1, duration: 0.5 }}
                  className="text-slate-400 dark:text-slate-500 font-medium text-sm hover:text-slate-600 dark:hover:text-slate-300 transition-colors cursor-pointer"
                >
                  {company}
                </motion.div>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
