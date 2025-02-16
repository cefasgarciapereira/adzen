interface LiProps extends React.HTMLAttributes<HTMLLIElement> {}

export default function Li({ children, ...props }: LiProps) {
    return <li {...props}>{children}</li>
}
