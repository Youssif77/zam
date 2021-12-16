import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import {
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaArrowUp,
} from "react-icons/fa";
import { SiGooglechat } from "react-icons/si";

import logo from "../../assets/logo-inverted.png";
import classes from "./Footer.module.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={classes.footer}>
      <img src={logo} alt="logo" />
      <div className={classes["footer__social-media"]}>
        <FaTwitter />
        <FaInstagram />
        <FaLinkedinIn />
        <AiFillYoutube />
      </div>

      <div className={classes["footer__controls"]}>
        <div className={classes["footer__controls-chatbot"]}>
          <SiGooglechat />
        </div>
        <div className={classes["footer__controls-totop"]}>
          <FaArrowUp onClick={scrollToTop} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
