import { GlobalStyle, Main } from "./Components/Style/GlobalStyle";
import { NavBar } from "./Components/NavBar/NavBar";

function App() {
  return (
    <>
      <GlobalStyle />
      <Main>
        <NavBar />
      </Main>
    </>
  );
}

export default App;
