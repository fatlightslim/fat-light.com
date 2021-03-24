// import { getProductsFromContentful } from "../../../scripts/contentful"
// import Layout from "../../../components/Layout2021"
// import Delivery from "../../../components/Delivery"
// import Refund from "../../../components/Refund"
// import BlogBanner from "../../../components/BlogBanner"
// import Contact from "../../../components/Contact"
// // import Video from "../../../components/Video"
import Size from "../../../components/Size"
// import Optimal from "../../../components/Optimal"
import ProductFeature from "../../../components/ProductFeature"
// import ProductCard from "../../../components/ProductCard"
// import PricingTable from "../../../components/PricingTable"

import AddToCart from "../../../components/AddToCart"
import Delivery from "../../../components/Delivery"
import Refund from "../../../components/Refund"
// import Sizepink from "../../../components/Sizepink"
// import ProductFeatureWhite from "../../../components/ProductFeatureWhite"
import ProductCard from "../../../components/ProductCard"
import PricingTable from "../../../components/PricingTable"
import Layout from "../../../components/Layout"

export default function SpiderFarmer2000(props) {
  const { sf2000: product, sf4000, sf1000 } = props.products

  return (
    <Layout {...props}>
      <AddToCart product={product} {...props} />
      <ProductCard product={product} />
      {/* <Video video={product.fields.video} /> */}
      <ProductFeature feature={product.fields.feature} />
      <Delivery />
      <Refund />
      <Size spec={product.fields.spec} />
      <PricingTable main={product} left={sf4000} right={sf1000} {...props} />
    </Layout>
  )
}
