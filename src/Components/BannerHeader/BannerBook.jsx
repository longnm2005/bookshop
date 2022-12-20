import ApiBannerBook from "../../FakeApi/ApiBannerBook";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

export default function BannerBook() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className="banner">
      <div>
        <Slider {...settings}>
          {ApiBannerBook.map((item, index) => (
            <div key={index}>
              <a href="https://www.youtube.com">
                <img src={item.image} alt="" />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
