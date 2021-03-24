import Image from "next/image"
import { reviews } from "../data/nayami"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"

export default function FeatureNew({
  data = {
    title: "もう二度と植物を枯れさせない！",
    sub: "",
    1: "",
    2: "",
    3: "",
  },
  settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplaySpeed: 5000,
    autoplay: true,
  },
}) {
  return (
    <>
      <Slide settings={settings} />
      <div className="relative z-10 py-16 bg-black  overflow-hidden lg:py-24">
        <div className="relative  max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="relative mt-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h3 className="text-3xl font-extrabold text-green-500 tracking-tight sm:text-3xl">
                もう二度と植物を枯れさせない！
              </h3>
              <p className="mt-3 text-lg text-gray-300 leading-6">
                第3世代LEDチップが室内栽培の常識を変えます。旧世代比で1.5倍の速度、2.5倍の収穫量を実現しました。太陽光のようなライト色はまるでハワイにいるかのような気分。旧来の赤・青・紫のライト色では把握することが難しかった植物の健康状態もカンタンにチェックできます。
              </p>
              <dl className="mt-10 space-y-10 text-white">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                      {/* Heroicon name: globe-alt */}

                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4 flex items-center">
                    <dt className="text-md sm:text-lg leading-tight tracking-tight ">
                      最新のLEDチップを搭載
                    </dt>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                      {/* Heroicon name: scale */}
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4 flex items-center">
                    <dt className="text-md sm:text-lg leading-tight tracking-tight ">
                      白色ライトで状態を常にチェック
                    </dt>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                      {/* Heroicon name: lightning-bolt */}
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4 flex items-center">
                    <dt className="text-md sm:text-lg leading-tight tracking-tight ">
                      成長速度も収穫量も桁違い
                    </dt>
                  </div>
                </div>
              </dl>
            </div>
            <div
              className="mt-10 sm:mx-4 relative lg:mt-0 flex justify-center"
              aria-hidden="true"
            >
              <Image
                src="/img/multi.png"
                alt="multi-env"
                width={490}
                height={490}
                className="sm:rounded"
              />
            </div>
          </div>

          <div className="relative mt-12 sm:mt-16 lg:mt-24">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="lg:col-start-2">
                <h3 className="text-3xl font-extrabold text-blue-500 tracking-tight sm:text-3xl">
                  ファンなし。ノイズなし。かなりクール。
                </h3>
                <p className="mt-3 text-lg text-gray-300 leading-6">
                  従来のライトはLEDの発熱を逃がすために常時ファンが回り続ける構造になっています。MARS
                  HYDROの製品は最新のLEDチップとアルミ製ヒートシンクを採用することでファンが不要な設計です。当然、電気代も安くなります。
                </p>
                <dl className="mt-10 space-y-10 text-white">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                        {/* Heroicon name: annotation */}
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4 flex items-center">
                      <dt className="text-md sm:text-lg leading-tight tracking-tight">
                        従来のライトは常時ファンが回る構造
                      </dt>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                        {/* Heroicon name: mail */}

                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4 flex items-center">
                      <dt className="text-md sm:text-lg leading-tight tracking-tight ">
                        ヒートシンクで発熱を抑えファンが不要
                      </dt>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                        {/* Heroicon name: mail */}
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 8l3 5m0 0l3-5m-3 5v4m-3-5h6m-6 3h6m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4 flex items-center">
                      <dt className="text-md sm:text-lg leading-tight tracking-tight ">
                        当然、電気代も安くなります
                      </dt>
                    </div>
                  </div>
                </dl>
              </div>
              <div className="mt-10 sm:mx-4 relative lg:mt-0 lg:col-start-1 flex justify-center items-center">
                <Image
                  src="/img/hs2.png"
                  alt="main background"
                  width={490}
                  height={490}
                  quality={100}
                />
              </div>
            </div>
          </div>

          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h3 className="text-3xl font-extrabold text-indigo-500 tracking-tight sm:text-3xl">
                最適なライトがきっと見つかります
              </h3>
              <p className="mt-3 text-lg text-gray-300 leading-6">
                お部屋の一画での趣味の栽培から水耕栽培工場での商業用栽培まで様々な環境に対応してきたMARS
                HYDROの製品なら、選べるサイズ、デイジーチェーン（数珠つなぎ）機能であなたの環境にとってベストなライト構成が実現できます。
              </p>
              <dl className="mt-10 space-y-10 text-white">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      {/* Heroicon name: globe-alt */}
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4 flex items-center">
                    <dt className="text-md sm:text-lg leading-tight tracking-tight ">
                      選べるサイズであらゆる環境に適応
                    </dt>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      {/* Heroicon name: scale */}
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4 flex items-center">
                    <dt className="text-md sm:text-lg leading-tight tracking-tight ">
                      デイジーチェーン対応
                    </dt>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      {/* Heroicon name: lightning-bolt */}

                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4 flex items-center">
                    <dt className="text-md sm:text-lg leading-tight tracking-tight ">
                      ベストなライト構成が実現できます
                    </dt>
                  </div>
                </div>
              </dl>
            </div>
            <div
              className="mt-10 sm:mx-4 relative lg:mt-0 flex justify-center"
              aria-hidden="true"
            >
              <Image
                src="/img/variety.png"
                alt="main background"
                className="rounded"
                width={1015}
                height={910}
                // quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function Review({ item }) {
  return (
    <div className="flex justify-center">
      <div className={`col-sm-6 ${item.bg}  align-self-center`}>
        <p className="text-center text-4xl leading-1 font-extrabold tracking-tight text-indigo-900">
          {item.lead2}
        </p>
      </div>
    </div>
  )
}

function Slide({ settings }) {
  return (
    <div className="relative z-10  py-16 bg-gray-50  overflow-hidden lg:py-24">
      <h2 className="dosis text-center text-2xl px-4 text-gray-500 font-bold">
        これらの悩み、FATLIGHTならすべて解決できます！
      </h2>
      <section className="md:py-4 md:px-2 flex justify-center">
        <div
          // className={`text-white rounded-3xl bg-gradient-to-r ${data.bg}`}
          // style={{ background: data.bg }}
          // style={{ background: data.bg, minHeight: 766 }}
          className="md:rounded-3xl max-w-screen-xl py-8 mx-auto flex justify-center"
        >
          <div className="mx-auto gap-0">
            <div className="md:col-span-1 w-full px-2">
            <Carousel
              autoPlay
              infiniteLoop
              showStatus={false}
              showThumbs={false}
              interval={5000}
              showIndicators={false}
            >
                {reviews.map((item) => (
                  <Review key={item.img} item={item} />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
