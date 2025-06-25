"use client"

import { useState, useRef } from "react"
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  CheckIcon,
  Users,
  Database,
  Mail,
  BarChart2,
  Smartphone,
  ShieldCheck,
  Settings,
  Zap,
  Star,
  Crown,
  Sparkles,
  TrendingUp,
  ArrowRight,
  X,
  Rocket,
  Target,
  Award,
} from "lucide-react"
import PricingCalculator from "./pricing-calculator"

const featureIcons = {
  users: Users,
  storage: Database,
  support: Mail,
  reporting: BarChart2,
  "Mobile app access": Smartphone,
  "API access": Settings,
  "Custom workflows": Zap,
  "Advanced security": ShieldCheck,
  "Custom modules": Settings,
  "SLA guarantee": ShieldCheck,
  "All modules included": Zap,
  "Priority support": Star,
  "Basic integrations": Zap,
  "Dedicated account manager": Users,
  "All integrations": Zap,
  "White labeling": Star,
  "Core modules (CRM, Invoicing, Contacts)": Zap,
} as const

type FeatureName = keyof typeof featureIcons

const getFeatureIcon = (featureText: string) => {
  for (const key in featureIcons) {
    if (featureText.toLowerCase().includes(key.toLowerCase().split(" ")[0])) {
      return featureIcons[key as FeatureName]
    }
  }
  return CheckIcon
}

const pricingPlansConfig = {
  monthly: [
    {
      name: "Starter",
      description: "Perfect for small teams & startups",
      price: "$7.25",
      originalPrice: "$9.99",
      features: [
        "Up to 5 users",
        "Core modules (CRM, Invoicing, Contacts)",
        "5GB storage",
        "Email support",
        "Basic reporting",
        "Mobile app access",
      ],
      limitations: ["No API access", "Limited integrations"],
      popular: false,
      cta: "Start Free Trial",
      gradient: "from-blue-500 to-cyan-500",
      icon: Rocket,
      savings: "Save $33",
    },
    {
      name: "Growth",
      description: "Ideal for growing businesses",
      price: "$14.50",
      originalPrice: "$19.99",
      popular: true,
      features: [
        "Up to 25 users",
        "All modules included",
        "50GB storage",
        "Priority support",
        "Advanced reporting",
        "API access",
        "Basic integrations",
        "Custom workflows",
      ],
      limitations: [],
      cta: "Choose Growth Plan",
      gradient: "from-yellow-500 to-orange-500",
      icon: Crown,
      savings: "Save $66",
    },
    {
      name: "Enterprise",
      description: "Built for large organizations",
      price: "Custom",
      features: [
        "Unlimited users",
        "Unlimited storage",
        "24/7 premium support",
        "Custom modules",
        "Advanced security",
        "Dedicated account manager",
        "All integrations",
        "SLA guarantee",
        "White labeling",
      ],
      limitations: [],
      popular: false,
      cta: "Contact Sales",
      gradient: "from-purple-500 to-indigo-500",
      icon: Award,
      savings: "Custom Quote",
    },
  ],
  yearly: [
    {
      name: "Starter",
      description: "Perfect for small teams & startups",
      price: "$5.99",
      originalPrice: "$9.99",
      features: [
        "Up to 5 users",
        "Core modules (CRM, Invoicing, Contacts)",
        "5GB storage",
        "Email support",
        "Basic reporting",
        "Mobile app access",
      ],
      limitations: ["No API access", "Limited integrations"],
      popular: false,
      cta: "Start Free Trial",
      gradient: "from-blue-500 to-cyan-500",
      icon: Rocket,
      savings: "Save $48",
    },
    {
      name: "Growth",
      description: "Ideal for growing businesses",
      price: "$11.99",
      originalPrice: "$19.99",
      popular: true,
      features: [
        "Up to 25 users",
        "All modules included",
        "50GB storage",
        "Priority support",
        "Advanced reporting",
        "API access",
        "Basic integrations",
        "Custom workflows",
      ],
      limitations: [],
      cta: "Choose Growth Plan",
      gradient: "from-yellow-500 to-orange-500",
      icon: Crown,
      savings: "Save $96",
    },
    {
      name: "Enterprise",
      description: "Built for large organizations",
      price: "Custom",
      features: [
        "Unlimited users",
        "Unlimited storage",
        "24/7 premium support",
        "Custom modules",
        "Advanced security",
        "Dedicated account manager",
        "All integrations",
        "SLA guarantee",
        "White labeling",
      ],
      limitations: [],
      popular: false,
      cta: "Contact Sales",
      gradient: "from-purple-500 to-indigo-500",
      icon: Award,
      savings: "Custom Quote",
    },
  ],
}

