import ProductFeature from "../../../components/ProductFeature"
import ProductCard from "../../../components/ProductCard"
import TStable from "../../../components/TStable"
import Delivery from "../../../components/Delivery"
import Refund from "../../../components/Refund"
import Layout from "../../../components/Layout"

export default function MarsHydroTS(props) {
  const { ts: product } = props.products
  return (
    <Layout {...props}>
      <ProductCard product={product} />
      <ProductFeature feature={product.fields.feature} />
      <TStable product={product} {...props} />
      <Delivery />
      <Refund />
    </Layout>
  )
}
