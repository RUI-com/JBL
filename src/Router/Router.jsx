import {BrowserRouter,Routes,Route} from 'react-router-dom';


// import NotFound .....
import NotFound from '../Pages/NotFound/NotFound';
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import ScrollUpButton from '../Components/ScrollUpButton/ScrollUpButton'
import Home from '../Pages/Home';

export default function Router() {
  return (
    <BrowserRouter>
     <Header />
      {/* <!--==================== MAIN ====================--> */}
      <main className="main">
      <Routes>
      {/* Pages */}
      {/* <!--==================== HOME ====================--> */}
    <Route 
          path='/'
          element={<Home/>}
       />
        
        {/* Error Handler */}
        <Route 
          path='*'
          element={<NotFound/>}
        />
    </Routes>
      </main>
   
    <Footer/>
    {/*  <!--========== SCROLL UP ==========--> */}
    <ScrollUpButton/>
    </BrowserRouter>
  )
}

