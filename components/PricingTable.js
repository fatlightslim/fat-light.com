import Image from "next/image"
import Link from "next/link"
import { OutlineCheck } from "./Svg"
import { getImageFields } from "../utils/contentful"
import { useCart } from "react-use-cart"

export default function PricingTable({ main, left, right }) {
  const { addItem } = useCart()

  const Header = () => (
    <div className="pt-12 px-4 sm:px-6 lg:px-8 lg:pt-20">
      <div className="text-center">
        <h2 className="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">
          SPECIAL OFFER
        </h2>
        <p className="mt-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
          今月のオファー
        </p>
        <p className="mt-3 max-w-4xl mx-auto text-lg text-gray-300 sm:mt-5 sm:text-2xl">
          為替・配送費の影響で価格が毎月変動することをご了承ください。最安値でご提供できるよう最大限努力いたします。
        </p>
      </div>
    </div>
  )

  const Title = ({ image, title, ...rest }) => (
    <div className="bg-white px-6 py-10">
      <div>
        <h3
          className="dosis text-center text-2xl font-medium text-gray-900"
          id="tier-hobby"
        >
          {title}
        </h3>
        <div className="w-48 mx-auto">
          <Image {...getImageFields(image)} />
        </div>
        <Price {...rest} />
      </div>
    </div>
  )

  const Price = ({ price }) => {
    const regularPrice = Math.ceil(price / 0.8 / 100) * 100
    return (
      <>
        <div className="text-center px-3 mt-4">
          <span className="line-through text-red-500 tracking-tight  mr-1 inline-flex">
            <span className="text-md text-gray-900">&yen;</span>
            <span className="text-lg text-gray-900">
              {regularPrice.toLocaleString()}
            </span>
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            20%OFF
          </span>
        </div>
        <div className="flex items-center justify-center">
          <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900">
            <span className="mt-2 mr-2 text-4xl font-medium">&yen;</span>
            <span className="font-extrabold">{price.toLocaleString()}</span>
          </span>
        </div>
        <span className="text-xl font-medium text-gray-500 block text-center">
          税込・送料込
        </span>
      </>
    )
  }

  const List = ({ pricingFeatureList, primary }) => {
    const list = primary ? pricingFeatureList : pricingFeatureList.slice(0, 3)
    return (
      <ul className="space-y-4">
        {list.map((value) => {
          return (
            <li key={value} className="flex items-start">
              <div className="flex-shrink-0">
                <OutlineCheck className="flex-shrink-0 h-6 w-6 text-green-500" />
              </div>
              <p className="ml-3 text-base font-medium text-gray-500">
                {value}
              </p>
            </li>
          )
        })}
      </ul>
    )
  }

  const Button = ({ url }) => (
    <div className="mt-8">
      <div className="rounded-lg shadow-md">
        <Link href={url}>
          <a
            className="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50"
            aria-describedby="tier-hobby"
          >
            詳しく見る
          </a>
        </Link>
      </div>
    </div>
  )

  const Sub = ({ position, product }) => {
    const { sys, fields } = product
    return (
      <div
        className={`mx-auto max-w-md  lg:m-0 mt-10 lg:max-w-none lg:row-start-2 lg:row-end-3 ${
          position === "left"
            ? "lg:col-start-1 lg:col-end-3"
            : "lg:col-start-6 lg:col-end-8"
        }`}
      >
        <div
          className={`h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none ${
            position === "left" ? "lg:rounded-l-lg " : "lg:rounded-r-lg "
          }`}
        >
          <div className="flex-1 flex flex-col">
            <Title {...fields} />
            <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
              <List {...fields} />
              <Button {...fields} />
            </div>
          </div>
        </div>
      </div>
    )
  }

  const Main = ({ product }) => {
    const { sys, fields } = product
    return (
      <div className="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4">
        <div className="relative z-10 rounded-lg shadow-xl">
          <div
            className="pointer-events-none absolute inset-0 rounded-lg border-2 border-indigo-600"
            aria-hidden="true"
          />
          <div className="absolute inset-x-0 top-0 transform translate-y-px">
            <div className="flex justify-center transform -translate-y-1/2">
              <span className="inline-flex rounded-full bg-indigo-600 px-4 py-1 text-sm font-semibold tracking-wider uppercase text-white">
                このモデル
              </span>
            </div>
          </div>
          <div className="bg-white rounded-t-lg px-6 pt-12 pb-10">
            <div>
              <h3
                className="dosis text-center text-3xl font-semibold text-gray-900 sm:-mx-6"
                id="tier-growth"
              >
                {fields.title}
              </h3>
              <div className="w-48 mx-auto">
                <Image {...getImageFields(fields.image)} />
              </div>
              <Price {...fields} />
            </div>
          </div>
          <div className="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-gray-50 sm:px-10 sm:py-10">
            <List {...fields} primary={true} />
            <div className="mt-10">
              <div className="rounded-lg shadow-md">
                <button
                  onClick={() => {
                    const item = {
                      id: product.sys.id,
                      price: product.fields.price,
                      ...product,
                    }
                    addItem(item, 1)
                  }}
                  className="block w-full text-center rounded-lg border border-transparent bg-indigo-600 px-6 py-4 text-xl leading-6 font-medium text-white hover:bg-indigo-700"
                  aria-describedby="tier-growth"
                >
                  購入する
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="bg-gray-900">
      <Header />
      <div className="mt-16 bg-white pb-12 lg:mt-20 lg:pb-20">
        <div className="relative z-30">
          <div className="absolute inset-0 h-5/6 bg-gray-900 lg:h-2/3" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative lg:grid lg:grid-cols-7">
              <Main product={main} />
              <Sub position="left" product={left} />
              <Sub position="right" product={right} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
