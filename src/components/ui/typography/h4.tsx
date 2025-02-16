interface H4Props extends React.HTMLAttributes<HTMLHeadingElement> {}

export default function H4({ children, ...props }: H4Props) {
    return (
        <h4
            className="scroll-m-20 text-xl font-semibold tracking-tight"
            {...props}
        >
            {children}
        </h4>
    )
}
