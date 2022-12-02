import './App.css';
import Footer from './Templates/Footer';
import { Outlet } from 'react-router-dom';
import Video from './Components/Video';
import Header from './Templates/Header';


function App() {
  return (
    <div className="App">
      <Header/>
      <Outlet/>
      <Video/>
      <Footer/>
    </div>
  );
}

export default App;