import { useState } from "react"
import ButtonSlider from "../../../shared/button/ButtonSlider"

function SlideBtn({ children, onClick, className = "" }) {
  return (
    <button
      className={`absolute -right-4 z-10 bg-primary text-text-inverse w-10 h-10 top-5/12 rounded-full ${className}`}
      onClick={onClick}>
      {children}
    </button>
  )
}

export default function SlideBannerSection({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const arrLen = (data.items.length) - 1

  function nextSlide() {
    { currentIndex < arrLen && setCurrentIndex(prev => prev + 1) }
  }

  function prevSlide() {
    { currentIndex !== 0 && setCurrentIndex(prev => prev - 1) }
  }
  console.log(data.items[currentIndex]);

  return (
    <div className=" relative ">
      {currentIndex < arrLen
        ?
        <ButtonSlider content="next" onClick={nextSlide} />
        :
        <ButtonSlider state="deactive" content="next" onClick={nextSlide} />
      }

      <picture>
        <source
          srcset={data.items[currentIndex].desktopImage}
          media="(min-width: 768px)"
          className={data.items[currentIndex].ratio}
        />

        <img
          className={`w-full h-full object-cover rounded ${data.items[currentIndex].ratio}`}
          src={data.items[currentIndex].image} alt="" />
      </picture>

      {currentIndex === 0
        ?
        <ButtonSlider content="prev" state="deactive" onClick={prevSlide} />
        :
        <ButtonSlider content="prev" onClick={prevSlide} />
      }

    </div>
  )
}