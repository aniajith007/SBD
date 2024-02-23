import React, { useState, useEffect } from 'react';
import Lottie, { LottiePlayer } from "lottie-react";
import anim from './Assets/hbd.json'
import anim2 from './Assets/DoggyWaiting.json'
import anim3 from './Assets/stars.json'
import TextAnimationLoop from './TextAnimationLoop.js';
import { TEXTS_BEF, TEXT_ON } from './Raw.js';
import { addYears, format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import 'animate.css';
import Dropdown from './Test.js';
import { saveAs } from 'file-saver';
import banner1 from './Assets/SBanner1.png'
import banner2 from './Assets/SBanner3.png'
function CountdownTimer({ targetDate }) {
  const calculateTimeUntilBirthday = () => {
    const today = new Date();
    let nextBirthday = new Date(today.getFullYear(), targetDate.getMonth(), targetDate.getDate());
    if (nextBirthday < today) {
      nextBirthday = new Date(today.getFullYear() + 1, targetDate.getMonth(), targetDate.getDate());
    }
    const timeUntilBirthday = nextBirthday - today;
    return timeUntilBirthday;
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeUntilBirthday());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeRemaining(calculateTimeUntilBirthday());
    }, 1000);

    return () => clearTimeout(timer);
  });
  const navigate = useNavigate()
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  const handleDownload = (image,name) => {
    saveAs(image, name); // Save the image file when clicked
  };

  return (<>

    <div>
      <div className="bg-[#191A24] h-screen">
        <div className="flex flex-col items-center justify-center w-full h-full gap-8 sm:gap-16">
          <span className="text-2xl sm:text-3xl font-semibold text-white text-center tracking-widest px-2">
            <TextAnimationLoop texts={days <= 364 ? TEXTS_BEF : TEXT_ON} />
          </span>

          {days <= 364 && <div className="flex justify-center gap-3 sm:gap-8">
            <div className="flex flex-col gap-5 relative">
              <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
                <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
                <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
                  {days}
                </span>
                <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
              </div>
              <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
                {days == 1 ? "Day" : "Days"}
              </span>
            </div>
            <div className="flex flex-col gap-5 relative">
              <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
                <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
                <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
                  {hours}
                </span>
                <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
              </div>
              <span className="text-[#8486A9] text-xs sm:text-2xl text-center font-medium">
                {hours == 1 ? "Hour" : "Hours"}
              </span>
            </div>
            <div className="flex flex-col gap-5 relative">
              <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
                <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
                <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
                  {minutes}
                </span>
                <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
              </div>
              <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
                {minutes == 1 ? "Minute" : "Minutes"}
              </span>
            </div>
            <div className="flex flex-col gap-5 relative">
              <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
                <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
                <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
                  {seconds}
                </span>
                <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
              </div>
              <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
                {seconds == 1 ? "Second" : "Seconds"}
              </span>
            </div>
          </div>}
          <div className="absolute left-0 top-50 mt-4 ml-4 flex flex-col gap-4">
            <button className=" bg-white text-gray-400 p-2 rounded-md" onClick={() => handleDownload(banner1,"HBDSbanner1")}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 animate__animated animate__flash animate__infinite">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
              </svg>
            </button>
            <button className=" bg-white text-gray-400 p-2 rounded-md" onClick={() => handleDownload(banner2,"HBDSbanner2")}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 animate__animated animate__flash animate__infinite">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
              
            </button>
          </div>
          {<div className='flex absolute font-poppins animate__animated animate__flash animate__infinite text-xl text-white'>{format(targetDate, "dd-MM-yyyy")}</div>}
          {days == 365 ? <Lottie
            animationData={anim}
            loop={true}
            style={{ width: 200, height: 200, display: "flex" }}
          /> : <Lottie
            animationData={anim2}
            loop={true}
            style={{ width: 200, height: 200, display: "flex" }}
          />}

          <button onClick={() => navigate('/SBD/3d')} type="button" class="text-white mx-4 bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
            <Lottie
              animationData={anim3}
              loop={true}
              style={{ width: 50, height: 30, display: "flex", position: 'relative' }}
            />
            Let's Explore the Magical place built just for you!
          </button>
        </div>
      </div>
    </div>
  </>
  );
}

function Countdown() {
  // Enter the birthday in the format (year, month - 1, day)
  const day = 24;
  var year = new Date().getFullYear();
  const month = 2;
  if (new Date().getDate() > day && new Date().getMonth() == month - 1) {
    const date = new Date();
    const newDate = addYears(date, 1);
    console.log("Next Your Spl Day : ", newDate)
    year = newDate.getFullYear()
  }
  //console.log(day,year,month,new Date())
  const targetDate = new Date(year, month - 1, day); // May 1, 2024
  return (
    <div>
      <CountdownTimer targetDate={targetDate} />
    </div>
  );
}

export default Countdown;
