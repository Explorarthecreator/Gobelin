import Image from "next/image";

const Footer = () => {
  return (
    <section className="bg-black bg-[url(/Footer.jpg)] bg-no-repeat bg-cover lg:bg-cover bg-center text-white py-15">
      <div className="max-w-340 m-auto px-6 xl:px-0 space-y-50">
        <div className=" space-y-10">
          <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3">
            <div className="space-y-4">
              <h1 className="font-medium text-lg">Gobelins</h1>
              <div className="space-y-2 text-base font-light">
                <p>The School </p>
                <p>Registration</p>
                <p>News & Events</p>
                <p>Gallery</p>
                <p>Welcome to Gobelins</p>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="font-medium text-lg">Links</h1>
              <div className="space-y-2 text-base font-light">
                <p>Press </p>
                <p>FAQs</p>
                <p>Press</p>
                <p>Terms</p>
                <p>Privacy Policy</p>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="font-medium text-lg">Follow Us</h1>
              <div className="flex flex-wrap gap-2 w-3/4 text-base font-light">
                <div className="h-12 w-17 flex items-center justify-center border border-[#3C3C3C] rounded-full">
                  <Image
                    src={"/vimeo.svg"}
                    width={300}
                    height={300}
                    alt="vimeo logo"
                    className="w-5 h-5"
                  />
                </div>

                <div className="h-12 w-17 flex items-center justify-center border border-[#3C3C3C] rounded-full">
                  <Image
                    src={"/youtube.svg"}
                    width={300}
                    height={300}
                    alt="vimeo logo"
                    className="w-5 h-5"
                  />
                </div>

                <div className="h-12 w-17 flex items-center justify-center border border-[#3C3C3C] rounded-full">
                  <Image
                    src={"/facebook.svg"}
                    width={300}
                    height={300}
                    alt="vimeo logo"
                    className="w-5 h-5"
                  />
                </div>

                <div className="h-12 w-17 flex items-center justify-center border border-[#3C3C3C] rounded-full">
                  <Image
                    src={"/twitter.svg"}
                    width={300}
                    height={300}
                    alt="vimeo logo"
                    className="w-5 h-5"
                  />
                </div>

                <div className="h-12 w-17 flex items-center justify-center border border-[#3C3C3C] rounded-full">
                  <Image
                    src={"/linkedin.svg"}
                    width={300}
                    height={300}
                    alt="vimeo logo"
                    className="w-5 h-5"
                  />
                </div>

                <div className="h-12 w-17 flex items-center justify-center border border-[#3C3C3C] rounded-full">
                  <Image
                    src={"/instagram.svg"}
                    width={300}
                    height={300}
                    alt="vimeo logo"
                    className="w-5 h-5"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3">
            <div className="space-y-4">
              <h1 className="font-medium text-lg">
                GOBELINS Campus Paris St-Marcel
              </h1>
              <div className="space-y-2 text-base font-light">
                <p>73, boulevard Saint-Marcel 75013, Paris </p>
                <p>
                  +33 {""} 1{""} 40{""} 79{""} 92{""} 79
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="font-medium text-lg">
                GOBELINS Campus Paris Gambetta
              </h1>
              <div className="space-y-2 text-base font-light">
                <p>247, Avenue Gambetta 75020, Paris </p>
                <p>
                  +33 {""} 1{""} 40{""} 79{""} 92{""} 79
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="font-medium text-lg">GOBELINS Campus Annecy</h1>
              <div className="space-y-2 text-base font-light">
                <p>3, Esplanade Augustin Aussedat 74960, Annecy </p>
                <p>
                  +33{""} 4{""} 50{""} 33{""} 72{""} 24
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3">
          <div>
            <Image
              src={"/gobeFooter.svg"}
              alt="logo"
              width={1000}
              height={1000}
              className="h-33.5 w-34.5"
            />
          </div>
          <div className="space-y-6">
            <Image
              src={"/region.svg"}
              alt="logo"
              width={1000}
              height={1000}
              className="h-10 w-51.25"
            />
            <Image
              src={"/education.svg"}
              alt="logo"
              width={1000}
              height={1000}
              className="h-17.5 w-55.75"
            />
          </div>
          <p className="font-light self-end">© Copyright GOBELINS Paris 2025</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
