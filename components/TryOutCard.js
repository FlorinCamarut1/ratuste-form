import React from "react";
import Image from "next/legacy/image";
function TryOutCard() {
  return (
    <div className="h-[500px] bg-rata-bg px-5 md:px4 py-2">
      <div>
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

      <div className="relative h-[100px]">
        <Image src="/pictest1.jpg" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}

export default TryOutCard;
