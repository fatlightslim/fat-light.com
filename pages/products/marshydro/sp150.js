import ProductFeature from "../../../components/ProductFeature"
import PricingTable from "../../../components/PricingTable"
import ProductCard from "../../../components/ProductCard"
import AddToCart from "../../../components/AddToCart"
import Delivery from "../../../components/Delivery"
import Refund from "../../../components/Refund"
import Layout from "../../../components/Layout"
import Video from "../../../components/Video"
import Size from "../../../components/Size"

export default function MarsHydroSp150(props) {
  const { sp150: product, sp3000, ts } = props.products

  return (
    <Layout {...props}>
      <AddToCart product={product} {...props} />
      <ProductCard product={product} />
      <Video video={product.fields.video} />
      <ProductFeature feature={product.fields.feature} />
      <Size spec={product.fields.spec} />
      <Delivery />
      <Refund />
      <PricingTable main={product} left={sp3000} right={ts} {...props} />
    </Layout>
  )
}
