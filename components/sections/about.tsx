import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

const About = () => {
  return (
    <section className="max-w-340 m-auto space-y-15 lg:space-y-30 px-6 xl:px-0 pt-15 mb-45">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-2/5">
          <h1 className="text-[40px] font-medium">About Us</h1>
        </div>
        <div className="lg:w-3/5 shrink-0 space-y-6">
          <p className="text-[22px] text-justify">
            At Gobelins, we pride ourselves on our diverse range of programs,
            including character animation, 3D animation, & visual effects. Each
            course is designed to foster creativity & technical skills, allowing
            students to explore their unique artistic voices while mastering the
            tools of the trade. Our faculty consists of industry professionals
            who bring their real-world experience into the classroom, providing
            invaluable insights & mentorship.
          </p>
          <Button
            className="px-6 h-14 py-5 border-[#D9DBDD] cursor-pointer text-[#313437] font-normal rounded-full"
            variant={"outline"}
          >
            Read About Us <ChevronRight color="#313437" size={16} />
          </Button>
        </div>
      </div>
      <div className="">
        <Image
          src={"/main.jpg"}
          width={1000}
          height={1000}
          alt="Illustration"
          className="w-full"
        />
      </div>
    </section>
  );
};

export default About;
