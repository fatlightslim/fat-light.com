import { NextSeo } from "next-seo"
import { useCart } from "react-use-cart"
import Confirm from "../../components/cart/Confirm"
import OrderForm from "../../components/cart/OrderForm"
import PaymentForm from "../../components/cart/PaymentForm"
import Breadcrumb from "../../components/cart/Breadcrumb"
import CartBar from "../../components/cart/CartBar"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Footer from "../../components/Footer"
import { calcFee } from "../../utils/api-helpers"

export default function OrderIndex(props) {
  const router = useRouter()
  const { cartTotal, items } = useCart()
  const [coupon, setCoupon] = useState({ id: "" })
  const [form, setForm] = useState({ key: "ORDER", value: {} })
  const [pay, setPay] = useState("online")
  const [charge, setCharge] = useState(getCharge())
  // console.log(charge);

  function getCharge() {
    const delivery = 0
    const discount = coupon.amount_off || 0
    const fee = pay === "online" ? 0 : calcFee(cartTotal)
    const total = cartTotal + delivery + fee - discount
    return {
      delivery,
      discount,
      fee,
      total,
      subTotal: cartTotal,
      tax: total - parseInt(total / 1.1),
    }
  }

  useEffect(() => {
    setCharge(getCharge())
  }, [cartTotal, coupon, pay])

  useEffect(() => {
    if (items.length === 0) {
      router.replace("/")
    }
  }, [])

  const locals = {
    ...props,
    coupon,
    setCoupon,
    form,
    setForm,
    pay,
    setPay,
    charge,
  }

  return (
    <>
      <NextSeo noindex title="注文フォーム" description="" />
      <div className="pb-20 border-b">
        <CartBar {...locals} />
        <Breadcrumb {...locals} />
        <Conditional {...locals} />
      </div>
      <Footer />
    </>
  )
}

const Conditional = (props) => {
  switch (props.form.key) {
    case "CONFIRM":
      return <Confirm {...props} />
    case "ORDER":
      return <OrderForm {...props} />
    case "PAYMENT":
      return <PaymentForm {...props} />
  }
}
