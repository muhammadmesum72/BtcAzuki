import mainGif from "../assets/images/gifmain.gif";
import AzukiOne from "../assets/azukis/1.png";
import azukitwo from "../assets/azukis/2.png";
import azukithree from "../assets/azukis/3.png";
import azukifour from "../assets/azukis/4.png";
import azukifive from "../assets/azukis/5.png";
import azukisix from "../assets/azukis/6.png";
import azukiseven from "../assets/azukis/7.png";
import azukieight from "../assets/azukis/8.png";
import azukinine from "../assets/azukis/9.png";
import azukiten from "../assets/azukis/10.png";
import { useEffect, useState } from "react";

function Hero() {
  const targetDate = new Date("2023-06-17T23:59:59");
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [count, setCount] = useState(1);

  const mintPrice = 0.005;

  const setTotal = mintPrice * count;

  const handleIncrement = () => {
    setCount(count + 1);
    if (count == 10) {
      alert("Max Mint Limit Exceeds");
      setCount(10);
    }
  };

  const handleDecrement = () => {
    setCount(count - 1);
    if (count <= 1) {
      alert("You Cannot Mint 0 Ordinals");
      setCount(1);
    }
  };
  const maxMint = () => {
    setCount(10);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  function calculateTimeLeft() {
    const currentDate = new Date();
    const remainingTime = targetDate - currentDate;

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  const [mintModalIsOpen, setMintModalIsOpen] = useState(false);

  const openMintModal = () => {
    setMintModalIsOpen(true);
  };

  const closeMintModal = () => {
    setMintModalIsOpen(false);
  };

  window.onclick = function (e) {
    if (e.target.id === "mintModalOverlay") {
      closeMintModal();
    }
  };

  return (
    <>
      {mintModalIsOpen && (
        <div
          id="mintModalOverlay"
          className="h-screen w-full bg-black fixed top-0 z-10 bg-opacity-50 flex items-center justify-center"
        >
          <div id="joy" className="relative max-w-[90%] w-fit h-fit text-black bg-[#edd9d3] rounded-xl py-[50px] px-[25px] overflow-hidden">
            <div
              onClick={() => closeMintModal()}
              className="absolute right-[25px] top-[25px] text-2xl font-bold cursor-pointer"
            >
              X
            </div>
            <div className="text-xl md:text-3xl  text-center md:text-left space-y-4">
              <div>
                Send:
                <span> {setTotal} <span className="text-[#c23542]">BTC</span></span>
              </div>

              <div className="md:flex items-center gap-3">
                <div>TO: </div>
                <div className=" text-xs md:text-xl whitespace-wrap">
                  bc1pxny8wakw5lwzhs65xhu4jn0crt4wsknd69trgxn3mm3ravancmuqj0mv9n
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col justify-start items-center gap-[74px]">
        <div className="flex flex-col justify-start items-center  gap-[110px]">
          <div className="flex flex-col justify-start items-center  gap-[9px]">
            <div className="flex justify-center items-center  gap-[42px]">
              <div className="flex flex-col justify-start items-center  gap-[51px]">
                <div className="flex flex-col justify-start items-start  relative space-y-[-16px]">
                  <p className=" text-[98px] text-left text-[#c23542]" id="joy">
                    BITCOIN AZUKI.
                  </p>
                  <div className="flex flex-col justify-center   gap-[18px]">
                    <p
                      className=" text-[24px] text-left text-[#000000]"
                      id="joy"
                    >
                      Time Left for Public Reveal!
                    </p>
                    <div className="flex justify-center items-center  w-[1180px] h-[260px] relative gap-2.5 rounded-[14px] bg-[#edd9d3]">
                      <div className="flex justify-center items-center  relative gap-2">
                        <div className="flex justify-start items-start  gap-2">
                          <div className="flex justify-center items-center  relative gap-px">
                            <div className="flex justify-center items-center  w-[212px] h-[190px] relative gap-2.5 p-2.5 rounded-[20px] bg-[#c03540]">
                              <p
                                className=" text-[86px] text-left text-white"
                                id="joy"
                              >
                                {timeLeft.days}
                              </p>
                            </div>
                            <p
                              className=" text-[86px] text-left text-[#c03540]"
                              id="joy"
                            >
                              :
                            </p>
                          </div>
                          <div className="flex justify-center items-center  w-[212px] h-[190px] relative gap-2.5 p-2.5 rounded-[20px] bg-[#c03540]">
                            <p
                              className=" text-[86px] text-left text-white"
                              id="joy"
                            >
                              {timeLeft.hours}
                            </p>
                          </div>
                        </div>
                        <p
                          className=" text-[86px] text-left text-[#c03540]"
                          id="joy"
                        >
                          :
                        </p>
                      </div>
                      <div className="flex justify-center items-center  w-[212px] h-[190px] relative gap-2.5 p-2.5 rounded-[20px] bg-[#c03540]">
                        <p
                          className=" text-[86px] text-left text-white"
                          id="joy"
                        >
                          {timeLeft.minutes}
                        </p>
                      </div>
                      <p
                        className=" text-[86px] text-left text-[#c03540]"
                        id="joy"
                      >
                        :
                      </p>
                      <div className="flex justify-center items-center  w-[212px] h-[190px] relative gap-2.5 p-2.5 rounded-[20px] bg-[#c03540]">
                        <p
                          className=" text-[86px] text-left text-white"
                          id="joy"
                        >
                          {timeLeft.seconds}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center items-start  gap-[127px]">
                      <div className="flex justify-start items-start  relative gap-[188px]">
                        <p
                          className=" text-5xl font-bold text-left text-black"
                          id="galr"
                        >
                          DAYS
                        </p>
                        <p
                          className=" text-5xl font-bold text-left text-black"
                          id="galr"
                        >
                          HOURS
                        </p>
                      </div>
                      <div className="flex justify-start items-center  relative gap-[91px]">
                        <p
                          className=" text-5xl font-bold text-left text-black"
                          id="galr"
                        >
                          MINUTES
                        </p>
                        <p
                          className=" text-5xl font-bold text-left text-black"
                          id="galr"
                        >
                          SECONDS
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start items-center  gap-32">
                  <div className="flex justify-center items-center  w-[248px] h-[54px] relative gap-2.5 p-2.5 rounded-[10px] bg-[#c03540]">
                    <button className=" text-2xl text-left text-white" id="joy">
                      WHITELIST
                    </button>
                  </div>
                  <div className="flex justify-center items-center  w-[290px] h-[54px] relative gap-2.5 p-2.5 rounded-[10px] bg-black">
                    <button
                      className=" text-[26px] text-left text-white"
                      id="joy"
                    >
                      PUBLIC MINT
                    </button>
                  </div>
                </div>
                <div className="flex justify-start items-end  gap-[31px]">
                  <div className="flex flex-col justify-center items-center  h-[168px] w-60 relative gap-2 px-6 py-9 rounded-[13.37px] bg-[#f55322]/10">
                    <p
                      className=" text-lg font-medium text-left text-[#c23542]"
                      id="galr"
                    >
                      Network Fee
                    </p>
                    <p
                      className=" text-[22px] text-left text-[#c23542]"
                      id="joy"
                    >
                      30 SATS/VB
                    </p>
                    <p
                      className=" text-lg font-medium text-left text-[#c23542]"
                      id="galr"
                    >
                      Low Priority
                    </p>
                    <svg
                      width={243}
                      height={170}
                      viewBox="0 0 243 170"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M5.24336 2.26849H7.73888V4.80554H5.24336V2.26849Z"
                        fill="#C23542"
                      />
                      <path
                        d="M3.9956 3.53701H5.24336V7.3426H3.9956V3.53701Z"
                        fill="#C23542"
                      />
                      <path
                        d="M2.74784 4.80554H3.9956V8.61113H2.74784V4.80554Z"
                        fill="#C23542"
                      />
                      <path
                        d="M1.50008 7.3426L3.9956 7.3426L3.9956 8.61113H1.50008V7.3426Z"
                        fill="#C23542"
                      />
                      <path
                        d="M237.757 3.21722H235.261V5.75427H237.757V3.21722Z"
                        fill="#C23542"
                      />
                      <path
                        d="M239.004 4.48571H237.757V8.29129H239.004V4.48571Z"
                        fill="#C23542"
                      />
                      <path
                        d="M240.252 5.75431H239.004V9.55989H240.252V5.75431Z"
                        fill="#C23542"
                      />
                      <path
                        d="M241.5 8.29128L239.004 8.29129L239.004 9.55989L241.5 9.55981V8.29128Z"
                        fill="#C23542"
                      />
                      <path
                        d="M5.24328 165.194H7.7388V167.731H5.24328V165.194Z"
                        fill="#C23542"
                      />
                      <path
                        d="M3.99552 162.657H5.24328V166.463H3.99552V162.657Z"
                        fill="#C23542"
                      />
                      <path
                        d="M2.74776 165.194H3.99552V161.389H2.74776V165.194Z"
                        fill="#C23542"
                      />
                      <path
                        d="M1.5 162.657H3.99552V161.389H1.5V162.657Z"
                        fill="#C23542"
                      />
                      <path
                        d="M237.757 165.194H235.261V167.731H237.757V165.194Z"
                        fill="#C23542"
                      />
                      <path
                        d="M239.004 162.657H237.757V166.463H239.004V162.657Z"
                        fill="#C23542"
                      />
                      <path
                        d="M240.252 165.194H239.004V161.389H240.252V165.194Z"
                        fill="#C23542"
                      />
                      <path
                        d="M241.5 162.657H239.004L239.004 161.389H241.5V162.657Z"
                        fill="#C23542"
                      />
                      <path
                        d="M7.73883 1H235.261V3.53706H7.73883V1Z"
                        fill="#C23542"
                      />
                      <path
                        d="M7.73883 166.463H235.261V169H7.73883V166.463Z"
                        fill="#C23542"
                      />
                      <path
                        d="M1.50008 8.61113H3.9956L3.99552 161.389H1.5L1.50008 8.61113Z"
                        fill="#C23542"
                      />
                      <path
                        d="M241.5 8.61116H239.004L239.004 161.389H241.5V8.61116Z"
                        fill="#C23542"
                      />
                      <path
                        d="M3.9956 7.3426H5.24336V3.53701H3.9956V7.3426ZM3.9956 7.3426L1.50008 7.3426V8.61113M3.9956 7.3426L3.9956 8.61113M3.9956 8.61113V4.80554H2.74784V8.61113H3.9956ZM3.9956 8.61113H1.50008M3.9956 8.61113L3.99552 161.389M1.50008 8.61113L1.5 161.389M239.004 8.29129H237.757V4.48571H239.004V8.29129ZM239.004 8.29129L241.5 8.29128V9.55981L239.004 9.55989M239.004 8.29129L239.004 9.55989M239.004 9.55989V5.75431H240.252V9.55989H239.004ZM3.99552 162.657H5.24328V166.463H3.99552V162.657ZM3.99552 162.657H1.5V161.389M3.99552 162.657V161.389M3.99552 161.389V165.194H2.74776V161.389H3.99552ZM3.99552 161.389H1.5M239.004 162.657H237.757V166.463H239.004V162.657ZM239.004 162.657H241.5V161.389M239.004 162.657L239.004 161.389M239.004 161.389V165.194H240.252V161.389H239.004ZM239.004 161.389H241.5M239.004 161.389L239.004 8.61116H241.5V161.389M5.24336 2.26849H7.73888V4.80554H5.24336V2.26849ZM237.757 3.21722H235.261V5.75427H237.757V3.21722ZM5.24328 165.194H7.7388V167.731H5.24328V165.194ZM237.757 165.194H235.261V167.731H237.757V165.194ZM7.73883 1H235.261V3.53706H7.73883V1ZM7.73883 166.463H235.261V169H7.73883V166.463Z"
                        stroke="#C23542"
                        strokeWidth={2}
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col justify-center items-center  h-[168px] w-60 relative gap-2 px-6 py-9 rounded-[13.37px] bg-[#f55322]/10">
                    <p
                      className=" text-lg font-medium text-left text-[#020202]"
                      id="galr"
                    >
                      Network Fee
                    </p>
                    <p
                      className=" text-[22px] text-left text-[#020202]"
                      id="joy"
                    >
                      40 SATS/VB
                    </p>
                    <p
                      className=" text-lg font-medium text-left text-[#020202]"
                      id="galr"
                    >
                      Medium Priority
                    </p>
                    <svg
                      width={243}
                      height={170}
                      viewBox="0 0 243 170"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M5.24336 2.26849H7.73888V4.80554H5.24336V2.26849Z"
                        fill="black"
                      />
                      <path
                        d="M3.9956 3.53701H5.24336V7.3426H3.9956V3.53701Z"
                        fill="black"
                      />
                      <path
                        d="M2.74784 4.80554H3.9956V8.61113H2.74784V4.80554Z"
                        fill="black"
                      />
                      <path
                        d="M1.50008 7.3426L3.9956 7.3426L3.9956 8.61113H1.50008V7.3426Z"
                        fill="black"
                      />
                      <path
                        d="M237.757 3.21722H235.261V5.75427H237.757V3.21722Z"
                        fill="black"
                      />
                      <path
                        d="M239.004 4.48571H237.757V8.29129H239.004V4.48571Z"
                        fill="black"
                      />
                      <path
                        d="M240.252 5.75431H239.004V9.55989H240.252V5.75431Z"
                        fill="black"
                      />
                      <path
                        d="M241.5 8.29128L239.004 8.29129L239.004 9.55989L241.5 9.55981V8.29128Z"
                        fill="black"
                      />
                      <path
                        d="M5.24328 165.194H7.7388V167.731H5.24328V165.194Z"
                        fill="black"
                      />
                      <path
                        d="M3.99552 162.657H5.24328V166.463H3.99552V162.657Z"
                        fill="black"
                      />
                      <path
                        d="M2.74776 165.194H3.99552V161.389H2.74776V165.194Z"
                        fill="black"
                      />
                      <path
                        d="M1.5 162.657H3.99552V161.389H1.5V162.657Z"
                        fill="black"
                      />
                      <path
                        d="M237.757 165.194H235.261V167.731H237.757V165.194Z"
                        fill="black"
                      />
                      <path
                        d="M239.004 162.657H237.757V166.463H239.004V162.657Z"
                        fill="black"
                      />
                      <path
                        d="M240.252 165.194H239.004V161.389H240.252V165.194Z"
                        fill="black"
                      />
                      <path
                        d="M241.5 162.657H239.004L239.004 161.389H241.5V162.657Z"
                        fill="black"
                      />
                      <path
                        d="M7.73883 1H235.261V3.53706H7.73883V1Z"
                        fill="black"
                      />
                      <path
                        d="M7.73883 166.463H235.261V169H7.73883V166.463Z"
                        fill="black"
                      />
                      <path
                        d="M1.50008 8.61113H3.9956L3.99552 161.389H1.5L1.50008 8.61113Z"
                        fill="black"
                      />
                      <path
                        d="M241.5 8.61116H239.004L239.004 161.389H241.5V8.61116Z"
                        fill="black"
                      />
                      <path
                        d="M3.9956 7.3426H5.24336V3.53701H3.9956V7.3426ZM3.9956 7.3426L1.50008 7.3426V8.61113M3.9956 7.3426L3.9956 8.61113M3.9956 8.61113V4.80554H2.74784V8.61113H3.9956ZM3.9956 8.61113H1.50008M3.9956 8.61113L3.99552 161.389M1.50008 8.61113L1.5 161.389M239.004 8.29129H237.757V4.48571H239.004V8.29129ZM239.004 8.29129L241.5 8.29128V9.55981L239.004 9.55989M239.004 8.29129L239.004 9.55989M239.004 9.55989V5.75431H240.252V9.55989H239.004ZM3.99552 162.657H5.24328V166.463H3.99552V162.657ZM3.99552 162.657H1.5V161.389M3.99552 162.657V161.389M3.99552 161.389V165.194H2.74776V161.389H3.99552ZM3.99552 161.389H1.5M239.004 162.657H237.757V166.463H239.004V162.657ZM239.004 162.657H241.5V161.389M239.004 162.657L239.004 161.389M239.004 161.389V165.194H240.252V161.389H239.004ZM239.004 161.389H241.5M239.004 161.389L239.004 8.61116H241.5V161.389M5.24336 2.26849H7.73888V4.80554H5.24336V2.26849ZM237.757 3.21722H235.261V5.75427H237.757V3.21722ZM5.24328 165.194H7.7388V167.731H5.24328V165.194ZM237.757 165.194H235.261V167.731H237.757V165.194ZM7.73883 1H235.261V3.53706H7.73883V1ZM7.73883 166.463H235.261V169H7.73883V166.463Z"
                        stroke="black"
                        strokeWidth={2}
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col justify-center items-center  h-[168px] w-60 relative gap-2 px-6 py-9 rounded-[13.37px] bg-[#f55322]/10">
                    <p
                      className=" text-lg font-medium text-left text-[#020202]"
                      id="galr"
                    >
                      Network Fee
                    </p>
                    <p
                      className=" text-[22px] text-left text-[#020202]"
                      id="joy"
                    >
                      50 SATS/VB
                    </p>
                    <p
                      className=" text-lg font-medium text-left text-[#020202]"
                      id="galr"
                    >
                      High Priority
                    </p>
                    <svg
                      width={243}
                      height={170}
                      viewBox="0 0 243 170"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M5.24336 2.26849H7.73888V4.80554H5.24336V2.26849Z"
                        fill="black"
                      />
                      <path
                        d="M3.9956 3.53701H5.24336V7.3426H3.9956V3.53701Z"
                        fill="black"
                      />
                      <path
                        d="M2.74784 4.80554H3.9956V8.61113H2.74784V4.80554Z"
                        fill="black"
                      />
                      <path
                        d="M1.50008 7.3426L3.9956 7.3426L3.9956 8.61113H1.50008V7.3426Z"
                        fill="black"
                      />
                      <path
                        d="M237.757 3.21722H235.261V5.75427H237.757V3.21722Z"
                        fill="black"
                      />
                      <path
                        d="M239.004 4.48571H237.757V8.29129H239.004V4.48571Z"
                        fill="black"
                      />
                      <path
                        d="M240.252 5.75431H239.004V9.55989H240.252V5.75431Z"
                        fill="black"
                      />
                      <path
                        d="M241.5 8.29128L239.004 8.29129L239.004 9.55989L241.5 9.55981V8.29128Z"
                        fill="black"
                      />
                      <path
                        d="M5.24328 165.194H7.7388V167.731H5.24328V165.194Z"
                        fill="black"
                      />
                      <path
                        d="M3.99552 162.657H5.24328V166.463H3.99552V162.657Z"
                        fill="black"
                      />
                      <path
                        d="M2.74776 165.194H3.99552V161.389H2.74776V165.194Z"
                        fill="black"
                      />
                      <path
                        d="M1.5 162.657H3.99552V161.389H1.5V162.657Z"
                        fill="black"
                      />
                      <path
                        d="M237.757 165.194H235.261V167.731H237.757V165.194Z"
                        fill="black"
                      />
                      <path
                        d="M239.004 162.657H237.757V166.463H239.004V162.657Z"
                        fill="black"
                      />
                      <path
                        d="M240.252 165.194H239.004V161.389H240.252V165.194Z"
                        fill="black"
                      />
                      <path
                        d="M241.5 162.657H239.004L239.004 161.389H241.5V162.657Z"
                        fill="black"
                      />
                      <path
                        d="M7.73883 1H235.261V3.53706H7.73883V1Z"
                        fill="black"
                      />
                      <path
                        d="M7.73883 166.463H235.261V169H7.73883V166.463Z"
                        fill="black"
                      />
                      <path
                        d="M1.50008 8.61113H3.9956L3.99552 161.389H1.5L1.50008 8.61113Z"
                        fill="black"
                      />
                      <path
                        d="M241.5 8.61116H239.004L239.004 161.389H241.5V8.61116Z"
                        fill="black"
                      />
                      <path
                        d="M3.9956 7.3426H5.24336V3.53701H3.9956V7.3426ZM3.9956 7.3426L1.50008 7.3426V8.61113M3.9956 7.3426L3.9956 8.61113M3.9956 8.61113V4.80554H2.74784V8.61113H3.9956ZM3.9956 8.61113H1.50008M3.9956 8.61113L3.99552 161.389M1.50008 8.61113L1.5 161.389M239.004 8.29129H237.757V4.48571H239.004V8.29129ZM239.004 8.29129L241.5 8.29128V9.55981L239.004 9.55989M239.004 8.29129L239.004 9.55989M239.004 9.55989V5.75431H240.252V9.55989H239.004ZM3.99552 162.657H5.24328V166.463H3.99552V162.657ZM3.99552 162.657H1.5V161.389M3.99552 162.657V161.389M3.99552 161.389V165.194H2.74776V161.389H3.99552ZM3.99552 161.389H1.5M239.004 162.657H237.757V166.463H239.004V162.657ZM239.004 162.657H241.5V161.389M239.004 162.657L239.004 161.389M239.004 161.389V165.194H240.252V161.389H239.004ZM239.004 161.389H241.5M239.004 161.389L239.004 8.61116H241.5V161.389M5.24336 2.26849H7.73888V4.80554H5.24336V2.26849ZM237.757 3.21722H235.261V5.75427H237.757V3.21722ZM5.24328 165.194H7.7388V167.731H5.24328V165.194ZM237.757 165.194H235.261V167.731H237.757V165.194ZM7.73883 1H235.261V3.53706H7.73883V1ZM7.73883 166.463H235.261V169H7.73883V166.463Z"
                        stroke="black"
                        strokeWidth={2}
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col justify-center items-center  h-[168px] w-60 relative gap-2 px-6 py-9 rounded-[13.37px] bg-[#f55322]/10">
                    <p
                      className=" text-lg font-medium text-left text-[#020202]"
                      id="galr"
                    >
                      Network Fee
                    </p>
                    <p
                      className=" text-[22px] text-left text-[#020202]"
                      id="joy"
                    >
                      60 SATS/VB
                    </p>
                    <p
                      className=" text-lg font-medium text-left text-[#020202]"
                      id="galr"
                    >
                      Top Priority
                    </p>
                    <svg
                      width={243}
                      height={170}
                      viewBox="0 0 243 170"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M5.24336 2.26849H7.73888V4.80554H5.24336V2.26849Z"
                        fill="black"
                      />
                      <path
                        d="M3.9956 3.53701H5.24336V7.3426H3.9956V3.53701Z"
                        fill="black"
                      />
                      <path
                        d="M2.74784 4.80554H3.9956V8.61113H2.74784V4.80554Z"
                        fill="black"
                      />
                      <path
                        d="M1.50008 7.3426L3.9956 7.3426L3.9956 8.61113H1.50008V7.3426Z"
                        fill="black"
                      />
                      <path
                        d="M237.757 3.21722H235.261V5.75427H237.757V3.21722Z"
                        fill="black"
                      />
                      <path
                        d="M239.004 4.48571H237.757V8.29129H239.004V4.48571Z"
                        fill="black"
                      />
                      <path
                        d="M240.252 5.75431H239.004V9.55989H240.252V5.75431Z"
                        fill="black"
                      />
                      <path
                        d="M241.5 8.29128L239.004 8.29129L239.004 9.55989L241.5 9.55981V8.29128Z"
                        fill="black"
                      />
                      <path
                        d="M5.24328 165.194H7.7388V167.731H5.24328V165.194Z"
                        fill="black"
                      />
                      <path
                        d="M3.99552 162.657H5.24328V166.463H3.99552V162.657Z"
                        fill="black"
                      />
                      <path
                        d="M2.74776 165.194H3.99552V161.389H2.74776V165.194Z"
                        fill="black"
                      />
                      <path
                        d="M1.5 162.657H3.99552V161.389H1.5V162.657Z"
                        fill="black"
                      />
                      <path
                        d="M237.757 165.194H235.261V167.731H237.757V165.194Z"
                        fill="black"
                      />
                      <path
                        d="M239.004 162.657H237.757V166.463H239.004V162.657Z"
                        fill="black"
                      />
                      <path
                        d="M240.252 165.194H239.004V161.389H240.252V165.194Z"
                        fill="black"
                      />
                      <path
                        d="M241.5 162.657H239.004L239.004 161.389H241.5V162.657Z"
                        fill="black"
                      />
                      <path
                        d="M7.73883 1H235.261V3.53706H7.73883V1Z"
                        fill="black"
                      />
                      <path
                        d="M7.73883 166.463H235.261V169H7.73883V166.463Z"
                        fill="black"
                      />
                      <path
                        d="M1.50008 8.61113H3.9956L3.99552 161.389H1.5L1.50008 8.61113Z"
                        fill="black"
                      />
                      <path
                        d="M241.5 8.61116H239.004L239.004 161.389H241.5V8.61116Z"
                        fill="black"
                      />
                      <path
                        d="M3.9956 7.3426H5.24336V3.53701H3.9956V7.3426ZM3.9956 7.3426L1.50008 7.3426V8.61113M3.9956 7.3426L3.9956 8.61113M3.9956 8.61113V4.80554H2.74784V8.61113H3.9956ZM3.9956 8.61113H1.50008M3.9956 8.61113L3.99552 161.389M1.50008 8.61113L1.5 161.389M239.004 8.29129H237.757V4.48571H239.004V8.29129ZM239.004 8.29129L241.5 8.29128V9.55981L239.004 9.55989M239.004 8.29129L239.004 9.55989M239.004 9.55989V5.75431H240.252V9.55989H239.004ZM3.99552 162.657H5.24328V166.463H3.99552V162.657ZM3.99552 162.657H1.5V161.389M3.99552 162.657V161.389M3.99552 161.389V165.194H2.74776V161.389H3.99552ZM3.99552 161.389H1.5M239.004 162.657H237.757V166.463H239.004V162.657ZM239.004 162.657H241.5V161.389M239.004 162.657L239.004 161.389M239.004 161.389V165.194H240.252V161.389H239.004ZM239.004 161.389H241.5M239.004 161.389L239.004 8.61116H241.5V161.389M5.24336 2.26849H7.73888V4.80554H5.24336V2.26849ZM237.757 3.21722H235.261V5.75427H237.757V3.21722ZM5.24328 165.194H7.7388V167.731H5.24328V165.194ZM237.757 165.194H235.261V167.731H237.757V165.194ZM7.73883 1H235.261V3.53706H7.73883V1ZM7.73883 166.463H235.261V169H7.73883V166.463Z"
                        stroke="black"
                        strokeWidth={2}
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start items-center  relative gap-6 p-3 bg-[#edd8d2] mt-2">
                <img src={mainGif} alt="Hero Image" />
                <div className="flex flex-col justify-start items-center  h-[352px] w-[500px] gap-6 rounded-bl-md rounded-br-md bg-[#edd8d2]">
                  <div className="flex flex-col justify-start items-center self-stretch  gap-[19px] px-6">
                    <div className="flex flex-col justify-start items-center self-stretch  relative gap-[22px]">
                      <p className=" text-lg text-left">
                        <span
                          className=" text-lg text-left text-black"
                          id="joy"
                        >
                          Mint BITCOIN{" "}
                        </span>
                        <span
                          className=" text-lg text-left text-[#c23542]"
                          id="joy"
                        >
                          Azuki
                        </span>
                      </p>
                      <div className="flex flex-col justify-start items-start  relative gap-4">
                        <p className=" text-lg text-left text-black" id="joy">
                          REMAINING :
                        </p>
                        <div className="flex justify-start items-center  w-[447px] h-8 relative gap-0.5 rounded bg-[#ece7e5] border border-black">
                          <div className=" w-[296px] h-8 rounded bg-[#c03540]/[0.81]" />
                          <div
                            className="flex justify-start items-start  w-[133px] relative gap-2.5 p-2.5"
                            id="joy"
                          >
                            <p className=" text-lg text-left text-black">
                              800/1000
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-start items-start  gap-6">
                      <div className="flex justify-between items-start self-stretch  relative">
                        <p className=" text-lg text-left text-black" id="joy">
                          Mint Price :
                        </p>
                        <p className=" text-lg text-left">
                          <span
                            className=" text-lg text-left text-black"
                            id="joy"
                          >
                            0.005
                          </span>
                          <span
                            className=" text-lg text-left text-[#c8575f]"
                            id="joy"
                          >
                            {" "}
                            BTC
                          </span>
                        </p>
                      </div>
                      <div className="flex justify-start items-center  relative gap-[30px]">
                        <p className=" text-lg text-left text-black" id="joy">
                          Mint Amount:
                        </p>
                        <button onClick={handleDecrement}>
                          <svg
                            width={31}
                            height={29}
                            viewBox="0 0 31 29"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className=""
                            preserveAspectRatio="none"
                          >
                            <path
                              d="M4.74158 2.33707H7.41574V5.01123H4.74158V2.33707Z"
                              fill="black"
                            />
                            <path
                              d="M3.4045 3.67415H4.74158V7.68539H3.4045V3.67415Z"
                              fill="black"
                            />
                            <path
                              d="M2.06743 5.01123H3.4045V9.02247H2.06743V5.01123Z"
                              fill="black"
                            />
                            <path
                              d="M0.730347 7.68539L3.4045 7.68539L3.4045 9.02247H0.730347V7.68539Z"
                              fill="black"
                            />
                            <path
                              d="M25.8989 2.33707H23.2247V5.01123H25.8989V2.33707Z"
                              fill="black"
                            />
                            <path
                              d="M27.236 3.67415H25.8989V7.68539H27.236V3.67415Z"
                              fill="black"
                            />
                            <path
                              d="M28.573 5.01123H27.236V9.02247H28.573V5.01123Z"
                              fill="black"
                            />
                            <path
                              d="M29.9101 7.68539L27.236 7.68539L27.236 9.02247L29.9101 9.02247V7.68539Z"
                              fill="black"
                            />
                            <path
                              d="M4.74158 24.0674H7.41574V26.7416H4.74158V24.0674Z"
                              fill="black"
                            />
                            <path
                              d="M3.4045 21.3933H4.74158V25.4045H3.4045V21.3933Z"
                              fill="black"
                            />
                            <path
                              d="M2.06743 24.0674H3.4045V20.0562H2.06743V24.0674Z"
                              fill="black"
                            />
                            <path
                              d="M0.730347 21.3933H3.4045L3.4045 20.0562H0.730347V21.3933Z"
                              fill="black"
                            />
                            <path
                              d="M25.8989 24.0674H23.2247V26.7416H25.8989V24.0674Z"
                              fill="black"
                            />
                            <path
                              d="M27.236 21.3933H25.8989V25.4045H27.236V21.3933Z"
                              fill="black"
                            />
                            <path
                              d="M28.573 24.0674H27.236V20.0562H28.573V24.0674Z"
                              fill="black"
                            />
                            <path
                              d="M29.9101 21.3933H27.236L27.236 20.0562H29.9101V21.3933Z"
                              fill="black"
                            />
                            <path
                              d="M7.41577 1H23.2248V3.67416H7.41577V1Z"
                              fill="black"
                            />
                            <path
                              d="M7.41577 25.4045H23.2248V28.0787H7.41577V25.4045Z"
                              fill="black"
                            />
                            <path
                              d="M0.730347 9.02247H3.4045V20.0562H0.730347V9.02247Z"
                              fill="black"
                            />
                            <path
                              d="M29.9101 9.02247L27.236 9.02247V20.0562H29.9101V9.02247Z"
                              fill="black"
                            />
                            <path
                              d="M18.6984 14.2V15.4H12.6984V14.2H18.6984Z"
                              fill="black"
                            />
                            <path
                              d="M3.4045 7.68539H4.74158V3.67415H3.4045V7.68539ZM3.4045 7.68539L0.730347 7.68539V9.02247M3.4045 7.68539L3.4045 9.02247M3.4045 9.02247V5.01123H2.06743V9.02247H3.4045ZM3.4045 9.02247H0.730347M3.4045 9.02247V20.0562M0.730347 9.02247V20.0562M27.236 7.68539H25.8989V3.67415H27.236V7.68539ZM27.236 7.68539L29.9101 7.68539V9.02247M27.236 7.68539L27.236 9.02247M27.236 9.02247V5.01123H28.573V9.02247H27.236ZM27.236 9.02247L29.9101 9.02247M27.236 9.02247V20.0562M29.9101 9.02247V20.0562M3.4045 21.3933H4.74158V25.4045H3.4045V21.3933ZM3.4045 21.3933H0.730347V20.0562M3.4045 21.3933L3.4045 20.0562M3.4045 20.0562V24.0674H2.06743V20.0562H3.4045ZM3.4045 20.0562H0.730347M27.236 21.3933H25.8989V25.4045H27.236V21.3933ZM27.236 21.3933H29.9101V20.0562M27.236 21.3933L27.236 20.0562M27.236 20.0562V24.0674H28.573V20.0562H27.236ZM27.236 20.0562H29.9101M4.74158 2.33707H7.41574V5.01123H4.74158V2.33707ZM25.8989 2.33707H23.2247V5.01123H25.8989V2.33707ZM4.74158 24.0674H7.41574V26.7416H4.74158V24.0674ZM25.8989 24.0674H23.2247V26.7416H25.8989V24.0674ZM7.41577 1H23.2248V3.67416H7.41577V1ZM7.41577 25.4045H23.2248V28.0787H7.41577V25.4045ZM18.6984 14.2V15.4H12.6984V14.2H18.6984Z"
                              stroke="black"
                            />
                          </svg>
                        </button>

                        <p className=" text-lg text-left text-black" id="joy">
                          {count}
                        </p>
                        <button onClick={handleIncrement}>
                          <svg
                            width={31}
                            height={29}
                            viewBox="0 0 31 29"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className=""
                            preserveAspectRatio="none"
                          >
                            <path
                              d="M4.92139 2.33708H7.59555V5.01124H4.92139V2.33708Z"
                              fill="black"
                            />
                            <path
                              d="M3.58431 3.67416H4.92139V7.68539H3.58431V3.67416Z"
                              fill="black"
                            />
                            <path
                              d="M2.24723 5.01124H3.58431V9.02247H2.24723V5.01124Z"
                              fill="black"
                            />
                            <path
                              d="M0.910156 7.68539L3.58431 7.68539L3.58431 9.02247H0.910156V7.68539Z"
                              fill="black"
                            />
                            <path
                              d="M26.0787 2.33708H23.4045V5.01124H26.0787V2.33708Z"
                              fill="black"
                            />
                            <path
                              d="M27.4158 3.67416H26.0787V7.68539H27.4158V3.67416Z"
                              fill="black"
                            />
                            <path
                              d="M28.7529 5.01124H27.4158V9.02247H28.7529V5.01124Z"
                              fill="black"
                            />
                            <path
                              d="M30.0899 7.68539L27.4158 7.68539L27.4158 9.02247L30.0899 9.02247V7.68539Z"
                              fill="black"
                            />
                            <path
                              d="M4.92139 24.0674H7.59555V26.7416H4.92139V24.0674Z"
                              fill="black"
                            />
                            <path
                              d="M3.58431 21.3933H4.92139V25.4045H3.58431V21.3933Z"
                              fill="black"
                            />
                            <path
                              d="M2.24723 24.0674H3.58431V20.0562H2.24723V24.0674Z"
                              fill="black"
                            />
                            <path
                              d="M0.910156 21.3933H3.58431L3.58431 20.0562H0.910156V21.3933Z"
                              fill="black"
                            />
                            <path
                              d="M26.0787 24.0674H23.4045V26.7416H26.0787V24.0674Z"
                              fill="black"
                            />
                            <path
                              d="M27.4158 21.3933H26.0787V25.4045H27.4158V21.3933Z"
                              fill="black"
                            />
                            <path
                              d="M28.7529 24.0674H27.4158V20.0562H28.7529V24.0674Z"
                              fill="black"
                            />
                            <path
                              d="M30.0899 21.3933H27.4158L27.4158 20.0562H30.0899V21.3933Z"
                              fill="black"
                            />
                            <path
                              d="M7.59558 1H23.4046V3.67416H7.59558V1Z"
                              fill="black"
                            />
                            <path
                              d="M7.59558 25.4045H23.4046V28.0786H7.59558V25.4045Z"
                              fill="black"
                            />
                            <path
                              d="M0.910156 9.02247H3.58431V20.0562H0.910156V9.02247Z"
                              fill="black"
                            />
                            <path
                              d="M30.0899 9.02247L27.4158 9.02247V20.0562H30.0899V9.02247Z"
                              fill="black"
                            />
                            <path
                              d="M19.4662 14.2V15.4H17.0782V17.8H14.6782V15.4H12.2782V14.2H14.6782V11.8H17.0782V14.2H19.4662Z"
                              fill="black"
                            />
                            <path
                              d="M3.58431 7.68539H4.92139V3.67416H3.58431V7.68539ZM3.58431 7.68539L0.910156 7.68539V9.02247M3.58431 7.68539L3.58431 9.02247M3.58431 9.02247V5.01124H2.24723V9.02247H3.58431ZM3.58431 9.02247H0.910156M3.58431 9.02247V20.0562M0.910156 9.02247V20.0562M27.4158 7.68539H26.0787V3.67416H27.4158V7.68539ZM27.4158 7.68539L30.0899 7.68539V9.02247M27.4158 7.68539L27.4158 9.02247M27.4158 9.02247V5.01124H28.7529V9.02247H27.4158ZM27.4158 9.02247L30.0899 9.02247M27.4158 9.02247V20.0562M30.0899 9.02247V20.0562M3.58431 21.3933H4.92139V25.4045H3.58431V21.3933ZM3.58431 21.3933H0.910156V20.0562M3.58431 21.3933L3.58431 20.0562M3.58431 20.0562V24.0674H2.24723V20.0562H3.58431ZM3.58431 20.0562H0.910156M27.4158 21.3933H26.0787V25.4045H27.4158V21.3933ZM27.4158 21.3933H30.0899V20.0562M27.4158 21.3933L27.4158 20.0562M27.4158 20.0562V24.0674H28.7529V20.0562H27.4158ZM27.4158 20.0562H30.0899M4.92139 2.33708H7.59555V5.01124H4.92139V2.33708ZM26.0787 2.33708H23.4045V5.01124H26.0787V2.33708ZM4.92139 24.0674H7.59555V26.7416H4.92139V24.0674ZM26.0787 24.0674H23.4045V26.7416H26.0787V24.0674ZM7.59558 1H23.4046V3.67416H7.59558V1ZM7.59558 25.4045H23.4046V28.0786H7.59558V25.4045ZM19.4662 14.2V15.4H17.0782V17.8H14.6782V15.4H12.2782V14.2H14.6782V11.8H17.0782V14.2H19.4662Z"
                              stroke="black"
                            />
                          </svg>
                        </button>
                        <button onClick={maxMint}>
                          <svg
                            width={60}
                            height={30}
                            viewBox="0 0 60 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className=""
                            preserveAspectRatio="none"
                          >
                            <mask
                              id="path-1-outside-1_74_619"
                              maskUnits="userSpaceOnUse"
                              x="0.0898438"
                              y={0}
                              width={60}
                              height={30}
                              fill="black"
                            >
                              <rect
                                fill="white"
                                x="0.0898438"
                                width={60}
                                height={30}
                              />
                              <path d="M3 8C3 4.68629 5.68629 2 9 2H51C54.3137 2 57 4.68629 57 8V21C57 24.3137 54.3137 27 51 27H9C5.68629 27 3 24.3137 3 21V8Z" />
                              <path d="M5.10108 2.33708H7.77524V5.01124H5.10108V2.33708Z" />
                              <path d="M3.764 3.67416H5.10108V7.68539H3.764V3.67416Z" />
                              <path d="M2.42692 5.01124H3.764V9.02247H2.42692V5.01124Z" />
                              <path d="M1.08984 7.68539L3.764 7.68539L3.764 9.02247H1.08984V7.68539Z" />
                              <path d="M54.2584 2.33708H51.5843V5.01124H54.2584V2.33708Z" />
                              <path d="M55.5955 3.67416H54.2584V7.68539H55.5955V3.67416Z" />
                              <path d="M56.9326 5.01124H55.5955V9.02247H56.9326V5.01124Z" />
                              <path d="M58.2696 7.68539L55.5955 7.68539V9.02247L58.2696 9.02247V7.68539Z" />
                              <path d="M5.10108 24.0674H7.77524V26.7416H5.10108V24.0674Z" />
                              <path d="M3.764 21.3933H5.10108V25.4045H3.764V21.3933Z" />
                              <path d="M2.42692 24.0674H3.764V20.0562H2.42692V24.0674Z" />
                              <path d="M1.08984 21.3933H3.764L3.764 20.0562H1.08984V21.3933Z" />
                              <path d="M54.2584 24.0674H51.5843V26.7416H54.2584V24.0674Z" />
                              <path d="M55.5955 21.3933H54.2584V25.4045H55.5955V21.3933Z" />
                              <path d="M56.9326 24.0674H55.5955V20.0562H56.9326V24.0674Z" />
                              <path d="M58.2696 21.3933H55.5955V20.0562H58.2696V21.3933Z" />
                              <path d="M7.77527 1H51.5843V3.67416H7.77527V1Z" />
                              <path d="M7.77527 25.4045H51.5843V28.0786H7.77527V25.4045Z" />
                              <path d="M1.08984 9.02247H3.764V20.0562H1.08984V9.02247Z" />
                              <path d="M58.2696 9.02247L55.5955 9.02247V20.0562H58.2696V9.02247Z" />
                              <path d="M23.2578 11.6V20H20.8578V16.4H19.6578V17.6H18.4578V16.4H17.2578V20H14.8578V11.6H17.2578V12.8H18.4578V14H19.6578V12.8H20.8578V11.6H23.2578Z" />
                              <path d="M33.3153 14V20H30.9153V17.6H27.3153V20H24.9153V14H26.1153V12.8H27.3153V11.6H30.9153V12.8H32.1153V14H33.3153ZM27.3153 16.4H30.9153V14H29.7153V12.8H28.5153V14H27.3153V16.4Z" />
                              <path d="M43.3728 17.6V20H40.9728V18.8H39.7728V17.6H38.5728V18.8H37.3728V20H34.9728V17.6H36.1728V16.4H37.3728V15.2H36.1728V14H34.9728V11.6H37.3728V12.8H38.5728V14H39.7728V12.8H40.9728V11.6H43.3728V14H42.1728V15.2H40.9728V16.4H42.1728V17.6H43.3728Z" />
                            </mask>
                            <path
                              d="M3 8C3 4.68629 5.68629 2 9 2H51C54.3137 2 57 4.68629 57 8V21C57 24.3137 54.3137 27 51 27H9C5.68629 27 3 24.3137 3 21V8Z"
                              fill="#C8575F"
                            />
                            <path
                              d="M5.10108 2.33708H7.77524V5.01124H5.10108V2.33708Z"
                              fill="black"
                            />
                            <path
                              d="M3.764 3.67416H5.10108V7.68539H3.764V3.67416Z"
                              fill="black"
                            />
                            <path
                              d="M2.42692 5.01124H3.764V9.02247H2.42692V5.01124Z"
                              fill="black"
                            />
                            <path
                              d="M1.08984 7.68539L3.764 7.68539L3.764 9.02247H1.08984V7.68539Z"
                              fill="black"
                            />
                            <path
                              d="M54.2584 2.33708H51.5843V5.01124H54.2584V2.33708Z"
                              fill="black"
                            />
                            <path
                              d="M55.5955 3.67416H54.2584V7.68539H55.5955V3.67416Z"
                              fill="black"
                            />
                            <path
                              d="M56.9326 5.01124H55.5955V9.02247H56.9326V5.01124Z"
                              fill="black"
                            />
                            <path
                              d="M58.2696 7.68539L55.5955 7.68539V9.02247L58.2696 9.02247V7.68539Z"
                              fill="black"
                            />
                            <path
                              d="M5.10108 24.0674H7.77524V26.7416H5.10108V24.0674Z"
                              fill="black"
                            />
                            <path
                              d="M3.764 21.3933H5.10108V25.4045H3.764V21.3933Z"
                              fill="black"
                            />
                            <path
                              d="M2.42692 24.0674H3.764V20.0562H2.42692V24.0674Z"
                              fill="black"
                            />
                            <path
                              d="M1.08984 21.3933H3.764L3.764 20.0562H1.08984V21.3933Z"
                              fill="black"
                            />
                            <path
                              d="M54.2584 24.0674H51.5843V26.7416H54.2584V24.0674Z"
                              fill="black"
                            />
                            <path
                              d="M55.5955 21.3933H54.2584V25.4045H55.5955V21.3933Z"
                              fill="black"
                            />
                            <path
                              d="M56.9326 24.0674H55.5955V20.0562H56.9326V24.0674Z"
                              fill="black"
                            />
                            <path
                              d="M58.2696 21.3933H55.5955V20.0562H58.2696V21.3933Z"
                              fill="black"
                            />
                            <path
                              d="M7.77527 1H51.5843V3.67416H7.77527V1Z"
                              fill="black"
                            />
                            <path
                              d="M7.77527 25.4045H51.5843V28.0786H7.77527V25.4045Z"
                              fill="black"
                            />
                            <path
                              d="M1.08984 9.02247H3.764V20.0562H1.08984V9.02247Z"
                              fill="black"
                            />
                            <path
                              d="M58.2696 9.02247L55.5955 9.02247V20.0562H58.2696V9.02247Z"
                              fill="black"
                            />
                            <path
                              d="M23.2578 11.6V20H20.8578V16.4H19.6578V17.6H18.4578V16.4H17.2578V20H14.8578V11.6H17.2578V12.8H18.4578V14H19.6578V12.8H20.8578V11.6H23.2578Z"
                              fill="black"
                            />
                            <path
                              d="M33.3153 14V20H30.9153V17.6H27.3153V20H24.9153V14H26.1153V12.8H27.3153V11.6H30.9153V12.8H32.1153V14H33.3153ZM27.3153 16.4H30.9153V14H29.7153V12.8H28.5153V14H27.3153V16.4Z"
                              fill="black"
                            />
                            <path
                              d="M43.3728 17.6V20H40.9728V18.8H39.7728V17.6H38.5728V18.8H37.3728V20H34.9728V17.6H36.1728V16.4H37.3728V15.2H36.1728V14H34.9728V11.6H37.3728V12.8H38.5728V14H39.7728V12.8H40.9728V11.6H43.3728V14H42.1728V15.2H40.9728V16.4H42.1728V17.6H43.3728Z"
                              fill="black"
                            />
                            <path
                              d="M3.764 8.52247H1.08984V9.52247H3.764V8.52247ZM55.5955 9.52247L58.2696 9.52247L58.2696 8.52247L55.5955 8.52247L55.5955 9.52247ZM3.764 19.5562H1.08984V20.5562H3.764V19.5562ZM55.5955 20.5562H58.2696V19.5562H55.5955V20.5562ZM5.10108 2.33708V1.33708H4.10108V2.33708H5.10108ZM7.77524 2.33708H8.77524V1.33708H7.77524V2.33708ZM7.77524 5.01124V6.01124H8.77524V5.01124H7.77524ZM5.10108 5.01124H4.10108V6.01124H5.10108V5.01124ZM3.764 3.67416V2.67416H2.764V3.67416H3.764ZM5.10108 3.67416H6.10108V2.67416H5.10108V3.67416ZM5.10108 7.68539V8.68539H6.10108V7.68539H5.10108ZM2.42692 5.01124V4.01124H1.42692V5.01124H2.42692ZM3.764 5.01124H4.764V4.01124H3.764V5.01124ZM3.764 9.02247L4.764 9.02247L4.764 9.02247L3.764 9.02247ZM2.42692 9.02247H1.42692V10.0225H2.42692V9.02247ZM1.08984 7.68539L1.08984 6.68539L0.0898438 6.68539V7.68539H1.08984ZM54.2584 2.33708H55.2584V1.33708H54.2584V2.33708ZM51.5843 2.33708V1.33708H50.5843V2.33708H51.5843ZM51.5843 5.01124H50.5843V6.01124H51.5843V5.01124ZM54.2584 5.01124V6.01124H55.2584V5.01124H54.2584ZM55.5955 3.67416H56.5955V2.67416H55.5955V3.67416ZM54.2584 3.67416V2.67416H53.2584V3.67416H54.2584ZM54.2584 7.68539H53.2584V8.68539H54.2584V7.68539ZM56.9326 5.01124H57.9326V4.01124H56.9326V5.01124ZM55.5955 5.01124V4.01124H54.5955V5.01124H55.5955ZM56.9326 9.02247V10.0225H57.9326V9.02247H56.9326ZM58.2696 7.68539H59.2696V6.68539L58.2696 6.68539L58.2696 7.68539ZM5.10108 24.0674V23.0674H4.10108V24.0674H5.10108ZM7.77524 24.0674H8.77524V23.0674H7.77524V24.0674ZM7.77524 26.7416V27.7416H8.77524V26.7416H7.77524ZM5.10108 26.7416H4.10108V27.7416H5.10108V26.7416ZM5.10108 21.3933H6.10108V20.3933H5.10108V21.3933ZM5.10108 25.4045V26.4045H6.10108V25.4045H5.10108ZM3.764 25.4045H2.764V26.4045H3.764V25.4045ZM2.42692 24.0674H1.42692V25.0674H2.42692V24.0674ZM3.764 24.0674V25.0674H4.764V24.0674H3.764ZM2.42692 20.0562V19.0562H1.42692V20.0562H2.42692ZM1.08984 21.3933H0.0898438V22.3933H1.08984V21.3933ZM54.2584 24.0674H55.2584V23.0674H54.2584V24.0674ZM51.5843 24.0674V23.0674H50.5843V24.0674H51.5843ZM51.5843 26.7416H50.5843V27.7416H51.5843V26.7416ZM54.2584 26.7416V27.7416H55.2584V26.7416H54.2584ZM54.2584 21.3933V20.3933H53.2584V21.3933H54.2584ZM54.2584 25.4045H53.2584V26.4045H54.2584V25.4045ZM55.5955 25.4045V26.4045H56.5955V25.4045H55.5955ZM56.9326 24.0674V25.0674H57.9326V24.0674H56.9326ZM55.5955 24.0674H54.5955V25.0674H55.5955V24.0674ZM56.9326 20.0562H57.9326V19.0562H56.9326V20.0562ZM58.2696 21.3933V22.3933H59.2696V21.3933H58.2696ZM7.77527 1V0H6.77527V1H7.77527ZM51.5843 1H52.5843V0H51.5843V1ZM51.5843 3.67416V4.67416H52.5843V3.67416H51.5843ZM7.77527 3.67416H6.77527V4.67416H7.77527V3.67416ZM7.77527 25.4045V24.4045H6.77527V25.4045H7.77527ZM51.5843 25.4045H52.5843V24.4045H51.5843V25.4045ZM51.5843 28.0786V29.0786H52.5843V28.0786H51.5843ZM7.77527 28.0786H6.77527V29.0786H7.77527V28.0786ZM23.2578 11.6H24.2578V10.6H23.2578V11.6ZM23.2578 20V21H24.2578V20H23.2578ZM20.8578 20H19.8578V21H20.8578V20ZM20.8578 16.4H21.8578V15.4H20.8578V16.4ZM19.6578 16.4V15.4H18.6578V16.4H19.6578ZM19.6578 17.6V18.6H20.6578V17.6H19.6578ZM18.4578 17.6H17.4578V18.6H18.4578V17.6ZM18.4578 16.4H19.4578V15.4H18.4578V16.4ZM17.2578 16.4V15.4H16.2578V16.4H17.2578ZM17.2578 20V21H18.2578V20H17.2578ZM14.8578 20H13.8578V21H14.8578V20ZM14.8578 11.6V10.6H13.8578V11.6H14.8578ZM17.2578 11.6H18.2578V10.6H17.2578V11.6ZM17.2578 12.8H16.2578V13.8H17.2578V12.8ZM18.4578 12.8H19.4578V11.8H18.4578V12.8ZM18.4578 14H17.4578V15H18.4578V14ZM19.6578 14V15H20.6578V14H19.6578ZM19.6578 12.8V11.8H18.6578V12.8H19.6578ZM20.8578 12.8V13.8H21.8578V12.8H20.8578ZM20.8578 11.6V10.6H19.8578V11.6H20.8578ZM33.3153 14H34.3153V13H33.3153V14ZM33.3153 20V21H34.3153V20H33.3153ZM30.9153 20H29.9153V21H30.9153V20ZM30.9153 17.6H31.9153V16.6H30.9153V17.6ZM27.3153 17.6V16.6H26.3153V17.6H27.3153ZM27.3153 20V21H28.3153V20H27.3153ZM24.9153 20H23.9153V21H24.9153V20ZM24.9153 14V13H23.9153V14H24.9153ZM26.1153 14V15H27.1153V14H26.1153ZM26.1153 12.8V11.8H25.1153V12.8H26.1153ZM27.3153 12.8V13.8H28.3153V12.8H27.3153ZM27.3153 11.6V10.6H26.3153V11.6H27.3153ZM30.9153 11.6H31.9153V10.6H30.9153V11.6ZM30.9153 12.8H29.9153V13.8H30.9153V12.8ZM32.1153 12.8H33.1153V11.8H32.1153V12.8ZM32.1153 14H31.1153V15H32.1153V14ZM27.3153 16.4H26.3153V17.4H27.3153V16.4ZM30.9153 16.4V17.4H31.9153V16.4H30.9153ZM30.9153 14H31.9153V13H30.9153V14ZM29.7153 14H28.7153V15H29.7153V14ZM29.7153 12.8H30.7153V11.8H29.7153V12.8ZM28.5153 12.8V11.8H27.5153V12.8H28.5153ZM28.5153 14V15H29.5153V14H28.5153ZM27.3153 14V13H26.3153V14H27.3153ZM43.3728 17.6H44.3728V16.6H43.3728V17.6ZM43.3728 20V21H44.3728V20H43.3728ZM40.9728 20H39.9728V21H40.9728V20ZM40.9728 18.8H41.9728V17.8H40.9728V18.8ZM39.7728 18.8H38.7728V19.8H39.7728V18.8ZM39.7728 17.6H40.7728V16.6H39.7728V17.6ZM38.5728 17.6V16.6H37.5728V17.6H38.5728ZM38.5728 18.8V19.8H39.5728V18.8H38.5728ZM37.3728 18.8V17.8H36.3728V18.8H37.3728ZM37.3728 20V21H38.3728V20H37.3728ZM34.9728 20H33.9728V21H34.9728V20ZM34.9728 17.6V16.6H33.9728V17.6H34.9728ZM36.1728 17.6V18.6H37.1728V17.6H36.1728ZM36.1728 16.4V15.4H35.1728V16.4H36.1728ZM37.3728 16.4V17.4H38.3728V16.4H37.3728ZM37.3728 15.2H38.3728V14.2H37.3728V15.2ZM36.1728 15.2H35.1728V16.2H36.1728V15.2ZM36.1728 14H37.1728V13H36.1728V14ZM34.9728 14H33.9728V15H34.9728V14ZM34.9728 11.6V10.6H33.9728V11.6H34.9728ZM37.3728 11.6H38.3728V10.6H37.3728V11.6ZM37.3728 12.8H36.3728V13.8H37.3728V12.8ZM38.5728 12.8H39.5728V11.8H38.5728V12.8ZM38.5728 14H37.5728V15H38.5728V14ZM39.7728 14V15H40.7728V14H39.7728ZM39.7728 12.8V11.8H38.7728V12.8H39.7728ZM40.9728 12.8V13.8H41.9728V12.8H40.9728ZM40.9728 11.6V10.6H39.9728V11.6H40.9728ZM43.3728 11.6H44.3728V10.6H43.3728V11.6ZM43.3728 14V15H44.3728V14H43.3728ZM42.1728 14V13H41.1728V14H42.1728ZM42.1728 15.2V16.2H43.1728V15.2H42.1728ZM40.9728 15.2V14.2H39.9728V15.2H40.9728ZM40.9728 16.4H39.9728V17.4H40.9728V16.4ZM42.1728 16.4H43.1728V15.4H42.1728V16.4ZM42.1728 17.6H41.1728V18.6H42.1728V17.6ZM9 3H51V1H9V3ZM56 8V21H58V8H56ZM51 26H9V28H51V26ZM4 21V8H2V21H4ZM9 26C6.23858 26 4 23.7614 4 21H2C2 24.866 5.13401 28 9 28V26ZM56 21C56 23.7614 53.7614 26 51 26V28C54.866 28 58 24.866 58 21H56ZM51 3C53.7614 3 56 5.23858 56 8H58C58 4.13401 54.866 1 51 1V3ZM9 1C5.13401 1 2 4.13401 2 8H4C4 5.23858 6.23858 3 9 3V1ZM5.10108 3.33708H7.77524V1.33708H5.10108V3.33708ZM6.77524 2.33708V5.01124H8.77524V2.33708H6.77524ZM7.77524 4.01124H5.10108V6.01124H7.77524V4.01124ZM6.10108 5.01124V2.33708H4.10108V5.01124H6.10108ZM3.764 4.67416H5.10108V2.67416H3.764V4.67416ZM4.10108 3.67416V7.68539H6.10108V3.67416H4.10108ZM5.10108 6.68539H3.764V8.68539H5.10108V6.68539ZM4.764 7.68539V3.67416H2.764V7.68539H4.764ZM2.42692 6.01124H3.764V4.01124H2.42692V6.01124ZM2.764 5.01124V9.02247H4.764V5.01124H2.764ZM3.764 8.02247H2.42692V10.0225H3.764V8.02247ZM3.42692 9.02247V5.01124H1.42692V9.02247H3.42692ZM1.08984 8.68539L3.764 8.68539L3.764 6.68539L1.08984 6.68539L1.08984 8.68539ZM2.764 7.68539L2.764 9.02247L4.764 9.02247L4.764 7.68539L2.764 7.68539ZM2.08984 9.02247V7.68539H0.0898438V9.02247H2.08984ZM54.2584 1.33708H51.5843V3.33708H54.2584V1.33708ZM50.5843 2.33708V5.01124H52.5843V2.33708H50.5843ZM51.5843 6.01124H54.2584V4.01124H51.5843V6.01124ZM55.2584 5.01124V2.33708H53.2584V5.01124H55.2584ZM55.5955 2.67416H54.2584V4.67416H55.5955V2.67416ZM53.2584 3.67416V7.68539H55.2584V3.67416H53.2584ZM54.2584 8.68539H55.5955V6.68539H54.2584V8.68539ZM56.5955 7.68539V3.67416H54.5955V7.68539H56.5955ZM56.9326 4.01124H55.5955V6.01124H56.9326V4.01124ZM54.5955 5.01124V9.02247H56.5955V5.01124H54.5955ZM55.5955 10.0225H56.9326V8.02247H55.5955V10.0225ZM57.9326 9.02247V5.01124H55.9326V9.02247H57.9326ZM58.2696 6.68539L55.5955 6.68539L55.5955 8.68539L58.2696 8.68539L58.2696 6.68539ZM54.5955 7.68539V9.02247H56.5955V7.68539H54.5955ZM59.2696 9.02247V7.68539H57.2696V9.02247H59.2696ZM5.10108 25.0674H7.77524V23.0674H5.10108V25.0674ZM6.77524 24.0674V26.7416H8.77524V24.0674H6.77524ZM7.77524 25.7416H5.10108V27.7416H7.77524V25.7416ZM6.10108 26.7416V24.0674H4.10108V26.7416H6.10108ZM3.764 22.3933H5.10108V20.3933H3.764V22.3933ZM4.10108 21.3933V25.4045H6.10108V21.3933H4.10108ZM5.10108 24.4045H3.764V26.4045H5.10108V24.4045ZM4.764 25.4045V21.3933H2.764V25.4045H4.764ZM2.42692 25.0674H3.764V23.0674H2.42692V25.0674ZM4.764 24.0674V20.0562H2.764V24.0674H4.764ZM3.764 19.0562H2.42692V21.0562H3.764V19.0562ZM1.42692 20.0562V24.0674H3.42692V20.0562H1.42692ZM1.08984 22.3933H3.764V20.3933H1.08984V22.3933ZM4.764 21.3933L4.764 20.0562L2.764 20.0562L2.764 21.3933L4.764 21.3933ZM0.0898438 20.0562V21.3933H2.08984V20.0562H0.0898438ZM54.2584 23.0674H51.5843V25.0674H54.2584V23.0674ZM50.5843 24.0674V26.7416H52.5843V24.0674H50.5843ZM51.5843 27.7416H54.2584V25.7416H51.5843V27.7416ZM55.2584 26.7416V24.0674H53.2584V26.7416H55.2584ZM55.5955 20.3933H54.2584V22.3933H55.5955V20.3933ZM53.2584 21.3933V25.4045H55.2584V21.3933H53.2584ZM54.2584 26.4045H55.5955V24.4045H54.2584V26.4045ZM56.5955 25.4045V21.3933H54.5955V25.4045H56.5955ZM56.9326 23.0674H55.5955V25.0674H56.9326V23.0674ZM56.5955 24.0674V20.0562H54.5955V24.0674H56.5955ZM55.5955 21.0562H56.9326V19.0562H55.5955V21.0562ZM55.9326 20.0562V24.0674H57.9326V20.0562H55.9326ZM58.2696 20.3933H55.5955V22.3933H58.2696V20.3933ZM56.5955 21.3933V20.0562H54.5955V21.3933H56.5955ZM57.2696 20.0562V21.3933H59.2696V20.0562H57.2696ZM7.77527 2H51.5843V0H7.77527V2ZM50.5843 1V3.67416H52.5843V1H50.5843ZM51.5843 2.67416H7.77527V4.67416H51.5843V2.67416ZM8.77527 3.67416V1H6.77527V3.67416H8.77527ZM7.77527 26.4045H51.5843V24.4045H7.77527V26.4045ZM50.5843 25.4045V28.0786H52.5843V25.4045H50.5843ZM51.5843 27.0786H7.77527V29.0786H51.5843V27.0786ZM8.77527 28.0786V25.4045H6.77527V28.0786H8.77527ZM2.764 9.02247V20.0562H4.764V9.02247H2.764ZM2.08984 20.0562V9.02247H0.0898438V20.0562H2.08984ZM54.5955 9.02247V20.0562H56.5955V9.02247H54.5955ZM59.2696 20.0562V9.02247H57.2696V20.0562H59.2696ZM22.2578 11.6V20H24.2578V11.6H22.2578ZM23.2578 19H20.8578V21H23.2578V19ZM21.8578 20V16.4H19.8578V20H21.8578ZM20.8578 15.4H19.6578V17.4H20.8578V15.4ZM18.6578 16.4V17.6H20.6578V16.4H18.6578ZM19.6578 16.6H18.4578V18.6H19.6578V16.6ZM19.4578 17.6V16.4H17.4578V17.6H19.4578ZM18.4578 15.4H17.2578V17.4H18.4578V15.4ZM16.2578 16.4V20H18.2578V16.4H16.2578ZM17.2578 19H14.8578V21H17.2578V19ZM15.8578 20V11.6H13.8578V20H15.8578ZM14.8578 12.6H17.2578V10.6H14.8578V12.6ZM16.2578 11.6V12.8H18.2578V11.6H16.2578ZM17.2578 13.8H18.4578V11.8H17.2578V13.8ZM17.4578 12.8V14H19.4578V12.8H17.4578ZM18.4578 15H19.6578V13H18.4578V15ZM20.6578 14V12.8H18.6578V14H20.6578ZM19.6578 13.8H20.8578V11.8H19.6578V13.8ZM21.8578 12.8V11.6H19.8578V12.8H21.8578ZM20.8578 12.6H23.2578V10.6H20.8578V12.6ZM32.3153 14V20H34.3153V14H32.3153ZM33.3153 19H30.9153V21H33.3153V19ZM31.9153 20V17.6H29.9153V20H31.9153ZM30.9153 16.6H27.3153V18.6H30.9153V16.6ZM26.3153 17.6V20H28.3153V17.6H26.3153ZM27.3153 19H24.9153V21H27.3153V19ZM25.9153 20V14H23.9153V20H25.9153ZM24.9153 15H26.1153V13H24.9153V15ZM27.1153 14V12.8H25.1153V14H27.1153ZM26.1153 13.8H27.3153V11.8H26.1153V13.8ZM28.3153 12.8V11.6H26.3153V12.8H28.3153ZM27.3153 12.6H30.9153V10.6H27.3153V12.6ZM29.9153 11.6V12.8H31.9153V11.6H29.9153ZM30.9153 13.8H32.1153V11.8H30.9153V13.8ZM31.1153 12.8V14H33.1153V12.8H31.1153ZM32.1153 15H33.3153V13H32.1153V15ZM27.3153 17.4H30.9153V15.4H27.3153V17.4ZM31.9153 16.4V14H29.9153V16.4H31.9153ZM30.9153 13H29.7153V15H30.9153V13ZM30.7153 14V12.8H28.7153V14H30.7153ZM29.7153 11.8H28.5153V13.8H29.7153V11.8ZM27.5153 12.8V14H29.5153V12.8H27.5153ZM28.5153 13H27.3153V15H28.5153V13ZM26.3153 14V16.4H28.3153V14H26.3153ZM42.3728 17.6V20H44.3728V17.6H42.3728ZM43.3728 19H40.9728V21H43.3728V19ZM41.9728 20V18.8H39.9728V20H41.9728ZM40.9728 17.8H39.7728V19.8H40.9728V17.8ZM40.7728 18.8V17.6H38.7728V18.8H40.7728ZM39.7728 16.6H38.5728V18.6H39.7728V16.6ZM37.5728 17.6V18.8H39.5728V17.6H37.5728ZM38.5728 17.8H37.3728V19.8H38.5728V17.8ZM36.3728 18.8V20H38.3728V18.8H36.3728ZM37.3728 19H34.9728V21H37.3728V19ZM35.9728 20V17.6H33.9728V20H35.9728ZM34.9728 18.6H36.1728V16.6H34.9728V18.6ZM37.1728 17.6V16.4H35.1728V17.6H37.1728ZM36.1728 17.4H37.3728V15.4H36.1728V17.4ZM38.3728 16.4V15.2H36.3728V16.4H38.3728ZM37.3728 14.2H36.1728V16.2H37.3728V14.2ZM37.1728 15.2V14H35.1728V15.2H37.1728ZM36.1728 13H34.9728V15H36.1728V13ZM35.9728 14V11.6H33.9728V14H35.9728ZM34.9728 12.6H37.3728V10.6H34.9728V12.6ZM36.3728 11.6V12.8H38.3728V11.6H36.3728ZM37.3728 13.8H38.5728V11.8H37.3728V13.8ZM37.5728 12.8V14H39.5728V12.8H37.5728ZM38.5728 15H39.7728V13H38.5728V15ZM40.7728 14V12.8H38.7728V14H40.7728ZM39.7728 13.8H40.9728V11.8H39.7728V13.8ZM41.9728 12.8V11.6H39.9728V12.8H41.9728ZM40.9728 12.6H43.3728V10.6H40.9728V12.6ZM42.3728 11.6V14H44.3728V11.6H42.3728ZM43.3728 13H42.1728V15H43.3728V13ZM41.1728 14V15.2H43.1728V14H41.1728ZM42.1728 14.2H40.9728V16.2H42.1728V14.2ZM39.9728 15.2V16.4H41.9728V15.2H39.9728ZM40.9728 17.4H42.1728V15.4H40.9728V17.4ZM41.1728 16.4V17.6H43.1728V16.4H41.1728ZM42.1728 18.6H43.3728V16.6H42.1728V18.6Z"
                              fill="black"
                              mask="url(#path-1-outside-1_74_619)"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="flex justify-between items-start self-stretch  relative">
                        <p className=" text-lg text-left text-black" id="joy">
                          TOTAL :
                        </p>
                        <p className=" text-lg text-left">
                          <span
                            className=" text-lg text-left text-black"
                            id="joy"
                          >
                            {setTotal}{" "}
                          </span>
                          <span
                            className=" text-lg text-left text-[#c23542]"
                            id="joy"
                          >
                            BTC
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => openMintModal()}
                    className="cursor-pointer flex flex-col w-[444px] h-[51px] relative justify-center items-center   rounded-[13.37px] border-4 border-[#c23542] bg-[#f55322]/10"
                  >
                    {/* <svg
                    width={444}
                    height={51}
                    viewBox="0 0 444 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M4.42115 1.41573H7.09531V4.08988H4.42115V1.41573Z"
                      fill="#C23542"
                    />
                    <path
                      d="M3.08407 2.7528H4.42115V6.76404H3.08407V2.7528Z"
                      fill="#C23542"
                    />
                    <path
                      d="M1.74699 4.08988H3.08407V8.10112H1.74699V4.08988Z"
                      fill="#C23542"
                    />
                    <path
                      d="M0.409912 6.76404H3.08407V8.10112H0.409912V6.76404Z"
                      fill="#C23542"
                    />
                    <path
                      d="M439.579 1.41573H436.904V4.08988H439.579V1.41573Z"
                      fill="#C23542"
                    />
                    <path
                      d="M440.916 2.7528H439.579V6.76404H440.916V2.7528Z"
                      fill="#C23542"
                    />
                    <path
                      d="M442.253 4.08988H440.916V8.10112H442.253V4.08988Z"
                      fill="#C23542"
                    />
                    <path
                      d="M443.59 6.76404H440.916V8.10112H443.59V6.76404Z"
                      fill="#C23542"
                    />
                    <path
                      d="M4.42115 46.1461H7.09531V48.8202H4.42115V46.1461Z"
                      fill="#C23542"
                    />
                    <path
                      d="M3.08407 43.4719H4.42115V47.4831H3.08407V43.4719Z"
                      fill="#C23542"
                    />
                    <path
                      d="M1.74699 46.1461H3.08407V42.1348H1.74699V46.1461Z"
                      fill="#C23542"
                    />
                    <path
                      d="M0.409912 43.4719H3.08407V42.1348L0.409912 42.1348V43.4719Z"
                      fill="#C23542"
                    />
                    <path
                      d="M439.579 46.1461H436.904V48.8202H439.579V46.1461Z"
                      fill="#C23542"
                    />
                    <path
                      d="M440.916 43.4719H439.579V47.4831H440.916V43.4719Z"
                      fill="#C23542"
                    />
                    <path
                      d="M442.253 46.1461H440.916V42.1348H442.253V46.1461Z"
                      fill="#C23542"
                    />
                    <path
                      d="M443.59 43.4719H440.916V42.1348L443.59 42.1348V43.4719Z"
                      fill="#C23542"
                    />
                    <path
                      d="M7.09534 0.0786438H436.904V2.7528H7.09534V0.0786438Z"
                      fill="#C23542"
                    />
                    <path
                      d="M7.09534 47.4831H436.904V50.1573H7.09534V47.4831Z"
                      fill="#C23542"
                    />
                    <path
                      d="M0.409912 8.10112H3.08407V42.1348L0.409912 42.1348V8.10112Z"
                      fill="#C23542"
                    />
                    <path
                      d="M443.59 8.10112H440.916V42.1348L443.59 42.1348V8.10112Z"
                      fill="#C23542"
                    />
                  </svg> */}
                    <span
                      className=" text-base text-left text-[#c23542]"
                      id="joy"
                    >
                      MINT
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center self-stretch ">
            <div className="flex justify-start items-center  relative gap-[60px]">
              <p className=" text-[34px] text-left text-[#c23542]" id="joy">
                OUR TOP ARTS
              </p>
              <svg
                width={1308}
                height={4}
                viewBox="0 0 1308 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=""
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M2 -6.10352e-05C0.895431 -6.11317e-05 9.65645e-08 0.895369 0 1.99994C-9.65645e-08 3.10451 0.89543 3.99994 2 3.99994L2 -6.10352e-05ZM2 3.99994L1308 4.00005L1308 5.3139e-05L2 -6.10352e-05L2 3.99994Z"
                  fill="#C8575F"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start  gap-[35px]">
          <div className="flex justify-start items-start  gap-[74px]">
            <div className="flex flex-col justify-start items-center  h-[314px] w-[250px] relative gap-[19px] rounded bg-white">
              <img
                src={AzukiOne}
                className=" w-[250px] h-[250px] object-cover border-[5px] border-white"
              />
              <p className=" text-xs text-left text-[#c23542]" id="joy">
                BITCOIN AZUKI #001
              </p>
            </div>
            <div className="flex flex-col justify-start items-center  h-[314px] w-[250px] relative gap-[19px] bg-white">
              <img
                src={azukitwo}
                className=" w-[250px] h-[250px] object-cover border-[5px] border-white"
              />
              <p className=" text-xs text-left text-[#c23542]" id="joy">
                BITCOIN AZUKI #002
              </p>
            </div>
            <div className="flex flex-col justify-start items-center  h-[314px] w-[250px] relative gap-[19px] bg-white">
              <img
                src={azukithree}
                className=" w-[250px] h-[250px] object-cover border-[5px] border-white"
              />
              <p className=" text-xs text-left text-[#c23542]" id="joy">
                BITCOIN AZUKI #003
              </p>
            </div>
            <div className="flex flex-col justify-start items-center  h-[314px] w-[250px] relative gap-[19px] bg-white">
              <img
                src={azukifour}
                className=" w-[250px] h-[250px] object-cover border-[5px] border-white"
              />
              <p className=" text-xs text-left text-[#c23542]" id="joy">
                BITCOIN AZUKI #004
              </p>
            </div>
            <div className="flex flex-col justify-start items-center  h-[314px] w-[250px] relative gap-[19px] bg-white">
              <img
                src={azukifive}
                className=" w-[250px] h-[250px] object-cover border-[5px] border-white"
              />
              <p className=" text-xs text-left text-[#c23542]" id="joy">
                BITCOIN AZUKI #005
              </p>
            </div>
          </div>
          <div className="flex justify-center items-start  gap-[73px]">
            <div className="flex flex-col justify-start items-center  h-[314px] w-[250px] relative gap-[19px] bg-white">
              <img
                src={azukisix}
                className=" w-[250px] h-[250px] object-cover border-[5px] border-white"
              />
              <p className=" text-xs text-left text-[#c23542]" id="joy">
                BITCOIN AZUKI #006
              </p>
            </div>
            <div className="flex flex-col justify-start items-center  h-[314px] w-[250px] relative gap-[19px] bg-white">
              <img
                src={azukiseven}
                className=" w-[250px] h-[250px] object-cover border-[5px] border-white"
              />
              <p className=" text-xs text-left text-[#c23542]" id="joy">
                BITCOIN AZUKI #007
              </p>
            </div>
            <div className="flex flex-col justify-start items-center  h-[314px] w-[250px] relative gap-[19px] bg-white">
              <img
                src={azukieight}
                className=" w-[250px] h-[250px] object-cover border-[5px] border-white"
              />
              <p className=" text-xs text-left text-[#c23542]" id="joy">
                BITCOIN AZUKI #008
              </p>
            </div>
            <div className="flex flex-col justify-start items-center  h-[314px] w-[250px] relative gap-[19px] bg-white">
              <img
                src={azukinine}
                className=" w-[250px] h-[250px] object-cover border-[5px] border-white"
              />
              <p className=" text-xs text-left text-[#c23542]" id="joy">
                BITCOIN AZUKI #009
              </p>
            </div>
            <div className="flex flex-col justify-start items-center  h-[314px] w-[250px] relative gap-[19px] bg-white">
              <img
                src={azukiten}
                className=" w-[250px] h-[250px] object-cover border-[5px] border-white"
              />
              <p className=" text-xs text-left text-[#c23542]" id="joy">
                BITCOIN AZUKI #010
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
