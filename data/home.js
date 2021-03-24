import Image from "next/image"

export const data = {
  Hero: {
    component: "Home",
    h1: {
      desc:
        "太陽光のように強力なLEDライトで収穫量が段違いに向上します！ホビー用途から商業用途まで室内栽培の本場アメリカで大人気のベストセラー植物用ライトです。",
      tags: () => (
        <>
          <div
            style={{ width: 225 }}
            className="block md:inline-block  mx-auto"
          >
            <Image
              src="/img/amazon_PNG11-768x280.png"
              alt="amazon.com,アメリカAmazon"
              className="align-baseline block"
              width={300}
              height={109}
            />
          </div>
          <span className="block">ランキング</span>
          <span className="">全米No.1植物用ライト</span>
          <br />

          <span className="dosis font-bold text-silver text-180">
            MARS HYDRO
          </span>
        </>
      ),
    },
    button: {
      title: "ベストセラー商品を見る",
      desc: "7日間返品保証つき",
    },
    img: {
      src: "/img/lights.jpg",
      alt: "SP3000",
      width: 1000,
      height: 500,
    },
    logo: {
      title: "公式代理店",
    },
  },
  Headline: {
    h2: {
      title: () => (
        <span className="leading-relaxed">
          屋内栽培の本場アメリカで<br /><span className="marker-yellow"><span className="text-5xl">9</span>割以上</span>のお客様にご満足の評価をいただいております
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            width={40}
            height={40}
            className="inline-block text-blue-500"
            style={{display: "inline-block !important"}}
          >
            <path
              fillRule="evenodd"
              d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      ),
      desc: () => (
        <>明るさ、熱調整、消音、電気消費量、値段まで！全ての部門で平均
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#fc2" width="20" heigth="20" className="inline-block">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          4.7点を獲得。「収穫量が十分ではない」「植物が急に弱った」等の原因のほとんどはライトの光量不足によるものです。「植物の元気のために電気代やブレーカー、故障のことは気にせずにライトを当て続けたい」そんな夢が叶う2021年最新版の植物用LEDライトをお届けします。</>
      ),
    },
    h3: [
      {
        title: "収穫量にきっとビックリします",
        desc: "太陽光のような心地よい光は植物の光合成をバッチリサポート！生き生きと日々成長するハーブや野菜を育てて、収穫の楽しさを味ってみるのはいかがでしょう！従来のLEDライトと比較して最大2.5倍の収穫が可能です。",
        img: {
          src: "/img/harvestx.png",
          alt: "",
          width: 1278,
          height: 800,
        },
      },
      {
        title: "電気代がこんなにおトク",
        desc:
          "明るいライトだったらやっぱり電気代が心配！MARS HYDRO製品なら最新のLEDチップ搭載&ファンレス構造で電気料金の最大30%OFFが実現しました。ファンがないため24時間静かな環境で栽培を楽しむことができます。",
        img: {
          src: "/img/savemoney.png",
          alt: "電気代がこんなにおトク",
          width: 1280,
          height: 800,
        },
      },
      {
        title: "3年保証 = 品質への自信です。",
        desc:
          "IP65準拠の防水・防塵性能が湿気や散水の際のトラブルを未然に防ぎます。もちろん、24時間ライトを点けたままでも大丈夫です。万が一故障した場合はエキスパートが誠心誠意対応させていただきます。",
        img: {
          src: "/img/winx.png",
          alt: "3年保証 = 品質への自信です",
          width: 1278,
          height: 800,
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
  Features: [
    {
      cls1:
        "flex flex-col md:flex-row items-center content-center py-12 lg:pt-16 lg:pb-32",
      cls2: "feature-1 md:w-1/2 text-center mb-4 lg:mb-0 relative",
        cls3: "md:w-4/5 ",
      img: {
        src: "/img/sun.png",
        alt: "テントでも、キャビネットでも、ラックでも",
        width: 1500,
        height: 1500,
      },

      h2: {
        title: "もう二度と植物を枯れさせない！",
        desc:
          "第3世代LEDチップが室内栽培の常識を変えます。旧世代比で1.5倍の速度、2.5倍の収穫量を実現しました。太陽光のようなライト色はまるでハワイにいるかのような気分。旧来の赤・青・紫のライト色では把握することが難しかった植物の健康状態もカンタンにチェックできます。",
      },
      usps: [
        "最新のLEDチップを搭載",
        "白色のライトで植物の状態を常にチェック",
        "成長速度も収穫量も桁違い",
      ],
    },
    {
      cls1:
        "flex flex-col md:flex-row items-center content-center py-12 lg:pb-16 lg:pt-16",
      cls2:
        "feature-2 md:w-1/2 text-center order-first md:order-last mb-4 lg:mb-0 relative",
      img: {
        src: "/img/heatsink2.png",
        alt: "ヒートシンク",
        width: 1500,
        height: 1318,
      },
      h2: {
        title: "ファンなし。ノイズなし。かなりクール。",
        // title: "電気代を心配する必要はありません",
        desc:
        "従来のライトはLEDの発熱を逃がすために常時ファンが回り続ける構造になっています。MARS HYDROの製品は最新のLEDチップとアルミ製ヒートシンクを採用することでファンが不要な設計です。当然、電気代も安くなります。"
      },
      usps: [
        "従来のライトは常時ファンが回る構造",
        "ヒートシンクで発熱を抑えファンが不要",
        "当然、電気代も安くなります",
      ],
    },
    {
      cls1:
        "flex flex-col md:flex-row items-center content-center py-12 lg:pt-16 lg:pb-32",
      cls2:
        "feature-3 w-full md:w-1/2 text-center px-4 px-md-0 mb-4 lg:mb-0 relative",
      img: {
        src: "/img/spts.png",
        alt: "最適なライトがきっと見つかります",
        width: 937,
        height: 300,
      },
      h2: {
        title: "最適なライトがきっと見つかります",
        desc:
          "お部屋の一画での趣味の栽培から水耕栽培工場での商業用栽培まで様々な環境に対応してきたMARS HYDROの製品なら、選べるサイズ、デイジーチェーン（数珠つなぎ）機能であなたの環境にとってベストなライト構成が実現できます。",
      },
      usps: [
        "選べるサイズであらゆる環境に適応",
        "デイジーチェーン対応",
        "ベストなライト構成が実現できます",
      ],
    },
  ],
  CallToAction: {
    h4: {
      title: "7日間返品保証",
      desc: "万が一商品にご満足いただけない場合、全額返金させていただきます。",
    },
    button: "オススメ商品を見る",

    img: {
      src: "/img/drawing-try.png",
      alt: "Drawing Try",
      width: 208,
      height: 168,
    },
    cls: {
      bg: "bg-blue-100",
      border: "border-blue-200",
    },
  },
  Testimonials: {
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

  Pricing: {
    h2: {
      title: "How much is a high converting landing page worth to you?",
      desc:
        "Choose between this pricing block, or end the page with a CTA Block as shown below. Choose either one.",
    },
    boxes: [
      {
        title: "Burple Light",
        cls:
          "w-full lg:w-1/3 mt-8 bg-white max-w-lg mx-auto lg:-mr-2 lg:ml-0 lg:mt-8 lg:mt-0",
        desc: "Explain biggest difference of this plan here",
        button: "Start free trial now",
      },
      {
        title: "MARS HYDRO",
        cls:
          "w-full lg:w-1/3 bg-white shadow-lg max-w-lg mx-auto lg:-mr-2 lg:ml-0 lg:mt-0 lg:mb-0 relative z-10",
        desc: "This is the plan you want to sell most",
        button: "Start free trial now",
        cls2:
          "block border border-2 border-yellow-600 bg-yellow-500 rounded text-base font-semibold p-4 hover:border-yellow-700 hover:bg-yellow-600 ",
      },
      {
        title: "Decoy",
        cls:
          "w-full lg:w-1/3 mt-8 bg-white max-w-lg mx-auto lg:-mr-2 lg:ml-0 lg:mt-8 lg:mt-0",
        desc:
          "Make this plan super expensive, so your middle plan looks cheaper",
        button: "Start free trial now",
      },
    ],
  },
  CallToAction2: {
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
      left: "商品の詳細を見る",
      right: "お問い合わせ",
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
}
