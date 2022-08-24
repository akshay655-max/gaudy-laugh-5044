import logo from './logo.svg';
import './App.css';
import ShopByCategory from './Components/ShopByCategory';
import AllRoutes from './Routes/AllRoutes';
import Footer from './Components/Footer';
import TextContent from './Components/TextContent';
import SimplifyLogo from './Components/SimplifyLogo';

function App() {
  return (
    <div className="App">

     <ShopByCategory/>
    <AllRoutes/>
    <SimplifyLogo/>
    <TextContent/>
    <Footer/>
    </div>
  );
}

export default App;
