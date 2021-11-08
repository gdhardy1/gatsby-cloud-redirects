const fetch = require("cross-fetch")

let responseBody = {
  ok: false,
  data: { products: [] },
}

// Returns an array of backpackVariantIds
// from an array of Shopify product handles
//
const tryme = async (req, res) => {
  try {
    let { productName } = req.query
    console.log("product name", productName)

    const productData = await fetchProducts(productName)
    if (productData) {
      res.status(200).json({
        ok: true,
        data: productData,
      })
    } else {
      res.status(200).json(responseBody)
    }
  } catch (error) {
    res.status(200).json({ data: error })
  }
}

/** Helpers */
const fetchProducts = async productName => {
  const response = await fetch(process.env.GATSBY_BACKPACK_URL, {
    headers: {
      "Content-Type": "application/json",
      "x-hasura-admin-secret": process.env.GATSBY_BACKPACK_SECRET_KEY,
      Accept: "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      query: `
      query  {
        products (
          where: { product: { _in: ["${productName}"] } },
        ) {
          product
          stock
        }
      }
    `,
    }),
  })

  const result = await response.json()
  console.log(JSON.stringify(result))
  // no dough
  if (!result && !result.data && !result.data.products) {
    console.log("no products found")
    return []
  }

  return result.data.products

  // got dough
  // return (
  //   ProductVariantIdsData.data.productVariants.map(variant => {
  //     return {
  //       bpVariantId: `Backpack__ProductVariant__${variant.id}`,
  //       gid: variant.foreignId,
  //     }
  //   })[0] || []
  // )
}

export default tryme
