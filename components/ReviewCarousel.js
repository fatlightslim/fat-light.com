
import React from "react"
import Wrap from "../Wrap"
import Carousel from "../Carousel"
const data = [
  {
    img: "https://cdn.shopify.com/s/files/1/0470/9089/2956/files/Untitled-4.png?v=1604517459",
    bg: "bg-white",
    lead: "大好きで3つも使っている",
    lead2: "非常に明るいし電気の消費量も少ないし本当に仕事できる。",
    dq: "https://cdn.shopify.com/s/files/1/0470/9089/2956/files/dq.png?v=1604515690",
    dq2: "https://cdn.shopify.com/s/files/1/0470/9089/2956/files/dq2.png?v=1604515689",
    link: "https://fatlightslim.com/products/mars-hydro-sp3000"
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0470/9089/2956/files/Untitled-3.png?v=1604517637",
    bg: "bg-white",
    lead: "もう買ってしまえばいい",
    lead2: "このライトは、2x4のための素晴らしい均等なカバレッジを持っている。",
    dq: "https://cdn.shopify.com/s/files/1/0470/9089/2956/files/dq.png?v=1604515690",
    dq2: "https://cdn.shopify.com/s/files/1/0470/9089/2956/files/dq2.png?v=1604515689",
    link: "https://fatlightslim.com/products/mars-hydro-sp3000"
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0470/9089/2956/files/Untitled-2.png?v=1604517637",
    bg: "bg-white",
    lead: "MARS HYDROを買って\n後悔することはないです",
    lead2: "現在は、野菜用のTS1000Wと花用のTS2000Wを所有しています。この商品は間違いありません。",
    dq: "https://cdn.shopify.com/s/files/1/0470/9089/2956/files/dq.png?v=1604515690",
    dq2: "https://cdn.shopify.com/s/files/1/0470/9089/2956/files/dq2.png?v=1604515689",
    link: "https://fatlightslim.com/products/mars-hydro-ts-series"
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0470/9089/2956/files/Untitled.png?v=1604517636",
    bg: "bg-white",
    lead: "箱の中の太陽",
    lead2: "素晴らしい製品です。4x4のテントのライトを探している人にお勧めします。",
    dq: "https://cdn.shopify.com/s/files/1/0470/9089/2956/files/dq.png?v=1604515690",
    dq2: "https://cdn.shopify.com/s/files/1/0470/9089/2956/files/dq2.png?v=1604515689",
    link: "https://fatlightslim.com/products/mars-hydro-ts-series"
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0470/9089/2956/files/Untitled-5.png?v=1604524512",
    bg: "bg-white",
    lead: "すごく明るくて、静かで、\n熱くならない",
    lead2: "この光はとても明るいです。太陽のように感じますが、そんなに熱くなりません。",
    dq: "https://cdn.shopify.com/s/files/1/0470/9089/2956/files/dq.png?v=1604515690",
    dq2: "https://cdn.shopify.com/s/files/1/0470/9089/2956/files/dq2.png?v=1604515689",
    link: "https://fatlightslim.com/products/mars-hydro-ts-series"
  },
]

export default () => (
  <Wrap componentName="FunctionsSp150">
    <Carousel>
      {data.map((v, i) => {
        let item = "carousel-item"
        if (i === 0) item += " active"
        return (
          <div className={item} key={i}>
            <div className={`"row d-sm-flex ${v.bg}`}>
              <div key={v} className="col-sm-6">
                <a href={v.link}><img src={v.img} alt={v.lead} className="img-fluid d-flex align-item-center pl-2" />
                </a>
              </div>
              <div className={`col-sm-6 ${v.bg}  align-self-center`}>
              <img src={v.dq} alt={v.lead} className="pt-5 pb-2" />
                <h3 className="lh-base text-success font-weight-bold">
              {v.lead.split(/\n/).map((text) => (
                  <span key={text} className="d-block" children={text} />
                ))}
              </h3>
              <h6 className="lh-base pl-5 pr-5 text-black">
                {v.lead2.split(/\n/).map((text) => (
                  <span key={text} className="d-block" children={text} />
                ))}
              </h6>
              <img src={v.dq2} alt={v.lead} className="pb-5 pt-2" /> 
              

              
              </div>
            </div>
          </div>
        )
      })}
    </Carousel>
  </Wrap>
)

