import 'swiper/css';
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './App.scss';

import { BrowserRouter } from 'react-router-dom'

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

import AppRoutes from './config/AppRoutes';
import {useState,useEffect} from 'react'

function App() {
const [loading,setLoading] = useState(true)
  useEffect(() => {
     const timer =  setTimeout(()=>{
            setLoading(false)
      },3000)
    return () => {
      clearTimeout(timer)
    };
  }, []);
  return (
    loading?
    <div className='container'>
<div className='text-fill' data-title='Naveen'>
Naveen
</div>
    </div>:
    <BrowserRouter>
    <Header/>
    <AppRoutes/>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
