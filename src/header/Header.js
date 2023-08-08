import React from "react";
import logoImg from "./logo.png";
import "./header.css";
// function scrollToSection(sectionId) {
//   const targetSection = document.getElementById(sectionId);
//   const header = document.querySelector(".header");
//   const offsetTop = targetSection.offsetTop - header.clientHeight;
//   window.scrollTo({
//     top: offsetTop,
//     behavior: "smooth",
//   });
// }
function Header() {
  const navigation = [
    { aboutUS: "ჩვენ შესახებ" },
    { products: "პროდუქტები" },
    { service: "მომსახურეობა" },
    { contacts: "კონტაქტი" },
  ];
  return (
    <div className="header">
      <div className="logo">
        <a href="/">
          <img src={logoImg} alt="logo" />
        </a>
      </div>
      <div className="navigation">
        <nav>
          <ul>
            {navigation.map((nav, index) => (
              <li key={index}>{`${Object.values(nav)[0]}`}</li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default Header;
