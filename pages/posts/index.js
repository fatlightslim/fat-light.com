import Image from "next/image"
import Link from "next/link"
import Layout from "../../components/Layout"
import { getImageFields, getPostsFromContentful } from "../../utils/contentful"

export async function getStaticProps() {
  return {
    props: {
      blog: await getPostsFromContentful(),
    },
  }
}

export default function Posts({ blog, ...props }) {
  return (
    <Layout {...props}>
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              植物用ライトの選び方
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              FATLIGHTのスタッフが経験してきた室内LED栽培の記録です。オタク達がこれまで使ってきたライトを紹介します！
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {blog.items.map((v) => {
              const { sys, fields } = v
              return (
                <div
                  key={sys.id}
                  className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="flex-shrink-0">
                    <div className="h-48 overflow-hidden w-full object-cover">
                      <Image {...getImageFields(fields.image)}    />
                    </div>
                  </div>
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-indigo-600">
                        <Link href={`/posts/${fields.url}`}>
                          <a className="hover:underline">{fields.category}</a>
                        </Link>
                      </p>
                      <Link href={`/posts/${fields.url}`}>
                        <a className="block mt-2">
                          <p className="text-xl font-semibold text-gray-900">
                            {fields.title}
                          </p>
                          <p className="mt-3 text-base text-gray-500">
                            {fields.body.content.map((v, i) => {
                              return i < 2 ? v.content[0].value : null
                            })}
                          </p>
                        </a>
                      </Link>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        {/* <a href="#"> */}
                          <span className="sr-only">{fields.author.fields.name}</span>
                          <div className="h-10 w-10"> 
                          <Image
                          className="rounded-full border"
                            
                            {...getImageFields(fields.author.fields.avatar)}
                          />
                        {/* </a> */}
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          {/* <a href="#" className="hover:underline"> */}
                          {fields.author.fields.name}
                          {/* </a> */}
                        </p>
                        {/* <div className="flex space-x-1 text-sm text-gray-500">
                          <time dateTime="2020-02-12">2/3/2021</time>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}
