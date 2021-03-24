const Header = ({ h2 }) => (
  <div className="pb-4 lg:pb-8">
    <div className="lg:w-4/5 mx-auto text-center">
      <h2 className="text-3xl md:text-5xl font-bold">{h2.title}</h2>
      <p className="text-lg text-gray-700 my-4 w-2/3 mx-auto">{h2.desc}</p>
    </div>
  </div>
)

const Price = ({ price }) => (
  <>
    <div className="relative flex justify-center mt-8 mb-4">
      <span className="text-xl -mt-4">$</span>
      <span className="text-6xl ml-1 leading-5">{price}</span>
    </div>
    <div className="text-gray-700 text-sm">Billed per month</div>
  </>
)

const List = ({ list }) => (
  <div className="text-left">
    <ul className="usps">
      <li className="text-gray-800  text-base py-1 font-semibold">{list}</li>
      <li className="text-gray-800  text-sm py-1 ">Most important feature</li>
      <li className="text-gray-800  text-sm py-1">
        Another important features
      </li>
      <li className="text-gray-800  text-sm py-1">Next feature here</li>
      <li className="text-gray-800  text-sm py-1">
        Another, less important feature
      </li>
    </ul>
  </div>
)
export default function Pricing({
  data = {
    h2: {
      title: "How much is a high converting landing page worth to you?",
      desc:
        "Choose between this pricing block, or end the page with a CTA Block as shown below. Choose either one.",
    },
    boxes: [
      {
        title: "Standard",
        cls:
          "w-full lg:w-1/3 mt-8 bg-white max-w-lg mx-auto lg:-mr-2 lg:ml-0 lg:mt-8 lg:mt-0",
        price: <Price price={19} />,
        desc: "Explain biggest difference of this plan here",
        list: <List list="" />,
        button: "Start free trial now",
      },
      {
        title: "Premium",
        cls:
          "w-full lg:w-1/3 bg-white shadow-lg max-w-lg mx-auto lg:-mr-2 lg:ml-0 lg:mt-0 lg:mb-0 relative z-10",
        price: <Price price={29} />,
        desc: "This is the plan you want to sell most",
        list: <List list="All features from Standard" />,
        button: "Start free trial now",
        cls2:
          "block border border-2 border-yellow-600 bg-yellow-500 rounded text-base font-semibold p-4 hover:border-yellow-700 hover:bg-yellow-600 ",
      },
      {
        title: "Decoy",
        cls:
          "w-full lg:w-1/3 mt-8 bg-white max-w-lg mx-auto lg:-mr-2 lg:ml-0 lg:mt-8 lg:mt-0",
        price: <Price price={99} />,
        desc:
          "Make this plan super expensive, so your middle plan looks cheaper",
        list: <List list="All features from Premium" />,
        button: "Start free trial now",
      },
    ],
  },
}) {
  return (
    <div className="py-16 px-4 md:px-16 lg:px-0">
      <div className="container mx-auto py-4">
        <Header {...data} />

        <div className="w-full flex flex-col lg:flex-row  mb-8">
          {data.boxes.map((box) => {
            return (
              <div key={box.title} className={box.cls}>
                <div className="border border-gray-300 rounded p-8 px-16 text-center relative">
                  {box.title === "Premium" && (
                    <div className="bg-green-300 p-2 rounded-b w-32 mx-auto relative top-0 -mt-8 uppercase text-sm font-semibold text-green-800">
                      Most Popular
                    </div>
                  )}
                  <div>
                    <h3 className="font-semibold text-lg">{box.title}</h3>
                    {box.price}
                    <p className="mt-8 mb-6 text-gray-700">{box.desc}</p>
                  </div>
                  {box.list}
                  <div className="my-4">
                    <a
                      href="#"
                      className={
                        box.cls2
                          ? box.cls2
                          : "block border-2 border-gray-500 rounded text-base font-semibold p-4 hover:border-blue-500 hover:text-blue-500"
                      }
                    >
                      {box.button}
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
