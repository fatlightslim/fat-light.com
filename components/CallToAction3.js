import Image from "next/image"

export default function CallToAction3({
  data = {
    h4: {
      title: "7日間返品保証",
      desc: "ご満足いただけない場合全額返金させていただきます。",
    },
    button: "Clear CTA Text",
    img: {
      src: "/img/drawing-try.png",
      alt: "Drawing Try",
      width: 208,
      height: 168,
    },
  },
}) {
  return (
    <div
    className="bg-no-repeat bg-cover bg-center py-16"
      style={{
        backgroundImage: "url(/img/bg.jpg)"
    }}>
      <div  className="container mx-auto  rounded text-red-700">
        <div className=" flex flex-col lg:flex-row justify-center content-center items-center text-center lg:text-left">

          <div className="flex flex-col content-center mx-2">
            <h4 className="text-4xl md:text-6xl font-extrabold pb-0 mb-0 ">
              {data.h4.title}
            </h4>
            <p className="mb-0 text-gray-700">{data.h4.desc}</p>
          </div>

        </div>
      </div>
    </div>
  )
}
