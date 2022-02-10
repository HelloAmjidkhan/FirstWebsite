import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import Work from './components/Work';
import Clients from './components/Clients';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Header />
    <Card />
    <Work /><br /><br />
    <Clients /><br /><br /><br /><br />
    <Footer />
    </div>
  );
}

export default App;
