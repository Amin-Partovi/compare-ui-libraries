"use client";

import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {Input} from "@/components/ui/input"

const Shadcn = () => {
  const array = [...Array(20).keys()];
  return (
    <>
      <Input type="email" placeholder="Email" />
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            {array.map((item) => (
              <SelectItem value="option1">Option {item}</SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        className={cn("w-[60%]")}

      />
      <Button>Button</Button>
    </>
  );
};

export default Shadcn;
