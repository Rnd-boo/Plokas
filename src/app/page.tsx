import Navbar from "@/components/common/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { MapPin, Search, Store } from "lucide-react";

export default function Home() {
  return (
    <div className="mx-4 md:mx-8 h-2000">
      <Navbar />
      <main>
        <div className="flex flex-col md:flex-row md:items-center gap-8 w-full mt-12 xl:my-20 2xl:my-36">
          <div className="w-full md:max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-4">
              Lorem ipsum dolor, sit amet adipisicing.
            </h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              sint assumenda eos officia consequuntur, natus possimus laudantium
              delectus cum ratione magnam odio explicabo architecto nesciunt
              unde et accusamus in tempore.
            </p>
          </div>
          <DotLottieReact
            src="/pos1.lottie"
            loop
            autoplay
            layout={{ fit: "contain" }}
            className="hidden md:block w-full"
          />
        </div>
        <div>
          <div className="mx-auto flex h-fit bg-primary-foreground rounded-full px-4 py-2 gap-2">
            <InputGroup className="w-1/2">
              <InputGroupAddon>
                <MapPin className="size-5" />
              </InputGroupAddon>
              <InputGroupInput placeholder="Location" />
            </InputGroup>
            <InputGroup className="w-1/2">
              <InputGroupAddon>
                <Store className="size-5" />
              </InputGroupAddon>
              <InputGroupInput placeholder="Restaurant?" />
            </InputGroup>
            <Input className="my-auto" placeholder="Places name" />
            <Button>
              Find
              <Search />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
