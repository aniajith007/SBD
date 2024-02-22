import Spline from '@splinetool/react-spline';
import splinedata from './hbd.spline';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SplineModel() {
  useEffect(() => {
    function handleOrientationChange() {
      const { orientation } = window;
      if (orientation === 'portrait-primary' || orientation === 'portrait-secondary') {
        // If the device is in portrait mode, prompt the user to switch to landscape mode
        alert('Please switch to landscape mode for the best experience.');
      }
    }

    // Add event listener to handle orientation change
    window.addEventListener('orientationchange', handleOrientationChange);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);
const navigate = useNavigate()
  return (
    <div className="flex justify-center items-center h-screen">
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-4 py-2 bg-opacity-50 ">
        <button className="text-white" onClick={()=>navigate('/SBD')}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z" />
          </svg>
        </button>
        <div></div> {/* Placeholder for other nav items */}
      </nav>
      <Spline scene={splinedata} />
    </div>
  );
}
