"use client"

import { MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export default function ChatWidgetMockup() {
  const { toast } = useToast()

  const handleChatOpen = () => {
    toast({
      title: "Chat Widget",
      description: "Live chat is not yet implemented. This is a mockup.",
    })
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="icon"
        className="rounded-full w-14 h-14 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
        onClick={handleChatOpen}
        aria-label="Open chat"
      >
        <MessageSquare className="h-6 w-6" />
      </Button>
    </div>
  )
}
