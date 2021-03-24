import Image from "next/image"

export default function Headline({
  data = {
    h2: {
      title: () => (
        <span>
          Headline that discribes how your product solves a problem your
          customer has
        </span>
      ),
      desc:
        "Start by defining the pain your customer has right now, for example; clients not paying their invoices. Than write how your solution solves this problem for your customers.",
    },
    h3: [
      {
        title: "First main benefit of your product",
        desc:
          "Brief explanation of why and how this benefit will help your customers",
        img: {
          src: "/img/drawing-music.png",
          alt: "",
          width: 446,
          height: 332,
        },
      },
      {
        title: "Second main benefit of your product",
        desc:
          "Brief explanation of why and how this benefit will help your customers",
        img: {
          src: "/img/drawing-task.png",
          alt: "",
          width: 498,
          height: 288,
        },
      },
      {
        title: "Third main benefit of your product",
        desc:
          "Brief explanation of why and how this benefit will help your customers",
        img: {
          src: "/img/drawing-coffee.png",
          alt: "",
          width: 398,
          height: 344,
        },
      },
    ],
    quote: {
      name: "Customer Name, CEO of Company Name",
      desc:
        '“Powerfull and relevant testimonial of Customer X. This content should focus on the result the product had for this customer or answer a doubt your potential customer could have. "',
      img: {
        src: "/img/avatar-1.png",
        alt: "Testimonial Avatar",
        width: 32,
        height: 32,
      },
    },
  },
}) {
  return (
    <div className=" border-t border-b border-blue-100 pt-20 bg-blue-50  px-4 ">
      <div className="container mx-auto">
        <div className="mb-8">
          <div className="w-full lg:w-8/12 text-center mx-auto ">
            <h2 className="text-2xl md:text-4xl leading-tight font-bold md:max-w-2xl mx-auto">
              <data.h2.title/>
            </h2>
            <p className="text-lg py-2 text-gray-700"><data.h2.desc /></p>
          </div>
        </div>

        <div className="my-16 lg:flex">
          {data.h3.map((v) => {
            return (
              <div
                key={v.title}
                className="my-8 lg:my-0 w-full lg:w-2/6 text-center mt-4 flex flex-col justify-between align-content-start px-4"
              >
                <div className="justify-self-start mx-auto py-2 headline">
                  <Image
                    src={v.img.src}
                    alt={v.img.alt}
                    width={v.img.width}
                    height={v.img.height}
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-xl md:text-2xl lg:text-xl">
                    {v.title}
                  </h3>
                  <p className="text-gray-700 lg:px-8">{v.desc}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* <div className=" mt-4">
          <div className="lg:w-1/2 mx-auto text-center mt-4">
            <blockquote className="italic text-lg text-gray-700">
              {data.quote.desc}
            </blockquote>
            <div className="mt-3 flex justify-center content-center items-center">
              <Image
                src={data.quote.img.src}
                className="w-8"
                alt={data.quote.img.alt}
                width={data.quote.img.width}
                height={data.quote.img.width}
              />

              <span className="ml-2 font-bold text-gray-900">
                {data.quote.name}
              </span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}
