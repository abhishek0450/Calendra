'use client'
import { SignIn } from "@clerk/nextjs"
import { neobrutalism } from "@clerk/themes"
import Image from "next/image"

 // Marks this file as a Client Component

export default function LandingPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 flex items-center justify-center p-6 animate-fade-in">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Section with branding, heading, subheading, and illustration */}
        <section className="flex flex-col space-y-8">
            {/* App Logo */}
            <div className="space-y-6">
                

                 {/* Main Heading */}
                <h1 className="text-5xl font-bold tracking-tight text-gray-100 leading-tight">
                Smart scheduling
                <span className="block text-emerald-400">made simple</span>
                </h1>

                {/* Subheading */}
                <p className="text-lg text-gray-300 leading-relaxed">
                Powerful, intuitive scheduling for teams and professionals. Manage your time efficiently and never miss a meeting.
                </p>
            </div>

             {/* Illustration below the text */}
            <Image
            src='/assets/planning.svg'
            width={400}
            height={400}
            alt="Planning illustration"
            className="hidden md:block opacity-70"
            />
        </section>

         {/* Clerk Sign-In Component with custom theme */}
        <div className="flex justify-center md:justify-end">
            <div className="bg-gray-800 rounded-2xl shadow-2xl p-2 border border-gray-700">
                <SignIn
                routing="hash"
                appearance={{
                    elements: {
                        rootBox: "mx-auto",
                        card: "shadow-none border-0 bg-gray-800",
                    }
                }}
                />
            </div>
        </div>
        </div>
        </main>

    )
}
