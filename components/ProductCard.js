
import { getImageFields } from "../utils/contentful"
import Image from "next/image"
import Link from "next/link"

export default function ProductCard({ product }) {
  return (
    <Card {...product.fields}>
      <div className="pt-8 pb-12 px-4  sm:px-16 lg:pr-0  xl:px-20">
        <div className="lg:self-center">
          <Header {...product.fields} />
          <Lead {...product.fields} />
        </div>
      </div>
      <div className="-mt-6 sm:mt-8 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
        <Image  {...getImageFields(product.fields.image)} />
      </div>
    </Card>
  )
}

function Card({ children, color }) {
  return (
    <div className="bg-gray-800">
      <div className={`max-w-7xl mx-auto lg:py-12 lg:px-6 text-white`}>
        <div
          className={`${color.gradient} bg-gradient-to-r lg:rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4`}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

function Lead({ lead, name, color }) {
  return (
    <>
      <h2 className={`dosis text-5xl md:text-6xl font-extrabold  pt-8 pb-4`}>
        <span className="" style={{ fontSize: "125%", color: color.main }}>
          {name}
        </span>
        {lead.title.split("|").map(v => <span key={v} className="block">{v}</span>)}
      </h2>
      <p className="mt-4 text-lg leading-6 font-bold">{lead.desc}</p>
    </>
  )
}

function Header({ brand }) {
  return (
    <header>
      <h3 className="dosis text-xl font-bold">{brand}</h3>
    </header>
  )
}