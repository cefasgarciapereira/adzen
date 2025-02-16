interface UlProps extends React.HTMLAttributes<HTMLUListElement> {}

export default function Ul({ children, ...props }: UlProps) {
    return (
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props}>
            {children}
        </ul>
    )
}
