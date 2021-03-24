import Image from "next/image"
export default function HeroMars({}) {
  return (
    <div className="relative bg-gray-50 ">
      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-12 pb-20 text-center lg:py-24 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl">
              <div className="w-1/2 mx-auto  lg:mx-0">
                <Image
                  src="/img/Amazon-logo-black.png"
                  alt="amazon.com,アメリカAmazon"
                  width={1479}
                  height={450}
                />
              </div>
              <span className="block">全米No. 1 ベストセラー</span>
              <span className="block text-indigo-600 mt-2 mb-1">
                植物育成用LEDライト
              </span>

              <span className="dosis text-6xl sm:text-7xl">MARS HYDRO</span>
          {/* <Image
            width={989}
            height={121}
            // className="absolute w-full h-full object-cover"
            alt="marshydro"
            src="/img/mars_logo.png"
          /> */}

            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              太陽光のように強力なLEDライトで収穫量が段違いに向上します！ホビー用途から商業用途まで室内栽培の本場アメリカで大人気のベストセラー植物用ライトです。
            </p>
          </div>
        </div>
        <div className="h-80 overflow-hidden relative w-full lg:h-auto lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            width={1000}
            height={1598}
            className="absolute w-full h-full object-cover"
            alt="hero"
            src="/img/hero2.jpg"
          />
        </div>
      </main>
    </div>
  )
}
