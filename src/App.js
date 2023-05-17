//Компоненты
import { GlobalStyle, Main } from "./Components/Style/GlobalStyle";
import { NavBar } from "./Components/NavBar/NavBar";
import { Order } from "./Components/Order/Order";
import { Menu } from "./Components/Menu/Menu";
import { ModalItem } from "./Components/Modal/ModalItem";
//Компоненты
//Хуки
import { useOpenItem } from "./Components/Hooks/useOpenItem";
import { useOrders } from "./Components/Hooks/useOrders";
//Хуки

import { Context } from "./Components/Functions/context";

function App() {
  const openItem = useOpenItem();
  const orders = useOrders();

  return (
    <Context.Provider
      value={{
        openItem,
        orders,
      }}
    >
      <GlobalStyle />
      <NavBar />
      <Main>
        <Order />
        <Menu />
      </Main>
      {openItem.openItem && <ModalItem />}
    </Context.Provider>
  );
}

export default App;
