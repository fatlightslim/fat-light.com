import { NextSeo } from "next-seo"
import { useRouter } from "next/router"
import useSWR from "swr"
import { fetchGetJSON } from "../../utils/api-helpers"
import { SolidCheck } from "../../components/Svg"
import Layout from "../../components/Layout"
import { useCart } from "react-use-cart"
import { useEffect } from "react"

const ResultPage = (props) => {
  const router = useRouter()
  const { emptyCart } = useCart()

  useEffect(() => {
    emptyCart()
  }, [])

  // Fetch CheckoutSession from static page via
  // https://nextjs.org/docs/basic-features/data-fetching#static-generation
  const { data, error } = useSWR(
    router.query.session_id ? `/api/sessions/${router.query.session_id}` : null,
    fetchGetJSON
  )

  // if (error) return <div>failed to load</div>
  const client_reference_id = data ? data.client_reference_id : router.query._id
  const price = data ? data.amount_total : router.query.price
  if (!client_reference_id) return null
  const pay = data ? "支払い済み" : "代金引換"

  return (
    <Layout {...props}>
      <NextSeo noindex title="注文確認" description="" />
      <div className="bg-gray-100">
        <div className="pt-12 sm:pt-16 lg:pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
                ご注文ありがとうございます。
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                正常に注文が完了いたしました
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-100" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
                <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                  <div className="flex items-center">
                    <h4 className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-indigo-600">
                      注文番号
                    </h4>
                    <div className="flex-1 border-t-2 border-gray-200" />
                  </div>
                  <h3 className="uppercase dosis text-2xl font-extrabold text-gray-900 sm:text-2xl mt-4">
                    #{client_reference_id.substr(18)}
                  </h3>
                  <p className="mt-4 text-base text-gray-500 sm:pr-8">
                    注文番号は当店へのお問い合わせの際に必要となる場合があります。商品のお受け取りまで保管ください。
                    注文確認メールが届かない場合、迷惑メールフォルダ等をご確認いただければ幸いです。
                  </p>
                  <div className="mt-8">
                    <div className="flex items-center">
                      <h4 className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-indigo-600">
                        ご注文後の流れ
                      </h4>
                      <div className="flex-1 border-t-2 border-gray-200" />
                    </div>
                    <ul className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                      {[
                        "注文確認メールをお送りいたしました。",
                        "配送手配が完了後、出荷メールをお送りします。",
                        "在庫がある商品は即日発送いたします。",
                        "ご不明な点などあれば、お問い合わせください。",
                      ].map((v) => {
                        return (
                          <li
                            key={v}
                            className="flex items-start lg:col-span-1"
                          >
                            <div className="flex-shrink-0">
                              <SolidCheck />
                            </div>
                            <p className="ml-1 mt-0.5 font-bold text-xs text-gray-500">
                              {v}
                            </p>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
                <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                  <p className="text-lg leading-6 font-medium text-gray-900">
                    {pay}
                  </p>
                  <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
                    <span className="text-4xl font-medium">&yen;</span>
                    <span>{parseInt(price).toLocaleString()}</span>
                  </div>
                  <div className="mt-6">
                    <div className="rounded-md shadow">
                      <a
                        target="_blank"
                        href={`mailto:hello@fatlightslim.com?subject=購入後のお問い合わせ #${client_reference_id
                          .substr(18)
                          .toUpperCase()}`}
                        className="relative focus:z-40 flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
                      >
                        {/* お問い合わせ */}
                        hello@fatlightslim.com
                      </a>
                    </div>
                  </div>
                  {/* <div className="mt-4 text-xs">
                    <a href="#" className="font-medium text-gray-900">
                      商品カタログをダウンロード
                      <span className="font-normal text-gray-500">(20MB)</span>
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <PrintObject content={data ?? "loading..."} /> */}
    </Layout>
  )
}

export default ResultPage
