import { Meta, StoryObj } from "@storybook/react";
import ScrollButton from "./ScrollButton";

const meta: Meta<typeof ScrollButton> = {
  title: "scrollButton",
  component: ScrollButton,
};

export default meta;

type Story = StoryObj<typeof ScrollButton>;

export const About: Story = {
  args: {
    buttonText: "about",
  },
};
