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
    <div className="mx-8">
      <Navbar />
      <main className="grid grid-cols-2 ">
        <div className="">
          <h1 className="text-6xl mb-4 pt-24">
            Lorem ipsum dolor, sit amet adipisicing.
          </h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sint
            assumenda eos officia consequuntur, natus possimus laudantium
            delectus cum ratione magnam odio explicabo architecto nesciunt unde
            et accusamus in tempore.
          </p>
        </div>
        <div className="h-fit mt-12 ">
          <DotLottieReact
            src="/POS.lottie"
            loop
            autoplay
            layout={{ fit: "none" }}
          />
        </div>
        <div className="col-span-2 mt-20 ">
          <div className="mx-auto flex h-fit rounded-full px-4 py-2 gap-2">
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
              <Search />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
