"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import Image from "next/image"

const steps = [
  {
    title: "Onboard",
    description: "Quick setup with guided onboarding. Import your data or start fresh with our templates.",
    image: "/images/onboarding.png",
  },
  {
    title: "Customize",
    description: "Configure modules to match your business needs. Set up workflows, roles, and permissions.",
    image: "/images/customize.png",
  },
  {
    title: "Operate",
    description: "Run your daily operations with integrated modules. Automate routine tasks and focus on growth.",
    image: "/images/operate.png",
  },
  {
    title: "Analyze",
    description: "Get insights from real-time dashboards. Make data-driven decisions to optimize your business.",
    image: "/images/analyze.png",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-slate-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-slate-600">
            Getting started with BrainSpace is simple. Our step-by-step process ensures a smooth transition to better
            business management.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 hidden md:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col relative z-10">
                  <div className="mx-auto md:mx-0 h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-slate-600 mb-6">{step.description}</p>
                  <div className="mt-auto rounded-lg overflow-hidden border border-slate-200">
                    <Image
                      src={step.image || "/placeholder.svg"}
                      alt={step.title}
                      width={400}
                      height={200}
                      className="w-full h-32 object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-lg font-medium text-slate-700 mb-6">Ready to transform your business operations?</p>
          <div className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary/10 text-primary">
            <CheckCircle className="h-5 w-5 mr-2" />
            <span>No credit card required to get started</span>
          </div>
        </div>
      </div>
    </section>
  )
}
