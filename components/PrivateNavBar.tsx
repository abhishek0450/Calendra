'use client'

import { PrivateNavLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PrivateNavBar() {
    const pathname = usePathname();

    return (
        <nav className="flex justify-between items-center fixed z-50 w-full h-20 bg-gray-900/95 backdrop-blur-md px-8 border-b border-gray-700 shadow-lg">
              {/* Logo */}
              <Link href="/events" className="flex items-center gap-2 transition-opacity hover:opacity-70">
                
                <span className="text-xl font-semibold text-gray-100 max-sm:hidden">Schedule</span>
              </Link>

              {/* Nav Links */}
              <section className="flex items-center gap-1">
                <div className="flex gap-1">
                  {PrivateNavLinks.map((item) => {
                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
                    
                    return (
                      <Link
                        href={item.route}
                        key={item.label}
                        className={
                          cn('flex gap-3 items-center px-4 py-2 rounded-lg transition-all duration-200',
                            isActive 
                              ? 'bg-emerald-500/20 text-emerald-400' 
                              : 'text-gray-300 hover:bg-gray-800 hover:text-gray-100'
                          )
                        }
                      >
                        <Image
                          src={item.imgURL}
                          alt={item.label}
                          width={20}
                          height={20}
                          className={cn(isActive && 'brightness-0 saturate-100 hue-rotate-180')}
                        />
                        
                        <p className={cn(
                            "text-sm font-medium max-lg:hidden"
                          )}>
                          {item.label}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </section>    

              {/* User button */}
              <div className='transition-opacity hover:opacity-70'>
                <SignedIn>
                    <UserButton />
                </SignedIn>
              </div>    

        </nav>
    )
}