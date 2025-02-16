interface MutedProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export default function TypographyMuted({ children, ...props }: MutedProps) {
    return (
        <p className="text-sm text-muted-foreground" {...props}>
            {children}
        </p>
    )
}
