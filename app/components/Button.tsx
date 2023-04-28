interface ButtonProps {
  onClick?: () => void
  text: string
}

const Button = ({ onClick, text }: ButtonProps) => {
  return (
    <button
      className="mt-12 w-56 h-16 rounded-lg bg-[#23216D] text-white"
      onClick={onClick}
    >
      {text.toUpperCase()}
    </button>
  )
}

export default Button
