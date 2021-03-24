import { products } from "../data/products"
import Link from "next/link"
import Image from "next/image"
// import ContactForm from "./ContactForm"
// import CallToAction2 from "./Cta2"
import ContactEmail from "./ContactEmail"
import BlogBanner from "./BlogBanner"

const LeftCol = ({ title, desc, button }) => (
  <>
    <p className="text-4xl md:text-6xl font-extrabold leading-none tracking-tight whitespace-nowrap">
      {/* <span className={title.color} style={{ fontSize: "125%" }}> */}
      <span style={{ fontSize: "125%", color: title.color }}>{title[1]}</span>
      <br />
      {title[2]}
      <br />
      <span className="whitespace-nowrap">{title[3]}</span>
    </p>

    <p className="max-w-lg mt-8 mb-12 text-6 md:text-xl font-bold leading-tight tracking-normal">
      {desc[1]}
      <span className="whitespace-nowrap">{desc[2]}</span>
    </p>

    <div className=" text-center md:text-left">
      <Link href="/">
        <a className="bg-transparent rounded-full font-semibold  py-2 px-4 border-2">
          {button}
        </a>
      </Link>
    </div>
  </>
)

export default function RelatedProducts() {
  return (
    <>
      <div className="bg-gray-200 p-0 md:pt-4 grid md:grid-cols-3">
        {products.map((data, index) => {
          return (
            <section className="relative z-10 p-2 grid-span-1" key={index}>
              <div
                // className={`p-8 text-white rounded-3xl bg-gradient-to-r ${data.bg}`}
                className={`text-white rounded-3xl p-4 md:min-h-screen`}
                style={{ background: data.bg }}
              >
                <header className="dosis">
                  <h3 className="text-xl font-bold">{data.header}</h3>
                </header>
                <div className="md:grid-cols-2 mx-auto">
                  <div className="md:col-span-1">
                    <LeftCol {...data} />
                  </div>
                  <div className="md:col-span-1">
                    <div className="mt-12 ">
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
        })}
      </div>
      <div className="bg-gray-200 p-0 md:pb-4 grid md:grid-cols-2">
        <section className="p-3 md:grid-cols-2">
          <BlogBanner />
        </section>
        <section className="p-3 md:grid-cols-2">
          <ContactEmail />
        </section>
      </div>
    </>
  )
}
