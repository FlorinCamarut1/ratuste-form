import React from "react";
import Image from "next/legacy/image";
function Features() {
  return (
    <section id="features" className="h-auto py-10">
      <div className="px-5 md:px-20 md:grid grid-cols-2 py-10 items-center justify-center">
        <div className="relative h-20 mt-20 mb-20">
          <Image src="/next.svg" layout="fill" objectFit="contain" />
        </div>
        <div>
          <h2 className="text-2xl">Book a room from anywhere, anytime</h2>
          <p>
            Does it happen to you that you need space for your meetings and when
            the time comes, someone is already in the room? Or will someone
            interrupt you during the meeting because they do not know that the
            room is occupied? Use roomly to book a room and you will never have
            to interrupt your flow of thoughts again. Simply book a room from
            anywhere and make the most of the meeting room's capacity.
          </p>
        </div>
      </div>
      <div className="px-5 md:px-20 md:grid grid-cols-2 py-10 items-center justify-center">
        <div>
          <h2 className="text-2xl">Watch meeting progress</h2>
          <p>
            Roomly shows if a meeting is in progress, so anyone who would like
            to disturb you will know that they should not dare to take the door
            handle and disturb you.
          </p>
        </div>
        <div className="relative h-20 mt-20 mb-20">
          <Image src="/next.svg" layout="fill" objectFit="contain" />
        </div>
      </div>
      <div className="px-5 md:px-20 md:grid grid-cols-2 py-10 items-center justify-center">
        <div className="relative h-20 mt-20 mb-20">
          <Image src="/next.svg" layout="fill" objectFit="contain" />
        </div>
        <div>
          <h2 className="text-2xl">Check room availability</h2>
          <p>
            If you are planning any event for which you need a meeting room, all
            you have to do is look at the room calendar, where you will
            immediately find whether it is available to use. Then all you have
            to do is create an event and wait for the meeting room to confirm
            the invitation.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
