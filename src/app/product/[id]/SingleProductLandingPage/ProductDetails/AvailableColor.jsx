import { inter, manrope } from "@/utils/font";
import React, { useEffect, useState } from "react";

export default function AvailableColor() {
  const colors = [
    {
      code: "#F1F0F5",
      name: "Off White",
    },
    {
      code: "#1D1D1D",
      name: "Black",
    },
  ];
  const [selectedName, setSelectedName] = useState();
  useEffect(() => setSelectedName(colors[0]), []);

  return (
    <div className="hidden lg:block">
      <p className={`${manrope.className} text-[19px] font-semibold`}>
        Available Color
      </p>
      <div className="flex items-center mt-5">
        {colors?.map((color) => (
          <div
            key={color.code}
            className="hover:cursor-pointer flex gap-2 items-center"
            onClick={() => setSelectedName(color)}
          >
            <div
              className={`flex justify-center items-center ${
                selectedName?.code === color.code &&
                "w-[24px] h-[24px] border-[#7E53D4] border-[1px] rounded-full"
              }`}
            >
              <div
                style={{ backgroundColor: color?.code }}
                className={`w-[16px] h-[16px] rounded-full `}
              ></div>
            </div>
            {
              <p className={`mr-5 ${inter.className} text-[12px]`}>
                {selectedName?.name === color?.name && color?.name}
              </p>
            }
          </div>
        ))}
      </div>
    </div>
  );
}
