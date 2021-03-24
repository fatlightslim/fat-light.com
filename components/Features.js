import Image from "next/image"
import CheckMark from "./Checkmark"

export default function Features({
  data = [
    {
      cls1:
        "flex flex-col md:flex-row items-center content-center py-12 lg:pt-16 lg:pb-32",
      cls2: "feature-1 md:w-1/2 text-center mb-4 lg:mb-0 relative",
      img: {
        src: "/img/device-mobile.png",
        alt: "Mobile Device",
        width: 370,
        height: 736,
      },
      h2: {
        title:
          "Now go deeper into what your product offers. But, word it as benefits, not as features.",
        desc:
          "“Save your favorites links” is a feature. “Never lose your favorite websites again” is a benefit. Users don’t care about your product, they only care about what’s in it for them.",
      },
      usps: [
        "Summarize the content above",
        "For visitors that don't like to read",
        "And just scan the page",
      ],
    },
    {
      cls1:
        "flex flex-col md:flex-row items-center content-center py-12 lg:pb-16 lg:pt-16",
      cls2:
        "feature-2 md:w-1/2 text-center order-first md:order-last mb-4 lg:mb-0 relative",
      img: {
        src: "/img/device-mobile-tablet-desktop.png",
        alt: "Mobile Device",
        width: 870,
        height: 536,
      },
      h2: {
        title:
          "Now go deeper into what your product offers. But, word it as benefits, not as features.",
        desc:
          "“Save your favorites links” is a feature. “Never lose your favorite websites again” is a benefit. Users don’t care about your product, they only care about what’s in it for them.",
      },
      usps: [
        "Summarize the content above",
        "For visitors that don't like to read",
        "And just scan the page",
      ],
    },
    {
      cls1:
        "flex flex-col md:flex-row items-center content-center py-12 lg:pt-16 lg:pb-32",
      cls2:
        "feature-3 w-full md:w-1/2 text-center px-4 px-md-0 mb-4 lg:mb-0 relative",
      img: {
        src: "/img/device-tablet-phone.png",
        alt: "Mobile Device",
        width: 862,
        height: 608,
      },
      h2: {
        title:
          "Now go deeper into what your product offers. But, word it as benefits, not as features.",
        desc:
          "“Save your favorites links” is a feature. “Never lose your favorite websites again” is a benefit. Users don’t care about your product, they only care about what’s in it for them.",
      },
      usps: [
        "Summarize the content above",
        "For visitors that don't like to read",
        "And just scan the page",
      ],
    },
  ],
}) {
  return (
    <div className="features px-4 md:px-8">
      <div className="container mx-auto">
        {data.map((v) => {
          return (
            <div className={v.cls1} key={v.img.src}>
              <div className={v.cls2}>
                <div className={`mx-auto z-10 relative ${v.cls3}`}>
                  <Image
                    className="rounded"
                    src={v.img.src}
                    alt={v.img.alt}
                    width={v.img.width}
                    height={v.img.height}
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2 ">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                  {v.h2.title}
                </h2>
                <p className="text-md lg:text-lg pt-4 pb-8 text-gray-700 tracking-tight md:mr-4">
                  {v.h2.desc}
                </p>

                <ul className="usps">
                  {v.usps.map((x) => {
                    return (
                      <li key={x} className="text-gray-900 py-1 tracking-tight">
                        <span className="pr-1">
                          <CheckMark />
                        </span>
                        <span className="marker-yellow">{x}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
