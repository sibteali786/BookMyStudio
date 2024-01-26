import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Studio',
    default: 'NuStudio - Nustians Only Studio Booking Companion',
  },
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-[#004878] text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
