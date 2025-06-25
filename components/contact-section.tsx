"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  CheckCircle,
  Loader2,
  Mail,
  Phone,
  MapPin,
  CalendarDays,
  MessageSquare,
  Sparkles,
  ArrowRight,
  Clock,
  Users,
  Globe,
  Zap,
  Star,
  Send,
  HeadphonesIcon,
} from "lucide-react"
import Image from "next/image"

const contactMethods = [
  {
    icon: Mail,
    title: "Email Support",
    details: "support@brainspace.com",
    note: "Response within 2 hours",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Phone,
    title: "Phone Support",
    details: "+1 (555) 123-4567",
    note: "Mon-Fri, 9AM-6PM EST",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: HeadphonesIcon,
    title: "Live Chat",
    details: "Available 24/7",
    note: "Instant responses",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: MapPin,
    title: "Office Visit",
    details: "123 Business Ave, Suite 100",
    note: "By appointment only",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
  },
]

const quickStats = [
  { icon: Clock, label: "Avg Response", value: "< 2hrs", color: "text-blue-500" },
  { icon: Users, label: "Support Team", value: "24/7", color: "text-green-500" },
  { icon: Globe, label: "Languages", value: "12+", color: "text-purple-500" },
  { icon: Star, label: "Satisfaction", value: "98%", color: "text-yellow-500" },
]

