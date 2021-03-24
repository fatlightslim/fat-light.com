import { fetchGetJSON, fetchPostJSON } from "../../../utils/api-helpers"
import { Transition } from "@headlessui/react"
import Layout from "../../../components/admin/AdminLayout"
import { getImageFields } from "../../../utils/contentful"
import Image from "next/image"
import { ArrowLeft, Calendar, SolidCheck } from "../../../components/Svg"
import { useState } from "react"
import { useRouter } from "next/router"
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0"
import useSWR from "swr"
const fetcher = async (uri) => {
  const response = await fetch(uri)
  return response.json()
}

const labels = {
  sent_order_confirm: "配送待ち",
  sent_tracking: "配送中",
  cod: "配送待ち",
  draft: "カゴ落ち",
  name: "名前",
  addr: "住所",
  email: "メール",
  tel: "TEL",
  pay: "決済方法",
}

export default withPageAuthRequired(function AdminOrder({ order }) {
  const [code, setCode] = useState(order.tracking)
  const { log, customer, _id, _ts, charge } = order
  const address = customer.zip + " " + customer.addr1 + customer.addr2
  const locals = { code, setCode, order }

  const Field = ({ name }) => {
    return (
      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
        <dt className="text-sm font-medium text-gray-500">{labels[name]}</dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          <span className="">
            {name === "addr"
              ? address
              : name === "pay"
              ? getPay(charge.pay)
              : name === "receipt"
              ? getReceipt()
              : customer[name]}
          </span>
        </dd>
      </div>
    )
  }

  return (
    <Layout>
      <Actions {...locals} />
      <div className="">
        <h3 className="text-lg leading-6 text-gray-900 uppercase font-bold">
          #{_id.substr(18)}
          <span className="ml-2 align-top inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-green-100 text-green-800">
            <svg
              className="-ml-0.5 mr-1.5 h-2 w-2 text-green-400"
              fill="currentColor"
              viewBox="0 0 8 8"
            >
              <circle cx={4} cy={4} r={3} />
            </svg>
            {labels[log[log.length - 1].status]}
          </span>
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          注文日: {new Date(_ts).toLocaleString()}
        </p>
      </div>
      <div className="mt-5 border-t border-gray-200">
        <dl className="divide-y divide-gray-200">
          <Field name="name" />
          <Field name="addr" />
          <Field name="email" />
          <Field name="tel" />
          <Field name="pay" />
          <Field name="receipt" />
        </dl>
      </div>

      <OrderDetails {...locals} />
      <TrackingCode {...locals} />
      <Log {...locals} />
    </Layout>
  )
})

export async function getServerSideProps({ params }) {
  const URL = process.env.URL || 'http://localhost:3000'
  return {
    props: {
      order: await fetchGetJSON(
        `${URL}/api/orders/` + params._id
      ),
    }, // will be passed to the page component as props
  }
}

const Actions = ({ code, order }) => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const onSubmit = (e) => {
    fetchPostJSON("/api/orders", {
      _id: order._id,
      tracking: code,
      status: "tracking",
      url: window.location.origin,
    }).then((value) => {
      setIsOpen(true)
      setTimeout(() => {
        setIsOpen(false)
      }, 3000)
    })
  }

  return (
    <div className="mb-6 py-2 border-b w-full sticky top-0 bg-white z-50">
      <div className="flex justify-between">
        <button
          type="button"
          onClick={() => router.push("/admin")}
          className=" bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <button
          disabled={code === null}
          onClick={onSubmit}
          className="disabled:opacity-50 disabled:cursor-not-allowed ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save
        </button>
      </div>
      <div className="fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end">
        <Transition
          show={isOpen}
          enter="transform ease-out duration-300 transition"
          enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
          enterTo="translate-y-0 opacity-100 sm:translate-x-0"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden"
        >
          <div className="p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                {/* Heroicon name: outline/check-circle */}
                <svg
                  className="h-6 w-6 text-green-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-3 w-0 flex-1 pt-0.5">
                <p className="text-sm font-medium text-gray-900">
                  Successfully saved!
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Anyone with a link can now view this file.
                </p>
              </div>
              <div className="ml-4 flex-shrink-0 flex">
                <button className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <span className="sr-only">Close</span>
                  {/* Heroicon name: solid/x */}
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  )
}

const TrackingCode = ({ setCode, code }) => {
  return (
    <div className="mb-8">
      <h3 className="py-6 font-bold">追跡番号</h3>
      <div className="ml-2 max-w-sm mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Calendar className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          name="tracking"
          id="tracking"
          className=" focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
          onChange={(e) => setCode(e.target.value)}
          value={code}
        />
      </div>
    </div>
  )
}

