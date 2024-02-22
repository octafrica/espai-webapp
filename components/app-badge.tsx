import Image from "next/image";
import React from "react";

export default function AppBadge() {
  return (
    <div className="grid grid-cols-2 mx-auto  w-fit">
      <Image
        alt="Get it On Play Store"
        src={"/google-play.svg"}
        width={180}
        // className="w-[180px] h-[40px] md:w-[180px] md:h-[55px] object-fill"
        className="p-4"
        height={55}
      />
      <Image
        alt="Get it On Play Store"
        src={"/app-store.svg"}
        width={180}
        // className="w-[180px] h-[40px] md:w-[180px] md:h-[55px] object-fill"
        height={55}
        className="p-4"
      />
    </div>
  );
}
