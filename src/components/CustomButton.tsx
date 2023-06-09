"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  containerStyles?: string;
  title: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

const CustomButton = ({ containerStyles, title, handleClick }: CustomButtonProps) => (
  <button
    disabled={false}
    type="button"
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
  >
    <span className="flex-1">
      {title}
    </span>
  </button>
);

export default CustomButton;