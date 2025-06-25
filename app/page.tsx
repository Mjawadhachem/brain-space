"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import ModulesGrid from "@/components/modules-grid"
import WhyChooseUs from "@/components/why-choose-us"
import PricingSection from "@/components/pricing-section"
import ContactSection from "@/components/contact-section"
import Testimonials from "@/components/testimonials"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import StickyCtaBar from "@/components/sticky-cta-bar"
import ChatWidgetMockup from "@/components/chat-widget-mockup"
import { Input } from "@/components/ui/input"
import {
  Twitter,
  Linkedin,
  Youtube,
  Facebook,
  Instagram,
  MenuIcon,
  ArrowRight,
  Sparkles,
  Zap,
  Users,
  Globe,
  Star,
  Heart,
  Code,
  Coffee,
  Rocket,
  Target,
  Award,
  TrendingUp,
} from "lucide-react"
import { motion } from "framer-motion"

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Modules", href: "#modules" },
    { name: "Pricing", href: "#pricing" },
    { name: "Integrations", href: "#integrations" },
    { name: "API", href: "#api" },
    { name: "Changelog", href: "#changelog" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Careers", href: "#careers" },
    { name: "Press", href: "#press" },
    { name: "Partners", href: "#partners" },
    { name: "Contact", href: "#contact" },
    { name: "Blog", href: "#blog" },
  ],
  resources: [
    { name: "Documentation", href: "#docs" },
    { name: "Help Center", href: "#help" },
    { name: "Community", href: "#community" },
    { name: "Tutorials", href: "#tutorials" },
    { name: "Webinars", href: "#webinars" },
    { name: "Status", href: "#status" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "GDPR", href: "/gdpr" },
    { name: "Security", href: "/security" },
    { name: "Compliance", href: "/compliance" },
  ],
}

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-blue-400" },
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-600" },
  { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-blue-500" },
  { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-500" },
  { icon: Youtube, href: "#", label: "YouTube", color: "hover:text-red-500" },
]

const achievements = [
  { icon: Users, label: "Active Users", value: "50K+", color: "text-blue-500" },
  { icon: Globe, label: "Countries", value: "45+", color: "text-green-500" },
  { icon: Star, label: "Rating", value: "4.9★", color: "text-yellow-500" },
  { icon: Award, label: "Awards", value: "12+", color: "text-purple-500" },
]

const floatingIcons = [
  { icon: Zap, position: { top: "10%", left: "5%" }, delay: 0 },
  { icon: Rocket, position: { top: "20%", right: "8%" }, delay: 0.5 },
  { icon: Target, position: { bottom: "60%", left: "3%" }, delay: 1 },
  { icon: TrendingUp, position: { bottom: "70%", right: "5%" }, delay: 1.5 },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/brainspace-logo.png"
              alt="BrainSpace Logo"
              width={32}
              height={32}
              className="dark:hidden"
            />
            <Image
              src="/images/brainspace-logo-white.svg"
              alt="BrainSpace Logo Dark"
              width={32}
              height={32}
              className="hidden dark:block"
            />
            <span className="text-xl font-bold text-foreground">BrainSpace</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </Link>
            <Link
              href="#modules"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Modules
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageSwitcher />
            <Link
              href="/login"
              className="text-sm font-medium text-muted-foreground hover:text-foreground hidden sm:inline-flex transition-colors"
            >
              Sign in
            </Link>
            <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md">
              <Link href="/signup">Get Started</Link>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <MenuIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <HeroSection />
        <ModulesGrid />
        <WhyChooseUs />
        <Testimonials />
        <PricingSection />
        <ContactSection />
      </main>

      {/* Enhanced Footer */}
      <footer className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-blue-400/10 to-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        {/* Floating Elements */}
        {floatingIcons.map((element, index) => (
          <motion.div
            key={index}
            className="absolute z-20 pointer-events-none"
            style={element.position}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.3, scale: 1 }}
            transition={{ delay: element.delay, duration: 0.8 }}
            viewport={{ once: true }}
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
              className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
            >
              <element.icon className="h-6 w-6 text-yellow-400" />
            </motion.div>
          </motion.div>
        ))}

        <div className="container relative z-10 py-16">
          {/* Top Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
          >
            {/* Brand Section */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Link href="/" className="flex items-center space-x-3 mb-6">
                  <div className="relative">
                    <Image src="/images/brainspace-logo-white.svg" alt="BrainSpace Logo" width={40} height={40} />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      className="absolute inset-0 bg-yellow-400/30 rounded-full blur-sm"
                    />
                  </div>
                  <span className="text-2xl font-black bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    BrainSpace
                  </span>
                </Link>
                <p className="text-lg text-slate-300 max-w-md leading-relaxed">
                  Empowering businesses worldwide with next-generation ERP solutions. Transform your operations, scale
                  your growth, and achieve extraordinary results.
                </p>
              </motion.div>

              {/* Achievements */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-yellow-400/30 transition-all duration-300"
                  >
                    <achievement.icon className={`h-6 w-6 ${achievement.color} mx-auto mb-2`} />
                    <div className="text-xl font-black text-white">{achievement.value}</div>
                    <div className="text-xs text-slate-400">{achievement.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h4 className="text-lg font-bold text-white">Connect With Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.2, y: -3 }}
                      className={`p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-slate-300 ${social.color} transition-all duration-300 hover:bg-white/20 hover:border-white/40`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Newsletter Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:pl-12"
            >
              <div className="relative p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 hover:border-yellow-400/30 transition-all duration-500">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-3xl blur-xl opacity-50"></div>

                <div className="relative z-10">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                    className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mb-6"
                  >
                    <Sparkles className="h-6 w-6 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    Stay in the{" "}
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                      Loop
                    </span>
                  </h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    Get the latest updates, feature releases, and exclusive insights delivered straight to your inbox.
                    Join our community of forward-thinking business leaders.
                  </p>

                  <form className="space-y-4">
                    <div className="relative">
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:bg-white/20 focus:border-yellow-400 transition-all duration-300 pr-32"
                      />
                      <Button
                        type="submit"
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-6 py-2 text-sm font-semibold shadow-lg"
                      >
                        Subscribe
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-xs text-slate-400">
                      By subscribing, you agree to our Privacy Policy and consent to receive updates from our team.
                    </p>
                  </form>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Product Updates", "Industry Insights", "Exclusive Content"].map((tag, index) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-slate-300 border border-white/20"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
          >
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + categoryIndex * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-bold text-white mb-4 capitalize">
                  {category === "product" && "Product"}
                  {category === "company" && "Company"}
                  {category === "resources" && "Resources"}
                  {category === "legal" && "Legal"}
                </h4>
                <ul className="space-y-3">
                  {links.map((link, linkIndex) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + categoryIndex * 0.1 + linkIndex * 0.05, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <Link
                        href={link.href}
                        className="text-slate-400 hover:text-yellow-400 transition-colors duration-300 text-sm hover:translate-x-1 inline-block transform"
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-white/10"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-slate-400">
                <p>&copy; {new Date().getFullYear()} BrainSpace. All rights reserved.</p>
                <div className="flex items-center gap-2">
                  <span>Made with</span>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <Heart className="h-4 w-4 text-red-500 fill-red-500" />
                  </motion.div>
                  <span>by the BrainSpace team</span>
                </div>
              </div>

              <div className="flex items-center gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Code className="h-4 w-4" />
                  <span>Built with Next.js</span>
                </div>
                <div className="flex items-center gap-2">
                  <Coffee className="h-4 w-4" />
                  <span>Powered by innovation</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>

      <StickyCtaBar />
      <ChatWidgetMockup />
    </div>
  )
}
