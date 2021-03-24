import Image from "next/image"

const Reviews = ({ quotes }) =>
  quotes.map((v, i) => {
    return (
      <div key={i} className="md:w-1/2 my-4 lg:my-0 md:px-4">
        <blockquote className="italic text-gray-700 text-sm md:text-md lg:text-lg">
          {v.text}
        </blockquote>
        <div className="mt-3 flex justify-center content-center items-center">
          <div className="w-8 lazy self-start loaded">
            <Image
              src={v.img.src}
              alt={v.img.alt}
              width={v.img.width}
              height={v.img.height}
            />
          </div>
          <span className="ml-2 font-bold text-gray-900 md:text-sm">
            {v.name}
          </span>
        </div>
      </div>
    )
  })

export default function CustomerReview({
  data = {
    h2: () => (
      <span>
        Amazonレビュー2,000件越え！
        <br /> 9割以上のお客様にご満足の評価をいただいています👍
      </span>
    ),
    quotes: [
      {
        name: "Jonathan, Musician",
        text:
          "他社の製品より高いので躊躇しましたが、お値段以上でした。今までの苦労が馬鹿らしくなるぐらいの違い(笑) もうライトはこれでいいや。",
        img: {
          src: "/img/avatar-1.png",
          alt: "Testimonial Avatar",
          width: 32,
          height: 32,
        },
      },
      {
        name: "Customer Name, CEO of Company Name",
        text:
          "“Powerfull and relevant testimonial of Customer X. This content should focus on the result the product had for this customer or answer a doubt your potential customer could have. ”",
        img: {
          src: "/img/avatar-1.png",
          alt: "Testimonial Avatar",
          width: 32,
          height: 32,
        },
      },
    ],
  },
}) {
  return (
    <div className="testimonials py-8 lg:py-16 px-4">
      <div className="container mx-auto">
        <div className="py-8">
          <div className="lg:w-4/6 text-center mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold">
              <data.h2 />
            </h2>
          </div>
        </div>

        <div className="text-center flex flex-col md:flex-row">
          <Reviews {...data} />

          <div className=" text-center flex ">
            <div className="w-64 lazy mx-auto loaded">
              <Image
                src="/img/custome-review.png"
                alt="Customer Review, カスタマーレビュー"
                width={1000}
                height={666}
              />
            </div>
          </div>

          <Reviews {...data} />
        </div>
      </div>
    </div>
  )
}
