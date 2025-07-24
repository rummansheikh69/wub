import React from "react";

function App() {
  return (
    <div className="relative bg-main min-h-screen overflow-hidden text-white">
      {/* Noise layer crafted via box-shadow dots */}
      <div className="absolute inset-0 pointer-events-none z-0 before:content-[''] before:absolute before:inset-0 before:z-0 before:bg-white/5 before:[background-image:radial-gradient(#00000053_1px,transparent_0)] before:[background-size:3px_3px]" />
      <div className="relative  z-10">
        {/* navbar  */}
        <div className=" px-5 md:px-32 py-4 md:py-7 border-b">
          <div className=" flex items-center justify-between">
            <h1 className=" text-3xl md:text-4xl hero ">$WUB</h1>
            <div className=" hidden md:flex items-center gap-10">
              <a href="/" className="heading hover:underline">
                Home
              </a>
              <a href="/" className="heading hover:underline">
                About
              </a>
              <a href="/" className="heading hover:underline">
                How To Buy
              </a>
              <a href="/" className="heading hover:underline">
                Wubnomics
              </a>
            </div>
            <a href="/">
              <div className=" w-40 h-10 border border-black text-black bg-button rounded-full flex items-center justify-center shadow-[2px_4px_0px_0px_#292929]">
                <p className=" hero text-xl">BUY $WUB</p>
              </div>
            </a>
          </div>
        </div>
        {/* navbar end */}
        {/* hero  */}
        <div className=" px-5 md:px-32 ">
          <div className=" flex justify-between mt-10">
            <div className=" relative">
              <h1 className=" absolute next text-button text-3xl md:text-8xl -top-10 rotate-12 left-10">
                #
              </h1>
              <h1 className=" pl-0 md:pl-20 hero text-3xl md:text-8xl">
                WELCOME TO $WUB
              </h1>
              <h1 className="  hero text-3xl md:text-8xl italic">
                TOKEN PRESALE
              </h1>
              <div className=" flex items-center gap-5">
                <a href="">
                  <div className=" w-40 h-10 border border-black text-black bg-button rounded-full flex items-center justify-center shadow-[2px_4px_0px_0px_#292929]">
                    <p className=" hero text-xl">BUY $WUB</p>
                  </div>
                </a>
                <a href="">
                  <div className=" w-40 h-10 border border-black text-black bg-white rounded-full flex items-center justify-center shadow-[2px_4px_0px_0px_#292929]">
                    <p className=" hero text-xl">JOIN COMUNITY</p>
                  </div>
                </a>
                <p className=" w-full md:w-80 heading">
                  Degens, unite! the most unhinged token presale is live - don't
                  fade $WUB!
                </p>
              </div>
            </div>
            <div className=" hidden md:block ">
              <div className=" relative w-40 rotate-45 h-64 bg-darkis rounded-full">
                <div className=" absolute w-24 bottom-10 -rotate-[90deg] -right-32">
                  <img
                    src="/arrow.png"
                    className=" w-full h-full object-contain"
                    alt=""
                  />
                </div>
                <div className=" absolute top-5 -left-28 w-64">
                  <img
                    className=" w-full h-full object-contain -rotate-45"
                    src="https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753365231/9eb680cf-9b9d-4a00-a938-9326866c3432_removalai_preview_troa4d_c_crop_w_270_e1rpry.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-center mt-16">
            <div className=" flex items-center gap-5">
              <div className=" relative h-40 w-72 bg-darkis rounded-[30px]">
                <div className=" w-52 absolute bottom-0 right-0 left-0 mx-auto">
                  <img
                    src="https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753365045/5d54b2d5-e6f0-45f7-93ff-7996cecf6066_removalai_preview_y0fwdj.png"
                    className=" w-full h-full object-contain "
                    alt=""
                  />
                </div>
              </div>
              <div className=" relative h-40 w-72 bg-darkis rounded-[30px]">
                <div className=" w-52 absolute bottom-0 right-0 left-0 mx-auto">
                  <img
                    src="https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753385436/ecd7aaa7-1ada-4616-98b5-687fe2549b86_removalai_preview_yfvjns.png"
                    className=" w-full h-full object-contain "
                    alt=""
                  />
                </div>
              </div>
              <div className=" relative h-40 w-72 bg-darkis rounded-[30px]">
                <div className=" w-72 absolute bottom-0 right-0 left-0 mx-auto">
                  <img
                    src="https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753364898/Removal-857_y2pggs.png"
                    className=" w-full h-full object-contain "
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* hero end */}
      </div>
    </div>
  );
}

export default App;
