// import ScrollTrigger from "@terwanerik/scrolltrigger";
import ScrollOut from "scroll-out";
// import "splitting/dist/splitting.css";
// import "splitting/dist/splitting-cells.css";
// import Splitting from "splitting";
import { useEffect } from "react";

export default function OneMoreThing(params) {
  useEffect(() => {
    const el = document.querySelector("[data-headline]");
    // Splitting();
    ScrollOut({
      // onShown: function (el) {
      //   // use the web animation API
      //   el.animate([{ opacity: 0 }, { opacity: 1 }], 1000);
      // },
      // onHidden: function (el) {
      //   // hide the element initially
      //   el.style.opacity = 0;
      // },
    });
    // const headline = document.querySelector("[data-headline]")
    // const wrapper = document.querySelector("[data-headline-wrapper]")
    // const textWrapper = document.querySelector(
    //   "[data-headline-animation-wrapper]"
    // )),
    // (headlineAnimated = document.querySelector(
    //   "[data-headline-animation]"
    // )),
  }, []);
  return (
    <div className="bg-gray-50 overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3
          className="text-5xl text-center py-8 font-bold text"
          data-headline
          data-scroll="out"
          data-splitting
        >
          And one more thing
        </h3>
      </div>
      <div className="section-content">
        <div className="gutter-copy-wrapper large-8 medium-10 small-12 large-centered small-uncentered">
          <h2 className="visuallyhidden">プライバシー</h2>
          <figure
            className="animation-icon-privacy"
            data-anim-icon=""
            style={{ animationDelay: "-3s" }}
          ></figure>
          <div className="headline-wrapper" data-headline-wrapper="">
            <h3
              className="headline-unenhanced typography-section-headline-reduced"
              data-headline=""
            >
              プライバシー機能を
              <wbr />
              <span className="nowrap">内蔵。</span>
              <span className="jp-headline-adjust"></span>
            </h3>
            <div
              className="headline-animation-wrapper"
              aria-hidden="true"
              data-headline-animation-wrapper=""
              style={{ height: 63, width: 653 }}
            >
              <div
                className="typography-section-headline-reduced"
                data-headline-animation=""
              >
                ············
              </div>
            </div>
          </div>
          <p
            className="section-intro typography-section-intro-reduced"
            data-fade-in=""
            style={{
              transform: "matrix(1, 0, 0, 1, 0, 74.2009)",
              opacity: 0.239745,
            }}
          >
            iPhoneはあなたの情報を守るように設計されています。Face&nbsp;IDのデータが
            <br className="large-hide medium-show small-hide" />
            <wbr />
            <span className="nowrap">iPhoneを</span>
            離れることはなく、iCloudなどほかの場所にバックアップされることも
            <br className="large-hide medium-show small-hide" />
            <wbr />
            <span className="nowrap">
              決<wbr />し<wbr />て
            </span>
            ありません。iOSは、あなたがアプリをダウンロードする前に、そのアプリの
            <br className="large-hide medium-show small-hide" />
            <wbr />
            <span className="nowrap">
              プ<wbr />ラ<wbr />イ<wbr />バ<wbr />シ<wbr />ー
            </span>
            方針を表示します。そしてApple&nbsp;Payを使う時に、カード番号が
            <br className="large-hide medium-show small-hide" />
            <wbr />
            <span className="nowrap">加盟店と</span>共<wbr />有<wbr />さ<wbr />
            れ<wbr />る<wbr />こ<wbr />と<wbr />は<wbr />あ<wbr />り<wbr />ま
            <wbr />
            <span className="nowrap">
              せ<wbr />
              ん。
            </span>
            <wbr />こ<wbr />れ<wbr />ら<wbr />は<wbr />、<wbr />ほ<wbr />ん
            <wbr />の<wbr />一<wbr />例<wbr />
            <span className="nowrap">です。</span>
            <span className="jp-headline-adjust small-hide"></span>
          </p>
          <p
            className="section-cta typography-section-intro-reduced small-12"
            data-fade-in=""
            // style="transform: matrix(1, 0, 0, 1, 0, 97.6); opacity: 0;"
          >
            <a
              href="/jp/privacy/"
              data-analytics-title="learn more about apple and privacy"
              className="icon-wrapper"
            >
              <span className="icon-copy">Appleとプライバシーについて</span>
              <wbr />
              <span className="nowrap">
                <span className="icon-copy">さらに詳しく</span>
                <span className="icon icon-after more"></span>
              </span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
