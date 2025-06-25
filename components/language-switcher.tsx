"use client"

import * as React from "react"
import { LanguagesIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function LanguageSwitcher() {
  const [currentLanguage, setCurrentLanguage] = React.useState("English")
  // In a real app, you'd use i18n library to change language
  const selectLanguage = (lang: string) => {
    setCurrentLanguage(lang)
    // Add logic to change language here
    alert(`Language switched to ${lang} (mock)`)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Switch language">
          <LanguagesIcon className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => selectLanguage("English")}>
          🇺🇸 English {currentLanguage === "English" && <span className="ml-2">✓</span>}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => selectLanguage("العربية")}>
          🇸🇦 العربية {currentLanguage === "العربية" && <span className="ml-2">✓</span>}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => selectLanguage("Español")}>
          🇪🇸 Español {currentLanguage === "Español" && <span className="ml-2">✓</span>}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
