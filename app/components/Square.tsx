"use client";
import { useState } from "react";

export default function Square({ value, onSquareClick }: any) {
  //   const [value, setValue] = useState(null as any);
  //   function handleClick() {
  //     setValue("X");
  //   }
  return (
    <button
      className="w-10 h-10 border border-black grow-1"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
