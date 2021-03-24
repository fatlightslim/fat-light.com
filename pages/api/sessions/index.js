const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
  const {
    discounts,
    customer_email,
    line_items,
    metadata,
    url,
    client_reference_id,
  } = req.body

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    customer_email,
    client_reference_id,
    line_items,
    mode: "payment",
    success_url: url + "/order/success?session_id={CHECKOUT_SESSION_ID}",
    cancel_url: url,
    locale: "ja",
    discounts,
    metadata
  })

  res.json({ id: session.id })
}
