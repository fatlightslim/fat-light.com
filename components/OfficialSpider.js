import Image from "next/image"
import Link from "next/link"


export default function OfficialSpider({
  data = {
    header: "SPIDER FARMER",
    title: {
      1: "SPIDER",
      2: "FARMER",
      3: "公式代理店",
      //   3: "お届けします。",
      color: "#ffc000",
    },
    img: {
      src: "/img/sf7000/sf7000main.png",
      alt: "FC6500",
      width: 1000,
      height: 827,
    },
    desc: {
      1: "FATLIGHTは、SPIDER FARMERの公式代理店です。商品到着後3年未満の場合は、商品検証を行い無償または有償での修理・交換を行います。※お客様ご自身の使用による破損や故障は保証対象外となり",
      2: "ます。",
    },
    button: "SPIDER FARMER商品ページへ",
    // bg: "linear-gradient(to right top, #071931 0%, #33274f 50%, #661e43 100%)",
    bg: "from-pink-700  to-white",
  },
}) {
  return (
    <section className="md:py-4 md:px-2 bg-gray-200 relative z-10">
      <div
        className={`text-green-700 md:rounded-3xl max-w-screen-xl mx-auto `}
        style={{ background: '#E3F4DF' }}
      >
        <div className="grid md:grid-cols-2 mx-auto gap-0">
          <div className="md:col-span-1 p-8 ">
            {/* <Header {...data} /> */}
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
      <span > 
      {title[2]}
      </span>
      <br />
      <span style={{ fontSize: "115%", color: title.color }}className="whitespace-nowrap">{title[3]}</span>
    </p>
    <p className="py-8 max-w-lg lg:mb-4  text-6 md:text-xl font-bold leading-tight tracking-normal">
      {desc[1]}
      <span className="whitespace-nowrap">{desc[2]}</span>
    </p>

    <Link href="/products/spiderfarmer/sf7000">
      <a className="bg-transparent rounded-full font-semibold  py-2 px-4 border-2">
        {button}
      </a>
    </Link>
  </>
)