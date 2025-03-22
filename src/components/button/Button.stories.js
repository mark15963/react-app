import { Button } from "./button";
import { fn } from "@storybook/test";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["primary", "secondary", "tertiary"],
      control: { type: "radio" },
    },
    disabled: { control: "boolean" },
  },
  args: { onClick: fn() },
};

export const Button1 = {
  args: {
    label: "вариант 1",
    variant: "primary",
  },
};

export const Button2 = {
  args: {
    label: "вариант 2",
    variant: "secondary",
  },
};

export const Button3 = {
  args: {
    label: "вариант 3",
    variant: "tertiary",
  },
};

export const Button4 = {
  args: {
    label: "вариант 4",
    variant: "primary",
    disabled: true,
  },
};
