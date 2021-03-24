import Layout from "../components/Layout"
import ContactBanner from "../components/Contact"
import Optimal from "../components/Optimal"
import BlogBanner from "../components/BlogBanner"

export default function Contact(props) {
  return (
    <Layout {...props}>
      <ContactBanner />
      <Optimal />
      <BlogBanner />
    </Layout>
  )
}
