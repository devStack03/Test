'use client';
import clsx from "clsx";
export type BaseButtonPropsType = {
  text: string;
  color: string;
  bgColor: string;
  border?: string;
  clickAction?: () => void;
};

const BaseButton = ({ text, color, bgColor, border }: BaseButtonPropsType) => {
  const handleCickButton = () => {
    alert('button click')
  }
  return (
    <div
      className={clsx(
        "w-[200px] h-[60px] rounded-[30px] font-drukWideBold font-bold text-base flex justify-center items-center cursor-pointer",
        color,
        bgColor,
        border ? `${border} border` : ""
      )}
      onClick={handleCickButton}
    >
      {text}
    </div>
  );
};

export default BaseButton;
