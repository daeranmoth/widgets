import React, { useState } from "react";
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from "./components/Translate";

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

const options = [
  {
    label: 'the color red',
    value: 'red'
  },
  {
    label: 'the color Green',
    value: 'green'
  },
  {
    label: 'A shade of Blue',
    value: 'blue'
  }
];

export default () => {

  return (
  <div>
    <Translate />
  </div>
  );
};
