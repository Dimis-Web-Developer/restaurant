import React from "react";
import MultiplePizzas from "../asset/multiplePizzas.jpeg";
import "../styles/about.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore,
          tempora. Nam, quae. Nesciunt placeat est temporibus fugit quae
          reprehenderit consequatur cumque tempore aperiam quod quis, esse rem
          eius, a labore tenetur aliquid provident? Modi voluptatibus unde nemo
          omnis autem excepturi, sint distinctio suscipit ratione in quasi id
          fugit neque. Ipsum nemo dignissimos soluta velit sunt ratione quidem
          accusamus ut sapiente beatae. Aut maxime saepe possimus pariatur iste
          aliquam iusto mollitia provident excepturi quisquam est voluptatem
          vero nostrum, natus consectetur a. Pariatur, ex. Expedita possimus
          eligendi laborum. Accusamus porro, illo amet blanditiis, enim quidem
          ratione id esse vitae suscipit natus accusantium.
        </p>
      </div>
    </div>
  );
}

export default About;
