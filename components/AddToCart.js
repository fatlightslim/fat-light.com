import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import { useState, useContext } from "react"
import { useCart } from "react-use-cart";

export default function AddToCart({ product }) {
  const { addItem } = useCart()
  const [isVisible, setIsVisible] = useState(false)
  const { brand, name, color } = product.fields

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const current = currPos.y < -1000
      setIsVisible(current)
    },
    [isVisible]
  )

  return (
    <div className={isVisible ? "sticky top-0 z-50" : "hidden"}>
      <div className={`bg-gradient-to-r ${color.gradient}`}>
        <div className=" max-w-xl mx-auto  lg:flex lg:items-center lg:justify-between">
          <div className="px-4 py-1 sm:p-6 grid grid-cols-2  sm:px-6  lg:px-8 w-full ">
            <div className="">
              <p className="dosis text-lg leading-none tracking-tight whitespace-nowrap inline-block">
                <span className="text-gray-50 align-text-top mr-1">
                  {brand}
                </span>
                <span
                  className="text-2xl font-bold"
                  style={{ color: color.main }}
                >
                  {name}
                </span>
              </p>
              {/* <p className="text-xs ml-5 text-yellow-300">税込・送料込</p> */}
            </div>
            <div>
              <button
                onClick={() => {
                  const item = {id: product.sys.id, price: product.fields.price, ...product}
                  addItem(item, 1)
                }}
                className="float-right mt-1 px-3 py-1.5 border border-transparent text-xs font-bold rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                購入
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}