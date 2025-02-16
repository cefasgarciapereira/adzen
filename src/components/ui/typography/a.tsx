interface AProps
    extends React.DetailedHTMLProps<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        HTMLAnchorElement
    > {}

export default function A({ children, ...props }: AProps) {
    return (
        <a
            className="font-medium text-primary underline underline-offset-4"
            {...props}
        >
            {children}
        </a>
    )
}
