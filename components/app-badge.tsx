import Image from "next/image";
import React, {PropsWithChildren} from "react";
import Link from "next/link";

export default function AppBadge(props: PropsWithChildren<{ appleStoreUrl: string, googlePlayUrl: string }>) {
  return (
    <div className="mx-auto  w-fit flex">
        <Link href={props.googlePlayUrl == '' ? '/' : props.googlePlayUrl}>
          <Image
            alt="Google Play Store"
            src={"/google-play.svg"}
            width={180}
            // className="w-[180px] h-[40px] md:w-[180px] md:h-[55px] object-fill"
            className="p-4"
            height={55}
          />
        </Link>

        {props.appleStoreUrl !== '' &&
        <Link href={props.appleStoreUrl == '' ? '/':props.appleStoreUrl}>
          <Image
            alt="Google Play Store"
            src={"/app-store.svg"}
            width={180}
            // className="w-[180px] h-[40px] md:w-[180px] md:h-[55px] object-fill"
            height={55}
            className="p-4"
          />
        </Link>
        }
    </div>
  );
}
