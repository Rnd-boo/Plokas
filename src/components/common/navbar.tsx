"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useState } from "react";

const NAVBAR_CONSTANT = [
  { title: "Reserve Table", value: "tables" },
  { title: "Find Place", value: "places" },
  { title: "Products", value: "products" },
  { title: "Docs", value: "docs" },
];

export default function Navbar() {
  const [dotLottie, setDotLottie] = useState<{
    play: () => void;
    stop: () => void;
  } | null>(null);

  const handleMouseEnter = () => {
    dotLottie?.play();
  };

  const handleMouseLeave = () => {
    dotLottie?.stop();
  };

  return (
    <div className="flex justify-between mt-4">
      <div className="flex gap-8">
        <div>Logo</div>
        <div className="flex gap-4">
          {NAVBAR_CONSTANT.map((nav) => {
            return (
              <Link href={nav.value} key={nav.value}>
                {nav.title}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost">Log in</Button>
        <Button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          Sign Up
          <DotLottieReact
            src="/rightChevron.lottie"
            dotLottieRefCallback={(instance) => {
              setDotLottie(instance);
            }}
            themeData="#6366F1"
            color="#6366F1"
            className="size-6"
          />
        </Button>
      </div>
    </div>
  );
}
