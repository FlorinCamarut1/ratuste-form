import React from "react";
import Image from "next/legacy/image";
function Overview() {
  return (
    <div className="bg-white py-10">
      <h2 className="text-center font-bold text-xl">How it works</h2>
      <section id="overview" className="h-screen">
        {/* stanga cele 2 */}
        <div>
          <h1>Download Roomly</h1>
          <p>
            Use any tablet or mobile phone and download the application from
            Google or Apple store. Place your device near meeting room idealy,
            so everyone knows its schedule.
          </p>
          <Image />
          <h1>Book meeting</h1>
          <p>
            Simply create an event using the app on the smart device, or invite
            the meeting room using Outlook and thats it.
          </p>
        </div>
        {/* dreapta cele 2 */}
        <div>
          <Image />
          <h1>Create room</h1>
          <p>
            Create Microsoft account with desired name of your meeting room and
            log in to Roomly.
          </p>
          <Image></Image>
        </div>
      </section>
    </div>
  );
}

export default Overview;
