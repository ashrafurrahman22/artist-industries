import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import HomePage from './Pages/HomePage/HomePage';
import Services from './Pages/HomePage/Services/Services';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';
import PageNotFound from './Pages/Shared/PageNotFound';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Header></Header>

      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
