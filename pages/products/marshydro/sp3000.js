import ProductFeature from "../../../components/ProductFeature"
import PricingTable from "../../../components/PricingTable"
import ProductCard from "../../../components/ProductCard"
import AddToCart from "../../../components/AddToCart"
import Delivery from "../../../components/Delivery"
import Refund from "../../../components/Refund"
import Layout from "../../../components/Layout"
import Video from "../../../components/Video"
import Size from "../../../components/Size"

export default function MarsHydroSp3000(props) {
  const { sp3000: product, sp150, ts } = props.products
  return (
    <Layout {...props}>
      <AddToCart product={product} {...props} />
      <ProductCard product={product} />
      <Video video={product.fields.video} />
      <ProductFeature feature={product.fields.feature} />
      <Delivery />
      <Refund />
      <Size spec={product.fields.spec} />
      <PricingTable main={product} left={sp150} right={ts} {...props} />
    </Layout>
  )
}
