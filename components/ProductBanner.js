import Image from "next/image"
import Link from "next/link"

const Header = ({ header }) => (
  <header className="dosis">
    <h3 className="text-xl font-bold">{header}</h3>
  </header>
)

const LeftCol = ({ title, desc, button }) => (
  <>
    <p className="text-5xl md:text-6xl font-extrabold leading-none tracking-normal whitespace-nowrap">
      <span style={{ fontSize: "125%", color: title.color }}>
        {title[1]}
      </span>
      <br />
      {title[2]}
      <br />
      <span className="whitespace-nowrap">{title[3]}</span>
    </p>
    <p className="py-8 max-w-lg lg:mb-12  text-6 md:text-xl font-bold leading-tight tracking-normal">
      {desc[1]}
      <span className="whitespace-nowrap">{desc[2]}</span>
    </p>

    <Link href="/">
      <a className="bg-transparent rounded-full font-semibold  py-2 px-4 border-2">
        {button}
      </a>
    </Link>
  </>
)

export default function ProductBanner({
  data = {
    header: "CPU",
    title: {
      1: "8コアCPU",
      2: "パワーを誇る",
      3: "チップです。",
      color: "text-purple-400",
    },
    img: {
      src: "/img/m1.png",
      alt: "",
      width: 1566,
      height: 1220,
    },
    desc: {
      1: "M1チップは、MacBook Proをとてつもなく高速でパワフルな一台にします。M1が持つ8コアのCPUは、一世代前のものと比べて処理速度が最大2.8倍。複雑なワークフローや負荷の高い作業もサクサクこなすその速さには、目を見張るでしょう。しかも、何をする時でも、電力効率が信じられないほど優れてい",
      2: "ます。",
    },
    button: "M1が桁違いに速い理由を見る",
    bg: "linear-gradient(to right top, #071931 0%, #33274f 50%, #661e43 100%)",
    // // bg: "from-purple-900 via-pink-700 to-red-700",
  },
}) {
  return (
    <section className="md:py-4 md:px-2 bg-gray-100 ">
      <div
        // className={`text-white rounded-3xl bg-gradient-to-r ${data.bg}`}
        style={{ background: data.bg}}
        // style={{ background: data.bg, minHeight: 766 }}
        className="text-white md:rounded-3xl max-w-screen-xl p-8 md:py-12 mx-auto slide"
      >
        <Header {...data} />
        <div className="grid md:grid-cols-2 mx-auto gap-0">
          <div className="md:col-span-1">
            <LeftCol {...data} />
          </div>

          <div className="md:col-span-1">
            <div className="mt-12 md:mt-0 w-full">
              <Image
                src={data.img.src}
                width={data.img.width}
                height={data.img.height}
                alt={data.img.alt}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
