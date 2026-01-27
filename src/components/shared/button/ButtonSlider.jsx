const buttonState = {
  active: "cursor-pointer",
  deactive: "cursor-not-allowed opacity-50"
}


const buttonPosition = {
  next: {
    text: "<",
    style: " -right-4"
  },
  prev: {
    text: ">",
    style: "-left-4"
  }
}

const buttonBaseStyle = "absolute top-5/12 bg-primary text-white w-8 h-8 rounded-md shadow-2xl"

export default function ButtonSlider({ content, state = "active", onClick }) {
  return (
    <button
      className={`
        ${buttonState[state]} 
        ${buttonPosition[content].style}
        ${buttonBaseStyle}
        `}
      onClick={onClick}>
      {buttonPosition[content].text}
    </button>
  )
}
