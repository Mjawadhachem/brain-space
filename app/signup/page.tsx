"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Eye, EyeOff, Check, X, Loader2, User, Building, Lock } from "lucide-react" // Added icons
import { Progress } from "@/components/ui/progress" // Added

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [subdomainAvailable, setSubdomainAvailable] = useState<boolean | null>(null)
  const [checkingSubdomain, setCheckingSubdomain] = useState(false)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    subdomain: "",
    industry: "",
    companySize: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
    subscribeNewsletter: true,
  })

  const [passwordStrength, setPasswordStrength] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false,
  })

  const checkPasswordStrength = (password: string) => {
    setPasswordStrength({
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /\d/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    })
  }

  const checkSubdomainAvailability = async (subdomain: string) => {
    if (subdomain.length < 3) {
      setSubdomainAvailable(null)
      return
    }
    setCheckingSubdomain(true)
    setTimeout(() => {
      const unavailableSubdomains = ["admin", "api", "www", "mail", "test", "demo", "app", "my"]
      setSubdomainAvailable(
        !unavailableSubdomains.includes(subdomain.toLowerCase()) && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(subdomain),
      )
      setCheckingSubdomain(false)
    }, 1000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
      return
    }
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      window.location.href = `/login?subdomain=${formData.subdomain}&new=true` // Mock redirect
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }))
    if (name === "password") checkPasswordStrength(value)
    if (name === "subdomain") checkSubdomainAvailability(value)
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.firstName && formData.lastName && formData.email && formData.phone.length > 5 // Basic phone validation
      case 2:
        return (
          formData.companyName &&
          formData.subdomain &&
          formData.industry &&
          formData.companySize &&
          subdomainAvailable === true
        )
      case 3:
        return (
          formData.password &&
          formData.confirmPassword &&
          formData.password === formData.confirmPassword &&
          Object.values(passwordStrength).every(Boolean) &&
          formData.agreeToTerms
        )
      default:
        return false
    }
  }

  const stepTitles = ["Personal Information", "Company Details", "Account Setup"]
  const stepIcons = [User, Building, Lock]

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          /* Existing Step 1 JSX from forked code */ <div className="space-y-4">
            {" "}
            <div className="grid grid-cols-2 gap-4">
              {" "}
              <div className="space-y-2">
                {" "}
                <Label htmlFor="firstName">First Name</Label>{" "}
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />{" "}
              </div>{" "}
              <div className="space-y-2">
                {" "}
                <Label htmlFor="lastName">Last Name</Label>{" "}
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />{" "}
              </div>{" "}
            </div>{" "}
            <div className="space-y-2">
              {" "}
              <Label htmlFor="email">Email Address</Label>{" "}
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@company.com"
                value={formData.email}
                onChange={handleChange}
                required
              />{" "}
            </div>{" "}
            <div className="space-y-2">
              {" "}
              <Label htmlFor="phone">Phone Number</Label>{" "}
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+1 (555) 123-4567"
                value={formData.phone}
                onChange={handleChange}
                required
              />{" "}
            </div>{" "}
          </div>
        )
      case 2:
        return (
          /* Existing Step 2 JSX from forked code, with refined subdomain check message */ <div className="space-y-4">
            {" "}
            <div className="space-y-2">
              {" "}
              <Label htmlFor="companyName">Company Name</Label>{" "}
              <Input
                id="companyName"
                name="companyName"
                placeholder="Your Company Inc."
                value={formData.companyName}
                onChange={handleChange}
                required
              />{" "}
            </div>{" "}
            <div className="space-y-2">
              {" "}
              <Label htmlFor="subdomain">Choose Your Subdomain</Label>{" "}
              <div className="flex">
                {" "}
                <Input
                  id="subdomain"
                  name="subdomain"
                  placeholder="yourcompany"
                  value={formData.subdomain}
                  onChange={handleChange}
                  className="rounded-r-none"
                  required
                />{" "}
                <div className="flex items-center px-3 bg-muted border border-l-0 rounded-r-md text-sm text-muted-foreground">
                  {" "}
                  .brainspace.com{" "}
                </div>{" "}
              </div>{" "}
              {formData.subdomain && (
                <div
                  className={`flex items-center text-xs mt-1.5 ${checkingSubdomain ? "text-muted-foreground" : subdomainAvailable === true ? "text-green-600" : subdomainAvailable === false ? "text-red-600" : "hidden"}`}
                >
                  {" "}
                  {checkingSubdomain ? (
                    <Loader2 className="animate-spin h-3 w-3 mr-1.5" />
                  ) : subdomainAvailable === true ? (
                    <Check className="h-3 w-3 mr-1.5" />
                  ) : (
                    <X className="h-3 w-3 mr-1.5" />
                  )}{" "}
                  {checkingSubdomain
                    ? "Checking..."
                    : subdomainAvailable === true
                      ? `${formData.subdomain}.brainspace.com is available!`
                      : "Subdomain not available or invalid."}{" "}
                </div>
              )}{" "}
            </div>{" "}
            <div className="space-y-2">
              {" "}
              <Label htmlFor="industry">Industry</Label>{" "}
              <Select
                onValueChange={(value) => setFormData((prev) => ({ ...prev, industry: value }))}
                value={formData.industry}
              >
                {" "}
                <SelectTrigger>
                  {" "}
                  <SelectValue placeholder="Select your industry" />{" "}
                </SelectTrigger>{" "}
                <SelectContent>
                  {" "}
                  <SelectItem value="technology">Technology</SelectItem> <SelectItem value="retail">Retail</SelectItem>{" "}
                  <SelectItem value="manufacturing">Manufacturing</SelectItem>{" "}
                  <SelectItem value="other">Other</SelectItem>{" "}
                </SelectContent>{" "}
              </Select>{" "}
            </div>{" "}
            <div className="space-y-2">
              {" "}
              <Label htmlFor="companySize">Company Size</Label>{" "}
              <Select
                onValueChange={(value) => setFormData((prev) => ({ ...prev, companySize: value }))}
                value={formData.companySize}
              >
                {" "}
                <SelectTrigger>
                  {" "}
                  <SelectValue placeholder="Select company size" />{" "}
                </SelectTrigger>{" "}
                <SelectContent>
                  {" "}
                  <SelectItem value="1-10">1-10 employees</SelectItem>{" "}
                  <SelectItem value="11-50">11-50 employees</SelectItem>{" "}
                  <SelectItem value="500+">500+ employees</SelectItem>{" "}
                </SelectContent>{" "}
              </Select>{" "}
            </div>{" "}
          </div>
        )
      case 3:
        return (
          /* Existing Step 3 JSX from forked code, with refined password strength indicators */ <div className="space-y-4">
            {" "}
            <div className="space-y-2">
              {" "}
              <Label htmlFor="password">Password</Label>{" "}
              <div className="relative">
                {" "}
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  className="pr-10"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />{" "}
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {" "}
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <Eye className="h-5 w-5 text-muted-foreground" />
                  )}{" "}
                </button>{" "}
              </div>{" "}
              {formData.password && (
                <div className="space-y-1 pt-2">
                  {" "}
                  <p className="text-xs font-medium text-muted-foreground">Password Requirements:</p>{" "}
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
                    {" "}
                    {Object.entries({
                      length: "At least 8 characters",
                      uppercase: "One uppercase letter",
                      lowercase: "One lowercase letter",
                      number: "One number",
                      special: "One special character",
                    }).map(([key, label]) => (
                      <div
                        key={key}
                        className={`flex items-center ${passwordStrength[key as keyof typeof passwordStrength] ? "text-green-600" : "text-red-500"}`}
                      >
                        {" "}
                        {passwordStrength[key as keyof typeof passwordStrength] ? (
                          <Check className="h-3 w-3 mr-1 flex-shrink-0" />
                        ) : (
                          <X className="h-3 w-3 mr-1 flex-shrink-0" />
                        )}{" "}
                        {label}{" "}
                      </div>
                    ))}{" "}
                  </div>{" "}
                </div>
              )}{" "}
            </div>{" "}
            <div className="space-y-2">
              {" "}
              <Label htmlFor="confirmPassword">Confirm Password</Label>{" "}
              <div className="relative">
                {" "}
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  className="pr-10"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />{" "}
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {" "}
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <Eye className="h-5 w-5 text-muted-foreground" />
                  )}{" "}
                </button>{" "}
              </div>{" "}
              {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                <div className="text-red-600 text-xs flex items-center mt-1">
                  {" "}
                  <X className="h-3 w-3 mr-1" /> Passwords do not match{" "}
                </div>
              )}{" "}
            </div>{" "}
            <div className="space-y-3 pt-2">
              {" "}
              <div className="flex items-start space-x-2">
                {" "}
                <Checkbox
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, agreeToTerms: checked as boolean }))}
                  className="mt-0.5"
                />{" "}
                <Label htmlFor="agreeToTerms" className="text-sm font-normal leading-snug text-muted-foreground">
                  {" "}
                  I agree to the{" "}
                  <Link href="/terms" className="text-brand-500 hover:underline">
                    {" "}
                    Terms of Service{" "}
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-brand-500 hover:underline">
                    {" "}
                    Privacy Policy{" "}
                  </Link>{" "}
                </Label>{" "}
              </div>{" "}
              <div className="flex items-start space-x-2">
                {" "}
                <Checkbox
                  id="subscribeNewsletter"
                  name="subscribeNewsletter"
                  checked={formData.subscribeNewsletter}
                  onCheckedChange={(checked) =>
                    setFormData((prev) => ({ ...prev, subscribeNewsletter: checked as boolean }))
                  }
                  className="mt-0.5"
                />{" "}
                <Label htmlFor="subscribeNewsletter" className="text-sm font-normal leading-snug text-muted-foreground">
                  {" "}
                  Subscribe to our newsletter for product updates and tips{" "}
                </Label>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-8 px-4 sm:py-12">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 mb-6">
            <Image
              src="/images/brainspace-logo.png"
              alt="BrainSpace Logo"
              width={40}
              height={40}
              className="dark:hidden"
            />
            <Image
              src="/images/brainspace-logo-white.svg"
              alt="BrainSpace Logo Dark"
              width={40}
              height={40}
              className="hidden dark:block"
            />
            <span className="text-2xl font-bold text-foreground">BrainSpace</span>
          </Link>
          <h1 className="text-3xl font-bold text-foreground">Create Your Account</h1>
          <p className="text-muted-foreground mt-2">Join BrainSpace and get your free 14-day trial.</p>
        </div>

        <Card className="shadow-xl border-border">
          <CardHeader>
            <div className="flex items-center space-x-3 mb-4">
              {stepIcons.map((Icon, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${currentStep === index + 1 ? "border-brand-500 bg-brand-500/10 text-brand-500" : currentStep > index + 1 ? "border-green-500 bg-green-500/10 text-green-500" : "border-border bg-muted text-muted-foreground"}`}
                >
                  <Icon className="w-5 h-5" />
                </div>
              ))}
            </div>
            <Progress value={(currentStep / 3) * 100} className="w-full h-2 [&>div]:bg-brand-500" />
            <CardTitle className="text-xl pt-4">{stepTitles[currentStep - 1]}</CardTitle>
            <CardDescription>
              Step {currentStep} of 3.
              {currentStep === 1 && " Let's start with your basic information."}
              {currentStep === 2 && " Tell us about your company."}
              {currentStep === 3 && " Secure your new BrainSpace account."}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="min-h-[300px]">
                {" "}
                {/* Ensure consistent height for steps */}
                {renderStep()}
              </div>
              <div className="flex gap-4 mt-8">
                {currentStep > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1"
                    onClick={() => setCurrentStep(currentStep - 1)}
                    disabled={isLoading}
                  >
                    Back
                  </Button>
                )}
                <Button
                  type="submit"
                  className={`flex-1 bg-primary hover:bg-primary/90 text-primary-foreground ${currentStep === 1 ? "w-full" : ""}`}
                  disabled={!isStepValid() || isLoading}
                >
                  {isLoading && currentStep === 3 ? (
                    <>
                      <Loader2 className="animate-spin mr-2 h-5 w-5" /> Creating Account...
                    </>
                  ) : currentStep === 3 ? (
                    "Create Account & Start Trial"
                  ) : (
                    "Continue"
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          {currentStep === 1 ? (
            <>
              Already have an account?{" "}
              <Link href="/login" className="text-brand-500 hover:underline font-medium">
                Sign in
              </Link>
            </>
          ) : (
            <button onClick={() => setCurrentStep(1)} className="text-brand-500 hover:underline">
              Back to step 1
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
