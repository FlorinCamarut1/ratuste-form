import React from "react";
import Image from "next/legacy/image";
function Features() {
  return (
    <div className=" py-10 px-5 md:px-20 ">
      <section id="features" className="h-auto md:grid md:grid-cols-2">
        {/* stanga cele 2 */}
        <div className="md:pr-5  md:border-r-2">
          <div className="relative py-10">
            <h1 className="relative text-xl font-bold text-white ">
              Download Roomly
            </h1>
          </div>
          <p className="text-white tracking-wider">
            Use any tablet or mobile phone and download the application from
            Google or Apple store. Place your device near meeting room idealy,
            so everyone knows its schedule.
          </p>
          <div className="relative h-20 mt-20 mb-20 ">
            <Image src="/next.svg" layout="fill" objectFit="contain" />
          </div>
          <div className="relative py-10">
            <h1 className="relative text-xl font-bold text-white">
              Book meeting
            </h1>
          </div>
          <p className="text-white tracking-wider">
            Simply create an event using the app on the smart device, or invite
            the meeting room using Outlook and thats it.
          </p>
        </div>
        {/* dreapta cele 2 */}
        <div className="md:pl-5">
          <div className="relative h-20 mt-20 mb-20">
            <Image src="/next.svg" layout="fill" objectFit="contain" />
          </div>
          <div className="relative py-10">
            <h1 className="relative text-xl font-bold text-white">
              Create room
            </h1>
          </div>
          <p className="text-white tracking-wider">
            Create Microsoft account with desired name of your meeting room and
            log in to Roomly.
          </p>
          <div className="relative h-20 mt-20 mb-20 ">
            <Image src="/next.svg" layout="fill" objectFit="contain" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;
