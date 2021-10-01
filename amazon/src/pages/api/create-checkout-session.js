const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { items, email } = req.body;

  const transformeditems = items.map((item) => ({
    price_data: {
      description: item.description,
      quantity: 1,
      currenct: "nok",
      unit_amount: item.price * 100 * 8.62,
      product_data: {
        name: item.title,
        images: [item.image],
      },
    },
  }));

  const session = await stripe.checkout;
};
