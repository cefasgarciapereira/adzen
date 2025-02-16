interface PProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export default function P({ children, ...props }: PProps) {
    return (
        <h1 className="leading-7 [&:not(:first-child)]:mt-6" {...props}>
            {children}
        </h1>
    )
}
