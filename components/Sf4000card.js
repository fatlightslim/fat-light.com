
import Image from "next/image"
import Link from "next/link"


export default function Sf4000card({
  data = {
    header: "SPIDER FARMER",
    title: {
      1: "日本初上陸",
      2: "SPIDER",
      22: "FARMER",
      3: "販売開始！",
      //   3: "お届けします。",
      color: "#983F43",
    },
    img: {
      src: "/img/sf4000/sf4000main2.png",
      alt: "TS3000",
      width:  1000,
      height: 1000,
    },
    desc: {
      1: "新ブランド、追加されました！本場アメリカだけではなく、イギリスやヨーロッパ、オーストラリアでも大好評のSPIDER FARMERがついに日本上陸！その中でも一番売れてる、SF4000のリニューアルバージョンをチョイスしてみました。海外直輸入商品を全国どこにでも送料無料でお届け！このチャンスをお見逃し",
      2: "なく！",
    },
    button: "SF4000の詳細ページへ",
    // bg: "linear-gradient(to right top, #071931 0%, #33274f 50%, #661e43 100%)",
    bg: "from-pink-300  to-white",
  },
}) {
  return (
    <section className="md:py-4 md:px-2 bg-gray-200 ">
      <div
        className={`text-white md:rounded-3xl max-w-screen-xl mx-auto `}
        style={{ background: '#FAA7A8' }}
      >
        <div className="grid md:grid-cols-2 mx-auto gap-0">
          <div className="md:col-span-1 p-8 ">
            <Header {...data} />
            <LeftCol {...data} />
          </div>

          <div className="md:col-span-1">
            <div className="p-2">
              <Image
                src={data.img.src}
                width={data.img.width}
                height={data.img.height}
                alt={data.img.alt}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Header = ({ header }) => (
  <header className="dosis pb-8">
    <h3 className="text-xl font-bold">{header}</h3>
  </header>
)

const LeftCol = ({ title, desc, button }) => (
  <>
    <p className="text-5xl md:text-6xl font-extrabold leading-none tracking-normal whitespace-nowrap">
      
        {title[1]}
      <br />
      <span style={{ fontSize: "115%", color: title.color }}> 
      {title[2]}
      </span>
      <br />
      <span style={{ fontSize: "115%", color: title.color }}> 
      {title[22]}
      </span>
      <br />
      <span className="whitespace-nowrap">{title[3]}</span>
    </p>
    <p className="py-8 max-w-lg lg:mb-4  text-6 md:text-xl font-bold leading-tight tracking-normal">
      {desc[1]}
      <span className="whitespace-nowrap">{desc[2]}</span>
    </p>

    <Link href="/products/spiderfarmer/sf4000">
      <a className="bg-transparent rounded-full font-semibold  py-2 px-4 border-2">
        {button}
      </a>
    </Link>
  </>
)