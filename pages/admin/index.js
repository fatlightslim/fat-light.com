import Layout from "../../components/admin/AdminLayout"
import OrderList from "../../components/admin/OrderList"
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0"
import useSWR from "swr"
import { fetchGetJSON } from "../../utils/api-helpers"
const fetcher = async (uri) => {
  const response = await fetch(uri)
  return response.json()
}
// stats, seo, orders,
export default withPageAuthRequired(function Admin({data}) {

  return (
    <Layout>
      <OrderList orders={data} />
    </Layout>
  )
})

export async function getServerSideProps() {
  const URL = process.env.URL || 'http://localhost:3000'
  return {
    props: { data: await fetchGetJSON(`${URL}/api/orders`) },
  }
}
