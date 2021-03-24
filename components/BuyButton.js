import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import { useState } from "react"

export default function BuyButton({ product, ...rest }) {
  const [isVisible, setIsVisible] = useState(false)

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const current = currPos.y < -1000
      setIsVisible(current)
    },
    [isVisible]
  )
  return (
    <div className={isVisible ? "sticky top-0 z-50" : "hidden"}>
      <Body product={product} {...rest} />
    </div>
  )
}

function Body({ header, shortTitle, bg, title, addVariantToCart, product }) {
  const variant = product.variants[0]
  return (
    <div className={`bg-gradient-to-r ${bg.inner}`}>
      {/* <div className="bg-black bg-opacity-80 shadow "> */}
      {/* <div className="nav-white"> */}
      <div className=" max-w-xl mx-auto  lg:flex lg:items-center lg:justify-between">
        <div className="px-4 py-1 sm:p-6 grid grid-cols-2  sm:px-6  lg:px-8 w-full ">
          <div className="">
            <p className="dosis text-lg leading-none tracking-tight whitespace-nowrap inline-block">
              <span className="text-gray-50 align-text-top mr-1">{header}</span>
              <span
                className="text-2xl font-bold "
                style={{ color: title.color }}
              >
                {shortTitle}
              </span>
            </p>
            {/* <p className="text-xs ml-5 text-yellow-300">税込・送料込</p> */}
          </div>
          <div>
            {/* <Link href={url}> */}
            <button
              onClick={() => addVariantToCart(variant.id, 1)}
              // className="mt-2 float-right text-center rounded-full border border-transparent bg-indigo-600 px-4 py-2 text-sm leading-6 font-bold text-white hover:bg-indigo-700"
              className="float-right mt-1 px-3 py-1.5 border border-transparent text-xs font-bold rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              購入
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  )
}
