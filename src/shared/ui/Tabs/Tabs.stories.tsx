import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Tabs } from "./Tabs";

export default {
  title: "shared/Tabs",
  component: Tabs,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: "Text",
};
