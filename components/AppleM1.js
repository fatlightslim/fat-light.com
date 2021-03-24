import Image from "next/image"
import Link from "next/link"

const Header = () => (
  <header className="pt-8 pl-8">
    <h3 className="text-xl font-bold">CPU</h3>
  </header>
)

const LeftCol = () => (
  <>
    <p className="pt-8 pl-8 text-5xl md:text-6xl font-extrabold leading-none tracking-normal">
      <span style={{ color: "#8679cb" }}>8コアCPU</span>
      <br />
      パワーを誇る
      <br />
      <span className="whitespace-nowrap">チップです。</span>
    </p>
    <p className=" max-w-lg p-8  text-6 md:text-xl font-bold leading-1 tracking-normal">
      M1チップは、MacBook&nbsp;Proをとてつもなく高速でパワフルな一台にします。M1が持つ8コアのCPUは、一世代前のものと比べて処理速度が最大2.8倍
      。複雑なワークフローや負荷の高い作業もサクサクこなすその速さには、目を見張るでしょう。しかも、何をする時でも、電力効率が信じられないほど優れてい
      <span className="whitespace-nowrap">ます。</span>
    </p>

    <Link href="/">
      <a className="m-8 bg-transparent  rounded-full font-semibold  py-2 px-4 border-2">
        M1が桁違いに速い理由を見る
      </a>
    </Link>
  </>
)

const RightCol = () => (
  <Image src="/img/m1.png" width={1566} height={1220} alt="" />
)

export default function AppleM1() {
  return (
    <section className="p-6 bg-black">
      <div
        style={{
          background:
            "linear-gradient(to right top, #071931 0%, #33274f 50%, #661e43 100%)",
        }}
        className="text-white rounded-3xl"
      >
        <Header />

        <div className="flex flex-col md:flex-row py-12 lg:pb-16 lg:pt-16">
          <div className="feature-2 md:w-1/2 text-center order-first md:order-last mb-4 lg:mb-0 relative">
            <div className="">
              <RightCol />
            </div>
          </div>
          <div className="w-full md:w-1/2 ">
            <LeftCol />
          </div>
        </div>
      </div>
    </section>
  )
}
