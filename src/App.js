import './App.css';
import Banner from './Pages/Home/Banner/Banner';
import Products from './Pages/Home/Products/Products';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className='px-12'>
      <Navbar></Navbar>
      <Banner></Banner>
      <Products></Products>
    </div>
  );
}

export default App;
