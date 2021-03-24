import { NextSeo } from "next-seo"
import Footer from "../components/Footer"
import BlogBanner from "../components/BlogBanner"
import Contact from "../components/Contact"
import Optimal from "../components/Optimal"
import Nav from "../components/Nav"
import Cart from "../components/cart/Cart"
import { useRouter } from "next/router"

const getSeo = (pathname) => {
  switch (pathname) {
    case "/posts":
      return "ブログ |"
    case "/contact":
      return "お問い合わせ |"
    case "/faq":
      return "よくある質問 |"
    case "/terms":
      return "利用規約 |"
    case "/policies":
      return "サイトポリシー |"
    default:
      return ""
  }
}
export default function Layout({ children, ...props }) {
  const router = useRouter()
  let product = null
  if (props.products) {
    product = props.products[router.pathname.split("/")[3]]
  }
  return (
    <>
      {product ? (
        <NextSeo
          title={`${product.fields.title} | ${process.env.title}`}
          description={product.fields.description}
        />
      ) : (
        <NextSeo title={`${getSeo(router.pathname)} ${process.env.title}`} />
      )}
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Nav {...props} />
          {children}
          <Cart {...props} />
          <div className="grid lg:grid-cols-3 gap-0 md:gap-2 bg-gray-200 md:p-2 md:py-2">
            <BlogBanner />
            <Optimal />
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
