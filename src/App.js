import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
  {
    title: "What is React?",
    content:
      "React is a front-end JavaScript library developed by Facebook in 2011.",
  },
  {
    title: "What are the features of React?",
    content: `Major features of React are listed below:

        It uses the virtual DOM instead of the real DOM.
        It uses server-side rendering.
        It follows uni-directional data flow or data binding.`,
  },
  {
    title: "What is JSX?",
    content: `JSX is a shorthand for JavaScript XML. This is a type of file used by React which utilizes the expressiveness of JavaScript along with HTML like template syntax. This makes the HTML file really easy to understand. This file makes applications robust and boosts its performance. `,
  },
];
export default () => {
  return (
    <div>
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
};
