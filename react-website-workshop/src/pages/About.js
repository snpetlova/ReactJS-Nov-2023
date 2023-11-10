import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          Welcome to Snezhi's Pizzeria, where passion for pizza meets a
          commitment to quality. At our pizzeria, we believe in more than just
          crafting delicious pizzas; we're dedicated to creating an experience
          that brings people together over the love of great food. Our journey
          began with a simple idea – to redefine the pizza experience in our
          community. Fueled by a passion for authentic flavors and a desire to
          serve something truly exceptional, we opened our doors with a
          commitment to using only the finest ingredients and traditional
          recipes. From the dough to the toppings, every element is crafted with
          care and attention. Beyond the kitchen, we believe in building a sense
          of community. Our pizzeria is more than just a place to eat; it's a
          gathering spot for friends, families, and pizza enthusiasts alike.
          Whether you're celebrating a special occasion or simply enjoying a
          casual meal, our warm and inviting atmosphere is the perfect backdrop
          for creating memories.
        </p>
      </div>
    </div>
  );
}

export default About;
