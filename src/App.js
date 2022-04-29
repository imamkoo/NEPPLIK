import "./App.css";
import "./style/landingPage.css";
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import Superhero from "./components/Superhero";

function App() {
  return (
    <div>
      {/* Intro Section */}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/* End Section */}

      {/* Trending Section */}
      <div className="trending">
        <Trending />
      </div>
      {/* End Trending Section */}

      {/* Marvell Section */}
      <div className="superhero">
        <Superhero />
      </div>
      {/* End Marvell Section */}
    </div>
  );
}

export default App;
