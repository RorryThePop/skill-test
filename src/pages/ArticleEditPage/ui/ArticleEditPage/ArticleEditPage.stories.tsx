import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ArticleEditPage from "../../ui/ArticleEditPage/ArticleEditPage";

export default {
  title: "shared/ArticleEditPage",
  component: ArticleEditPage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ArticleEditPage>;

const Template: ComponentStory<typeof ArticleEditPage> = (args) => (
  <ArticleEditPage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  // children: "Text",
};
