'use client';
import Image from "next/image";
import React from "react";
function handleClick() {
    console.log("increment like count");
  }
export default function Home() {
  return (
    <div>git 
       <p className="text-white">TestPage title</p>
       <div className="button_click">
       <button onClick={handleClick}>Test here</button>
       </div>
    </div>
  );
}