const floatingElements = [
  { icon: TrendingUp, color: "text-green-500", position: { top: "15%", left: "5%" } },
  { icon: Target, color: "text-blue-500", position: { top: "25%", right: "8%" } },
  { icon: Star, color: "text-yellow-500", position: { bottom: "30%", left: "3%" } },
  { icon: Zap, color: "text-purple-500", position: { bottom: "20%", right: "5%" } },
]

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const floatingY = useTransform(scrollYProgress, [0, 1], ["0px", "-50px"])

  const currentPlans = pricingPlansConfig[billingCycle]

  return (
    <section
      ref={containerRef}
      id="pricing"
      className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      {/* Animated Background Elements */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-blue-400/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-green-400/5 to-cyan-500/5 rounded-full blur-3xl"></div>
      </motion.div>

      {/* Floating Decorative Elements */}
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
            className="p-3 bg-white/10 dark:bg-slate-800/10 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-slate-700/20"
          >
            <element.icon className={`h-6 w-6 ${element.color}`} />
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
            <Sparkles className="h-5 w-5 text-yellow-500" />
            <span className="text-sm font-semibold text-yellow-600 dark:text-yellow-400">Transparent Pricing</span>
            <ArrowRight className="h-4 w-4 text-yellow-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight"
          >
            <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-600 bg-clip-text text-transparent">
              Simple, Transparent
            </span>
            <br />
            <span className="text-slate-900 dark:text-white">Pricing</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto mb-10"
          >
            Choose the perfect plan for your business. All plans include core ERP functionality with no hidden fees.
            Start your free trial today.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="inline-block"
          >
            <Tabs
              value={billingCycle}
              onValueChange={(value) => setBillingCycle(value as "monthly" | "yearly")}
              className="w-auto"
            >
              <TabsList className="grid w-full grid-cols-2 h-auto p-1 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-xl shadow-lg">
                <TabsTrigger
                  value="monthly"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-orange-500 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-lg py-3 px-6 text-sm font-medium transition-all duration-300"
                >
                  Monthly
                </TabsTrigger>
                <TabsTrigger
                  value="yearly"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-orange-500 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-lg py-3 px-6 text-sm font-medium transition-all duration-300"
                >
                  Yearly
                  <Badge
                    variant="secondary"
                    className="ml-2 bg-green-100 text-green-700 border-green-300 dark:bg-green-700 dark:text-green-100 dark:border-green-500 text-xs px-2 py-0.5"
                  >
                    Save 40%
                  </Badge>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch mb-20">
          <AnimatePresence mode="wait">
            {currentPlans.map((plan, index) => (
              <motion.div
                key={plan.name + billingCycle}
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: plan.popular ? 1.02 : 1 }}
                exit={{ opacity: 0, y: -100, scale: 0.8 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
                whileHover={{
                  y: -15,
                  scale: plan.popular ? 1.05 : 1.03,
                  rotateY: 5,
                  transition: { duration: 0.4, type: "spring", stiffness: 300 },
                }}
                onHoverStart={() => setHoveredPlan(plan.name)}
                onHoverEnd={() => setHoveredPlan(null)}
                className={`relative ${plan.popular ? "z-10" : ""}`}
                style={{ perspective: "1000px" }}
              >
                <PricingCard plan={plan} billingCycle={billingCycle} isHovered={hoveredPlan === plan.name} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pricing Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <PricingCalculator />
        </motion.div>
      </div>
    </section>
  )
}

function PricingCard({
  plan,
  billingCycle,
  isHovered,
}: {
  plan: (typeof pricingPlansConfig)["monthly"][0]
  billingCycle: "monthly" | "yearly"
  isHovered: boolean
}) {
  return (
    <Card
      className={`relative overflow-hidden transition-all duration-500 w-full flex flex-col h-full max-w-sm mx-auto
        ${
          plan.popular
            ? "border-2 border-yellow-500 shadow-2xl bg-white dark:bg-slate-800"
            : "border border-slate-200 dark:border-slate-700 hover:border-yellow-400 dark:hover:border-yellow-500 shadow-xl hover:shadow-2xl bg-white dark:bg-slate-800"
        }`}
    >
      {/* Enhanced Animated Background Gradient */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: isHovered ? 0.15 : 0,
          scale: isHovered ? 1.1 : 0.8,
          rotate: isHovered ? 5 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} pointer-events-none blur-sm`}
      />

      {/* Glow Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.05 : 0.95,
        }}
        transition={{ duration: 0.3 }}
        className={`absolute -inset-1 bg-gradient-to-r ${plan.gradient} rounded-xl blur-lg opacity-30 pointer-events-none`}
      />

      {/* Shimmer Effect */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isHovered ? "100%" : "-100%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
        style={{ transform: "skewX(-20deg)" }}
      />

      {/* Popular Badge */}
      {plan.popular && (
        <motion.div
          initial={{ opacity: 0, scale: 0, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        >
          <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 text-sm font-bold shadow-lg border-0">
            <Crown className="h-4 w-4 mr-1" />
            Most Popular
          </Badge>
        </motion.div>
      )}

      <CardHeader className={`relative pt-10 ${plan.popular ? "pb-4" : "pb-3"}`}>
        {/* Plan Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{
            scale: 1,
            rotate: 0,
            y: isHovered ? -5 : 0,
          }}
          transition={{
            delay: 0.2,
            duration: 0.6,
            type: "spring",
            y: { duration: 0.3 },
          }}
          className="flex justify-center mb-4"
        >
          <div className={`p-3 rounded-2xl bg-gradient-to-br ${plan.gradient} shadow-lg relative overflow-hidden`}>
            <plan.icon className="h-6 w-6 text-white relative z-10" />
            <motion.div
              animate={{
                scale: isHovered ? [1, 1.2, 1] : 1,
                opacity: isHovered ? [0.5, 1, 0.5] : 0,
              }}
              transition={{ duration: 1, repeat: isHovered ? Number.POSITIVE_INFINITY : 0 }}
              className="absolute inset-0 bg-white/30 rounded-2xl"
            />
          </div>
        </motion.div>

        <div className="text-center">
          <CardTitle className="text-xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</CardTitle>
          <CardDescription className="text-slate-600 dark:text-slate-400 mb-3 text-sm">
            {plan.description}
          </CardDescription>

          {/* Savings Badge */}
          {billingCycle === "yearly" && plan.price !== "Custom" && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="inline-flex items-center mb-3"
            >
              <Badge
                variant="outline"
                className="bg-green-50 text-green-700 border-green-300 dark:bg-green-900/50 dark:text-green-300 dark:border-green-600 text-xs"
              >
                <TrendingUp className="h-3 w-3 mr-1" />
                {plan.savings}
              </Badge>
            </motion.div>
          )}
        </div>
      </CardHeader>

      <CardContent className="flex-grow relative px-4">
        {/* Price Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mb-6"
        >
          <div className="flex items-baseline justify-center">
            <motion.span
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.3 }}
              className={`text-4xl font-black ${
                plan.popular
                  ? "bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent"
                  : "text-slate-900 dark:text-white"
              }`}
            >
              {plan.price}
            </motion.span>
            {plan.price !== "Custom" && (
              <>
                <span className="text-slate-500 dark:text-slate-400 ml-2 text-sm">
                  / {billingCycle === "monthly" ? "month" : "month"}
                </span>
                {plan.originalPrice && (
                  <span className="text-sm text-slate-400 line-through ml-2">{plan.originalPrice}</span>
                )}
              </>
            )}
          </div>
          {plan.price !== "Custom" && billingCycle === "yearly" && (
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Billed annually</p>
          )}
        </motion.div>

        {/* Features List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="space-y-3 mb-4"
        >
          {plan.features.slice(0, 6).map((feature, idx) => {
            const Icon = getFeatureIcon(feature)
            return (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + idx * 0.05, duration: 0.3 }}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                className="flex items-start"
              >
                <div
                  className={`p-1 rounded-full ${
                    plan.popular ? "bg-yellow-500" : "bg-green-500"
                  } mr-3 mt-0.5 flex-shrink-0`}
                >
                  <Icon className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm text-slate-700 dark:text-slate-300">{feature}</span>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Limitations */}
        {plan.limitations && plan.limitations.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="border-t border-slate-200 dark:border-slate-700 pt-3 mt-3"
          >
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">Not included:</p>
            <div className="space-y-1">
              {plan.limitations.map((limitation, idx) => (
                <motion.div
                  key={limitation}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + idx * 0.05, duration: 0.3 }}
                  className="flex items-start text-slate-400 dark:text-slate-500"
                >
                  <X className="h-3 w-3 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-xs">{limitation}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </CardContent>

      <CardFooter className="mt-auto relative px-4 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="w-full"
        >
          <Button
            className={`w-full text-sm py-4 h-auto font-semibold transition-all duration-300 relative overflow-hidden ${
              plan.popular
                ? "bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl"
                : "bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 shadow-lg hover:shadow-xl"
            }`}
            size="lg"
          >
            <motion.span
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center"
            >
              {plan.cta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </motion.span>
          </Button>
        </motion.div>
      </CardFooter>

      {/* Enhanced Hover Glow Effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: isHovered ? 0.1 : 0,
          scale: isHovered ? 1.2 : 0.8,
        }}
        transition={{ duration: 0.4 }}
        className={`absolute inset-0 bg-gradient-to-r ${plan.gradient} pointer-events-none rounded-lg blur-xl`}
      />
    </Card>
  )
}
