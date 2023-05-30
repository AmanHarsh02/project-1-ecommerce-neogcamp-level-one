import "../Carousel/Carousel.css";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { banner_0, banner_1, banner_2 } from "../../assets/index";
import { useEffect, useState } from "react";

export function Carousel() {
  const [image, setImage] = useState(0);
  const [banner, setBanner] = useState(banner_0);

  const banners = ["1", "2", "3"];

  const getSourceImg = () => {
    switch (image) {
      case 0:
        return setBanner(banner_0);
      case 1:
        return setBanner(banner_1);
      case 2:
        return setBanner(banner_2);
      default:
        return setBanner(banner_0);
    }
  };

  useEffect(() => {
    getSourceImg();
  }, [image]);

  const handleClick = () => {
    document.documentElement.scrollTop = 0;
  };

  const prevImg = () => {
    switch (image) {
      case 0:
        return setImage(2);
      case 1:
        return setImage(0);
      case 2:
        return setImage(1);
      default:
        return setImage(0);
    }
  };

  const nextImg = () => {
    switch (image) {
      case 0:
        return setImage(1);
      case 1:
        return setImage(2);
      case 2:
        return setImage(0);
      default:
        return setImage(0);
    }
  };

  return (
    <div className="carousal__container">
      <div className="img__container">
        <Link to="/products" onClick={handleClick}>
          <img src={banner} alt="banner" />
        </Link>
        <div className="carousal__navigate__btn right" onClick={nextImg}>
          <Icon
            icon="ic:round-keyboard-arrow-right"
            color="white"
            height={30}
          />
        </div>

        <div className="carousal__navigate__btn left" onClick={prevImg}>
          <Icon
            icon="material-symbols:chevron-left-rounded"
            color="white"
            height={30}
          />
        </div>
      </div>
      <div className="carousal__navigation_container">
        {banners.map((_, i) => {
          return (
            <div
              key={i}
              onClick={() => setImage(i)}
              className={
                image === i
                  ? "carousal__navigation active"
                  : "carousal__navigation"
              }
            ></div>
          );
        })}
      </div>
    </div>
  );
}
