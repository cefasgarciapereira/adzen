interface CodeProps
    extends React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
    > {}

export default function TypographyInlineCode({
    children,
    ...props
}: CodeProps) {
    return (
        <code
            className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
            {...props}
        >
            {children}
        </code>
    )
}
