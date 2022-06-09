import React, { useState } from "react";
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

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


 const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
  <div>
    <Header />
    <Route path="/">
      <Accordion items={items} />
    </Route>
    <Route path="/list">
      <Search />
    </Route>
     <Route path="/dropdown">
      <Dropdown
      label="Select a color"
      options={options}
      selected={selected}
      onSelectedChange={setSelected}
      />
    </Route>
     <Route path="/translate">
      <Translate />
    </Route>

  </div>
  );
};

export default App;
