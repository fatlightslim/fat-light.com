import Link from "next/link"
import Image from "next/image"
import { ChevRight } from "./Svg"

const data = [
  {
    brand: "MARS HYDRO",
    lead: "全米No.1 ベストセラー！",
    desc:
      "10年以上に及び業界をリードするLEDメーカーです。定番ベストセラーのTSシリーズをはじめ、人気沸騰中のSPシリーズ、最先端の技術を詰め込んだSFシリーズなど幅広いラインナップが魅力。",
    image: {
      width: 989,
      height: 121,
      src: "/img/mars_logo.png",
      alt: "MARS HYDRO",
      // quality: 90
    },
    href: "/sale/spring-2021",
    color: {
      bg: "from-gray-900 via-babypink-700 to-pink-600",
      text: "text-pink-700",
    },
  },
  {
    brand: "SPIDER FARMER",
    lead: "業界に激震！",
    desc:
      "今もっとも勢いのあるLEDブランドSPIDER FARMER。高品質でありながら手頃な価格帯、シンプルな商品ラインナップで米国・欧州においてシェア拡大中の要注目ブランド",
    image: {
      src: "/img/spider_logo.png",
      alt: "Spider Farmer",
      width: 779,
      height: 108,
    },
    href: "/products/spiderfarmer/all",
    color: {
      bg: "from-green-600 via-green-500 to-green-300",
      text: "text-green-500",
    },
  },
]

export default function BrandLink() {
  return (
    <div className="bg-gray-900">
      <div className="pt-12 sm:pt-16 lg:pt-24">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-2 lg:max-w-none">
            <h2 className="text-lg leading-6 font-semibold text-gray-300 tracking-wider">
              取扱いブランド
            </h2>
            {/* <p className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
          取扱いブランド
        </p>
        <p className="text-xl text-gray-300">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum sequi unde repudiandae natus.
        </p> */}
          </div>
        </div>
      </div>
      <div className="mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
        <div className="relative">
          <div className="absolute inset-0 h-3/4 bg-gray-900" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
              {data.map((v) => {
                return (
                  <div
                    key={v.brand}
                    className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                  >
                    <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                      <div>
                        <h3
                          className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600"
                          id="tier-standard"
                        >
                          {v.lead}
                        </h3>
                      </div>
                      <div className="h-12 mt-6 flex items-baseline text-6xl font-extrabold">
                        <Image {...v.image} />
                      </div>
                      <p className="mt-5 text-lg text-gray-500">{v.desc}</p>
                    </div>
                    <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                      <div className="rounded-md shadow">
                        <Link href={v.href}>
                          <a
                            className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
                            aria-describedby="tier-standard"
                          >
                            {v.brand}の商品一覧
                            <ChevRight />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="mt-4 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
          <div className="max-w-md mx-auto lg:max-w-5xl">
            <div className="rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
              <div className="flex-1">
                <div>
                  <h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide bg-white text-gray-800">
                    2ndマーケット
                  </h3>
                </div>
                <div className="mt-4 text-lg text-gray-600">
                  展示品や整備済み品を割引価格・１ヶ月の保証つきでご提供します。
                </div>
              </div>
              <div className="mt-6 rounded-md shadow lg:mt-0 lg:ml-10 lg:flex-shrink-0">
                <Link href="/products/secondmarket">
                  <a className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
                    中古商品の一覧
                    <ChevRight />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
