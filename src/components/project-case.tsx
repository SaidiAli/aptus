"use client";

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import mrembo from "../../public/images/mrembo-home.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProjectCace() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative isolate max-w-[45rem]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image src={mrembo} alt={"mrembo mart"} className="rounded-md w-auto" />
      <Link
        href={"https://mrembomart.com"}
        className={`absolute w-full inset-0 ${
          isHovered ? "block" : "md:hidden"
        }`}
        target="black"
      >
        <div className="flex justify-center bg-[#00000080] items-center w-full h-full">
          <p>Visit</p>
          <ArrowTopRightOnSquareIcon className="w-auto h-4" />
        </div>
      </Link>
    </div>
  );
}
