import 'swiper/css';
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './App.scss';

import { BrowserRouter } from 'react-router-dom'

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

import AppRoutes from './config/AppRoutes';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <AppRoutes/>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
