import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { ProfileCard } from "./ProfileCard";

export default {
  title: "entities/ProfileCard",
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  profile: {
    form: {
      username: "admin",
      age: 22,
      country: Country.Armenia,
      lastname: "arakelove",
      first: "Yury",
      city: "moscow",
      currency: Currency.RUB,
    },
  },
};

export const withError = Template.bind({});
Primary.args = {
  error: "true",
};

export const Loading = Template.bind({});
Primary.args = {
  isLoading: true,
};
