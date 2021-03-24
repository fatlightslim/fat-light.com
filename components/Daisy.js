import Image from "next/image";

export default function Daisy({props = {
    title: {
      1: "MARS HYDRO",
      2: "返品保証を",
      3: "お約束します。",
      color: "#fc2",
    },
    img: {
      src: "/img/sp3000/daisy.png",
      alt: "返品保証",
      width: 757,
      height: 600,
    },
    desc: {
      1: "商品到着後3年未満の場合は、商品検証を行い無償または有償での修理・交換を行います。",
      2: "お客様ご自身の使用による破損や故障は保証対象外となり",
      3: "ます。",
      


    },
    bg: {
      outer: "bg-gray-100",
      inner: "bg-black bg-opacity-80",
    },
    text: "text-white"
  }
}) {
  return (
    <Card {...props}>
      <div className="">
        <Img {...props} />
      </div>
      <div className="pt-4 pb-12 px-4 sm:px-16 lg:pr-0  xl:px-20">
        <div className="lg:self-center">
          {/* <Header {...props} /> */}
          <Title {...props} />
          <Desc {...props} />
          {/* {props.button && <Button {...props} />} */}
        </div>
      </div>
    </Card>
  );
}

function Img({img}) {
  return (
    <div className="mx-auto w-100">
      <Image
        src={img.src}
        alt={img.alt}
        width={img.width}
        height={img.height}
      />
    </div>
  );
}

function Card({ children, bg, text }) {
  return (
    <div className={bg.outer}>
      <div className={`max-w-7xl mx-auto lg:py-12 lg:px-6 lg:px-8 ${text}`}>
        <div
          className={`bg-gradient-to-r ${bg.inner} lg:rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}



function Desc({ desc }) {
  return (
    <p className="mt-4 text-lg leading-6 font-bold">
      {desc[1]}
      {desc[2]}
     <span className="whitespace-nowrap">{desc[3]}</span> 
    </p>
  );
}

function Title({ title }) {
  return (
    <h2 className={`text-4xl md:text-4xl font-extrabold  pt-8 pb-4`}>
      当店は
      <span className="dosis" style={{ color: title.color }}>
        {title[1]}
      </span>
      公式代理店です。
      {/* <span className="block">{title[2]}</span>
      <span className="block">{title[3]}</span> */}
    </h2>
  );
}


