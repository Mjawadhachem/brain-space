"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ChevronLeft,
  ChevronRight,
  Star,
  PlayCircle,
  Quote,
  Globe,
  TrendingUp,
  Users,
  Award,
  Sparkles,
} from "lucide-react"

const testimonialsData = [
  {
    quote:
      "BrainSpace transformed our operations completely. The integrated modules eliminated data silos and increased our efficiency by 67%. It's simply revolutionary.",
    author: "Sarah Johnson",
    role: "Chief Operations Officer",
    company: "TechNova Inc.",
    avatar: "/images/avatar-sarah-johnson.jpg",
    rating: 5,
    companyLogo: "/images/company-technova.png",
    location: "San Francisco, USA",
    industry: "Technology",
    teamSize: "250+ employees",
  },
  {
    quote:
      "Implementation was incredibly fast and smooth. The ROI has been incredible for our retail business. Our sales increased by 156% in just 6 months.",
    author: "Michael Chen",
    role: "Chief Executive Officer",
    company: "Retail Solutions",
    avatar: "/images/avatar-michael-chen.jpg",
    rating: 5,
    companyLogo: "/images/company-retail-solutions.png",
    location: "Toronto, Canada",
    industry: "Retail",
    teamSize: "150+ employees",
  },
  {
    quote:
      "The scalable solution perfect for our growing e-commerce business. It handles everything from inventory to CRM flawlessly. Absolutely game-changing.",
    author: "Emma Rodriguez",
    role: "Founder & CEO",
    company: "StyleHub",
    avatar: "/images/avatar-emma-rodriguez.jpg",
    rating: 5,
    companyLogo: "/images/company-stylehub.png",
    location: "Madrid, Spain",
    industry: "E-commerce",
    teamSize: "75+ employees",
  },
  {
    quote:
      "The customizable dashboards provide real-time insights that have optimized our operations and cut costs by 32%. The support team is exceptional.",
    author: "David Park",
    role: "Chief Financial Officer",
    company: "Global Logistics",
    avatar: "/images/avatar-david-park.jpg",
    rating: 5,
    companyLogo: "/images/company-global-logistics.png",
    location: "Seoul, South Korea",
    industry: "Logistics",
    teamSize: "500+ employees",
  },
]

const companyLogos = [
  { name: "TechNova Inc.", src: "/images/company-technova.png", alt: "TechNova Inc. Logo" },
  { name: "Retail Solutions", src: "/images/company-retail-solutions.png", alt: "Retail Solutions Logo" },
  { name: "StyleHub", src: "/images/company-stylehub.png", alt: "StyleHub Logo" },
  { name: "Global Logistics", src: "/images/company-global-logistics.png", alt: "Global Logistics Logo" },
  { name: "Innovate Corp", src: "/images/company-innovate-corp.png", alt: "Innovate Corp Logo" },
  { name: "Future Systems", src: "/images/company-future-systems.png", alt: "Future Systems Logo" },
  { name: "Nexus Tech", src: "/images/company-nexus-tech.png", alt: "Nexus Tech Logo" },
  { name: "Quantum Solutions", src: "/images/company-quantum-solutions.png", alt: "Quantum Solutions Logo" },
]

