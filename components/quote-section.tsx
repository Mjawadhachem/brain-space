"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function QuoteSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            <div className="relative flex items-center">
              <div className="flex-shrink-0 mr-4">
                <Image src="/images/quote-bubble.png" alt="Quote" width={300} height={150} className="w-full h-auto" />
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8 relative">
                <blockquote className="text-2xl md:text-3xl leading-relaxed mb-6 text-gray-800">
                  "If you simplify everything, you can do anything!"
                </blockquote>
                <footer className="text-lg text-gray-600">
                  — <cite className="font-medium">Bill McDermott, former CEO of SAP</cite>
                </footer>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
              <p className="text-lg text-gray-700">
                At BrainSpace, we believe in empowering businesses to focus on what matters most -
                <span className="font-medium text-xl text-primary"> growing and innovating</span>, not managing complex
                systems.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
