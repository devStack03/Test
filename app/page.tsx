import Image from "next/image";
import BaseButton from "./components/BaseButton";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-background relative overflow-hidden">
      <div className="absolute w-[720px] h-[720px] top-[-458px] left-[190px] rounded-full bg-brandBlue blur-[350px]">
        <div className="w-[500px] h-[500px] m-auto opacity-50 bg-brandBlue">

        </div>
      </div>
      <div className="container mt-36 max-w-[1200px]">
        <div className="mx-auto mt-16 flex relative justify-between lg:gap-[160px] flex-col lg:flex-row">
          {/* <div className="w-full h-full"> */}
            <img
              className="relative object-cover m-auto"
              src="/assets/image.png"
              alt="logo"
              width={420}
              height={618}
            />
          {/* </div> */}
          <div className="relative mt-12 p-10 lg:p-0">
            <h1
              className="
                text-white
                text-[50px]
                lg:text-[68px]
                font-druk
                font-bold
                leading-[94px]
                z-10
                lg:ml-[-360px]
              "
            >
              Turn Your Website Into Your Best Sales Person
            </h1>
            <div className="flex flex-col items-start">
              <p className="max-w-[582px] my-8 font-rubik">
                Triple your sales with a pixel-perfect website. At SmartSite
                Studio, we don’t just design and write code, we build a
                revenue-driving machine for your business.
              </p>
              <div className="flex justify-start items-center gap-5">
                <BaseButton
                  text="Talk to Us"
                  color="text-white"
                  bgColor="bg-brandOrange"
                />
                <BaseButton
                  text="See Portfolio"
                  color="text-white"
                  bgColor="bg-none"
                  border="border-brandBlue"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
