import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import Countdown from "../countdown";

const UpcomingEvent = () => {
  return (
    <section className="bg-[#F4F5F5] py-15 space-y-10">
      <div className="max-w-340 m-auto px-6 xl:px-0">
        <div className="max-w-162">
          <h1 className="font-medium text-[40px]">Upcoming Events</h1>
          <p className="text-[#787F87] text-[22px] font-light">
            Floor die open follow encourage bake ui ocean points every. Must can
            vendor comms streamline.
          </p>
        </div>
      </div>
      {/* <div className="group relative h-[200px] w-[700px] cursor-pointer overflow-hidden bg-white">
        <div className="absolute inset-0 -translate-x-full transform bg-black transition-transform duration-500 ease-in-out group-hover:translate-x-0" />

        <div className="relative z-10 text-black transition-colors duration-500 group-hover:text-white">
          Your content
        </div>
      </div> */}
      <div></div>

      <div>
        <div
          className="group relative  cursor-pointer overflow-hidden"
          style={{ cursor: "url(/cursor.svg), pointer" }}
        >
          <div className="absolute inset-0 -translate-x-full transform bg-[#313437] transition-transform duration-500 ease-in-out group-hover:translate-x-0" />
          {/* Content goes here */}
          <div className="relative z-10 max-w-340 px-6 xl:px-0 py-6 m-auto border-b border-[#D9DBDD] group-hover:text-white transition-colors duration-300 ease-in-out flex flex-wrap gap-6 justify-between">
            <div className="lg:max-w-1/2">
              <h1 className="text-[22px] group-hover:text-white">
                Art school portfolio
              </h1>
              <div className="text-base font-light flex gap-2 items-center">
                <p>20 March, 2026</p>
                <div className="w-1.5 h-1.5 rounded-full bg-black group-hover:bg-white"></div>
                <p className="text-[#0E59A4] group-hover:text-white">Online</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-10 items-center">
              <Countdown targetDate="2026-03-20T00:59:20" />
              <Button
                className="px-6 h-14 py-5 border-[#D9DBDD] cursor-pointer group-hover:bg-transparent group-hover:text-white text-[#313437] font-normal rounded-full"
                variant={"outline"}
              >
                Read About Us <ChevronRight size={16} />
              </Button>
            </div>
          </div>
        </div>

        <div
          className="group relative  cursor-pointer overflow-hidden"
          style={{ cursor: "url(/cursor.svg), pointer" }}
        >
          <div className="absolute inset-0 -translate-x-full transform bg-[#313437] transition-transform duration-500 ease-in-out group-hover:translate-x-0" />
          {/* Content goes here */}
          <div className="relative z-10 max-w-340 px-6 xl:px-0 py-6 m-auto border-b border-[#D9DBDD] group-hover:text-white transition-colors duration-300 ease-in-out flex flex-wrap gap-6 justify-between">
            <div className="lg:max-w-1/2">
              <h1 className="text-[22px] group-hover:text-white">
                Animation: Are you more into 2D or 3D?
              </h1>
              <div className="text-base font-light flex gap-2 items-center">
                <p>22 March, 2025</p>
                <div className="w-1.5 h-1.5 rounded-full bg-black group-hover:bg-white"></div>
                <p className="text-[#0E59A4] group-hover:text-white">Online</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-10 items-center">
              <Countdown targetDate="2026-03-22T00:08:00" />
              <Button
                className="px-6 h-14 py-5 border-[#D9DBDD] cursor-pointer group-hover:bg-transparent group-hover:text-white text-[#313437] font-normal rounded-full"
                variant={"outline"}
              >
                Read About Us <ChevronRight size={16} />
              </Button>
            </div>
          </div>
        </div>

        <div
          className="group relative  cursor-pointer overflow-hidden"
          style={{ cursor: "url(/cursor.svg), pointer" }}
        >
          <div className="absolute inset-0 -translate-x-full transform bg-[#313437] transition-transform duration-500 ease-in-out group-hover:translate-x-0" />
          {/* Content goes here */}
          <div className="relative z-10 max-w-340 px-6 xl:px-0 py-6 m-auto border-b border-[#D9DBDD] group-hover:text-white transition-colors duration-300 ease-in-out flex flex-wrap gap-6 justify-between">
            <div className="lg:max-w-1/2">
              <h1 className="text-[22px] group-hover:text-white">
                Online information meeting - Master Advanced Game Creation and
                Real-Time Applications
              </h1>
              <div className="text-base font-light flex gap-2 items-center">
                <p>24 March, 2026</p>
                <div className="w-1.5 h-1.5 rounded-full bg-black group-hover:bg-white"></div>
                <p className="text-[#0E59A4] group-hover:text-white">Online</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-10 items-center">
              <Countdown targetDate="2026-03-24T00:29:36" />
              <Button
                className="px-6 h-14 py-5 border-[#D9DBDD] cursor-pointer group-hover:bg-transparent group-hover:text-white text-[#313437] font-normal rounded-full"
                variant={"outline"}
              >
                Read About Us <ChevronRight size={16} />
              </Button>
            </div>
          </div>
        </div>

        <div
          className="group relative  cursor-pointer overflow-hidden"
          style={{ cursor: "url(/cursor.svg), pointer" }}
        >
          <div className="absolute inset-0 -translate-x-full transform bg-[#313437] transition-transform duration-500 ease-in-out group-hover:translate-x-0" />
          {/* Content goes here */}
          <div className="relative z-10 max-w-340 px-6 xl:px-0 py-6 m-auto border-b border-[#D9DBDD] group-hover:text-white transition-colors duration-300 ease-in-out flex flex-wrap gap-6 justify-between">
            <div className="lg:max-w-1/2">
              <h1 className="text-[22px] group-hover:text-white">
                Online information meeting - Animation Preparatory Year and
                Bachelor in Character Animation and Animated Filmmaking
              </h1>
              <div className="text-base font-light flex gap-2 items-center">
                <p>25 March, 2026</p>
                <div className="w-1.5 h-1.5 rounded-full bg-black group-hover:bg-white"></div>
                <p className="text-[#0E59A4] group-hover:text-white">Online</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-10 items-center">
              <Countdown targetDate="2026-03-25T10:08:31" />
              <Button
                className="px-6 h-14 py-5 border-[#D9DBDD] cursor-pointer group-hover:bg-transparent group-hover:text-white text-[#313437] font-normal rounded-full"
                variant={"outline"}
              >
                Read About Us <ChevronRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvent;
