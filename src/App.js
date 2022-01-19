import { Header } from "./components/header/Header";
import { Nav } from "./components/nav-bar/Nav";
import { Pages } from "./components/pages-link/Pages";
import { Main } from "./components/main/Main";

import { useState } from "react";

function App() {
  const [value, setValue] = useState('a');

  const changeValue = (e) => {
    e.preventDefault();
    let val = e.target[0].value;
    setValue((val.length < 30) ? 'yes' : 'no');
    console.log(e.target[0].value);
  }

  return (
    <div className="App">
      <Header />
      <Nav />
      <Pages />
      <Main />

      <div className="container">
        <form onSubmit={changeValue}>
          <input name="inp"></input>
          <button type="submit">Submit</button>
        </form>
        <span>{value}</span>
      </div>
    </div>
  );
}

export default App;
