"use client";
import React from "react";

import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Stack,
  Input,
  Button,
  ChakraProvider,
  Select,
} from "@chakra-ui/react";

const Chakra = () => {
  const array = [...Array(20).keys()];
  return (
    <ChakraProvider>
      <Input />
      <Select variant="outline" placeholder="Themed outline select">
        {array.map((item) => (
          <option value="option1" key={item}>
            Option {item}
          </option>
        ))}
      </Select>
      <Slider aria-label="slider-ex-1" defaultValue={30}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Button>button</Button>
    </ChakraProvider>
  );
};

export default Chakra;
