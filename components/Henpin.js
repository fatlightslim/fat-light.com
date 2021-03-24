
import Image from "next/image"
import Link from "next/link"


export default function Henpin({
  data = {
    header: "返品について",
    title: {
      1: "7日間の",
      2: "返品保証を",
      3: "お約束します。",
      //   3: "お届けします。",
      color: "#fc2",
    },
    img: {
      src: "/img/refund.png",
      alt: "返品保証",
      width: 1000,
      height: 827,
    },
    desc: {
      1: "ご満足いただけない場合全額返金させていただき",
      2: "ます。",
    },
    button: "返品ポリシーを見る",
    // bg: "linear-gradient(to right top, #071931 0%, #33274f 50%, #661e43 100%)",
    bg: "from-green-700  to-white",
  },
}) {
  return (
    <section className="md:py-4 md:px-2 bg-gray-200">
      <div
        className={`text-white md:rounded-3xl max-w-screen-xl mx-auto `}
        style={{ background: '#01A04B' }}
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
      <span style={{ fontSize: "115%", color: title.color }}>
        {title[1]}
      </span>
      <br />
      {title[2]}
      <br />
      <span className="whitespace-nowrap">{title[3]}</span>
    </p>
    <p className="py-8 max-w-lg lg:mb-4  text-6 md:text-xl font-bold leading-tight tracking-normal">
      {desc[1]}
      <span className="whitespace-nowrap">{desc[2]}</span>
    </p>

    <Link href="/policies">
      <a className="bg-transparent rounded-full font-semibold  py-2 px-4 border-2">
        {button}
      </a>
    </Link>
  </>
)