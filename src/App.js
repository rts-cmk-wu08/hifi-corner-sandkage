import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './Templates/Header';
import Video from './Components/Video';
import Footer from './Templates/Footer';

function App() {
  return (
    <div className="App">
      <Outlet/>
      <Header/>
      <Video/>
      <Footer/>
    </div>
  );
}

export default App;