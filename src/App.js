import "./App.css";
import Nav from "./component/Nav.js";
import Main from "./component/Main.js";
import Footer from "./component/Footer.js";

function App() {
  let theme = "";
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    theme = "dark";
  } else {
    theme = "light";
  }
  return (
    <>
      <Nav theme={theme}></Nav>
      <Main theme={theme}></Main>
      <Footer theme={theme}></Footer>
    </>
  );
}

export default App;
