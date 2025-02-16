interface OlProps extends React.HTMLAttributes<HTMLUListElement> {}

export default function Ul({ children, ...props }: OlProps) {
    return (
        <ol className="my-6 ml-6 list-disc [&>li]:mt-2" {...props}>
            {children}
        </ol>
    )
}
