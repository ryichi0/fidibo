export default function Container({children , className = null , ...rest}){
  return(
    <div className={`md:px-30 sm:px-20 px-5 py-6 ${className ? className : ""}`} {...rest}>
      {children}
    </div>
  )
}