import Image from "next/image";
import { rocoleta } from "./font";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="space-y-2 h-60">
        <Image
          src={"/logo.svg"}
          width={1000}
          height={1000}
          alt="Logo"
          className="h-full animate-bounce "
        />
        <p
          className={`${rocoleta.className} text-center text-xl lg:text-3xl animate-pulse`}
        >
          Work in progress
        </p>
      </div>
    </div>
  );
}
