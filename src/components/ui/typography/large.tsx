interface LargeProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function TypographyLarge({ children, ...props }: LargeProps) {
    return (
        <div className="text-lg font-semibold" {...props}>
            {children}
        </div>
    )
}
