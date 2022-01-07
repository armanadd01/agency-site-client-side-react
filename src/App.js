
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Shared/footer/Footer';
import Header from './Components/Shared/Header/Header';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}>
            
          </Route>
        </Routes>
        <Footer></Footer>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
