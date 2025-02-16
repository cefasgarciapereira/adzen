interface H2Props extends React.HTMLAttributes<HTMLHeadingElement> {
    noDivider?: boolean
}

export default function H1({ children, noDivider = false, ...props }: H2Props) {
    return (
        <h2
            className={`scroll-m-20 ${!noDivider && 'border-b pb-2'} text-3xl font-semibold tracking-tight first:mt-0`}
            {...props}
        >
            {children}
        </h2>
    )
}
