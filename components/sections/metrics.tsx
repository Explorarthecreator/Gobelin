const Metrics = () => {
  return (
    <section className="  h-180 relative overflow-hidden lg:h-219.5 flex items-center justify-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/blue.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10  w-11/12 lg:w-4/5 space-y-10">
        <div className="flex  justify-between">
          <div className="space-y-3" data-aos="fade-right">
            <h1 className="text-[#9DE7FF] text-5xl lg:text-[64px] font-medium">
              84,000+
            </h1>
            <p className="text-white text-xl font-normal">Graduate Trained</p>
          </div>

          <div className="text-right space-y-3" data-aos="fade-left">
            <h1 className="text-[#9DE7FF] text-5xl lg:text-[64px] font-medium">
              60+
            </h1>
            <p className="text-white text-xl font-normal">
              Years of Experience
            </p>
          </div>
        </div>

        <div className="flex  justify-between">
          <div className="space-y-3" data-aos="fade-right">
            <h1 className="text-[#9DE7FF] text-5xl lg:text-[64px] font-medium">
              38+
            </h1>
            <p className="text-white text-xl font-normal">Courses Offered</p>
          </div>

          <div className="text-right space-y-3" data-aos="fade-left">
            <h1 className="text-[#9DE7FF] text-5xl lg:text-[64px] font-medium">
              75+
            </h1>
            <p className="text-white text-xl font-normal">
              Awards for Best School of Animation
            </p>
          </div>
        </div>

        <div className="flex  justify-between">
          <div className="space-y-3" data-aos="fade-right">
            <h1 className="text-[#9DE7FF] text-5xl lg:text-[64px] font-medium">
              512+
            </h1>
            <p className="text-white text-xl font-normal">
              Industry Leaders Made
            </p>
          </div>

          <div className="text-right space-y-3" data-aos="fade-left">
            <h1 className="text-[#9DE7FF] text-5xl lg:text-[64px] font-medium">
              100+
            </h1>
            <p className="text-white text-xl font-normal">
              Nationalities represented
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
