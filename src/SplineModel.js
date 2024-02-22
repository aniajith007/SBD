import Spline from '@splinetool/react-spline';
import splinedata from './hbd.spline';
import { useEffect } from 'react';

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

  return (
    <div className="flex justify-center items-center h-screen">
      <Spline scene={splinedata} />
    </div>
  );
}
