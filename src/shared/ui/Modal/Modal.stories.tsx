import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Modal } from "shared/ui/Modal/Modal";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

export default {
  title: "shared/Modal",
  component: Modal,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad assumenda culpa esse, facere fuga illum impedit modi porro, quia quis rerum sapiente veniam. Deleniti facere mollitia nulla soluta veniam? Adipisci eaque laudantium necessitatibus repellat voluptatum. Animi dolor eveniet impedit laudantium, magni maxime, minus nemo quod ratione sequi, totam voluptate.",
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad assumenda culpa esse, facere fuga illum impedit modi porro, quia quis rerum sapiente veniam. Deleniti facere mollitia nulla soluta veniam? Adipisci eaque laudantium necessitatibus repellat voluptatum. Animi dolor eveniet impedit laudantium, magni maxime, minus nemo quod ratione sequi, totam voluptate.",
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
