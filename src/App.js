import './App.css';
import introvideo from "./Components/video/HiFi-Corner-Web-Video.mp4"


// --- OBS! Lyden på videoen skal være slået fra, ellers afspilles den ikke automatisk! --- //

function App() {
  return (
    <div className="App">

<video width="100%" height="auto" muted autoPlay loop >
  <source src={introvideo} type="video/mp4">
  </source>
</video> 

    </div>
  );
}

export default App;