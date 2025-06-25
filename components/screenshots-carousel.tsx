"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const screenshots = [
  {
    title: "Intuitive Dashboard",
    description: "Get a bird's eye view with customizable widgets and real-time metrics.",
    image: "/images/dashboard-preview.png",
  },
  {
    title: "Seamless Module Navigation",
    description: "Access all your business modules from one intuitive interface.",
    image: "/images/modules-screen.png",
  },
  {
    title: "Secure Login Experience",
    description: "Secure access with multi-factor authentication and role-based permissions.",
    image: "/images/login-screen.png",
  },
  {
    title: "Powerful Reporting",
    description: "Generate detailed reports and visualize data with powerful analytics tools.",
    image: "/images/reports-screen.png",
  },
]

export default function ScreenshotsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.length)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + screenshots.length) % screenshots.length)
  }

  useEffect(() => {
    const interval = setInterval(goToNext, 5000)
    return () => clearInterval(interval)
  }, [goToNext])

  return (
    <section id="screenshots" className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">See BrainSpace in Action</h2>
          <p className="text-lg text-muted-foreground">
            Explore the intuitive interface and powerful features that make BrainSpace the preferred choice.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-xl shadow-2xl border border-border bg-slate-100 dark:bg-slate-800">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={currentIndex}
                initial={{
                  opacity: 0,
                  x: currentIndex > (currentIndex - 1 + screenshots.length) % screenshots.length ? 300 : -300,
                }}
                animate={{ opacity: 1, x: 0 }}
                exit={{
                  opacity: 0,
                  x: currentIndex > (currentIndex - 1 + screenshots.length) % screenshots.length ? -300 : 300,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full"
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src={screenshots[currentIndex].image || "/placeholder.svg"}
                    alt={screenshots[currentIndex].title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
                    priority={currentIndex === 0}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-2 md:left-4 -translate-y-1/2 h-10 w-10 rounded-full bg-card/80 dark:bg-slate-700/80 backdrop-blur-sm hover:bg-card dark:hover:bg-slate-700 shadow-md"
            onClick={goToPrevious}
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-2 md:right-4 -translate-y-1/2 h-10 w-10 rounded-full bg-card/80 dark:bg-slate-700/80 backdrop-blur-sm hover:bg-card dark:hover:bg-slate-700 shadow-md"
            onClick={goToNext}
            aria-label="Next screenshot"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold text-foreground">{screenshots[currentIndex].title}</h3>
            <p className="text-muted-foreground mt-1 text-sm max-w-md mx-auto">
              {screenshots[currentIndex].description}
            </p>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {screenshots.map((_, index) => (
              <button
                key={index}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ease-in-out
                ${index === currentIndex ? "bg-primary w-6" : "bg-muted hover:bg-muted-foreground/50"}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
