import Image from "next/image"
import { data } from "../data/home"
import Headline from "../components/Headline"
import FeatureSummary from "../components/FeatureSummary"
import Delivery from "../components/Delivery"
import ReviewBanner from "../components/ReviewBanner"
import Refund from "../components/Refund"
import FeatureNew from "../components/FeatureNew"
import BrandLink from "../components/BrandLink"
import Hero from "../components/Hero"
import Layout from "../components/Layout"

// import Client from 'shopify-buy/index.unoptimized.umd'
// const client = Client.buildClient(process.env.shopify)
export default function Home({ ...props }) {
  return (
    <Layout {...props}>
      <Hero />

      {/* <NewHero {...assets} /> */}
      <Headline data={data.Headline} />
      <FeatureNew />
      {/* <FCcard /> */}
      {/* <Sf4000card /> */}
      {/* <OfficialSpider /> */}
      <Delivery />
      <Refund />
      <ReviewBanner />
      <FeatureSummary />
      <BrandLink brand="spiderfarmer" {...props} />
    </Layout>
  )
}
