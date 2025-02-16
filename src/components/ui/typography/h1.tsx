interface H1Props extends React.HTMLAttributes<HTMLHeadingElement> {}

export default function H1({ children, className, ...props }: H1Props) {
    return (
        <h1
            className={`scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl ${className}`}
            {...props}
        >
            {children}
        </h1>
    )
}
