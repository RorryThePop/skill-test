import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

export default {
  title: "shared/Text",
  component: Text,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Title lorem",
  text: "Description",
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
  title: "only title",
};

export const onlyText = Template.bind({});
onlyText.args = {
  text: "only text",
};

export const darkPrimary = Template.bind({});
darkPrimary.args = {
  title: "Title lorem",
  text: "Description",
};
darkPrimary.decorators = [ThemeDecorator(Theme.DARK)];

export const darkOnlyTitle = Template.bind({});
darkOnlyTitle.args = {
  title: "only title",
};
darkOnlyTitle.decorators = [ThemeDecorator(Theme.DARK)];

export const darkOnlyText = Template.bind({});
darkOnlyText.args = {
  text: "only text",
};
darkOnlyText.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
  title: "only title",
  text: "Description",
  theme: TextTheme.ERROR,
};
