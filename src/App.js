import './App.css';
import Footer from './Templates/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;