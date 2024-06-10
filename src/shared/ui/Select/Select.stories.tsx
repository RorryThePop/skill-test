import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Select } from "shared/ui/Select/Select";

export default {
  title: "shared/Select",
  component: Select,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "random text",
  options: [
    { value: "123", content: "hehehehehe" },
    { value: "123", content: "hehehehehe" },
    { value: "123", content: "hehehehehe" },
    { value: "123", content: "hehehehehe" },
  ],
};
