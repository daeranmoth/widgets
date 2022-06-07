import React from "react";
// import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
  {
    title: 'what is react?',
    content: 'React is a frontend js framework'
  },
  {
    title: 'why use React?',
    content:'best framework'
  },
  {
    title:"how do you use react ?",
    content: 'shiiiityy basard!'
  }
];

export default () => {
  return (
  <div>
    <Search />
  </div>
  );
};
