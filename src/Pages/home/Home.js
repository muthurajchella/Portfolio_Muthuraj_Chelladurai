import React from "react";
import Profile from "../../assets/Home.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import './home.css';

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Muthuraj ChellaDuari.</span> Front End Developer
          </h1>

          <p className="home__description">
            Experienced front-end web developer with 2.5 years of expertise in
            React.js. Skilled in building dynamic, user-interactive web pages
            adhering to W3 standards. Currently contributing to Milanity
            Innovation Pvt Ltd, an IoT-focused company in Chennai, where I
            develop efficient and responsive web applications for diverse
            purposes.
          </p>

          <Link to={"/about"} className="button">
            More About Me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"> </div>
    </section>
  );
};

export default Home;
