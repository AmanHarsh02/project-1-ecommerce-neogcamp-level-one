import "../Home/Home.css";
import {
  Carousel,
  CategoryCard,
  TrendingBrands,
  BrandFeatures,
  Footer,
} from "../../Components/index";

export function Home() {
  return (
    <div className="home__container">
      <section className="hero__section">
        <div className="content__container">
          <Carousel />
        </div>
      </section>

      <section className="categories_section">
        <div className="content__container">
          <div className="categories__heading__container">
            <hr></hr>
            <h2>Categories</h2>
          </div>
          <CategoryCard />
        </div>
      </section>

      <section className="featured__section">
        <div className="content__container"></div>
      </section>

      <section className="trending__brands__section">
        <div className="content__container">
          <div className="trending__brands__heading__container">
            <h2>Trending Brands</h2>
            <p>
              We meticulously select the finest options, ensuring uncompromising
              quality, product excellence, user-friendly experience, and
              long-lasting durability.
            </p>
          </div>
        </div>
        <div className="trending__brands__container">
          <TrendingBrands />
        </div>
      </section>

      <section className="brand__features__section">
        <div className="content__container">
          <BrandFeatures />
        </div>
      </section>

      <Footer />
    </div>
  );
}
