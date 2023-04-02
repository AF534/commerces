import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactHome from './component/Home';
import ReactAbout from './component/About';
// import Reactproduct from './component/product';
import Reactcontact from './component/contact';
import Reactcart from './component/cart';
// import Reactproduct from './component/product';
import Reactproduct_page from './component/product_page';
import Reactlogin from './component/login';
import Reactdropdown from './component/dropdown/dropdown';
import ReactNotfound from './component/Notfound';
import Reactwork from './feature/work';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    < >
   <ToastContainer/>
      <Router>
      <Routes>
        
        <Route path='/about' element ={ <ReactAbout/>}/>
        <Route path='/contact' element ={ <Reactcontact/>}/>
        <Route path='/commerce' element ={ <ReactHome/>}/>
        <Route path='/home' element ={ <ReactHome/>}/>
        <Route path='/cart' element ={<Reactcart/>}/>
        <Route path='/product' element ={<Reactproduct_page/>}/>
        <Route path='/login' element ={<Reactlogin/>}/>
        <Route path='/notfound' element ={<ReactNotfound/>}/>
      </Routes>
    </Router>
  {/* <Reactlogin/> */}
  
 

    </>
  );
}

export default App;
