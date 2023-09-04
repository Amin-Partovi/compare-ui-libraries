"use client";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

import { Select, TextField, Slider, Button } from "@radix-ui/themes";

const Radix = () => {
  const array = [...Array(20).keys()];
  return (
    <Theme>
      <TextField.Input size="3" />
      <Select.Root>
        <Select.Trigger placeholder="select" />
        <Select.Content>
          <Select.Group>
            {array.map((item) => (
              <Select.Item key={item} value={item}>
                {" "}
                Option {item}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>

      <Slider size="1" defaultValue={[25]} />
      <Button>Button</Button>
    </Theme>
  );
};

export default Radix;
