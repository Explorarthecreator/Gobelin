"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AosInitialiser = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out-sine",
      once: false,
    });

    return () => {
      AOS.refresh();
    };
  }, []);
  return null;
};

export default AosInitialiser;
