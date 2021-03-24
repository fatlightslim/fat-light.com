
import Image from "next/image"
import Link from "next/link"


export default function FCcard({
  data = {
    header: "フォルダブルライト登場！",
    title: {
      1: "最先端の",
      2: "新商品",
      3: "ついに入荷！",
      //   3: "お届けします。",
      color: "#360056",

    },
    img: {
      src: "/img/fc6500/fcmain.png",
      alt: "FC6500",
      width: 1000,
      height: 827,
    },
    desc: {
      1: "お待たせいたしました！MARS HYDRO最新技術の完全版。業界No.1のSAMSUNG LM301Bチップを3,144個も使用したハイスペックライトがついに登場！大人気モデルのTS3000やSP3000よりも約3倍以上のLEDチップをセットアップ。自慢のハイエンドモデル",
      2: "です。",
    },
    button: "FC6500の詳細ページへ",
    // bg: "linear-gradient(to right top, #071931 0%, #33274f 50%, #661e43 100%)",
    bg: "from-pink-700  to-white",
  },
}) {
  return (
    <section className="md:py-4 md:px-2 bg-gray-200">
      <div
        className={`text-green-700 md:rounded-3xl max-w-screen-xl mx-auto `}
        style={{ background: '#E3F4DF' }}
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
      <span className="whitespace-nowrap">{title[3]}</span>
    </p>
    <p className="py-8 max-w-lg lg:mb-4  text-6 md:text-xl font-bold leading-tight tracking-normal">
      {desc[1]}
      <span className="whitespace-nowrap">{desc[2]}</span>
    </p>

    <Link href="/products/marshydro/fc6500">
      <a className="bg-transparent rounded-full font-semibold  py-2 px-4 border-2">
        {button}
      </a>
    </Link>
  </>
)