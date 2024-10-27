import React from "react";

const SkeletonLoader = () => {
  return (
    <tr className="animate-pulse  grid grid-cols-12 p-5 w-full bg-yellow-100 h-8">
      <td className="col-span-1  p-2  text-center w-[50px]   rounded bg-yellow-200 "></td>
      <td className="col-span-3  p-2 text-center w-[200px]  rounded bg-yellow-200  "></td>
      <td className="col-span-3  p-2 text-center w-[200px]  rounded bg-yellow-200  "></td>
      <td className="col-span-3  p-2 text-center w-[200px]  rounded bg-yellow-200  "></td>
      <td className="col-span-2  p-2 text-center w-[60px] mx-auto rounded bg-yellow-200 "></td>
    </tr>
  );
};

export default SkeletonLoader;
