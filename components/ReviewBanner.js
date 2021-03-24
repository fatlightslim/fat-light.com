import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import Image from "next/image"
import { reviews } from "../data/reviews"

export default function ReviewBanner({
  data = {
    header: "お客様の声",
    title: {
      1: "Amazonレビュー",
      3: "9割以上のお客様にご満足の評価をいただいております！",
      2: "2,000件越え！",
      color: "#555",
    },
    img: {
      src: "/img/custome-review.png",
      alt: "Customer Review, カスタマーレビュー",
      width: 1000,
      height: 666,
    },
    // bg: "linear-gradient(to right top, #071931 0%, #33274f 50%, #661e43 100%)",
    // // bg: "from-purple-900 via-pink-700 to-red-700",
  },
}) {
  return (
    <div className="relative max-w-7xl mx-auto">
      <div className="px-8 py-8 bg-white md:absolute md:left-0 md:h-full md:w-1/2">
        <Header {...data} />
        {/* <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixqx=EqnZfs2epz&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply" alt="" /> */}
        <div className="sm:flex">

        <div className="w-full sm:w-48 inline-block sm:flex-shrink">

        <Image {...data.img} />
        </div>
        <p className="text-3xl font-bold tracking-normal sm:flex-1">
          <span style={{ color: data.title.color }}>
            {data.title[1]}
            {data.title[2]}
            {/* <br /> */}
            {data.title[3]}
          </span>
        </p>
        </div>

      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:pt-12 sm:px-6 lg:px-8">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
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
  )
}

function Review({ item }) {
  return (
    <>
      <div className="mt-8 md:mt-0 ">
        <Image src={item.img} width={1340} height={365} alt={item.lead} />
      </div>
      <div className={`col-sm-6 ${item.bg}  align-self-center text-left`}>
        <p className="font-bold">{item.lead}</p>
        <p className="pl-5 pr-5 text-black">{item.lead2}</p>
      </div>
    </>
  )
}

const LeftCol = ({ title, img, button }) => (
  <>
    <div className="mt-12 md:mt-0 max-w-xs"></div>
  </>
)

const Header = ({ header }) => (
  <header className="dosis mb-8">
    <h3 className="text-xl font-bold">{header}</h3>
  </header>
)
