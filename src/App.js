import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import MainContent from './components/main-content/main-content';
import Navbar from './components/nav/custom-navbar';
import SideContent from './components/side content/side-content';
import ChampionView from './views/champion-view/champion-view';
import SeasonView from './views/season-winners-view/season-winner-view'

function App() {
  
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <div className="row">
        <SideContent/>
        <MainContent>
            <ChampionView/>
            <SeasonView season="2005" driverId="alonso"/>
        </MainContent> 
        <SideContent/>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
