interface BlockquoteProps extends React.HTMLAttributes<HTMLQuoteElement> {}

export default function Blockquote({ children, ...props }: BlockquoteProps) {
    return (
        <blockquote className="mt-6 border-l-2 pl-6 italic" {...props}>
            {children}
        </blockquote>
    )
}
