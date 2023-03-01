import React from "react";
import Image from "next/legacy/image";

function TryOutCard() {
  return (
    <div className="h-[500px] bg-rata-bg px-5 md:px-20 py-2 md:grid grid-cols-2 items-center justify-center">
      <div className="md:py-20 pr-20 items-center ">
        <h2 className="text-3xl font-bold text-white tracking-wide">
          The smartest way to manage your meetings
        </h2>
        <p className="py-4 text-white text-xl">
          Don't have a place to hold meetings and video calls? Are they
          disturbing you in the middle of a meeting? Try Roomly
        </p>
        <button className="py-2 px-4 bg-white text-rata-bg rounded-md mt-2 active:scale-90">
          Try out Now
        </button>
      </div>

      <div className="relative h-[100px] md:h-[200px] mt-10 md:mt-0 ">
        <Image src="/next.svg" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
}

export default TryOutCard;
