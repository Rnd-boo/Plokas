"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useState } from "react";

const NAVBAR_CONSTANT = [
  { title: "Reserve Table", value: "tables" },
  { title: "Products", value: "products" },
  { title: "Partner With Us", value: "join-us" },
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
      <div className="flex gap-8 my-auto">
        <h1 className="text-2xl">Plokas.</h1>
        <div className="flex gap-6 my-auto">
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
        <Button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="bg-primary-foreground text-primary hover:bg-primary-foreground/70"
        >
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
        <Button variant="link">EN</Button>
      </div>
    </div>
  );
}
