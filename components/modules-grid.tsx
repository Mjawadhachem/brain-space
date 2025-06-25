"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ShoppingCart,
  BarChart3,
  Users,
  FolderKanban,
  UserRound,
  BookOpen,
  FileText,
  Package,
  ShoppingBag,
  Receipt,
  LayoutDashboard,
  FilterIcon,
  Sparkles,
  TrendingUp,
  Zap,
  ArrowUpRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const modules = [
  {
    title: "E-commerce",
    description: "Drive online sales with unified storefront management and seamless customer experiences.",
    icon: ShoppingCart,
    color: "bg-gradient-to-br from-emerald-500 to-green-600",
    category: "Sales",
    features: ["Multi-channel selling", "Inventory sync", "Payment processing"],
    popularity: "Most Popular",
    growth: "+234%",
  },
  {
    title: "Accounting",
    description: "Automate financial records, transactions, and generate comprehensive reports.",
    icon: BarChart3,
    color: "bg-gradient-to-br from-orange-500 to-amber-600",
    category: "Finance",
    features: ["Real-time reporting", "Tax compliance", "Multi-currency"],
    popularity: "Essential",
    growth: "+89%",
  },
  {
    title: "CRM",
    description: "Transform customer interactions with intelligent lead tracking and relationship management.",
    icon: Users,
    color: "bg-gradient-to-br from-blue-500 to-sky-600",
    category: "Sales",
    features: ["Lead scoring", "Pipeline management", "Customer insights"],
    popularity: "Top Rated",
    growth: "+156%",
  },
  {
    title: "Projects",
    description: "Deliver projects on time with advanced task management and team collaboration tools.",
    icon: FolderKanban,
    color: "bg-gradient-to-br from-slate-500 to-gray-600",
    category: "Operations",
    features: ["Gantt charts", "Time tracking", "Resource planning"],
    popularity: "Trending",
    growth: "+78%",
  },
  {
    title: "HR",
    description: "Streamline human resources with automated payroll, attendance, and recruitment systems.",
    icon: UserRound,
    color: "bg-gradient-to-br from-rose-500 to-red-600",
    category: "HR",
    features: ["Payroll automation", "Performance tracking", "Recruitment"],
    popularity: "Growing Fast",
    growth: "+67%",
  },
  {
    title: "Knowledge Base",
    description: "Centralize company knowledge with intelligent search and collaborative documentation.",
    icon: BookOpen,
    color: "bg-gradient-to-br from-lime-500 to-green-500",
    category: "Operations",
    features: ["Smart search", "Version control", "Team collaboration"],
    popularity: "New",
    growth: "+45%",
  },
  {
    title: "Documents",
    description: "Secure document management with advanced sharing, versioning, and access controls.",
    icon: FileText,
    color: "bg-gradient-to-br from-cyan-500 to-sky-500",
    category: "Operations",
    features: ["Cloud storage", "Access controls", "Version history"],
    popularity: "Reliable",
    growth: "+34%",
  },
  {
    title: "Inventory",
    description: "Optimize stock levels with real-time tracking, automated reordering, and warehouse management.",
    icon: Package,
    color: "bg-gradient-to-br from-teal-500 to-cyan-600",
    category: "Operations",
    features: ["Real-time tracking", "Auto-reordering", "Multi-location"],
    popularity: "Essential",
    growth: "+123%",
  },
  {
    title: "POS",
    description: "Modern point-of-sale system with integrated payments, inventory, and customer management.",
    icon: ShoppingBag,
    color: "bg-gradient-to-br from-indigo-500 to-purple-600",
    category: "Sales",
    features: ["Touch interface", "Offline mode", "Receipt printing"],
    popularity: "Retail Favorite",
    growth: "+98%",
  },
  {
    title: "Invoices",
    description: "Professional invoice generation with automated reminders and payment tracking.",
    icon: Receipt,
    color: "bg-gradient-to-br from-yellow-500 to-amber-500",
    category: "Finance",
    features: ["Auto-reminders", "Payment tracking", "Custom templates"],
    popularity: "Must-Have",
    growth: "+76%",
  },
  {
    title: "Dashboards",
    description: "Visualize business metrics with customizable, real-time dashboards and advanced analytics.",
    icon: LayoutDashboard,
    color: "bg-gradient-to-br from-violet-500 to-purple-500",
    category: "Analytics",
    features: ["Custom widgets", "Real-time data", "Export options"],
    popularity: "Power User",
    growth: "+145%",
  },
]

