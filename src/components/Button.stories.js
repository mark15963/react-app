import { background } from "storybook/internal/theming";
import Button from "./button";
import { fn } from "@storybook/test";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    background: { control: "color" },
    color: { control: "color" },
    padding: { constrol: "text" },
    variant: {
      options: ["primary", "secondary"],
    },
  },
  args: { onClick: fn() },
};

export const Button1 = {
  args: {
    lable: "вариант 1",
    variant: "primary",
  },
};

export const Button2 = {
  args: {
    lable: "вариант 2",
    variant: "secondary",
  },
};

export const Button3 = {
  args: {
    lable: "вариант 3",
    variant: "thirtiary",
  },
};
