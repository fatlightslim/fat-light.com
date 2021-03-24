import React from "react"
import "./index.scss"
import { MH, url } from "./config/const.js"
// import img0 from "./img/review/sp3000/0.png"

const review =
  "https://cdn.shopify.com/s/files/1/0470/9089/2956/files/review2.png?v=1602768120"

const i18n = {
  0: "屋内栽培の",
  1: "本場アメリカで",
  2: "割以上",
  3: "のお客様に",
  4: "ご満足の評価を",
  5: "いただいております！",
  title: "カスタマーレビュー",
}

const products = [
  {
    bg: "bg-white",
    name: `果実の甘さを左右する`,
    name2: `「日照量」`,
    name3: `${MH}の証明は`,
    name4: `グリーンハウスでも大活躍！`,
    post: `日が短い冬や`,
    post2: `雨の日がつづく梅雨の時も！`,
    post3: `太陽のような光で美味しい作物が育てられます！`,
    link: `${url}-sp150`,
  contents: [
    {
      title: "xxx",
      text: "yyy"
    },
    {
      title: "xxx",
      text: "yyy"
    },
    {
      title: "xxx",
      text: "yyy"
    }
  ],
    img:
      "https://cdn.shopify.com/s/files/1/0286/1642/5581/files/23517_optimized_optimized.png?v=1603399398",
    contents: [
      {
        title: "横並びもOK!",
        text: "とても丈夫で軽い本体。上に掛けるだけじゃなく、横並びでも使えます！植物が上にばっか伸びててお悩みの方、いかがでしょう！"
      },
      {
        title: "防水バッチリ！",
        text: "スプリンクラーのせいで壊れる恐れなし！安心して水やりできる、グリーンハウスにぴったりの証明です。"
      },
      {
        title: "賢いヒートシンク",
        text: "植物は温度に敏感。Mars Hydro LEDの強力なヒートシンク性能で熱くなることはありません！"
      }

    ]
  },
]

function Strawberry() {
  return (
    <section className="Strawberry">
      <div className="App">

        <div className="d-md-flex flex-md-equal w-70 m-5 my-md-3 pl-md-3 justify-content-center border border-danger">
          {products.map((v) => {
            return (

              <div
                key={v.name}
                className={`${v.bg} mr-md-3 pt-3 pt-md-5 text-center text-danger overflow-hidden`}
              >
                <div className="my-3 py-3 px-3 px-md-5 ">

                  <h2 className="display-5 font-weight-bold heading">{v.name}</h2>
                  <h2 className="display-3 font-weight-bold m-3 heading">{v.name2}</h2>


                  <p className="post m-0 text-dark">{v.post}</p>
                  <p className="post m-0 text-dark">{v.post2}</p>
                  <p className="post text-dark">{v.post3}</p>
                  <h2 className="display-6 heading">{v.name3}</h2>
                  <h2 className="display-6 heading">{v.name4}</h2>



                  <div className="d-md-flex flex-md-equal justify-content-center greenhouse">
                    {v.contents.map((v) => {
                      return (
                        <div class="m-3 card border border-white">
                          <img src="https://cdn.shopify.com/s/files/dd1/0286/1642/5581/files/greenhouse_9160df09-e0dc-4907-8f9f-8181fd286e7b.jpg?v=1603406211" class="card-img-top" alt="greenhouse"></img>
                          <div class="card-body">
                            <h5 class="card-title">横並びもOK!</h5>
                            <p class="card-text">とても丈夫で軽い本体。上に掛けるだけじゃなく、横並びでも使えます！植物が上にばっか伸びててお悩みの方、いかがでしょう！</p>

                          </div>
                        </div>
                      )
                    })}


                  </div>





                  <img src={v.img} alt={v.name} className="img-fluid" />

                  <a
                    className="btn btn-block my-3 text-white bg-danger"
                    href={v.link}
                    roll="button"
                  >
                    詳しく見る
        </a>


                </div>
              </div>


            )
          })}
        </div>


      </div>

   </section>
  )
}

export default Strawberry
