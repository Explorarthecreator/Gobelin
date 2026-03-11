import { rocoleta } from "@/app/font";
import { Button } from "../ui/button";
import Image from "next/image";

const StartJourney = () => {
  return (
    <section>
      <div className="max-w-340 m-auto px-6 xl:px-0 bg-[#5B49EF] rounded-[60px] py-40 text-center space-y-8 relative overflow-clip">
        <div className="max-w-150 m-auto text-center space-y-2 z-20 relative">
          <p className="uppercase text-white">ready to get started</p>
          <div className="space-y-4">
            <p className="text-7xl text-white font-medium">
              Begin your amazing journey at
            </p>
            <p
              className={`${rocoleta.className} uppercase text-8xl font-extrabold text-[#F9DCDD]`}
            >
              GOBELINS
            </p>
          </div>
        </div>
        <div></div>
        <Button
          className="px-6 h-14 py-5 border-[#D9DBDD] cursor-pointer text-[#5B49EF] text-lg font-normal rounded-full"
          variant={"outline"}
        >
          Start your GOBELINS Journey
        </Button>

        <div className="opacity-40 absolute -bottom-10 left-0 z-10">
          <Image src={"/bottom.png"} alt="" width={500} height={500} />
        </div>
        <div className=" opacity-40 absolute top-0 right-0 z-10">
          <Image src={"/top.png"} alt="" width={500} height={500} />
        </div>
      </div>
    </section>
  );
};

export default StartJourney;
