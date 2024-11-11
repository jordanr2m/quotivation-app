import React from "react";

const Footer = () => {
  return (
    <footer className='wrapper'>
      &copy; {new Date().getFullYear()} || Coded by <a href="https://github.com/jordanr2m" target="blank">Jordan Jackson</a>
    </footer>
  );
};

export default Footer;
