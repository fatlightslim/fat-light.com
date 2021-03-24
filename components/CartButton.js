import Link from "next/link";

function Body({ url, price }) {
  return (
    <div className="bg-black bg-opacity-80 shadow ">
      {/* <div className="nav-white"> */}
      <div className=" max-w-xl mx-auto  lg:flex lg:items-center lg:justify-between">
        <div className="px-4 py-5 sm:p-6 grid grid-cols-2  sm:px-6  lg:px-8 w-full ">
          <div className="">
            <p className="dosis text-lg leading-6 font-medium whitespace-nowrap inline-block">
              <span className="text-4xl font-bold text-gray-50 ">
                &yen;{price.sale}
              </span>
              <span className="line-through ml-1 text-red-500 text-xl">
                &yen;{price.regular}
              </span>
            </p>
            <p className="text-xs ml-5 text-yellow-300">税込・送料込</p>
          </div>
          <div>
            <Link href={url}>
              <a
                // onClick={() => createCheckout(process.env.sp3000)}
                // className="mt-2 float-right text-center rounded-full border border-transparent bg-indigo-600 px-4 py-2 text-sm leading-6 font-bold text-white hover:bg-indigo-700"
                className="float-right mt-2  px-4 py-2 border border-transparent shadow-sm text-white text-sm font-extrabold rounded-full bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                購入
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function CartButton({ fixedHeader, url, price }) {
  let className = fixedHeader ? "display-block w-full animate__animated fixed top-0 z-50 animate__fadeInDown" : "animate__animated animate__fadeOutUp hidden"
  return (
    <div className={className}>
      <Body url={url} price={price} />
    </div>
  );
}
