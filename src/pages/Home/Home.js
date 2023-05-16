import "../Home/Home.css";
import { useData } from "../../contexts/DataContext";
import { Carousel, CategoryCard } from "../../Components/index";

export function Home() {
  const { categories } = useData();

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
          <CategoryCard categories={categories} />
        </div>
      </section>

      <section className="featured__section">
        <div className="content__container"></div>
      </section>
    </div>
  );
}