const floatingElements = [
  { icon: MessageSquare, position: { top: "10%", left: "5%" }, delay: 0 },
  { icon: Zap, position: { top: "20%", right: "8%" }, delay: 0.5 },
  { icon: Star, position: { bottom: "25%", left: "3%" }, delay: 1 },
  { icon: Globe, position: { bottom: "15%", right: "5%" }, delay: 1.5 },
]

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    interest: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({ name: "", email: "", company: "", interest: "", message: "" })
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSelectChange = (value: string) => {
    setFormState({ ...formState, interest: value })
  }

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      {/* Animated Background */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-blue-400/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </motion.div>

      {/* Subtle Background Image */}
      <motion.div style={{ y: imageY }} className="absolute inset-0 opacity-5 dark:opacity-10">
        <Image
          src="/images/neural-network-bg.png"
          alt="Background pattern"
          fill
          className="object-cover object-center"
          priority={false}
        />
      </motion.div>

      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute z-20 pointer-events-none"
          style={element.position}
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 0.4, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ delay: element.delay, duration: 0.8 }}
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4 + index,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="p-3 bg-white/20 dark:bg-slate-800/20 backdrop-blur-sm rounded-2xl border border-white/30 dark:border-slate-700/30"
          >
            <element.icon className="h-6 w-6 text-yellow-500" />
          </motion.div>
        </motion.div>
      ))}

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
            <MessageSquare className="h-5 w-5 text-yellow-500" />
            <span className="text-sm font-semibold text-yellow-600 dark:text-yellow-400">Let's Connect</span>
            <Sparkles className="h-4 w-4 text-yellow-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight"
          >
            <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-600 bg-clip-text text-transparent">
              Get in Touch
            </span>
            <br />
            <span className="text-slate-900 dark:text-white">We're Here to Help</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto"
          >
            Have questions about BrainSpace? Our expert team is ready to help you find the perfect solution for your
            business needs.
          </motion.p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto"
        >
          {quickStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-200/50 dark:border-slate-700/50 hover:border-yellow-400/50 transition-all duration-300"
            >
              <stat.icon className={`h-6 w-6 ${stat.color} mx-auto mb-2`} />
              <div className="text-lg font-black text-slate-900 dark:text-white">{stat.value}</div>
              <div className="text-xs text-slate-600 dark:text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="lg:col-span-3"
          >
            <Card className="relative overflow-hidden bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 shadow-2xl">
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-orange-500/20 to-yellow-400/20 opacity-50 rounded-xl blur-sm"></div>
              <div className="absolute inset-[1px] bg-white dark:bg-slate-800 rounded-xl"></div>

              <CardHeader className="relative">
                <CardTitle className="flex items-center text-2xl font-bold text-slate-900 dark:text-white">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                    className="mr-3"
                  >
                    <Send className="h-6 w-6 text-yellow-500" />
                  </motion.div>
                  Send us a Message
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400">
                  Fill out the form below and we'll get back to you within 2 hours during business hours.
                </CardDescription>
              </CardHeader>

              <CardContent className="relative">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className="text-center py-12 flex flex-col items-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                      className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-6"
                    >
                      <CheckCircle className="h-10 w-10 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Message Sent!</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-md">
                      Thank you for reaching out. Our team will review your message and get back to you shortly.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setIsSubmitted(false)}
                      className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-800"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4, duration: 0.5 }}
                        className="space-y-2"
                      >
                        <Label htmlFor="name" className="text-slate-700 dark:text-slate-300 font-medium">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          required
                          value={formState.name}
                          onChange={handleChange}
                          className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200 dark:border-slate-700 focus:border-yellow-400 dark:focus:border-yellow-500 transition-colors"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                        className="space-y-2"
                      >
                        <Label htmlFor="email" className="text-slate-700 dark:text-slate-300 font-medium">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@company.com"
                          required
                          value={formState.email}
                          onChange={handleChange}
                          className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200 dark:border-slate-700 focus:border-yellow-400 dark:focus:border-yellow-500 transition-colors"
                        />
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.6, duration: 0.5 }}
                        className="space-y-2"
                      >
                        <Label htmlFor="company" className="text-slate-700 dark:text-slate-300 font-medium">
                          Company
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Your Company Inc."
                          value={formState.company}
                          onChange={handleChange}
                          className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200 dark:border-slate-700 focus:border-yellow-400 dark:focus:border-yellow-500 transition-colors"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.7, duration: 0.5 }}
                        className="space-y-2"
                      >
                        <Label htmlFor="interest" className="text-slate-700 dark:text-slate-300 font-medium">
                          I'm interested in
                        </Label>
                        <Select name="interest" onValueChange={handleSelectChange} value={formState.interest}>
                          <SelectTrigger className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200 dark:border-slate-700 focus:border-yellow-400 dark:focus:border-yellow-500">
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="demo">Product Demo</SelectItem>
                            <SelectItem value="pricing">Pricing Information</SelectItem>
                            <SelectItem value="support">Technical Support</SelectItem>
                            <SelectItem value="partnership">Partnership</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.8, duration: 0.5 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="message" className="text-slate-700 dark:text-slate-300 font-medium">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Tell us about your business needs and how we can help..."
                        value={formState.message}
                        onChange={handleChange}
                        required
                        className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200 dark:border-slate-700 focus:border-yellow-400 dark:focus:border-yellow-500 transition-colors resize-none"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.9, duration: 0.5 }}
                    >
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white text-lg py-6 shadow-xl hover:shadow-2xl transition-all duration-300 group"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            className="flex items-center"
                          >
                            <Loader2 className="h-5 w-5 mr-2" />
                            Sending Message...
                          </motion.div>
                        ) : (
                          <motion.span
                            className="flex items-center justify-center"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            Send Message
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          </motion.span>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="lg:col-span-2 flex flex-col h-full"
          >
            <div className="text-center lg:text-left mb-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                Other Ways to{" "}
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                  Reach Us
                </span>
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Choose the method that works best for you. We're available across multiple channels.
              </p>
            </div>

            <div className="flex-1 space-y-3">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 1.6 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="group cursor-pointer"
                >
                  <Card className="relative overflow-hidden bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:border-yellow-400/50 transition-all duration-300 h-full">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`p-2.5 rounded-xl bg-gradient-to-br ${method.color} shadow-lg relative overflow-hidden`}
                        >
                          <method.icon className="h-5 w-5 text-white relative z-10" />
                          <motion.div
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              delay: index * 0.5,
                            }}
                            className="absolute inset-0 bg-white/30 rounded-xl"
                          />
                        </motion.div>

                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-slate-900 dark:text-white mb-1 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors text-sm">
                            {method.title}
                          </h4>
                          <p className="text-slate-700 dark:text-slate-300 mb-1 font-medium text-sm truncate">
                            {method.details}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">{method.note}</p>
                        </div>
                      </div>
                    </CardContent>

                    {/* Hover Glow Effect */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className={`absolute inset-0 bg-gradient-to-r ${method.color} opacity-5 pointer-events-none`}
                    />
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* CTA Card - positioned at bottom */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="mt-6"
            >
              <Card className="relative overflow-hidden bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm border border-yellow-200/50 dark:border-yellow-700/50 shadow-lg">
                <CardContent className="p-5 text-center">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                    className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mb-3"
                  >
                    <CalendarDays className="h-5 w-5 text-white" />
                  </motion.div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-sm">Need Immediate Assistance?</h4>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 text-xs">
                    Schedule a live demo with our product experts and see BrainSpace in action.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-yellow-400 text-yellow-600 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 hover:text-yellow-700 transition-all duration-300"
                  >
                    <CalendarDays className="mr-2 h-3 w-3" />
                    Schedule Demo
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
