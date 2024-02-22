import Image from "next/image";
import React from "react";

type Props = {
  title: string;
};

export default function HeaderTitle({ title }: Props) {
  return (
    <div className="font-satoshi shadow-deeppurple shadow-inner  border border-lightergray p-2 px-3 rounded-3xl w-fit flex gap-2 text-sm md:text-md mb-10">
      <Image src={"/espai-star.svg"} width={20} height={20} alt="" />
      <span>{title}</span>
    </div>
  );
}
