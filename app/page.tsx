"use client";

import Image from "next/image";
import MyButton from "./components/Mybuttton";
import MyA from "./components/MyA";
import MyProduct from "./components/MyProduct";
import { useState } from "react";

const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

const isLoggedIn = false;

export default function Home() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          {isLoggedIn ? (
            <>
              <h1>{user.name}</h1>
            </>
          ) : null}
          <MyA />
          <MyButton count={count} onCLick={handleClick} />
          <MyButton count={count} onCLick={handleClick} />
          <MyButton count={count} onCLick={handleClick} />
          <MyProduct />
        </div>
      </main>
    </>
  );
}
