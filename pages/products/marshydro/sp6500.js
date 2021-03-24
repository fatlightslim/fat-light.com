import ProductFeature from "../../../components/ProductFeature"
import PricingTable from "../../../components/PricingTable"
import ProductCard from "../../../components/ProductCard"
import AddToCart from "../../../components/AddToCart"
import Delivery from "../../../components/Delivery"
import Layout from "../../../components/Layout"
import Refund from "../../../components/Refund"
import Size from "../../../components/Size"

export default function MarsHydrosp6500(props) {
  const { sp6500: product, fc6500, sf7000 } = props.products

  return (
    <Layout {...props}>
      <AddToCart product={product} {...props}/>
      <ProductCard product={product} />
      <ProductFeature feature={product.fields.feature} />
      <Delivery />
      <Refund />
      <Size spec={product.fields.spec} />
      <PricingTable main={product} left={fc6500} right={sf7000} {...props} />
    </Layout>
  )
}
