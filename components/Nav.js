import { getImageFields, BLACKLIST } from "../utils/contentful"
import { Transition } from "@headlessui/react"
import Logo from "./Logo"
import Link from "next/link"
import Image from "next/image"
import { Play, Bag } from "./Svg"

export default function Nav({
  menuOpen,
  setMenuOpen,
  setCartOpen,
  products,
  ...props
}) {
  const CartOpen = () => (
    <button
      onClick={() => setCartOpen(true)}
      type="button"
      className="group rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none "
    >
      <Bag />
    </button>
  )

  const MenuButton = () => (
    <button
      onClick={() => setMenuOpen(!!!menuOpen)}
      type="button"
      className={`${
        menuOpen ? "text-gray-900" : "text-gray-500"
      } group rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none `}
    >
      <svg
        className="h-6 w-6 text-gray-50"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d={!menuOpen ? "M4 8h16M4 16h16" : "M6 18L18 6M6 6l12 12"}
        />
      </svg>
    </button>
  )

  const actions = [
    // { label: "全ての商品を見る" },
    { label: "よくある質問", link: "/faq" },
    { label: "お問い合わせ", link: "/contact" },
  ]

  let className = "py-1 bg-black bg-opacity-80 z-30"
  // if (router && router.pathname === "/") {
  //   className += " fixed top-0 w-full z-40"
  // }
  return (
    <div className={className}>
      <div className={`relative z-40`}>
        <div className="relative">
          <div className="max-w-7xl mx-auto flex px-4 sm:px-6 lg:px-8">
            <MenuButton />
            <Logo className="text-gray-50 mx-auto" />
            <CartOpen />
          </div>
        </div>

        <Transition
          show={menuOpen}
          className={`absolute inset-x-0 transform shadow-lg`}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 -translate-y-1"
          enterTo="opacity-100 translate-y-0 block"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-1 hidden"
        >
          <Menu products={products} />

          <div className="bg-gray-50">
            <div className="max-w-7xl mx-auto space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
              {actions.map((v) => (
                <ActionMenu {...v} key={v.label} {...props} />
              ))}
            </div>
          </div>
        </Transition>
      </div>
    </div>
  )
}

const Menu = ({ products }) => { 
  const {sf2000, sf1000, ...rest} = products

  return <div className="bg-white mt-1 ">
    <div className="max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
      {Object.entries(rest).map((v, i) => {
        return BLACKLIST.includes(v[0]) ? null : (
          <List
            {...v[1].fields}
            key={v[0]}
            isLast={i === products.length - 1}
          />
        )
      })}
    </div>
  </div>
 }

const List = ({ title, url, image, lead, isLast }) => {
  let className =
    "-m-3 p-3 flex flex-col justify-between sm:rounded-lg hover:bg-gray-50 transition ease-in-out duration-150 border-b border-dotted sm:border-none last:border-none"
  if (isLast) {
    className += " border-none"
  }

  return (
    <Link href={url}>
      <a className={className}>
        <div className="flex md:h-full lg:flex-col md:text-center">
          <div className="w-16 sm:w-32 md:mx-auto">
            <Image {...getImageFields(image)} />
          </div>
          <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
            <div>
              <p className="text-base font-bold text-gray-900 dosis">{title}</p>
              <p className="mt-1 text-sm text-gray-500">
                {lead.title.replace("|", "")}
              </p>
            </div>
            <p className="mt-2 text-sm font-medium text-indigo-600 lg:mt-4">
              さらに詳しく <span aria-hidden="true">→</span>
            </p>
          </div>
        </div>
      </a>
    </Link>
  )
}

const ActionMenu = ({ label, link, ...props }) => (
  <div className="flow-root">
    <Link href={link}>
      <a className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150">
        <Play />
        <span className="ml-3">{label}</span>
      </a>
    </Link>
  </div>
)
