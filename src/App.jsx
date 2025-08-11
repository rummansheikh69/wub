import { MdArrowOutward } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

function App() {
  return (
    <div className="relative bg-main min-h-screen overflow-hidden text-white">
      {/* Noise layer crafted via box-shadow dots */}
      <div className="absolute inset-0 pointer-events-none z-0 before:content-[''] before:absolute before:inset-0 before:z-0 before:bg-white/5 before:[background-image:radial-gradient(#00000053_1px,transparent_0)] before:[background-size:3px_3px]" />
      <div className="relative  z-10">
        {/* navbar  */}
        <div className=" px-5 md:px-32 py-4 md:py-7 border-b">
          <div className=" flex items-center justify-between">
            <h1 className=" text-3xl md:text-4xl hero ">$MUB</h1>
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
                Mubnomics
              </a>
            </div>
            <a href="https://letsbonk.fun/token/E87bPRZzXSQAX3JuwAnquj9GTQCvQUi2c4S6FDRbonk">
              <div className="w-32 md:w-40 h-10 border border-black text-black bg-button rounded-full flex items-center justify-center shadow-[2px_4px_0px_0px_#292929] hover:shadow-[1px_2px_0px_0px_#292929] duration-100">
                <p className=" hero text-xl">BUY $MUB</p>
              </div>
            </a>
          </div>
        </div>
        {/* navbar end */}
        {/* hero  */}
        <div className=" px-5 md:px-32 ">
          <div className=" flex justify-between mt-10">
            <div className=" relative">
              <h1 className=" absolute next text-button text-4xl md:text-8xl -left-4 -top-4 md:-top-10 rotate-12 md:left-10">
                #
              </h1>
              <h1 className=" pl-0 md:pl-20 hero text-5xl md:text-8xl">
                WELCOME TO $MUB
              </h1>
              <h1 className="  hero text-4xl md:text-8xl italic">
                TOKEN LAUNCHPOOL
              </h1>
              <div className=" flex flex-col md:flex-row items-center gap-5 mt-5 md:mt-0">
                <div className=" flex items-center gap-5">
                  <a href="https://letsbonk.fun/token/E87bPRZzXSQAX3JuwAnquj9GTQCvQUi2c4S6FDRbonk">
                    <div className=" w-40 h-10 border border-black text-black bg-button rounded-full flex items-center justify-center shadow-[2px_4px_0px_0px_#292929] hover:shadow-[1px_2px_0px_0px_#292929] duration-100">
                      <p className=" hero text-xl">BUY $MUB</p>
                    </div>
                  </a>
                  <a href="https://x.com/mubsolana">
                    <div className=" w-40 h-10 border border-black text-black bg-white rounded-full flex items-center justify-center shadow-[2px_4px_0px_0px_#292929] hover:shadow-[1px_2px_0px_0px_#292929] duration-100">
                      <p className=" hero text-xl">JOIN COMUNITY</p>
                    </div>
                  </a>
                </div>
                <p className=" w-full md:w-80 heading text-center md:text-start">
                  Degens, unite! the most unhinged token launchpool is live - don't
                  fade $MUB!
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
              <div className=" relative  w-32 h-20 md:h-40 md:w-72 bg-darkis rounded-[30px]">
                <div className=" w-32 md:w-52 absolute bottom-0 right-0 left-0 mx-auto">
                  <img
                    src="https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753365045/5d54b2d5-e6f0-45f7-93ff-7996cecf6066_removalai_preview_y0fwdj.png"
                    className=" w-full h-full object-contain "
                    alt=""
                  />
                </div>
              </div>
              <div className=" relative w-32 h-20 md:h-40 md:w-72 bg-darkis rounded-[30px]">
                <div className=" md:w-52 absolute bottom-0 right-0 left-0 mx-auto">
                  <img
                    src="https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753385436/ecd7aaa7-1ada-4616-98b5-687fe2549b86_removalai_preview_yfvjns.png"
                    className=" w-full h-full object-contain "
                    alt=""
                  />
                </div>
              </div>
              <div className=" relative  w-32 h-20 md:h-40 md:w-72 bg-darkis rounded-[30px]">
                <div className=" w-40 md:w-72 absolute bottom-0 right-0 left-0 mx-auto">
                  <img
                    src="https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753364898/Removal-857_y2pggs.png"
                    className=" w-full h-full object-contain "
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-center">
            <div className=" mt-20 z-40 w-80 border border-zinc-400 md:w-1/2 py-2 px-4 bg-white/50 rounded-xl  flex items-center justify-between">
              <p className=" heading text-black truncate">
                3R5sCsKs74NCgDLB3J7oepdmTU1UjSfZ4gu93tKRpump
              </p>
              <a
                target="_blank"
                href="https://pump.fun/coin/3R5sCsKs74NCgDLB3J7oepdmTU1UjSfZ4gu93tKRpump"
                className=" p-2 border border-zinc-400 rounded-md bg-darkis"
              >
                <MdArrowOutward />
              </a>
            </div>
          </div>
        </div>
        {/* hero end */}
        {/* about  */}
        <div className=" relative h-screen px-5 md:px-32 flex items-center justify-center flex-col ">
          {/* videos  */}
          <div className=" w-32 h-32 md:w-52 md:h-52 rounded-full overflow-hidden p-1 border-2 shadow-xl border-button absolute bottom-10 left-10">
            <video
              loop
              autoPlay
              muted
              className=" w-full h-full object-cover rounded-full"
              src="https://res.cloudinary.com/dsdg8ke2n/video/upload/v1753364773/u7122187825_httpss.mj.runHjtJxIM-4bw_animate_this_picture_sho_f0c53601-c52d-4ba0-b35e-8caec1449f3b_1_iz6r7p.mp4"
            ></video>
          </div>
          <div className=" w-32 h-32 md:w-52 md:h-52 rounded-full overflow-hidden p-1 border-2 shadow-xl border-button absolute top-10 right-10">
            <video
              loop
              autoPlay
              muted
              className=" w-full h-full object-cover rounded-full"
              src="https://res.cloudinary.com/dsdg8ke2n/video/upload/v1753364772/u7122187825_Use_only_this_brown_teddy_bear_character_as_guida_2dc9dbf6-8839-4803-b9dd-405e2adf06ea_2_zbevxk.mp4"
            ></video>
          </div>
          {/* videos end */}

          <h1 className=" text-center pt-10 md:pt-32 text-5xl md:text-7xl ex font-bold">
            ABOUT
          </h1>
          <h4 className=" -mt-6 text-center text-button text-2xl next -rotate-3">
            $MUB The Billionaire
          </h4>
          <div className=" flex flex-col items-center justify-center">
            <p className=" text-center text-xl mt-10 md:mt-16 w-full md:w-1/2 ex">
              MUB started as a chubby, happy-go-lucky bear just vibing through
              life — golfing in the morning, skydiving by noon, and soaking in a
              bubble bath by night. Don’t let the soft fur and big eyes fool you
              — MUB is the face of a feel-good movement on the Solana
              blockchain, bringing joy, chill energy, and pure vibes to a
              degenerate world.
            </p>
            <p className=" text-center text-xl mt-5 w-full md:w-1/2 ex">
              While others chase charts, MUB lives life — one bite, one punch,
              and one meme at a time. Welcome to MUB: the most wholesome chaos
              on Solana. ✨
            </p>
            <div className=" flex items-center gap-3 mt-5">
              <a href="https://x.com/mubsolana">
                <div className=" w-40 hero h-10 border border-black text-black bg-button rounded-full gap-2 flex items-center justify-center shadow-[2px_4px_0px_0px_#292929] hover:shadow-[1px_2px_0px_0px_#292929] duration-100">
                  <FaXTwitter /> <span className=" hero text-xl">Twitter</span>
                </div>
              </a>
              <a href="https://x.com/mubsolana">
                <div className=" w-40 h-10 border border-black text-black bg-white rounded-full flex items-center justify-center shadow-[2px_4px_0px_0px_#292929] hover:shadow-[1px_2px_0px_0px_#292929] duration-100">
                  <p className=" hero text-xl">JOIN COMUNITY</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* about end */}
        {/* how to buy  */}
        <div className=" relative  h-screen px-5 md:px-32">
          <div className="  flex w-full h-full items-center justify-center">
            <h1 className="relative  text-center text-7xl md:text-8xl font-bold ex">
              <span className=" absolute left-28 rotate-12 -top-14 text-button next text-6xl md:text-9xl">
                #
              </span>
              HOW TO BUY THE <br /> BILLIONAIRE{" "}
              <span className=" text-button next">$MUB</span> <br /> MEMECOIN ON
             PUMP.FUN
            </h1>
          </div>

          <div className=" absolute inset-0 px-5 md:px-32 md:py-16  ">
            <div className=" grid grid-cols-2 gap-10 w-full h-full">
              <div className="  relative">
                <div className=" absolute md:left-16  w-52 backdrop-blur-[7px] bg-white/30  h-56 rounded-3xl -rotate-12 border border-zinc-400 p-3">
                  <div className=" flex flex-col items-center justify-center gap-2 w-full h-full">
                    <div className=" w-20 h-20 rounded-full overflow-hidden border-4 border-white">
                      <img
                        src="https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753364766/image_5_ucy5rz.webp"
                        className=" w-full h-full object-cover"
                        alt=""
                      />
                    </div>
                    <h1 className=" text-black/80 drop-shadow-lg text-2xl font-bold hero">
                      Create Wallet
                    </h1>
                    <p className=" text-black/80 text-center text-sm">
                      Create a Solana wallet on Phantom.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" relative">
                <div className=" absolute md:right-16  w-52 backdrop-blur-[7px] bg-white/30  h-56 rounded-3xl rotate-12 border border-zinc-400 p-3">
                  <div className=" flex flex-col items-center justify-center gap-2 w-full h-full">
                    <div className=" w-20 h-20 rounded-full overflow-hidden border-4 border-white">
                      <img
                        src="https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753364766/image_1_o8hayf.webp"
                        className=" w-full h-full object-cover"
                        alt=""
                      />
                    </div>
                    <h1 className=" text-black/80 drop-shadow-lg text-2xl font-bold hero">
                      Go To Pump.fun
                    </h1>
                    <p className=" text-black/80 text-center text-sm">
                      Go Pump.fun In Any Browser. Connect Your Wallet.
                    </p>
                  </div>
                </div>
              </div>
              <div className="  relative">
                <div className=" absolute md:right-16  w-52 backdrop-blur-[7px] bg-white/30  h-56 rounded-3xl -rotate-12 border border-zinc-400 p-3">
                  <div className=" flex flex-col items-center justify-center gap-2 w-full h-full">
                    <div className=" w-20 h-20 rounded-full overflow-hidden border-4 border-white">
                      <img
                        src="https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753364766/image_4_wdwc3v.webp"
                        className=" w-full h-full object-cover"
                        alt=""
                      />
                    </div>
                    <h1 className=" text-black/80 drop-shadow-lg text-2xl font-bold hero">
                      Get Some SOL
                    </h1>
                    <p className=" text-black/80 text-center text-sm">
                      Have SOL In Your Wallet To Switch To $MUB
                    </p>
                  </div>
                </div>
              </div>
              <div className="  relative">
                <div className=" absolute md:left-16  w-52 backdrop-blur-[7px] bg-white/30  h-56 rounded-3xl -rotate-6 border border-zinc-400 p-3">
                  <div className=" flex flex-col items-center justify-center gap-2 w-full h-full">
                    <div className=" w-20 h-20 rounded-full overflow-hidden border-4 border-white">
                      <img
                        src="https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753364766/image_2_cqrnq9.webp"
                        className=" w-full h-full object-cover"
                        alt=""
                      />
                    </div>
                    <h1 className=" text-black/80 drop-shadow-lg text-2xl font-bold hero">
                      SWAP
                    </h1>
                    <p className=" text-black/80 text-center text-sm">
                      Switch SOL For $MUB.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* how to buy  end */}

        {/* tokenomics  */}
        <div className=" h-[50vh] md:h-[85vh] px-5 md:px-32">
          <div className=" flex flex-col items-center justify-center w-full h-full">
            <h1 className="ex text-6xl md:text-8xl">Tokenomics</h1>
            <div className=" flex items-center gap-3 md:gap-8 mt-10">
              <div className=" px-3 md:px-8 h-10 border border-black text-black bg-white rounded-full flex items-center justify-center shadow-[2px_4px_0px_0px_#292929] hover:shadow-[1px_2px_0px_0px_#292929] duration-100">
                <p className=" hero text-xl whitespace-nowrap">
                  SUPPLY <span className=" underline hero">1B</span>
                </p>
              </div>

              <div className=" px-3 md:px-8 h-10 border border-black text-black bg-button rounded-full flex items-center justify-center shadow-[2px_4px_0px_0px_#292929] hover:shadow-[1px_2px_0px_0px_#292929] duration-100">
                <p className=" hero text-xl whitespace-nowrap">
                  <span className=" hero underline">0%</span> TAX
                </p>
              </div>
              <div className=" px-3 md:px-8 h-10 border border-black text-black bg-white rounded-full flex items-center justify-center shadow-[2px_4px_0px_0px_#292929] hover:shadow-[1px_2px_0px_0px_#292929] duration-100">
                <p className=" hero text-xl whitespace-nowrap">
                  <span className=" hero underline">100%</span> BURNT
                </p>
              </div>
            </div>
            <div className=" w-80 px-3 mt-5 md:px-8 h-10 border border-black text-black bg-button rounded-full flex items-center justify-center shadow-[2px_4px_0px_0px_#292929] hover:shadow-[1px_2px_0px_0px_#292929] duration-100">
              <p className=" hero text-xl whitespace-nowrap truncate">
                CA: E87bPRZzXSQAX3JuwAnquj9GTQCvQUi2c4S6FDRbonk
              </p>
            </div>
          </div>
        </div>
        {/* tokenomics end */}
        {/* footer  */}
        <p className=" text-2xl text-center py-8 hero">
          © {new Date().getFullYear()} MUB
        </p>
        {/* footer end */}
      </div>
    </div>
  );
}

export default App;
