"use client";

import { useState } from "react";

export default function MyButton({ count, onCLick }: any) {
  return (
    <button className="button" onClick={onCLick}>
      {count}
    </button>
  );
}
