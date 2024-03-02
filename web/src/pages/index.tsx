import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { pb } from "@/features/pocketbase";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>hello world</div>

      {/* navigate to /matchroom */}
      <button
        onClick={() => {
          window.location.href = "/matchroom";
        }}
      >
        matchroom
      </button>
    </>
  );
}
