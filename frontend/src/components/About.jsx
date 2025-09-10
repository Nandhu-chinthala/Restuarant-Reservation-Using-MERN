import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Welcome to DineSphere where flavors meet tradition! 🌿✨
We bring you the best of North Indian, South Indian, and global flavors, all in one place. Whether you're craving spicy curries, sizzling tandoori, or classic dosas, we’ve got you covered!
Reserve your table online in just a few clicks and enjoy a delicious dining experience with great food, cozy ambiance, and top-notch service.
Book now & taste the magic! 🍛🔥

            </p>
            <Link  to="/exploreMenu"> Explore Menu<span> <HiOutlineArrowRight /> </span></Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
