
export default function BlogBanner(params) {
  return (
    <Card>
      <Circle />
      <HeaderSection />
      <Button />
    </Card>
  );
}

function Circle({}) {
  return (
    <div
      className="rounded-full bg-white flex content-center flex-wrap mx-auto"
      style={{
        width: 240,
        height: 240,
      }}
    >
      <span className="text-pink-500 text-4xl font-extrabold mx-auto text-center">
        スタッフ
        <br />
        自腹レビュー
      </span>
    </div>
  );
}

function Button() {
  return (
    <div className="text-center">
    <a
      href="/posts"
      className="bg-yellow-400 hover:bg-yellow-500 rounded border border-yellow-500 shadow font-semibold px-6 py-2 inline-block transition duration-500 ease-in-out cursor-pointer text-xl text-black"
    >
      詳細を見る
    </a>
</div>
  );
}

function HeaderSection({
  data = {
    h2: {
      lead: "Contact",
      title: "植物用ライトの選び方",
      desc:
        process.env.site.name +
        "のスタッフが経験してきた室内LED栽培の記録です。オタク達がこれまで使ってきたライトを紹介します！",
    },
  },
}) {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="text-center text-white">
        <h2 className="mt-1 text-2xl font-extrabold text-white sm:text-4xl sm:tracking-tight">
          {data.h2.title}
        </h2>
        <p className="max-w-xl mt-5 mx-auto text-lg text-gray-50 font-bold dosis">
          {data.h2.desc}
        </p>
      </div>
    </div>
  );
}

function Card({ children }) {
  return (
    <div className="bg-pink-500 overflow-hidden shadow lg:rounded-lg">
      <div className="sm:px-4 py-5 ">{children}</div>
    </div>
  );
}
