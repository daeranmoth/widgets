import React, { useState } from "react";
// import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

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
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);
  return (
  <div>
    <button onClick={() => setShowDropdown(!showDropdown)}>Toggle dropdown</button>
    {showDropdown ? (
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
    ) : null}
  </div>
  );
};
