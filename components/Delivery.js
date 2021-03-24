import CardBanner from "./CardBanner";

export default function Deliver({
  data = {
    header: "配送について",
    title: {
      1: "送料無料",
      2: "で世界中に",
      3: "お届けします。",
      color: "#888",
    },
    img: {
      src: "/img/delivery.png",
      alt: "配送料無料",
      width: 1000,
      height: 1018,
    },
    desc: {
      0: "大変恐縮ですが... 商品到着まで7〜10日程度のお時間をください!!",
      1: "配送コストを抑え低価格で商品を提供するため、ご注文から到着まで7〜10日程度のお時間を頂戴することをあらかじめご了承くださいますようお願いいたします。ご購入後、追跡番号をメールにてお送りいたします。配送状況については、当該サイトで随時ご確認いただくことが可能",
      2: "です。",
    },
    button: "配送ポリシーを見る",
    href: "/policies",
    bg: {
      outer: "bg-gray-50",
      inner: "from-gray-100 to-white",
    },
    text: "text-black",
  },
}) {
  return <CardBanner {...data} />;
}