const globalStats = [
  { icon: Users, label: "Active Users", value: "50K+", color: "text-blue-500" },
  { icon: Globe, label: "Countries", value: "45+", color: "text-green-500" },
  { icon: TrendingUp, label: "Growth Rate", value: "300%", color: "text-yellow-500" },
  { icon: Award, label: "Satisfaction", value: "98%", color: "text-purple-500" },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const floatingY = useTransform(scrollYProgress, [0, 1], ["0px", "-50px"])

  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % testimonialsData.length)
  const goToPrevious = () => setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length)

  useEffect(() => {
    const timer = setInterval(goToNext, 8000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      ref={containerRef}
      id="testimonials"
      className="relative py-24 overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      {/* Animated Background Elements */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-blue-400/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-green-400/5 to-cyan-500/5 rounded-full blur-3xl"></div>
      </motion.div>

      {/* Floating Decorative Elements */}
      <motion.div
        style={{ y: floatingY }}
        className="absolute top-32 left-10 w-4 h-4 bg-yellow-400 rounded-full opacity-60"
      ></motion.div>
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0px", "-80px"]) }}
        className="absolute bottom-40 right-16 w-6 h-6 bg-blue-500 rounded-full opacity-40"
      ></motion.div>
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0px", "-30px"]) }}
        className="absolute top-1/2 right-8 w-3 h-3 bg-green-500 rounded-full opacity-50"
      ></motion.div>

      <div className="container relative z-10">
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
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-sm border border-yellow-200/50 dark:border-yellow-700/50 rounded-full px-6 py-3 mb-8"
          >
            <Globe className="h-5 w-5 text-yellow-500" />
            <span className="text-sm font-semibold text-yellow-600 dark:text-yellow-400">Global Trust</span>
            <Sparkles className="h-4 w-4 text-yellow-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight"
          >
            <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-600 bg-clip-text text-transparent">
              Trusted Worldwide
            </span>
            <br />
            <span className="text-slate-900 dark:text-white">by Industry Leaders</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto"
          >
            Join thousands of successful businesses across 45+ countries who have transformed their operations with
            BrainSpace.
          </motion.p>
        </motion.div>

        {/* Global Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 max-w-4xl mx-auto"
        >
          {globalStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-200/50 dark:border-slate-700/50 hover:border-yellow-400/50 transition-all duration-300"
            >
              <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-3`} />
              <div className="text-2xl font-black text-slate-900 dark:text-white">{stat.value}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="lg:col-span-2"
          >
            <Card className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border-0 shadow-2xl">
              <CardContent className="p-0">
                <div
                  className="relative aspect-video group cursor-pointer"
                  onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                >
                  <Image
                    src="/images/video-testimonial-thumbnail.jpg"
                    alt="Customer Success Stories"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Video Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>

                  {/* Play Button */}
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: isVideoPlaying ? 0.9 : 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-yellow-500/50 transition-all duration-300">
                      <PlayCircle className="h-10 w-10 text-white ml-1" />
                    </div>
                  </motion.div>

                  {/* Video Info */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-xl font-bold text-white mb-2">Customer Success Stories</h3>
                    <p className="text-slate-300 text-sm">See how BrainSpace transforms businesses worldwide</p>
                  </div>

                  {/* Pulse Animation */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-yellow-400/30 rounded-full"
                  ></motion.div>
                </div>
              </CardContent>
            </Card>

            {/* Video Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="mt-6 grid grid-cols-3 gap-4"
            >
              <div className="text-center p-4 bg-white/30 dark:bg-slate-800/30 backdrop-blur-sm rounded-xl">
                <div className="text-lg font-bold text-slate-900 dark:text-white">2.5M+</div>
                <div className="text-xs text-slate-600 dark:text-slate-400">Views</div>
              </div>
              <div className="text-center p-4 bg-white/30 dark:bg-slate-800/30 backdrop-blur-sm rounded-xl">
                <div className="text-lg font-bold text-slate-900 dark:text-white">4.9★</div>
                <div className="text-xs text-slate-600 dark:text-slate-400">Rating</div>
              </div>
              <div className="text-center p-4 bg-white/30 dark:bg-slate-800/30 backdrop-blur-sm rounded-xl">
                <div className="text-lg font-bold text-slate-900 dark:text-white">98%</div>
                <div className="text-xs text-slate-600 dark:text-slate-400">Recommend</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Testimonials Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="lg:col-span-3 relative"
          >
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100, rotateY: 15 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  exit={{ opacity: 0, x: -100, rotateY: -15 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="w-full"
                >
                  <TestimonialCard testimonial={testimonialsData[currentIndex]} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <div className="flex gap-2">
                {testimonialsData.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-gradient-to-r from-yellow-500 to-orange-500 w-8"
                        : "bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500"
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-yellow-400 transition-all duration-300"
                  onClick={goToPrevious}
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-yellow-400 transition-all duration-300"
                  onClick={goToNext}
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Company Logos Section */}
        <CompanyLogosSection />
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonialsData)[0] }) {
  return (
    <Card className="relative overflow-hidden bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 shadow-2xl hover:shadow-3xl transition-all duration-500">
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-orange-500/20 to-yellow-400/20 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-xl blur-sm"></div>
      <div className="absolute inset-[1px] bg-white dark:bg-slate-800 rounded-xl"></div>

      <CardContent className="relative p-8">
        {/* Quote Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
          className="absolute top-6 right-6"
        >
          <Quote className="h-8 w-8 text-yellow-500/30" />
        </motion.div>

        {/* Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex mb-6"
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.3 }}
            >
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            </motion.div>
          ))}
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg md:text-xl text-slate-700 dark:text-slate-200 leading-relaxed mb-8 font-medium"
        >
          "{testimonial.quote}"
        </motion.blockquote>

        {/* Author Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex items-start gap-4"
        >
          <div className="relative">
            <div className="w-16 h-16 rounded-full overflow-hidden border-3 border-gradient-to-r from-yellow-400 to-orange-500 p-0.5">
              <div className="w-full h-full rounded-full overflow-hidden">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.author}
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-slate-800 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>

          <div className="flex-1">
            <div className="font-bold text-slate-900 dark:text-white text-lg">{testimonial.author}</div>
            <div className="text-slate-600 dark:text-slate-400 text-sm mb-2">{testimonial.role}</div>
            <div className="text-slate-500 dark:text-slate-500 text-sm">{testimonial.company}</div>

            {/* Additional Info */}
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-xs text-slate-600 dark:text-slate-400">
                {testimonial.location}
              </span>
              <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-xs text-slate-600 dark:text-slate-400">
                {testimonial.industry}
              </span>
              <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-xs text-slate-600 dark:text-slate-400">
                {testimonial.teamSize}
              </span>
            </div>
          </div>

          {/* Company Logo */}
          {testimonial.companyLogo && (
            <div className="flex-shrink-0">
              <div className="w-16 h-8 bg-white dark:bg-slate-700 rounded-lg p-2 border border-slate-200 dark:border-slate-600">
                <Image
                  src={testimonial.companyLogo || "/placeholder.svg"}
                  alt={`${testimonial.company} logo`}
                  width={60}
                  height={30}
                  className="object-contain w-full h-full opacity-70"
                />
              </div>
            </div>
          )}
        </motion.div>
      </CardContent>
    </Card>
  )
}

function CompanyLogosSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ delay: 1.8, duration: 0.8 }}
      className="mt-32"
    >
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full px-6 py-3 mb-6"
        >
          <Sparkles className="h-4 w-4 text-blue-500" />
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">Powering Innovation</span>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 2.2, duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
        >
          Powering Growth for{" "}
          <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-600 bg-clip-text text-transparent">
            Innovative Companies
          </span>
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 2.4, duration: 0.6 }}
          className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
        >
          Join industry leaders who trust BrainSpace to drive their digital transformation and accelerate growth.
        </motion.p>
      </div>

      {/* Animated Logo Grid */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent dark:via-slate-800/50 pointer-events-none z-10"></div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 2.6, duration: 0.8 }}
          className="overflow-hidden"
        >
          <motion.div
            animate={{
              x: [0, -50 * companyLogos.length],
            }}
            transition={{
              duration: 30,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="flex gap-12 items-center"
            style={{ width: `${companyLogos.length * 200}px` }}
          >
            {[...companyLogos, ...companyLogos, ...companyLogos].map((logo, index) => (
              <motion.div
                key={`${logo.name}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 2.8 + (index % companyLogos.length) * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex-shrink-0 w-40 h-20 flex items-center justify-center group cursor-pointer"
              >
                <div className="relative w-full h-full bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-4 group-hover:shadow-xl group-hover:border-yellow-400/50 transition-all duration-300">
                  <Image
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.alt}
                    width={120}
                    height={40}
                    className="object-contain w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                  />

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ delay: 3, duration: 0.8 }}
        className="mt-16 text-center"
      >
        <div className="inline-flex items-center justify-center bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 backdrop-blur-sm border border-slate-200 dark:border-slate-600 rounded-2xl px-8 py-4">
          <div className="flex items-center space-x-8">
            <div className="text-center">
              <div className="text-2xl font-black text-slate-900 dark:text-white">500+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Companies</div>
            </div>
            <div className="h-8 w-px bg-slate-300 dark:bg-slate-600"></div>
            <div className="text-center">
              <div className="text-2xl font-black text-slate-900 dark:text-white">45+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Countries</div>
            </div>
            <div className="h-8 w-px bg-slate-300 dark:bg-slate-600"></div>
            <div className="text-center">
              <div className="text-2xl font-black text-slate-900 dark:text-white">$2.5B+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Revenue Managed</div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
