import { geistMono } from "@/app/font";
import Image from "next/image";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

const News = () => {
  return (
    <section className="max-w-340 m-auto px-6 xl:px-0 space-y-10">
      <div className="max-w-162">
        <h1 className="font-medium text-[40px]">News & Updates</h1>
        <p className="text-[#787F87] text-[22px] font-light">
          Floor die open follow encourage bake ui ocean points every. Must can
          vendor comms streamline.
        </p>
      </div>
      <div className="space-y-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-4">
            <div className="rounded-3xl overflow-clip">
              <Image
                src={"/press.jpg"}
                alt="press image"
                width={1000}
                height={1000}
                className="h-82.5"
              />
            </div>
            <div className="space-y-3">
              <h5 className={`uppercase text-[#3561FF] ${geistMono.className}`}>
                press
              </h5>
              <div className="space-y-2">
                <p className="text-[22px] text-[#313437]">
                  GOBELINS Paris wishes all our students and partners a very
                  Happy New Year 2025!
                </p>
                <p className="text-[#787F87]">01 January, 2025</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl overflow-clip">
              <Image
                src={"/animated.jpg"}
                alt="press image"
                width={1000}
                height={1000}
                className="h-82.5"
              />
            </div>
            <div className="space-y-3">
              <h5 className={`uppercase text-[#3561FF] ${geistMono.className}`}>
                Animated filmmaking
              </h5>
              <div className="space-y-2">
                <p className="text-[22px] text-[#313437]">
                  DARE TO BE FABULOUS - Graduation short film 2024
                </p>
                <p className="text-[#787F87]">12 March, 2024</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl overflow-clip">
              <Image
                src={"/school.jpg"}
                alt="press image"
                width={1000}
                height={1000}
                className="h-82.5"
              />
            </div>
            <div className="space-y-3">
              <h5 className={`uppercase text-[#3561FF] ${geistMono.className}`}>
                The School
              </h5>
              <div className="space-y-2">
                <p className="text-[22px] text-[#313437]">
                  GOBELINS Paris Open House: come and visit the school on Friday
                  26th and Saturday 27th ...
                </p>
                <p className="text-[#787F87]">30 November, 2024</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Button
            className="px-6 h-14 py-5 border-[#D9DBDD] cursor-pointer text-[#313437] font-normal rounded-full"
            variant={"outline"}
          >
            Read About Us <ChevronRight color="#313437" size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default News;
