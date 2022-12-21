import "./App.css";
import Footer from "./Templates/Footer";
import { Outlet } from "react-router-dom";
import Header from "./Templates/Header";
import { CartProvider } from "./Context/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
