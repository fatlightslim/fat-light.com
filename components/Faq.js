
export default function Faq({
  data = [
    {
      q: "支払い方法を教えてください",
      a: "クレジットカード、代金引換がお選びいただけます",
    },
    {
      q: "配送について教えてください",
      a:
        // "在庫がある商品は即日発送します。\nご注文から一週間以内の到着となります。",
        "MARS HYDRO, SPIDER FARMERの製品は海外工場から直送もしくは大阪市の倉庫からの発送となります。配送コストを抑え低価格で商品を提供するため、配送コストを抑え低価格で商品を提供するため、ご注文から到着まで7~10日程度のお時間を頂戴することをあらかじめご了承くださいますようお願いいたします。",
    },
    {
      q: "匿名での配送はできますか？",
      a: "はい、可能です。|メルカリ|でも販売してます",
      link: "https://www.mercari.com/jp/u/277323469/",
    },
    {
      q: "本当に安全ですか？",
      a: `当店はMARS HYDRO社、及びSPIDER FARMER社の公式代理店です。\n全ての商品に3年間の保証がつきます。`,
    },
    {
      q: "TSシリーズとSPシリーズの違いは何ですか？",
      a:
        "SPシリーズはTSシリーズの基本的な機能に加え、\n防水・SAMSUNGチップ・省エネ性能を改良した最新モデルになります。",
    },
    {
      q: "どれぐらいの収穫が期待できますか？",
      a:
        "栽培環境や植物の種類によって変わるため、一概にご案内するのは難しいです...が、お使いいただければすぐに違いは分かります。当店でお買い上げいただいた商品は7日間返品無料です。ぜひ一度お試しください。",
    },
    {
      q: "請求書払いはできますか？",
      a:
        "はい、柔軟に対応させていただきます。お気軽にお問い合わせください。",
    },
  ],
}) {
  const LinkText = ({ a, link }) => {
    return a.split("|").map((v, i) => {
      return i === 1 ? (
        <a
          key={i}
          className="text-blue-500 underline"
          href={link}
          rel="noopener"
          target="_blank"
        >
          {v}
        </a>
      ) : (
        <span key={i}>{v}</span>
      )
    })
  }
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 divide-y-2 divide-gray-200 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          よくある質問
        </h2>
        <div className="mt-6">
          <dl className="space-y-8 divide-y divide-gray-200">
            {data.map((v) => {
              return (
                <div
                  key={v.q}
                  className="pt-6 md:grid md:grid-cols-12 md:gap-8"
                >
                  <dt className="text-base font-medium text-gray-900 md:col-span-5">
                    {v.q}
                  </dt>
                  <dd className="mt-2 md:mt-0 md:col-span-7">
                    <p className="text-base text-gray-500">
                      {v.link ? <LinkText {...v} /> : v.a}
                    </p>
                  </dd>
                </div>
              )
            })}
          </dl>
        </div>
      </div>
    </div>
  )
}
