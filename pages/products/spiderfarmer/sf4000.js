import AddToCart from "../../../components/AddToCart"
import Delivery from "../../../components/Delivery"
import Refund from "../../../components/Refund"
import Sizepink from "../../../components/Sizepink"
import ProductFeatureWhite from "../../../components/ProductFeatureWhite"
import ProductCard from "../../../components/ProductCard"
import PricingTable from "../../../components/PricingTable"
import Layout from "../../../components/Layout"

export default function SpiderfarmerSf4000(props) {
  const { sf4000: product, fc6500, sp6500 } = props.products

  return (
    <Layout {...props}>
      <AddToCart product={product} {...props} />
      <ProductCard product={product} />
      <ProductFeatureWhite feature={product.fields.feature} />
      <Sizepink spec={product.fields.spec} />
      <PricingTable main={product} left={sp6500} right={fc6500} {...props} />
      <Delivery />
      <Refund />
    </Layout>
  )
}
