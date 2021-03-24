export default function Landing(params) {
  return (
    <>
      <div className="w-full h-screen relative text-white">
        <img src="https://cdn.shopify.com/s/files/1/0470/9089/2956/files/91352.jpg?v=1605750211" className="absolute top-0 left-0 w-full h-full object-cover" />

        <header className="z-10 relative mx-auto max-w-6xl px-6 py-8 flex justify-between items-center">

          <a href="#" className="text-xl tracking-wider">FAT Light SLIM</a>

          <ul className="hidden md:flex uppercase text-sm text-gray-500">

            <li>
              <a href="#" className="text-white">Home</a>
            </li>
            <li className="ml-6">
              <a href="#">About</a>
            </li>
            <li className="ml-6">
              <a href="https://fat-light.com/blogs/staff/how-to-choose-your-grow-light">Blog</a>
            </li>
            <li className="ml-6">
              <a href="https://fat-light.com/pages/contact">Contact</a>
            </li>
          </ul>

        </header>

        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-center px-12">
          <div>
            <h1 className="text-3xl md:text-6xl leading-tight mb-16">世界で一番売れてるライト！<br className="hidden md:block" />MARS HYDRO</h1>
            <a href="https://web-7apx08vo7.vercel.app/en/products" className="border border-white py-4 px-8 hover:bg-white hover:text-black">Now on Sale!</a>
          </div>
        </div>

      </div>



      <div className="py-24 px-6">

        <div className="max-w-6xl mx-auto mb-12">


          <h2 className="font-bold mx-auto text-center text-2xl md:text-5xl max-w-3xl leading-tight text-gray-800 mb-12">屋内栽培の本場アメリカで<br /><span className="underline">9割以上</span>のお客様にご満足の評価を<br />いただいております！</h2>


          <p className="mb-6 text-gray-600 mx-auto max-w-lg text-center leading-relaxed">明るさ、熱調整、消音、電気消費量、値段まで！全ての部門で平均☆4.7点を獲得。「収穫量が十分ではない」「植物が急に弱った」等の原因のほとんどはライトの光量不足によるものです。「植物の元気のために電気代やブレーカー、故障のことは気にせずにライトを当て続けたい」そんな夢が叶う2020年最新版の植物用LEDライトをお届けします。</p>


          <p className="text-gray-600 mx-auto max-w-lg text-center leading-relaxed">色んなクーポンがもらえる！ <a href="https://www.instagram.com/invites/contact/?i=swf8p8ynuslc&amp;utm_content=kcc3nuo" className="text-black">Instagram</a>もチェック！</p>

        </div>



        <div className="max-w-5xl mx-auto flex flex-wrap items-start">

          <div className="w-full md:w-1/2 p-4 mb-12">
            <img src="https://cdn.shopify.com/s/files/1/0470/9089/2956/files/2062.jpg?v=1605753164" className="block w-full h-auto mb-12" />
            <a href="#" className="block text-2xl text-black text-center mb-6">収穫量にきっとビックリします</a>
            <p className="mb-6 text-gray-600 text-center leading-relaxed text-sm">太陽光のような心地よい光は植物の光合成をバッチリサポート！生き生きと日々成長するハーブや野菜を育てて、収穫の楽しさを味ってみるのはいかがでしょう！</p>
            <a href="#" className="block text-black text-center">Read more</a>
          </div>

          <div className="w-full md:w-1/2 p-4 mb-12">
            <img src="https://cdn.shopify.com/s/files/1/0470/9089/2956/files/1613.jpg?v=1605752742" className="block w-full h-auto mb-12" />
            <a href="#" className="block text-2xl text-black text-center mb-6">電気代がこんなにおトク</a>
            <p className="mb-6 text-gray-600 text-center leading-relaxed text-sm">明るいライトだったらやっぱり電気代が心配！Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
            <a href="#" className="block text-black text-center">Read more</a>
          </div>

        </div>

      </div>


      <div className="bg-gray-900 text-gray-100 text-center flex justify-center px-6 py-12">


        <a href="#" className="mx-6 hover:text-gray-600">0800 123 456</a>


      </div>
    </>


  )
}