const categories = ["All", "Sales", "Finance", "Operations", "HR", "Analytics"]

export default function ModulesGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredModule, setHoveredModule] = useState<string | null>(null)

  const filteredModules =
    selectedCategory === "All" ? modules : modules.filter((module) => module.category === selectedCategory)

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.05, duration: 0.4, ease: "easeOut" },
    }),
  }

  const getPopularityColor = (popularity: string) => {
    switch (popularity) {
      case "Most Popular":
        return "bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
      case "Top Rated":
        return "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
      case "Trending":
        return "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
      case "New":
        return "bg-gradient-to-r from-pink-500 to-rose-500 text-white"
      default:
        return "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300"
    }
  }

  return (
    <section
      id="modules"
      className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-blue-400/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-sm border border-yellow-200/50 dark:border-yellow-700/50 rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-yellow-500" />
            <span className="text-sm font-medium text-yellow-600 dark:text-yellow-400">Comprehensive Suite</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-600 bg-clip-text text-transparent">
              Powerful Modules
            </span>
            <br />
            <span className="text-slate-900 dark:text-white">Built for Growth</span>
          </h2>

          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-10">
            Discover our comprehensive suite of integrated modules designed to transform every aspect of your business
            operations. From sales to analytics, we've got you covered.
          </p>

          <div className="flex flex-wrap justify-center gap-3 items-center">
            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <FilterIcon className="h-4 w-4" />
              <span>Filter by category:</span>
            </div>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg hover:shadow-yellow-500/25"
                    : "bg-white/50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredModules.map((module, index) => (
              <motion.div
                key={module.title + selectedCategory}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                layout
                className="group relative"
                onHoverStart={() => setHoveredModule(module.title)}
                onHoverEnd={() => setHoveredModule(null)}
              >
                <Card className="h-full relative overflow-hidden transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-2 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm group-hover:bg-white dark:group-hover:bg-slate-800">
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl blur-sm"></div>
                  <div className="absolute inset-[1px] bg-white dark:bg-slate-800 rounded-xl"></div>

                  <CardHeader className="relative pb-4 pt-6">
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`h-14 w-14 rounded-2xl ${module.color} flex items-center justify-center text-white shadow-lg relative overflow-hidden`}
                      >
                        <module.icon className="h-7 w-7 relative z-10" />
                        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </motion.div>

                      <div className="flex flex-col items-end gap-2">
                        <Badge
                          className={`text-xs font-semibold px-2 py-1 rounded-full ${getPopularityColor(module.popularity)} shadow-sm`}
                        >
                          {module.popularity}
                        </Badge>
                        <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                          <TrendingUp className="h-3 w-3" />
                          <span className="text-xs font-semibold">{module.growth}</span>
                        </div>
                      </div>
                    </div>

                    <CardTitle className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300">
                      {module.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="relative pt-0 pb-6">
                    <CardDescription className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300">
                      {module.description}
                    </CardDescription>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Key Features:</span>
                        <Badge
                          variant="outline"
                          className="text-xs bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600"
                        >
                          {module.category}
                        </Badge>
                      </div>

                      <div className="space-y-1">
                        {module.features.map((feature, idx) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + idx * 0.05 }}
                            className="flex items-center text-xs text-slate-600 dark:text-slate-400"
                          >
                            <Zap className="h-3 w-3 text-yellow-500 mr-2 flex-shrink-0" />
                            {feature}
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Hover Action */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: hoveredModule === module.title ? 1 : 0,
                        y: hoveredModule === module.title ? 0 : 10,
                      }}
                      transition={{ duration: 0.2 }}
                      className="absolute bottom-4 right-4"
                    >
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white shadow-lg rounded-full p-2 h-8 w-8"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center justify-center bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-sm border border-yellow-200/50 dark:border-yellow-700/50 rounded-2xl px-8 py-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-5 w-5 text-yellow-500" />
                <span className="text-lg font-bold text-slate-900 dark:text-white">
                  {modules.length}+ Powerful Modules
                </span>
              </div>
              <div className="h-6 w-px bg-slate-300 dark:bg-slate-600"></div>
              <span className="text-slate-600 dark:text-slate-400">More coming soon</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
