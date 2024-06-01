import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const tagVariants = cva(
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-regular transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
    {
        variants: {
            variant: {
                DEFAULT: "border-transparent bg-primary-light-5 text-primary-light-60",
                SECONDARY: "border-transparent bg-light-10 text-dark-70",
                RED: "border-transparent bg-red-5 text-red-60",
                BLUE: "border-transparent bg-blue-5 text-blue-60",
                GREEN: "border-transparent bg-green-5 text-green-60",
                ORANGE: "border-transparent bg-orange-5 text-orange-60",
                PURPLE: "border-transparent bg-purple-5 text-purple-60",
                GREY: "border-transparent bg-mid-50 text-light-0",
                OUTLINE: "text-zinc-950",
            },
        },
        defaultVariants: {
            variant: "DEFAULT",
        },
    }
)

export interface TagProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof tagVariants> {}

function TagUI({ className, variant, ...props }: TagProps) {
    return (
        <div className={cn(tagVariants({ variant }),'font-medium', className)} {...props} />
    )
}

export { TagUI, tagVariants }
