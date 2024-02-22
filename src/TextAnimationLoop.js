import React, { useMemo } from "react";
import TextTransition, { presets } from "react-text-transition";

const TextAnimationLoop = React.memo(({texts}) => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () =>{clearInterval(intervalId)  }  
  }, []);
  return (
    <div className="justify-center flex">
      <TextTransition springConfig={presets.wobbly}>
        <div
          className={
            "text-xl font-sofiasans text-center" +
            (index % 2 === 0 ? " text-orange-400" : " text-blue-400")
          }
        >
          {`"`+texts[index % texts.length]+`"`}
        </div>
      </TextTransition>
    </div>
  );
});
export default TextAnimationLoop