const Log = ({ order }) => {
  const { log } = order
  return (
    <div className="">
      <h3 className="py-6 font-bold">履歴</h3>
      <div className="flow-root bg-gray-50  px-4 py-8 rounded-md">
        <ul className="-mb-8">
          {log
            // .sort((a, b) => {
            //   return a._ts < b._ts ? 1 : -1
            // })
            .map((v, i) => {
              const check = [
                "draft",
                "awaiting_payment",
                "sent_order_confirm",
                "sent_tracking",
              ]
              const failure = ["sent_failure", "payment_failed"]
              const thumbsUp = ["done", "sent_tracking", "paid", "done"]
              const icon = check.includes(v.status) ? (
                <SolidCheck2 />
              ) : failure.includes(v.status) ? (
                <Close />
              ) : (
                <ThumbsUp />
              )
              return (
                <li key={v._ts}>
                  <div className="relative pb-8">
                    {log.length - 1 === i ? null : (
                      <span
                        className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                      />
                    )}
                    <div className="relative flex space-x-3">
                      <div>{icon}</div>
                      <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                        <div>
                          <p className="text-sm text-gray-500">{v.status}</p>
                        </div>
                        <div className="text-right text-sm whitespace-nowrap text-gray-500">
                          <time dateTime={v._ts}>{v._ts.toLocaleString()}</time>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
        </ul>
      </div>
    </div>
  )
}

const OrderDetails = ({ order }) => {
  const { items, charge } = order
  return (
    <div className="relative">
      {/* <div className="absolute inset-0 h-1/2 bg-gray-100" /> */}

      <h3 className="pt-6 font-bold">注文概要</h3>
      <div className="mx-auto rounded-lg  overflow-hidden ">
        <div className="flex-1 bg-white py-8 ">
          <div className="flex items-center">
            {/* <h4 className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-indigo-600">
            注文概要
          </h4> */}
            <div className="flex-1 border-t-2 border-gray-100" />
          </div>

          <ul className="divide-y divide-gray-200">
            {items.map((v) => {
              const { fields, sys, quantity } = v
              const { title, price, image } = fields
              return (
                <li key={sys.id}>
                  <div className="px-4 py-4 flex items-center sm:px-6">
                    <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                      <div>
                        <div className="flex text-sm font-medium text-gray-800 truncate items-center">
                          <div className="w-6 h-6">
                            <Image
                              {...getImageFields(image)}
                              className="rounded-sm"
                            />
                          </div>
                          <p className="mx-2">{title}</p>
                          <p className="font-normal text-gray-500">
                            x {quantity}
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 flex-shrink-0 sm:mt-0">
                        <div className="flex overflow-hidden">
                          &yen;{(price * quantity).toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}

            <li>
              <div className="px-4 pt-4 flex items-center sm:px-6">
                <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <div className="flex text-sm font-medium text-gray-800 truncate items-center">
                      配送料
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex-shrink-0 sm:mt-0">
                  <div className="flex overflow-hidden">
                    &yen;{charge.delivery.toLocaleString()}
                  </div>
                </div>
              </div>
              {charge.pay === "cod" && (
                <div className="px-4 pt-4 flex items-center sm:px-6">
                  <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                      <div className="flex text-sm font-medium text-gray-800 truncate items-center">
                        代引手数料
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex-shrink-0 sm:mt-0">
                    <div className="flex overflow-hidden">
                      &yen;{charge.fee.toLocaleString()}
                    </div>
                  </div>
                </div>
              )}
              {charge.discount > 0 && (
                <div className="px-4 pt-4 flex items-center sm:px-6">
                  <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                      <div className="flex text-sm font-medium text-gray-800 truncate items-center">
                        割引
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex-shrink-0 sm:mt-0">
                    <div className="flex overflow-hidden">
                      &yen;{charge.discount.toLocaleString()}
                    </div>
                  </div>
                </div>
              )}
              <div className="px-4 py-2 flex items-center sm:px-6 border-t mt-6">
                <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <div className="flex text-sm font-medium text-gray-800 truncate items-center">
                      合計(税込)
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex-shrink-0 sm:mt-0">
                  <div className="flex overflow-hidden">
                    &yen;{charge.total.toLocaleString()}
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

const SolidUser = () => (
  <span className="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white">
    <svg
      className="h-5 w-5 text-white"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
        clipRule="evenodd"
      />
    </svg>
  </span>
)

const SolidCheck2 = () => (
  <span className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
    <svg
      className="h-5 w-5 text-white"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  </span>
)

const ThumbsUp = () => (
  <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
    <svg
      className="h-5 w-5 text-white"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
    </svg>
  </span>
)

const Close = ({ ...props }) => (
  <span className="h-8 w-8 rounded-full bg-red-500 flex items-center justify-center ring-8 ring-white">
    <svg
      className=" text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  </span>
)

const getPay = (pay) => (pay === "cod" ? "代金引換" : "オンライン決済")

const getReceipt = () => (
  <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
    <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
      <div className="w-0 flex-1 flex items-center">
        <svg
          className="flex-shrink-0 h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
            clipRule="evenodd"
          />
        </svg>
        <span className="ml-2 flex-1 w-0 truncate">領収書</span>
      </div>
      <div className="ml-4 flex-shrink flex space-x-4">
        <button
          type="button"
          className="bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Download
        </button>
      </div>
    </li>
  </ul>
)
