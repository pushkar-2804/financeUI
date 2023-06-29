import Image from "next/image";
import img from "./assets/phone.svg";
import icon from "./assets/iconImg.svg";
export default function Home() {
  return (
    <section className="h-screen bg-bgImg w-full relative">
      <main className="flex flex-col items-center justify-between pt-24">
        {/* Header */}
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-7xl text-white font-semibold ">
            Check your financial health
          </h3>
          <p className="leading-tight text-slate-300 text-3xl w-subText text-center pt-6">
            Use WeathoMeter to get a free report card for your finances- within
            minutes!
          </p>
          <button className="btn bg-accent mt-4 px-6 py-2 rounded-3xl">
            Get Started
          </button>
        </div>
        <div className="flex justify-between">
          <ul className="text-3xl list-inside mt-28 ">
            <li className="mb-10">
              Expected Retirement Age <br />
              <hr
                width={"95%"}
                className="mt-4 relative left-12 h-0.5 bg-white"
              />
            </li>
            <li>
              Identify Mistakes
              <br />
              <hr
                width={"95%"}
                className="mt-4 relative left-12 h-0.5 bg-white"
              />
            </li>
          </ul>
          <Image
            src={img}
            alt="My Image"
            width={525}
            height={790}
            className="relative left-16 ml-2"
          />
          <ul className="text-3xl list-inside mt-28 ">
            <li className="mb-10">
              Personalised Road Map <br />
              <hr
                width={"95%"}
                className="mt-4 relative left-12 h-0.5 bg-white"
              />
            </li>
            <li className="mb-10">
              Tips To Improve <br />
              <hr
                width={"95%"}
                className="mt-4 relative left-12 h-0.5 bg-white"
              />
            </li>
          </ul>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex flex-col items-center bg-bgBottom z-100 w-full h-bottomImg absolute top-[705]">
        <h3 className="text-6xl text-white font-semibold">How it works?</h3>
        <Image
          src={icon}
          alt="My Image"
          width={884}
          height={497}
          className="border absolute top-10"
        />
        <button className="btn bg-accent mt-4 px-6 py-2 rounded-3xl">
          Get Started
        </button>
      </footer>
    </section>
  );
}
