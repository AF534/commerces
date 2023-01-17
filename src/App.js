import './App.css';
import ReactArrival from './component/Arrival';
import Reactbanner from './component/banner';
import Reactfeature from './component/feature';
import Reactfooter from './component/footer';
import ReactHome from './component/Home';
import ReactNavbar from './component/Navbar';
import ReactNews from './component/News';
import Reactproduct from './component/product';

function App() {
  return (
    < >
      <ReactNavbar/>
      <ReactHome/>
      <Reactfeature/>
      <Reactproduct/>
      <Reactbanner/>
      <ReactArrival/>
      <ReactNews/>
      <Reactfooter/>
    </>
  );
}

export default App;
