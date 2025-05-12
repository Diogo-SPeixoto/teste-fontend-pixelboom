"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      toastOptions={{
        cancelButtonStyle: {padding: "16px", border:"#E4E4E7 solid 1px" ,  borderRadius:"99px"},
        style:{padding:"34px 24px" , fontSize:"14px"}
      }}
      {...props}
    />
  )
}

export { Toaster }
