import ProductFeature from "../../../components/ProductFeature"
import PricingTable from "../../../components/PricingTable"
import ProductCard from "../../../components/ProductCard"
import AddToCart from "../../../components/AddToCart"
import Delivery from "../../../components/Delivery"
import Layout from "../../../components/Layout"
import Refund from "../../../components/Refund"
import Size from "../../../components/Size"

export default function MarsHydroFc6500(props) {
  const { fc6500: product, sf7000, sp6500 } = props.products

  return (
    <Layout {...props}>
      <AddToCart product={product} {...props} />
      <ProductCard product={product} />
      <ProductFeature feature={product.fields.feature} />
      <Size spec={product.fields.spec} />
      <PricingTable main={product} left={sf7000} right={sp6500} {...props} />
      <Delivery />
      <Refund />
    </Layout>
  )
}
