import { Product, List } from "../../sale/spring-2021"
import Layout from "../../../components/Layout"
import Image from "next/image"

export default function SpiderFarmerAll(props) {
  const { sf1000, sf2000, sf4000, sf7000 } = props.products
  const data = [sf1000, sf2000, sf4000, sf7000]
  return (
    <Layout {...props}>
      <div className="bg-gray-100">
        <div className="pt-12 sm:pt-16 lg:pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
                <div className="max-w-lg mx-auto">
                  <Image
                    src="/img/spider_logo.png"
                    alt="Spider Farmer"
                    width={779}
                    height={108}
                  />
                </div>
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                当店はSpider
                Farmerの公式代理店です。3年保証・送料無料でお届けします。
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-100" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {data.map((v) => (
                <Product key={v.sys.id} {...v} {...props} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
