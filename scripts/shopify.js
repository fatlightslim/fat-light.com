import Client from 'shopify-buy/index.unoptimized.umd'
export const client = Client.buildClient(process.env.shopify)

// export async function getStaticProps() {
//   const res = await client.product.fetchAll()
//   const products = await JSON.parse(JSON.stringify(res))
//   return {
//     props: {
//       products,
//       // buildTimestamp: Date.now(),
//     },
//   }
// }


// export function createCheckout(variantId) {
//     return client.checkout.create().then((checkout) => {
//         // Do something with the checkout
//         const checkoutId = checkout.id
//         const lineItemsToAdd = [
//             {
//                 variantId,
//                 quantity: 1,
//             },
//         ]

//         // Add an item to the checkout
//         return client.checkout
//             .addLineItems(checkoutId, lineItemsToAdd)
//             .then((checkout) => {
//                 // Do something with the updated checkout
//                 // console.log(checkout) // Array with one additional line item
//                 // window.location.href = checkout.webUrl
//                 return checkout.webUrl
//             })
//     })
// }
