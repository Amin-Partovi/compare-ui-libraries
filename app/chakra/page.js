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
  return (
    <ChakraProvider>
      <Input />
      <Stack spacing={3}>
        <Select variant="outline" placeholder="Outline" />
        <Select variant="filled" placeholder="Filled" />
        <Select variant="flushed" placeholder="Flushed" />
        <Select variant="unstyled" placeholder="Unstyled" />
      </Stack>
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
