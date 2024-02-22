import Spline from '@splinetool/react-spline';
import splinedata from './hbd.spline';
import { useEffect } from 'react';
import Countdown from './Countdown';
import Main from './Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SplineModel from './SplineModel';

export default function App() {  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Countdown/>}/>    
      <Route path='/3d' element={<SplineModel/>}/>    
    </Routes>
    </BrowserRouter>
  );
}
