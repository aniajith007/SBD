import React, { useState, useEffect } from 'react';
import Lottie, { LottiePlayer } from "lottie-react";
import anim from './Assets/hbd.json'
import anim2 from './Assets/DoggyWaiting.json'
import TextAnimationLoop from './TextAnimationLoop.js';
import { TEXTS_BEF, TEXT_ON } from './Raw.js';

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

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return (
    <div>      
      <div className="bg-[#191A24] h-screen">
      <div className="flex flex-col items-center justify-center w-full h-full gap-8 sm:gap-16">
        <span className="text-2xl sm:text-3xl font-semibold text-white text-center tracking-widest px-2">
          <TextAnimationLoop texts = {days<=364?TEXTS_BEF:TEXT_ON}/>
        </span>
        {days<=364&&<div className="flex justify-center gap-3 sm:gap-8">
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
        {days==365?<Lottie
                      animationData={anim}
                      loop={true}
                      style={{ width: 200, height: 200, display: "flex" }}
                    />:<Lottie
                    animationData={anim2}
                    loop={true}
                    style={{ width: 200, height: 200, display: "flex" }}
                  />}
      </div>
    </div>
    </div>
  );
}

function Countdown() {
  // Enter the birthday in the format (year, month - 1, day)
  const targetDate = new Date(2024, 1, 20); // May 1, 2024
  return (
    <div>
      <CountdownTimer targetDate={targetDate} />      
    </div>
  );
}

export default Countdown;
