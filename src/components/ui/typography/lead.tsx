interface LeadProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export default function Lead({ children, ...props }: LeadProps) {
    return (
        <p className="text-xl text-muted-foreground" {...props}>
            {children}
        </p>
    )
}
