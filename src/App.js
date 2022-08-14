import './App.css';
import Banner from './Pages/Home/Banner/Banner';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className='px-12'>
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
}

export default App;
