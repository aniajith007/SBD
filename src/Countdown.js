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

  return (
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
          {<div className='flex absolute font-poppins animate__animated animate__flash animate__infinite text-xl text-white'>{format(targetDate,"dd-MM-yyyy")}</div>}
          {days == 365 ? <Lottie
            animationData={anim}
            loop={true}
            style={{ width: 200, height: 200, display: "flex" }}
          /> : <Lottie
            animationData={anim2}
            loop={true}
            style={{ width: 200, height: 200, display: "flex" }}
          />}

          <button onClick={()=>navigate('/SBD/3d')} type="button" class= "text-white mx-4 bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
            <Lottie
              animationData={anim3}
              loop={true}
              style={{ width: 50, height: 30, display: "flex",position:'relative' }}
            />
            Let's Explore the Magical place built just for you!
          </button>
        </div>
      </div>
    </div>
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
