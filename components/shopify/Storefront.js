import Link from "next/link"

export default function StoreFront({ products }) {
  return (
    <div className="hero w-full">
      <div className="container mx-auto mt-8 text-center">
        <h1>Storefront</h1>
        {products.map((product) => {
          return <div key={product.id}>
              <Link href={product.onlineStoreUrl}>
              <a>{product.title}</a>
              </Link>
          </div>
        })}
      </div>
    </div>
  )
}
