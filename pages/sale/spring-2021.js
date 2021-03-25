import { NextSeo } from "next-seo"
import { useCart } from "react-use-cart"
import Link from "next/link"
import { Timer, Title } from "../../components/Hero"
import { getImageFields } from "../../utils/contentful"
import Layout from "../../components/Layout"
import Image from "next/image"

export default function Sale(props) {
  const { fc6500, sp3000, sp150, ts } = props.products
  ts.fields.title = "MARS HYDRO TS600"
  const data = [sp150, sp3000, ts, fc6500]
  return (
      <Layout {...props}>
      <NextSeo
        title="諸行無常セール 令和三年春場所"
        description="人気の商品を期間限定で日替わりセール中。ビギナーにオススメのモデルから本格栽培用の定番モデルまでお得な価格でお届けします。"
      />
        <Title />
        <Timer />

        <div className="bg-gray-100">
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
                  他店より1円でも高い場合はご相談ください。
                </h2>
                <p className="mt-4 text-xl text-gray-600">
                  当店は全国一律送料無料でお届けします。万が一商品にご満足いただけない場合は、7日間の返品保証
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
            <div className="relative">
              <div className="absolute inset-0 h-1/2 bg-gray-100" />
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {data.map((v) => (
                  <Product key={v.sys.id} {...v} {...props} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
  )
}

export const Product = ({ fields, sys }) => {
  const {
    image,
    title,
    price,
    pricingFeatureList,
    url,
    description,
    regularPrice,
  } = fields
  const { addItem } = useCart()
  return (
    <div className="mb-8 max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
      <div className="flex-1 bg-white px-6 py-8 lg:p-12">
        <div className="sm:flex">
          <div className="sm:flex-shrink mr-8  mb-8 sm:mb-0">
            <div className="w-48 mx-auto">
              <Image {...getImageFields(image)} />
            </div>
          </div>
          <div className="sm:flex-1">
            <h3 className="dosis text-2xl font-extrabold text-gray-900 sm:text-3xl">
              {title}
            </h3>
            <p className="mt-6 text-base text-gray-500">{description}</p>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex items-center">
            <h4 className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-indigo-600">
              商品概要
            </h4>
            <div className="flex-1 border-t-2 border-gray-200" />
          </div>
          <ul className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
            {pricingFeatureList.slice(0, 4).map((v) => (
              <List key={v} v={v} />
            ))}
          </ul>
        </div>
      </div>
      <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
        <p className="text-lg leading-6 font-medium text-gray-900 ">
          <span className="line-through text-red-500">
            <span className="text-gray-600">
              &yen;{" "}
              {regularPrice
                ? regularPrice.toLocaleString()
                : (Math.ceil(price / 0.8 / 100) * 100).toLocaleString()}
            </span>
          </span>
          {!regularPrice && (
            <span className="inline-block align-middle px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 ml-2">
              20%OFF
            </span>
          )}
        </p>
        <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
          <span>&yen; {price.toLocaleString()}</span>
          {/* <span className="ml-3 text-xl font-medium text-gray-500">USD</span> */}
        </div>
        <p className="mt-4 text-sm">
          <span href="#" className="font-medium text-gray-500">
            税込・送料込
          </span>
        </p>
        <div className="mt-6">
          <div className="rounded-lg shadow-md">
            <button
              onClick={() => {
                const item = { id: sys.id, price, fields, sys }
                addItem(item, 1)
              }}
              className="block w-full text-center rounded-lg border border-transparent bg-indigo-600 px-6 py-4 text-xl leading-6 font-medium text-white hover:bg-indigo-700"
              aria-describedby="tier-growth"
            >
              購入する
            </button>
          </div>
        </div>
        {url && (
          <div className="mt-4 text-sm">
            <Link href={url}>
              <a className="font-medium text-gray-900 underline">詳しく見る</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export const List = ({ v }) => (
  <li className="flex items-start lg:col-span-1">
    <div className="flex-shrink-0">
      {/* Heroicon name: solid/check-circle */}
      <svg
        className="h-5 w-5 text-green-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <p className="ml-3 text-sm text-gray-700">{v}</p>
  </li>
)
