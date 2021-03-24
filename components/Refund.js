
import CardBanner from "./CardBanner";

export default function Refund({
  data = {
    header: "返品について",
    title: {
      0: "7",
      1: "日間の",
      2: "返品保証を",
      3: "お約束します。",
      color: "#fc2",
    },
    img: {
      src: "/img/refund.png",
      alt: "返品保証",
      width: 1000,
      height: 827,
    },
    desc: {
      1: "万が一ご満足いただけない場合は全額返金させていただき",
      2: "ます。",
    },
    button: "返品ポリシーを見る",
    href: "/policies",
    bg: {
      outer: "bg-gray-100",
      inner: "bg-line",
    },
    text: "text-white"
  },
}) {
  return (
    <CardBanner {...data} />
  );
}
