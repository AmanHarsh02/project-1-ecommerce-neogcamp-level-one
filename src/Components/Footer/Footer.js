import { Link } from "react-router-dom";
import "../Footer/Footer.css";
import logo from "../../assets/logo.svg";
import { useData } from "../../contexts/DataContext";

export function Footer() {
  const { categories, dataDispatch } = useData();

  const handleClick = (categoryName) => {
    document.documentElement.scrollTop = 0;
    dataDispatch({ type: "SET_SINGLE_CATEGORY", payload: categoryName });
  };

  return (
    <footer className="footer__container">
      <div className="container brand__contianer">
        <div className="logo__container">
          <img src={logo} alt="logo" />
          <h1>SnapShop</h1>
        </div>
        <p>One stop shop for all your Photography needs!</p>
      </div>

      <div className="container categories__contianer">
        <h3>Categories</h3>

        <div className="categories">
          {categories.map(({ _id, categoryName }) => {
            return (
              <Link
                key={_id}
                to="/products"
                onClick={() => handleClick(categoryName)}
              >
                {`${categoryName[0].toUpperCase() + categoryName.slice(1)}`}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="container socials__contianer">
        <h3>Follow Us</h3>
        <a href="https://www.instagram.com/aman.harsh/" target="/">
          Instagram
        </a>
        <a href="https://twitter.com/amanharsh0203" target="/">
          Twitter
        </a>
        <a href="https://www.linkedin.com/in/aman-harsh/" target="/">
          LinkedIn
        </a>
      </div>

      <div className="container contact__contianer">
        <h3>Contact</h3>
        <a href="/">Email</a>
        <a href="/">WhatsApp</a>
      </div>

      <div className="container copyright__contianer">
        <div>
          <h3>© SnapShop 2023</h3>
          <p>
            Built with love by{" "}
            <a href="https://www.linkedin.com/in/aman-harsh/" target="/">
              Aman Harsh
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
