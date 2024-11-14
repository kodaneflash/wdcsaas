'use client'

export default function StudioTemplate({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-screen bg-white">
      {children}
    </div>
  )
} 