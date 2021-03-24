import Image from "next/image"
import { getImageFields } from "../scripts/contentful"

export default function NewHero({ hero, angle, amazon }) {

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-900 lg:bg-gray-300">
      <div
        className="hidden lg:block absolute scroll-bg"
        style={{
          height: "400%",
          width: "400%",
          top: "-25%",
          left: "-100%",
          backgroundSize: "800px auto",
          backgroundImage: `url("${getImageFields(hero).src}")`,
        }}
      />
      <div
        className="relative min-h-screen lg:min-w-3xl xl:min-w-4xl lg:flex lg:items-center lg:justify-center lg:w-3/5 lg:py-20 lg:pl-8 lg:pr-8 bg-no-repeat"
        style={{
          backgroundImage: `url("${getImageFields(angle).src}")`,
          backgroundSize: "100% auto",
          backgroundPosition: "-5px -5px",
        }}
      >
        <div>
          <div className="px-6 md:max-w-3xl md:mx-auto lg:mx-0 lg:max-w-none">
            <h1 className="mt-3 text-3xl sm:text-4xl font-semibold font-display text-white sm:mt-6 xl:text-6xl">
              <div style={{ width: 130 }} className="mt-8 sm:ml-2 lg:hidden">
                <Image {...getImageFields(amazon)} />
              </div>
              <div
                style={{ width: 220 }}
                className="xl:-mt-20 ml-2 hidden lg:block"
              >
                <Image {...getImageFields(amazon)} />
                {/* <Image
                  src="/img/amazon_PNG11-768x280.png"
                  alt="amazon.com,アメリカAmazon"
                  width={300}
                  height={109}
                /> */}
              </div>
              <span className="block -mt-4 mb-2">全米No. 1 ベストセラー</span>
              <span className="block mb-4">植物育成用LEDライト</span>

              <span className="dosis font-bold text-gold text-180 ">
                MARS HYDRO
              </span>
            </h1>
            <p className="mt-2 text-xl text-gray-300 sm:mt-3 sm:text-xl sm:max-w-xl xl:mt-4 xl:text-2xl xl:max-w-2xl xl:pr-4">
              太陽光のように強力なLEDライトで収穫量が段違いに向上します！ホビー用途から商業用途まで室内栽培の本場アメリカで大人気のベストセラー植物用ライトです。
            </p>
          </div>
          <div className="mt-8 sm:mt-12 relative h-64 overflow-hidden bg-gray-300 lg:hidden">
            <div
              className="absolute scroll-bg"
              style={{
                height: "800%",
                width: "400%",
                top: "-100%",
                left: "-100%",
                backgroundSize: "400px auto",
                backgroundImage: `url("${getImageFields(hero).src}")`,
              }}
            >
              {/* 
              <Image
                // width={1000}
                // height={1598}
                src="/img/hero.jpg"
                alt="hero"
                layout="fill"
                objectFit="cover"
                quality={100}
                style={{
                  width: "50%" 
                }}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
