import Slider from "react-slick";
import { reviews } from "../data/reviews";

function Review({ item }) {
  return (
    <div className={`"row d-sm-flex ${item.bg}`}>
      <div className="col-sm-6">
        <a href={item.link}>
          <img
            src={item.img}
            alt={item.lead}
            className="img-fluid d-flex align-item-center pl-2"
          />
        </a>
      </div>
      <div className={`col-sm-6 ${item.bg}  align-self-center`}>
        <img src={item.dq} alt={item.lead} className="pt-5 pb-2" />
        <h3 className="lh-base text-success font-weight-bold">
          {item.lead.split(/\n/).map((text) => (
            <span key={text} className="d-block" children={text} />
          ))}
        </h3>
        <h6 className="lh-base pl-5 pr-5 text-black">
          {item.lead2.split(/\n/).map((text) => (
            <span key={text} className="d-block" children={text} />
          ))}
        </h6>
        <img src={item.dq2} alt={item.lead} className="pb-5 pt-2" />
      </div>
    </div>
  );
}

export default function AutoPlayReview({
  settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  },
}) {
  return (
    <Slider {...settings}>
      {reviews.map((item) => (
        <Review key={item.img} item={item} />
      ))}
    </Slider>
  );
}
