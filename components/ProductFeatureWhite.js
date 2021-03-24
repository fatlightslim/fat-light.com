import Image from "next/image"

export default function ProductFeature({ feature }) {
  return <Container>
    {feature.map((v) => {
      return (
        <Card key={v.lead}>
          <Lead v={v} />
          <Img img={v.img} />
        </Card>
      )
    })}
  </Container>
}

function Container({ children }) {
  return (
    <div className="bg-white text-left ">
      <div className="max-w-7xl mx-auto bg-white ">{children}</div>
    </div>
  )
}

function Lead({ v }) {
  let className = "dosis text-left text-4xl font-extrabold p-4 mb-4"
  if (v.text) className += ` ${v.text}`
  return <p className={className}>{v.lead}</p>
}

function Img({ img }) {
  return (
    <div className="mx-auto w-100 text-center">
      <Image
        src={img.src}
        alt={img.alt}
        width={img.width}
        height={img.height}
        className="sm:rounded-lg"
      />
    </div>
  )
}

function Card({ children }) {
  return (
    <div className="bg-white">
      <div className={`max-w-3xl mx-auto py-12 lg:p-4 lg:py-12 text-black`}>
        <div className={`bg-white lg:rounded-lg overflow-hidden`}>
          {children}
        </div>
      </div>
    </div>
  )
}
