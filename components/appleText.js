class AppleText {
  constructor(t) {
    super(t),
      (this._kfs = {
        arr: [],
        group: this.anim.getGroupForTarget(this.el),
      }),
      (this._isEnhanced = !0),
      (this.unenhance = this.unenhance.bind(this));
  }
  mounted() {
    const t = this.gum.getComponentOfType("ReBase", document.body);
    t.on(t.EVT_REBASE, () => {
      this.unenhance();
    }),
      this._isEnhanced &&
        (this.getElements(),
        this.setupIconAnimation(),
        this.setupTextString(),
        this.setTextAnimationSize(),
        this.setupTextClip(),
        this.addKfs());
  }
  onResizeDebounced() {
    this.setTextAnimationSize();
  }
  getElements() {
    (this.fadeElements = this.el.querySelectorAll("[data-fade-in]")),
      (this.wrapper = this.el.querySelector("[data-headline-wrapper]")),
      (this.headline = this.el.querySelector("[data-headline]")),
      (this.textWrapper = this.el.querySelector(
        "[data-headline-animation-wrapper]"
      )),
      (this.headlineAnimated = this.el.querySelector(
        "[data-headline-animation]"
      )),
      (this.iconAnimated = this.el.querySelector("[data-anim-icon]"));
  }
  setupTextString() {
    (this.originalString = this.headline.innerText),
      (this.stringArray = []),
      (this.stringIndex = 0);
  }
  setTextAnimationSize() {
    let t = this.headline.clientHeight,
      e = this.headline.clientWidth;
    (this.textWrapper.style.height = "".concat(t, "px")),
      (this.textWrapper.style.width = "".concat(e, "px"));
  }
  setupTextClip() {
    this.setupStringArray(),
      (this.clip = new n(1, {
        draw: (t) => {
          let e = this.stringArray.length,
            i = Math.floor(t * (e - 1 - (s = 0)) + s);
          var s;
          i !== this.stringIndex &&
            (this.headlineAnimated.innerText = this.stringArray[i]),
            (this.stringIndex = i);
        },
      }));
  }
  setupStringArray() {
    let t = this.originalString,
      e = t.length;
    this.stringArray[e + 1] = t;
    for (let t = e; t > -1; t--) {
      let e = this.stringArray[t + 1],
        r =
          ((s = t - 1), (n = "·"), (i = e).substr(0, s) + n + i.substr(s + 1));
      this.stringArray[t] = r;
    }
    var i, s, n;
    this.headlineAnimated.innerText = this.stringArray[0];
  }
  addKfs() {
    this.addTextKf(), this.addIconKf(), this.addFadeElementsKf();
  }
  addTextKf() {
    let t = this.addContinuousEvent({
      el: this.el,
      start: "a0t - 90vh",
      end: "a0t - 40vh",
      anchors: [this.textWrapper],
      _index: [0, 1],
      event: "privacyTextKf",
      onDraw: (t) => {
        let e = t.tweenProps._index.current;
        this.clip.draw(e);
      },
    });
    this._kfs.arr.push(t);
  }
  addIconKf(){
    let t = this.addContinuousEvent({
      el: this.el,
      start: "a0t - 90vh",
      end: "a0t - 40vh",
      anchors: [this.textWrapper],
      _percent: [0, 100],
      event: "privacyIconKf",
      onDraw: (t) => {
        let e = t.tweenProps._percent.current,
          i = 100 / this.iconKeyframes,
          s = Math.round(e / i);
        this.iconFrame !== s &&
          (this.iconAnimated.style.animationDelay = "-".concat(s, "s")),
          (this.iconFrame = s);
      },
    });
    this._kfs.arr.push(t);
  }
  addFadeElementsKf() {
    this.fadeElements.forEach((t) => {
      let e = this.addKeyframe({
        el: t,
        start: "t - 100vh",
        end: "t - 60vh",
        opacity: ["0", "1"],
        y: ["10vh", "0"],
        easeFunction: "easeOutQuad",
      });
      this._kfs.arr.push(e);
    });
  }
  unenhance() {
    this._isEnhanced && (this._isEnhanced = !1);
  }
  addContinuousEvent(t) {
    t.onDraw ||
      console.log(
        "BubbleGum.BaseComponent::addContinuousEvent required option `onDraw` is missing. Consider using a regular keyframe if you do not need a callback"
      ),
      (t.event = t.event || "Generic-Event-Name-" + o++);
    let e = this.addKeyframe(t);
    return e.controller.on(t.event, t.onDraw), e;
  }
}
