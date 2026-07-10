"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "../ui/drawer";
import { Separator } from "../ui/separator";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex justify-between mt-4">
      <div className="flex gap-8 my-auto">
        <h1 className="text-2xl">Plokas.</h1>
        <div className="hidden md:flex gap-6 my-auto">
          {NAVBAR_CONSTANT.map((nav) => {
            return (
              <Link href={nav.value} key={nav.value}>
                {nav.title}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="hidden md:flex items-center gap-2">
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
        <Button variant="link">EN</Button>
      </div>
      <div className="md:hidden">
        <Button size="icon" onClick={() => setIsMenuOpen((prev) => !prev)}>
          {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
        <Drawer
          swipeDirection="right"
          open={isMenuOpen}
          onOpenChange={setIsMenuOpen}
        >
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle className="flex justify-between text-2xl">
                Plokas.
                <Button
                  size="icon"
                  onClick={() => setIsMenuOpen(false)}
                  className="-mt-1"
                >
                  <X className="size-5 " />
                </Button>
              </DrawerTitle>
            </DrawerHeader>
            <div className="flex flex-col gap-4 mt-4 p-4 pb-0">
              {NAVBAR_CONSTANT.map((nav) => {
                return (
                  <Link href={nav.value} key={nav.value}>
                    {nav.title}
                  </Link>
                );
              })}
              <Separator />
              <Button variant="outline">Log in</Button>
              <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/70">
                Sign Up
              </Button>
            </div>
            <DrawerFooter>
              <Button variant="link">EN</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
