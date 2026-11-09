import React from "react"

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  children: React.ReactNode
  className?: string
  centered?: boolean
}

export function SectionTitle({
  level = 2,
  children,
  className = "",
  centered = false,
  ...props
}: SectionTitleProps) {
  const Tag: React.ElementType = `h${level}`
  const finalClassName = `${className} ${centered ? "text-center" : ""}`.trim()

  return (
    <Tag className={finalClassName} {...props}>
      {children}
    </Tag>
  )
}
