import Image from "next/image"
import { NextSeo } from "next-seo"
import Layout from "../../components/LayoutBlog"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import {
  getImageFields,
  getPostsFromContentful,
  getSinglePostFromContentful,
} from "../../utils/contentful"

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      return <Image {...getImageFields(node.data.target)} />
    },
  },
}

export default function BlogPage({ blog, ...props }) {
  const post = blog.items[0]
  return (
    <>
    <Layout {...post.fields} {...props}>
      <NextSeo
        title={`${post.fields.title} | ${process.env.title}`}
        description={post.fields.excerpt}
      />
      <div className="text-base ">
        {documentToReactComponents(post.fields.body, options)}
      </div>
    </Layout>
    </>
  )
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const posts = await getPostsFromContentful()

  // Get the paths we want to pre-render based on posts
  const paths = posts.items.map((post) => {
    return { params: { slug: post.fields.url } }
  })

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  return {
    props: {
      blog: await getSinglePostFromContentful(params),
    },
  }
}
