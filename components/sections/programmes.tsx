import { CheckCircle2, ChevronRight } from "lucide-react";
import { Separator } from "../ui/separator";
import Image from "next/image";
import { Button } from "../ui/button";

const Programmes = () => {
  return (
    <section className="max-w-340 m-auto px-6 xl:px-0 space-y-10">
      <div className="max-w-162">
        <h1 className="font-medium text-[40px]">Our Programmes</h1>
        <p className="text-[#787F87] text-[22px] font-light">
          Floor die open follow encourage bake ui ocean points every. Must can
          vendor comms streamline.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border flex flex-col justify-between gap-10 border-[#E4E5E7] rounded-[32px] p-7 hover:border-none  hover:bg-[radial-gradient(circle_at_center,#313437_22%,#2B2D30_38%,#18191B_76%)] group hover:drop-shadow-xl hover:drop-shadow-[#313437]">
          <div className="space-y-6">
            <div className="bg-[#ECF5FD] w-18 h-13 rounded-full flex justify-center items-center text-center">
              <Image
                src={"/globe.svg"}
                alt="globe logo"
                width={500}
                height={500}
                className="w-6 h-6"
              />
            </div>
            <div className="space-y-2">
              <h1 className="text-[#313437] font-medium text-[22px] group-hover:text-white">
                Online Courses
              </h1>
              <p className="text-lg text-[#787F87] font-light group-hover:text-[#AEB2B7]">
                Floor die open follow encourage bake ui ocean points every. Must
                can vendor comms streamline.
              </p>
            </div>
            <Separator />
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle2
                  fill="#000"
                  className="text-white group-hover:fill-white group-hover:text-black"
                />
                <p className="text-[#787F87] font-light group-hover:text-[#AEB2B7]">
                  Animation Training Programme
                </p>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2
                  fill="#000"
                  className="text-white group-hover:fill-white group-hover:text-black"
                />
                <p className="text-[#787F87] font-light group-hover:text-[#AEB2B7]">
                  Professional short courses in Animation
                </p>
              </div>
            </div>
          </div>
          <Button
            className="px-6 h-14 py-5 border-[#D9DBDD] cursor-pointer text-[#313437] font-normal rounded-full"
            variant={"outline"}
          >
            Read About Us <ChevronRight color="#313437" size={16} />
          </Button>
        </div>

        <div className="border flex flex-col justify-between gap-10 border-[#E4E5E7] rounded-[32px] p-7 hover:border-none  hover:bg-[radial-gradient(circle_at_center,#313437_22%,#2B2D30_38%,#18191B_76%)] group hover:drop-shadow-xl hover:drop-shadow-[#313437]">
          <div className="space-y-6">
            <div className="bg-[#14EB85]/20 w-18 h-13 rounded-full flex justify-center items-center text-center">
              <Image
                src={"/degree.svg"}
                alt="globe logo"
                width={500}
                height={500}
                className="w-6 h-6"
              />
            </div>
            <div className="space-y-2">
              <h1 className="text-[#313437] font-medium text-[22px] group-hover:text-white">
                Degree Programmes
              </h1>
              <p className="text-lg text-[#787F87] font-light group-hover:text-[#AEB2B7]">
                Floor die open follow encourage bake ui ocean points every. Must
                can vendor comms streamline.
              </p>
            </div>
            <Separator />
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle2
                  fill="#000"
                  className="text-white group-hover:fill-white group-hover:text-black shrink-0"
                />
                <p className="text-[#787F87] font-light group-hover:text-[#AEB2B7]">
                  Animation Preparatory Year
                </p>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2
                  fill="#000"
                  className="text-white group-hover:fill-white group-hover:text-black shrink-0"
                />
                <p className="text-[#787F87] font-light group-hover:text-[#AEB2B7]">
                  Bachelor in Animation
                </p>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2
                  fill="#000"
                  className="text-white group-hover:fill-white group-hover:text-black shrink-0"
                />
                <p className="text-[#787F87] font-light group-hover:text-[#AEB2B7]">
                  Bachelor 3D Character Animation
                </p>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2
                  fill="#000"
                  className="text-white group-hover:fill-white group-hover:text-black shrink-0"
                />
                <p className="text-[#787F87] font-light group-hover:text-[#AEB2B7]">
                  Master in Animation
                </p>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2
                  fill="#000"
                  className="text-white group-hover:fill-white group-hover:text-black shrink-0"
                />
                <p className="text-[#787F87] font-light group-hover:text-[#AEB2B7]">
                  3D Character Animator
                </p>
              </div>

              <div className="flex gap-3">
                <CheckCircle2
                  fill="#000"
                  className="text-white group-hover:fill-white group-hover:text-black shrink-0"
                />
                <p className="text-[#787F87] font-light group-hover:text-[#AEB2B7]">
                  Master in Advanced Game Creation and Real-Time Applications
                </p>
              </div>
            </div>
          </div>
          <Button
            className="px-6 h-14 py-5 border-[#D9DBDD] cursor-pointer text-[#313437] font-normal rounded-full"
            variant={"outline"}
          >
            Read About Us <ChevronRight color="#313437" size={16} />
          </Button>
        </div>

        <div className="border flex flex-col justify-between gap-10 border-[#E4E5E7] rounded-[32px] p-7 hover:border-none  hover:bg-[radial-gradient(circle_at_center,#313437_22%,#2B2D30_38%,#18191B_76%)] group hover:drop-shadow-xl hover:drop-shadow-[#313437]">
          <div className="space-y-6">
            <div className="bg-[#F3ECFD] w-18 h-13 rounded-full flex justify-center items-center text-center">
              <Image
                src={"/school.svg"}
                alt="globe logo"
                width={500}
                height={500}
                className="w-6 h-6"
              />
            </div>
            <div className="space-y-2">
              <h1 className="text-[#313437] font-medium text-[22px] group-hover:text-white">
                Summer School
              </h1>
              <p className="text-lg text-[#787F87] font-light group-hover:text-[#AEB2B7]">
                Floor die open follow encourage bake ui ocean points every. Must
                can vendor comms streamline.
              </p>
            </div>
            <Separator />
            <div className="space-y-3">
              <div className="flex  gap-3">
                <CheckCircle2
                  fill="#000"
                  className="text-white group-hover:fill-white group-hover:text-black shrink-0"
                />
                <p className="text-[#787F87] font-light group-hover:text-[#AEB2B7]">
                  Summer School in Real-Time Animation with Unreal Engine
                </p>
              </div>

              <div className="flex  gap-3">
                <CheckCircle2
                  fill="#000"
                  className="text-white group-hover:fill-white group-hover:text-black shrink-0"
                />
                <p className="text-[#787F87] font-light group-hover:text-[#AEB2B7]">
                  Summer School in Character Animation
                </p>
              </div>

              <div className="flex  gap-3">
                <CheckCircle2
                  fill="#000"
                  className="text-white group-hover:fill-white group-hover:text-black shrink-0"
                />
                <p className="text-[#787F87] font-light group-hover:text-[#AEB2B7]">
                  Summer School in Character Animation - Online session
                </p>
              </div>

              <div className="flex  gap-3">
                <CheckCircle2
                  fill="#000"
                  className="text-white group-hover:fill-white group-hover:text-black shrink-0"
                />
                <p className="text-[#787F87] font-light group-hover:text-[#AEB2B7]">
                  Summer School in Visual Storytelling
                </p>
              </div>
            </div>
          </div>

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

export default Programmes;
