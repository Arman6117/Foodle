import Link from "next/link";
import React from "react";

const HeaderLinks = ({ path, link }) => {
  return (
    <div className="flex group   ">
      <span className="h-[3px] rounded w-0 bg-redPrimary group-hover:w-5 transition-all ease-in-out hidden sm:inline mt-[21px] absolute " />
      <Link
        className="text-black/60 z-10 font-semibold group-hover:text-black hidden sm:inline"
        href={path}
      >
        {link}
      </Link>
    </div>
  );
};

export default HeaderLinks;
