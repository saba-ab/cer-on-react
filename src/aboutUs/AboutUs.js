import React from "react";
import logo from "./logo.png";
import "./aboutUs.css";

function AboutUs(header) {
  return (
    <div className="about-us">
      <div className="about-us-img">
        <img src={logo} alt="logo" />
      </div>
      <div className="about-us-text">
        <h2>{header.title || "კომპანიის შესახებ"}</h2>
        <p>
          CER (Construction Equipment Rent) კომპანია "სიიარი" - არის სანდო
          ლიდერი სამშენებლო ინვენტარის გაქირავების ინდუსტრიაში. ჩვენ
          სპეციალიზირებული ვართ მაღალი ხარისხის საფასადე ელექტრო ხარაჩოებით,
          ასაწყობი ხარაჩოებით და დგარებით უზრუნველყოფაში სამშენებლო პროექტების
          მრავალფეროვანი საჭიროებების დასაკმაყოფილებლად. უსაფრთხოებისა და
          მომხმარებელთა კმაყოფილებისადმი მტკიცე ვალდებულებით, ჩვენ მზად ვართ
          მხარი დავუჭიროთ ყველა ზომის სამშენებლო საქმიანობის წარმატებას.
        </p>
      </div>
    </div>
  );
}
export default AboutUs;
