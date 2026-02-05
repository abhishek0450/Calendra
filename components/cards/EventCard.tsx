import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { formatEventDescription } from "@/lib/formatters"
import { Button } from "../ui/button"
import Link from "next/link"
import { CopyEventButton } from "../CopyEventButton"

  // Type definition for event card props
type EventCardProps = {
    id: string
    isActive: boolean
    name: string
    description: string | null
    durationInMinutes: number
    clerkUserId: string
  }
  
  // Component to display a single event card
  export default function EventCard ({
    id,
    isActive,
    name,
    description,
    durationInMinutes,
    clerkUserId,
  }: EventCardProps) {

    return (
        <Card className={cn("flex flex-col h-[320px] border border-gray-700 shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-1 bg-gray-800", !isActive && "bg-gray-800/50 opacity-75")}>
          {/* Card header with title and formatted duration */}
          <CardHeader className={cn("flex-shrink-0", !isActive && "opacity-50")}>
            <CardTitle className="line-clamp-2">{name}</CardTitle>
            <CardDescription>
              {formatEventDescription(durationInMinutes)}
            </CardDescription>
          </CardHeader>
    
          {/* Show event description if available - scrollable content area */}
          {description != null && (
            <CardContent className={cn("flex-1 overflow-y-auto text-sm", !isActive && "opacity-50")}>
              {description}
            </CardContent>
          )}
    
          {/* Card footer with copy and edit buttons */}
          <CardFooter className="flex justify-end gap-2 flex-shrink-0 border-t border-gray-700 pt-4">
            {/* Show copy button only if event is active */}
            {isActive && (
              <CopyEventButton
                variant="outline"
                eventId={id}
                clerkUserId={clerkUserId}
              />
            )}
            {/* Edit event button */}
            <Button 
            className="bg-emerald-600 hover:bg-emerald-700 text-white"
            asChild>
              <Link href={`/events/${id}/edit`}>Edit</Link>
            </Button>
          </CardFooter>
        </Card>
      )

  }