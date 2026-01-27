const ButtonStyle = {
  active: {
    blue: "bg-blue-500 text-white",
    red: "bg-red-500 text-white",
    green: "bg-green-500 text-white",
  },
  deactive: {
    blue: "border border-blue-500 text-blue-500 ",
    red: "border border-red-500 text-red-500 ",
    green: "border border-green-500 text-green-500",
  }
}
const ButtonSize = {
  sm: "text-sm w-10 h-5 font-light",
  md: "text-base w-15 h-8 font-normal",
  xl: "text-xl w-20 h-12 font-bold"
}
const BaseStyle = "rounded-2xl cursor-pointer"
export default function ButtonCta({ state="deactive", color="blue", size="md", className = "", children, ...rest }) {
  return (
    <button
      className={`${BaseStyle} ${ButtonSize[size]} ${ButtonStyle[state][color]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}