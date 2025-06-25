"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ArrowRight,
  Users,
  Zap,
  TrendingUp,
  DollarSign,
  Calculator,
  Sparkles,
  Target,
  Award,
  Clock,
  BarChart3,
} from "lucide-react"

const plansData = {
  starter: { basePrice: 5.99, users: 5, name: "Starter" },
  growth: { basePrice: 11.99, users: 25, name: "Growth" },
}

const savingsMetrics = [
  {
    icon: TrendingUp,
    label: "Revenue Growth",
    value: "+156%",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Clock,
    label: "Time Saved",
    value: "45hrs/week",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: DollarSign,
    label: "Cost Reduction",
    value: "-32%",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Target,
    label: "Efficiency Gain",
    value: "+67%",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
]

export default function PricingCalculator() {
  const [teamSize, setTeamSize] = useState(10)
  const [estimatedCost, setEstimatedCost] = useState(0)
  const [recommendedPlan, setRecommendedPlan] = useState(plansData.growth.name)
  const [annualSavings, setAnnualSavings] = useState(0)

  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  useEffect(() => {
    let cost = 0
    let planName = plansData.starter.name
    let savings = 0

    if (teamSize <= 5) {
      cost = plansData.starter.basePrice * teamSize
      planName = plansData.starter.name
      savings = teamSize * 48 // Annual savings
    } else if (teamSize <= 25) {
      cost = plansData.growth.basePrice * teamSize
      planName = plansData.growth.name
      savings = teamSize * 96 // Annual savings
    } else {
      planName = "Enterprise"
      cost = 0
      savings = teamSize * 120 // Estimated enterprise savings
    }

    setEstimatedCost(cost)
    setRecommendedPlan(planName)
    setAnnualSavings(savings)
  }, [teamSize])

  return (
    <section ref={containerRef} className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-blue-400/20 to-purple-500/20 rounded-full blur-3xl"></div>
      </motion.div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-sm border border-yellow-200/50 dark:border-yellow-700/50 rounded-full px-6 py-3 mb-8"
          >
            <Calculator className="h-5 w-5 text-yellow-500" />
            <span className="text-sm font-semibold text-yellow-600 dark:text-yellow-400">Savings Calculator</span>
            <Sparkles className="h-4 w-4 text-yellow-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-5xl font-black mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-600 bg-clip-text text-transparent">
              Estimate Your
            </span>
            <br />
            <span className="text-slate-900 dark:text-white">Savings Potential</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
          >
            Discover how much your business could save and grow with BrainSpace. Adjust the slider to see personalized
            estimates.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Calculator Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Card className="relative overflow-hidden bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 shadow-2xl">
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-orange-500/20 to-yellow-400/20 opacity-50 rounded-xl blur-sm"></div>
              <div className="absolute inset-[1px] bg-white dark:bg-slate-800 rounded-xl"></div>

              <CardHeader className="relative">
                <CardTitle className="flex items-center text-2xl font-bold text-slate-900 dark:text-white">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="mr-3"
                  >
                    <Zap className="h-7 w-7 text-yellow-500" />
                  </motion.div>
                  Calculate Your ROI
                </CardTitle>
                <p className="text-slate-600 dark:text-slate-400">
                  See how BrainSpace scales with your team size and delivers measurable results.
                </p>
              </CardHeader>

              <CardContent className="relative space-y-8">
                {/* Team Size Slider */}
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <label htmlFor="teamSize" className="font-semibold text-slate-900 dark:text-white">
                      Team Size
                    </label>
                    <motion.div
                      key={teamSize}
                      initial={{ scale: 1.2, color: "#f59e0b" }}
                      animate={{ scale: 1, color: "#1e293b" }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-2 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 px-4 py-2 rounded-full border border-yellow-200/50"
                    >
                      <Users className="h-5 w-5 text-yellow-500" />
                      <span className="text-xl font-bold text-yellow-600 dark:text-yellow-400">{teamSize} users</span>
                    </motion.div>
                  </div>

                  <div className="relative">
                    <Slider
                      id="teamSize"
                      min={1}
                      max={100}
                      step={1}
                      value={[teamSize]}
                      onValueChange={(value) => setTeamSize(value[0])}
                      className="[&>span:first-child]:h-2 [&>span:first-child]:bg-gradient-to-r [&>span:first-child]:from-yellow-400 [&>span:first-child]:to-orange-500 [&_[role=slider]]:bg-gradient-to-r [&_[role=slider]]:from-yellow-500 [&_[role=slider]]:to-orange-500 [&_[role=slider]]:border-0 [&_[role=slider]]:shadow-lg [&_[role=slider]]:w-6 [&_[role=slider]]:h-6"
                    />
                    <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mt-2">
                      <span>1 user</span>
                      <span>50 users</span>
                      <span>100+ users</span>
                    </div>
                  </div>
                </div>

                {/* Results Display */}
                <motion.div
                  key={recommendedPlan + estimatedCost}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="space-y-6 p-6 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800/50 dark:to-slate-700/50 rounded-2xl border border-slate-200/50 dark:border-slate-600/50"
                >
                  <div className="text-center">
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Recommended Plan:</p>
                    <motion.div
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg"
                    >
                      <Award className="h-5 w-5" />
                      {recommendedPlan}
                    </motion.div>
                  </div>

                  {recommendedPlan !== "Enterprise" && (
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl">
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Monthly Cost</p>
                        <motion.p
                          key={estimatedCost}
                          initial={{ scale: 1.2 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                          className="text-2xl font-black text-slate-900 dark:text-white"
                        >
                          ${estimatedCost.toFixed(2)}
                        </motion.p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">per month</p>
                      </div>
                      <div className="text-center p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl">
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Annual Savings</p>
                        <motion.p
                          key={annualSavings}
                          initial={{ scale: 1.2 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                          className="text-2xl font-black text-green-600"
                        >
                          ${annualSavings.toFixed(0)}
                        </motion.p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">saved yearly</p>
                      </div>
                    </div>
                  )}

                  {recommendedPlan === "Enterprise" && (
                    <div className="text-center p-6 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-xl border border-purple-200/50">
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Enterprise Solution</h4>
                      <p className="text-slate-600 dark:text-slate-400 mb-4">
                        For teams larger than 25, we offer custom Enterprise solutions with unlimited scalability.
                      </p>
                      <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                        Estimated Annual Savings: ${annualSavings.toLocaleString()}+
                      </div>
                    </div>
                  )}
                </motion.div>

                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white text-lg py-6 shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  <Link href={recommendedPlan === "Enterprise" ? "#contact" : "/signup"}>
                    <motion.span
                      className="flex items-center justify-center"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {recommendedPlan === "Enterprise" ? "Contact Sales" : `Get Started with ${recommendedPlan}`}
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </motion.span>
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Savings Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="space-y-6"
          >
            <div className="text-center lg:text-left mb-8">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Real Results from{" "}
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                  Real Businesses
                </span>
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                See the measurable impact BrainSpace delivers across key business metrics.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {savingsMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.6, type: "spring" }}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                  className="relative group"
                >
                  <Card className="relative overflow-hidden bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:border-yellow-400/50 transition-all duration-300 h-full">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        animate={{
                          rotate: [0, 5, -5, 0],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: index * 0.5,
                        }}
                        className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl ${metric.bgColor} mb-4`}
                      >
                        <metric.icon className={`h-6 w-6 ${metric.color}`} />
                      </motion.div>
                      <div className={`text-3xl font-black ${metric.color} mb-2`}>{metric.value}</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">{metric.label}</div>
                    </CardContent>

                    {/* Hover Glow Effect */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 pointer-events-none"
                    />
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="text-center lg:text-left mt-8 p-6 bg-gradient-to-r from-slate-100/50 to-blue-100/50 dark:from-slate-800/50 dark:to-slate-700/50 rounded-2xl border border-slate-200/50 dark:border-slate-600/50"
            >
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
                <BarChart3 className="h-6 w-6 text-yellow-500" />
                <span className="text-lg font-bold text-slate-900 dark:text-white">Ready to see these results?</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Join thousands of businesses already experiencing transformational growth with BrainSpace.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  14-day free trial
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  No credit card required
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Setup in minutes
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
