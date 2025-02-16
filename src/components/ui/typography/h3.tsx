interface H3Props extends React.HTMLAttributes<HTMLHeadingElement> {}

export default function H1({ children, ...props }: H3Props) {
    return (
        <h3
            className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"
            {...props}
        >
            {children}
        </h3>
    )
}
