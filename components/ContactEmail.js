import Image from "next/image"

export default function ContactEmail({
  data = {
    img: {
      src: "/img/features-drawing-moonlanding.png",
      alt: "Drawing Moonlanding",
      width: 570,
      height: 334,
    },
    h2: {
      title: "お問い合わせ",
      desc:
        "製品のことから配送や栽培のことまでお気軽にお問い合わせください。可能な限り迅速に対応させていただきます。",
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
    <div className="bg-yellow-50 border-t border-yellow-100 rounded-xl ">
      <div className="mx-auto text-center 2xl:px-24">
        <div className="py-4 mt-8 2xl:mt-3">
          <div className="lg:w-3/12 mx-auto">
            <div className="mx-auto w-100 w-1/2 lg:w-full ">
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
          <div className=" mx-auto text-center">
            <h2 className="text-5xl font-bold pt-2 pb-4 text-gray-800">
              {data.h2.title}
            </h2>
            <div className="m-4 sm:px-20">
              <a
                className="bg-red-700 text-white p-2 rounded inline-block my-2 w-full"
                // className="block"
                href="mailto:hello@fatlightslim.com"
                target="_blank"
              >
                <span className="px-1 bg-white float-left rounded text-red-600 text-xs ">
                  <svg
                    className="inline-block w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                hello@fatlightslim.com
              </a>
              <a
                className="bg-blue-400 text-white p-2 rounded inline-block my-2 w-full"
                // className="block"
                href="https://twitter.com/fatlightslim"
                target="_blank"
                rel="noopener"
              >
                <span className="px-1 bg-white float-left rounded text-blue-500 text-xs ">
                  <svg className="inline-block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </span>
                @fatlightslim
              </a>
              {/* <a
                target="_blank"
                href="https://twitter.com/messages/compose?recipient_id=1317632177861926917&amp;ref_src=twsrc%5Etfw"
                className="bg-blue-600 text-white p-2 rounded inline-block my-2 w-full"
                data-screen-name="fatlightslim"
                data-show-count="false"
              >
                <span  className="px-2 bg-white float-left rounded">
                  <div >
                    <Image
                      src="/img/logos/twitter.svg"
                      alt=""
                      width={16}
                      height={16}
                    />

                  </div>
                </span>
                @fatlightslim
              </a>
              <script
                async
                src="https://platform.twitter.com/widgets.js"
                charSet="utf-8"
              ></script> */}
            </div>

            <p className="text-md md:text-xl lg:text-lg px-4 sm:mx-20  pb-8 text-gray-800">
              {data.h2.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
