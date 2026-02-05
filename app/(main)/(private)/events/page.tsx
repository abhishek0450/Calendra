import EventCard from "@/components/cards/EventCard";
import { Button } from "@/components/ui/button";
import { getEvents } from "@/server/actions/events";
import { auth } from "@clerk/nextjs/server";
import { CalendarPlus, CalendarRange } from "lucide-react";
import Link from "next/link";

export default async function EventsPage() {
        // Get the authenticated user's ID
        const { userId, redirectToSignIn } = await auth()
        // Redirect to sign-in page if user is not authenticated
        if (!userId) return redirectToSignIn()

        const events = await getEvents(userId)

    return (
        <section className="max-w-7xl mx-auto space-y-8 animate-fade-in">
            {/* Page title and "New Event" button */}
            <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-100">
                                Events
                            </h1>
                            <p className="text-gray-400 mt-1">Manage your scheduling events</p>
                        </div>
                        <Button 
                        className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2"
                        asChild>
                            <Link href="/events/new">
                            <CalendarPlus className="size-4" /> New Event
                            </Link>
                        </Button>
                </div>

                
            {/* Show event cards if any exist, otherwise show empty state */}
            {events.length > 0 ? (
              <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {events.map(event => (
                  <EventCard key={event.id} {...event} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center gap-4 py-16 text-center">
                <div className="rounded-full bg-gray-800 p-6">
                  <CalendarRange className="size-12 text-gray-500" />
                </div>
                <div className="space-y-2">
                  <p className="text-lg font-medium text-gray-100">No events yet</p>
                  <p className="text-gray-400 max-w-md">Create your first event to get started</p>
                </div>
              </div>
            )}

        </section>
    )
}