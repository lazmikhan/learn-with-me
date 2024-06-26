import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-yellow-400 text-primary-foreground hover:bg-yellow-600/90 border-yellow-500 border-b-4 active:border-b-0 uppercase",
        primary: "bg-sky-400 text-primary-foreground hover:bg-sky-600/90 border-sky-500 border-b-4 active:border-b-0 uppercase",
      
        outline:
          " bg-background hover:bg-accent hover:text-yellow-700  text-yellow-500 font-bold uppercase",
          secondary: "bg-green-400 text-primary-foreground hover:bg-green-600/90 border-green-500 border-b-4 active:border-b-0 uppercase",
      
          secondaryOutline:
            " bg-background hover:bg-accent hover:text-green-700  text-green-500 font-bold uppercase",
            error: "bg-red-500 text-primary-foreground hover:bg-red-700/90 border-red-500 border-b-4 active:border-b-0 uppercase",
      
            errorOutline:
              " bg-background hover:bg-accent hover:text-red-700  text-red-500 font-bold uppercase",
              premium: "bg-purple-500 text-primary-foreground hover:bg-purple-700/90 border-purple-500 border-b-4 active:border-b-0 uppercase",
      
              premiumOutline:
                " bg-background hover:bg-accent hover:text-purple-700  text-purple-500 font-bold uppercase",
                sidebar: "bg-transparent text-slate-500 border-transparent border-0 hover:bg-slate-200 uppercase",
      
                sidebarOutline:
                  "border-4 border-yellow-300 text-yellow-300 uppercase bg-yellow-100",
                ghost: "bg-transparent text-slate-500 border-transparent border-0 hover:bg-slate-200 uppercase",
     
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        round:"rounded-full"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
