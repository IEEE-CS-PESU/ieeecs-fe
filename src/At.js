import React, { useState, useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.halo.min";


const At = () => {
    const [vantaEffect, setVantaEffect] = useState(0);
    const myRef = useRef(null);
    useEffect(() => {
      window.scrollTo(0, 0);
      if (!vantaEffect) {
        setVantaEffect(
          NET({
            el: myRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00
          })
        );
      }
      return () => {
        if (vantaEffect) vantaEffect.destroy();
      };
    }, [vantaEffect]);
  return (
    <>
      <div ref={myRef} className="tt pt-24 text-white bg-slate-50 h-full">ejfkncjkefncjefncjke</div>
    </>
  );
};

export default At;
