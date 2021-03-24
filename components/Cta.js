import Image from "next/image"

export default function CallToAction({
  data = {
    h4: {
      title: "Risk Reduction: Try SaaSer 14 days for free",
      desc: "This a in between CTA for visitors that already got convinced.",
    },
    button: "Clear CTA Text",
    img: {
      src: "/img/drawing-try.png",
      alt: "Drawing Try",
      width: 208,
      height: 168,
    },
    cls: {
      bg: "bg-blue-100",
      border: "border-blue-200"
    }
  },
}) {
  return (
    <div className={`py-8  border-t border-b ${data.cls.bg} ${data.cls.border}`}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-center content-center items-center text-center lg:text-left">
          <div className="px-4 self-start mx-auto lg:mx-0 w-32">
            <Image
              src={data.img.src}
              alt={data.img.alt}
              width={data.img.width}
              height={data.img.height}
            />
          </div>

          <div className="px-4 flex flex-col content-center mx-4">
            <h4 className="text-4xl font-semibold pb-0 mb-0 ">
              {data.h4.title}
            </h4>
            <p className="mb-0 text-gray-700">{data.h4.desc}</p>
          </div>

          <a
            href="#"
            className="mt-3 md:mt-0 px-4 btn btn-secundary bg-green-500 rounded text-white font-semibold border border-green-700 shadow py-2 hover:bg-green-600"
          >
            {data.button}
          </a>
        </div>
      </div>
    </div>
  )
}
