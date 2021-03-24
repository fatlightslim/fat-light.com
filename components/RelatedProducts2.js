import Link from "next/link"
import Image from "next/image"
import { getImageFields, BLACKLIST } from "../utils/contentful"

function Product({ title, image, color, lead, name, brand, url }) {
  return (
    <div className="max-w-7xl mx-auto mt-2">
      <div
        className={`rounded-xl shadow-xl overflow-hidden bg-gradient-to-r ${color.gradient}`}
      >
        <div className="pt-10 pb-12 px-6 sm:p-8 lg:p-4">
          <div className="lg:self-center">
            <header>
              <h3 className="dosis text-white text-xl font-bold">{brand}</h3>
            </header>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              <span
                className="block text-5xl: md:text-6xl"
                style={{ fontSize: "130%", color: color.main }}
              >
                {name}
              </span>
              {lead.title.split("|").map((v) => {
                return (
                  <span className="block" key={v}>
                    {v}
                  </span>
                )
              })}
            </h2>
            <p className="mt-4 text-lg leading-6 text-white font-bold">
              {lead.desc}
            </p>
            <Link href={url}>
              <a className="mt-8 bg-transparent border border-white rounded-full shadow px-4 py-2 inline-flex items-center text-base font-bold text-white">
                {name}の詳細を見る
              </a>
            </Link>
          </div>
        </div>
        <div className="-mt-8 mx-2 lg:m-8">
          <Image {...getImageFields(image)} />
        </div>
      </div>
    </div>
  )
}

export default function RelatedProducts2({ products }) {
  return (
    <section className="bg-gray-200 md:pt-4 md:pb-0 dosis ">
      <div className="sm:grid sm:grid-cols-3 gap-2 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 px-2 py-1 ">
        {[1, 0, 3].map((v) => {
          return <Product key={v} {...products[v][1].fields} />
        })}
      </div>
      <div className="sm:grid sm:grid-cols-2 gap-2 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 px-2 py-1">
        {[2, 4].map((v) => {
          return <Product key={v} {...products[v][1].fields} />
        })}
      </div>
      {/* <div className="grid lg:grid-cols-3 gap-2 bg-gray-200 p-2 md:pt-4 md:pb-0 dosis">
        {productsSorted.map((index) => (
          <Product key={index} {...products[index]} />
        ))}
      </div> */}
    </section>
  )
}
