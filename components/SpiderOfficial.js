import Link from "next/link"
import Image from "next/image"
import { ChevRight } from "./Svg"

export default function SpiderOfficial({}) {
  return (
    <div className="bg-spider">
      <div className="py-8">
        <div className="bg-spider overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-8 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-center">
                <Image
                  src="/img/spider_logo.png"
                  alt="Spider Farmer"
                  width={779}
                  height={108}
                />
                <span className="noto block text-6xl font-extrabold text-yellow-400">
                  日本上陸
                </span>
              </h2>
              <p className="mt-4 font-medium dosis text-lg leading-6 text-green-800">
                業界に激震！今もっとも勢いのあるLEDブランドSPIDER FARMER
                大ヒット中！
                大学等の研究機関にも採用される信頼の性能。ジャストなサイズにマストな機能を搭載した人気モデルを全国どこでも送料無料でお届けします。
              </p>

              <Link href="/products/spiderfarmer/all">
                <a className="mt-8 border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-bold bg-transparent text-green-600 hover:bg-green-50">
                  SPIDER FARMER 商品ページへ
                  <ChevRight />
                </a>
              </Link>
            </div>
          </div>
          <div className="">
            <Image
              src="/img/sf7000/sf7000main.png"
              alt="Spider Farmer"
              width={1296}
              height={1065}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
