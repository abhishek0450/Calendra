import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Schedule",
  description: "Schedule is a modern and powerful scheduling app that helps you manage your events, meetings, and availability with ease. Stay organized and never miss an important date again!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: undefined,
        variables: {
          colorPrimary: '#10b981',
          colorBackground: '#1f2937',
          colorInputBackground: '#374151',
          colorInputText: '#f9fafb',
          colorText: '#f9fafb',
          colorTextSecondary: '#9ca3af',
          colorDanger: '#ef4444',
          colorSuccess: '#10b981',
          colorWarning: '#f59e0b',
          colorNeutral: '#6b7280',
          colorShimmer: '#374151',
          borderRadius: '0.5rem'
        },
        elements: {
          card: 'bg-gray-800 border-gray-700',
          headerTitle: 'text-gray-100',
          headerSubtitle: 'text-gray-400',
          socialButtonsBlockButton: 'bg-white border-2 border-gray-300 text-gray-900 hover:bg-gray-50 hover:border-emerald-500 shadow-xl font-semibold',
          socialButtonsBlockButtonText: 'text-gray-900 font-semibold',
          socialButtonsBlockButtonArrow: 'text-gray-900',
          socialButtonsProviderIcon: 'brightness-100',
          formButtonPrimary: 'bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-lg',
          formFieldInput: 'bg-gray-700 border-gray-600 text-gray-100',
          formFieldLabel: 'text-gray-300',
          footerActionLink: 'text-emerald-400 hover:text-emerald-300',
          identityPreviewText: 'text-gray-100',
          identityPreviewEditButton: 'text-emerald-400',
          formFieldInputShowPasswordButton: 'text-gray-400',
          badge: 'bg-emerald-500/20 text-emerald-400',
          alert: 'bg-gray-700 text-gray-100',
          alertText: 'text-gray-100',
          formFieldSuccessText: 'text-emerald-400',
          formFieldErrorText: 'text-red-400',
          formFieldHintText: 'text-gray-400',
          dividerLine: 'bg-gray-700',
          dividerText: 'text-gray-400',
          menuList: 'bg-gray-800 border-gray-700',
          menuItem: 'text-gray-100 hover:bg-gray-700',
          userButtonPopoverCard: 'bg-gray-800 border-gray-700',
          userButtonPopoverActionButton: 'text-gray-100 hover:bg-gray-700',
          userButtonPopoverActionButtonText: 'text-gray-100',
          userButtonPopoverActionButtonIcon: 'text-gray-400',
          userButtonPopoverFooter: 'border-gray-700',
          profileSectionTitleText: 'text-gray-100',
          profileSectionContent: 'text-gray-300',
          accordionTriggerButton: 'text-gray-100 hover:bg-gray-700',
        }
      }}
    >
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased animate-fade-in`}
        >
          {children}
          <Toaster theme="dark" toastOptions={{
            style: {
              background: '#1f2937',
              color: '#f9fafb',
              border: '1px solid #374151'
            }
          }} />
        </body>
      </html>
    </ClerkProvider>
  );
}
