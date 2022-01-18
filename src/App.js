import { Header } from "./components/header/Header";
import { Nav } from "./components/nav-bar/Nav";
import { Pages } from "./components/pages-link/Pages";
import { Main } from "./components/main/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Pages />
      <Main />
    </div>
  );
}

export default App;
