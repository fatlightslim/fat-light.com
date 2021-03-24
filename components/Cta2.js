import Image from "next/image"

export default function CallToAction2({
  data = {
    img: {
      src: "/img/features-drawing-moonlanding.png",
      alt: "Drawing Moonlanding",
      width: 570,
      height: 334,
    },
    h2: {
      title: "Or,ask if your visitor wants to solve problem X today",
      desc:
        "Explain how your solution will solve this problem and ask them to start a free trial, or any other low-key CTA they could take.",
    },
    button: {
      left: "Clear CTA Text",
      right: "View pricing",
      desc: "Reduce Risk: Free 14 day trial",
    },
    quote: {
      img: {
        src: "/img/avatar-1.png",
        alt: "Testimonial Avatar",
        width: 32,
        height: 32,
      },
      name: "Customer Name, CEO of Company Name",
      title:
        "“Powerfull and relevant testimonial of Customer X. This content should focus on the result the product had for this customer or answer a doubt your potential customer could have. ",
    },
  },
}) {
  return (
    <div className="bg-yellow-100 py-16 border-t border-yellow-300 px-4 md:px-16 lg:px-0">
      <div className="container mx-auto py-4">
        <div className=" py-4">
          <div className="lg:w-3/12 col-md-4 mx-auto text-center">
            <div className="lazy mx-auto w-100 w-1/2 lg:w-full ">
              <Image
                src={data.img.src}
                alt={data.img.alt}
                width={data.img.width}
                height={data.img.height}
              />
            </div>
          </div>
        </div>

        <div className="">
          <div className="lg:w-3/6 mx-auto text-center">
            <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold">
              {data.h2.title}
            </h2>
            <p className="text-md md:text-xl lg:text-lg pt-4 pb-8 text-gray-800">
              {data.h2.desc}
            </p>
            <div className="flex justify-center items-center flex- mb-2">
              <a className="bg-yellow-500 hover:bg-yellow-600 rounded border border-yellow-600 hover:border-yellow-700 shadow font-semibold px-4 py-2 inline-block mx-2 cursor-pointer transition duration-500 ease-in-out">
                {data.button.left}
              </a>
              <a
                href="pricing.html"
                className="rounded border border-gray-700 hover:bg-blue-300 px-4 py-2 inline-block mx-2 cursor-pointer transition duration-500 ease-in-out"
              >
                {data.button.right}
              </a>
            </div>
            <small className="capitalize mt-2">{data.button.desc}</small>
          </div>
        </div>

        <div className=" mt-8 ">
          <div className="lg:w-1/2 mx-auto mt-4 text-center ">
            <blockquote className="text-gray-700 italic text-sm  lg:text-lg">
              {data.quote.title}
            </blockquote>
            <div className="mt-3 flex justify-center content-center items-center">
              <div className="w-8 lazy self-start loaded">
                <Image
                  src={data.quote.img.src}
                  alt={data.quote.img.alt}
                  width={data.quote.img.width}
                  height={data.quote.img.height}
                />
              </div>

              <span className="ml-2 font-bold text-gray-900">
                {data.quote.name}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
