interface SmallProps
    extends React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
    > {}

export default function TypographySmall({ children, ...props }: SmallProps) {
    return (
        <small className="text-sm font-medium leading-none" {...props}>
            {children}
        </small>
    )
}
