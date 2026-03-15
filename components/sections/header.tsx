import { geistMono, rocoleta } from "@/app/font";
import { Button } from "../ui/button";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <section className=" py-10 lg:py-20 px-6 xl:px-0" data-aos="fade-in">
      <div className="h-[90vh] lg:h-[80vh] relative overflow-hidden max-w-340 m-auto  rounded-3xl">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div
          className="relative z-10  h-full flex items-end p-3 lg:p-10 text-white"
          data-aos="zoom-out-left"
          data-aos-delay="200"
        >
          <div className=" max-w-176.75">
            <div className="space-y-5">
              <div className="space-y-2">
                <p className={`${geistMono.className} text-white`}>
                  WELCOME TO GOBELINS PARIS
                </p>
                <div className="space-y-3 lg:text-left">
                  <h1 className={`font-medium text-5xl lg:text-[80px] `}>
                    Where the greatest{" "}
                    <span
                      className={`${rocoleta.className} font-extrabold text-[#6148EF]`}
                    >
                      a
                    </span>
                    <span
                      className={`${rocoleta.className} font-extrabold text-[#EF48A4]`}
                    >
                      r
                    </span>
                    <span
                      className={`${rocoleta.className} font-extrabold text-[#48EFE4]`}
                    >
                      t
                    </span>
                    <span
                      className={`${rocoleta.className} font-extrabold text-[#D3EF48]`}
                    >
                      i
                    </span>
                    <span
                      className={`${rocoleta.className} font-extrabold text-[#EF4848]`}
                    >
                      s
                    </span>
                    <span
                      className={`${rocoleta.className} font-extrabold text-[#EF7D48]`}
                    >
                      t
                    </span>
                    <span
                      className={`${rocoleta.className} font-extrabold text-[#4875EF]`}
                    >
                      s
                    </span>{" "}
                    are made
                  </h1>
                  <p className="text-[22px] font-light">
                    Floor die open follow encourage bake ui ocean points every.
                    Must can vendor comms streamline. Illustration focus third
                    flesh muted. Submit wanted view goto give eow. Six effects
                    unit shelf-ware manage going.
                  </p>
                </div>
              </div>
              <div className="space-x-4 space-y-4">
                <Button
                  className="px-6 h-14 py-5 border-[#D9DBDD] text-base cursor-pointer text-[#313437] font-normal rounded-full"
                  variant={"outline"}
                >
                  Start your GOBELINS Journey
                </Button>
                <Button
                  className="px-6 h-14 py-5 border-[#D9DBDD] bg-transparent text-base cursor-pointer text-white font-normal rounded-full"
                  variant={"outline"}
                >
                  <Play fill="#fff" /> Watch Trailer
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
