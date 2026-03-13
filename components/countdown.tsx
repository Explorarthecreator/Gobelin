"use client";
import { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: string;
}

const useCountdown = (targetDate: string) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const diff = target - now;

      if (diff <= 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
};

const Countdown = ({ targetDate }: CountdownProps) => {
  const { days, hours, minutes, seconds } = useCountdown(targetDate);
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="flex">
      {[
        { value: days, label: "DAYS" },
        { value: hours, label: "HOURS" },
        { value: minutes, label: "MINUTES" },
        { value: seconds, label: "SECONDS" },
      ].map(({ value, label }, i, arr) => (
        <div key={label} className="flex group-hover:text-[#EF4848]">
          <div className="text-center">
            <p className="text-xl">{pad(value)}</p>
            <p className="text-xs">{label}</p>
          </div>
          {i < arr.length - 1 && <p className="text-xl px-2 font-bold">:</p>}
        </div>
      ))}
    </div>
  );
};

export default Countdown;
