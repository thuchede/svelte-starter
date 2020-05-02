import Button from "../components/Button.svelte";
import markdown from "./Button.stories.md";
import { action } from "@storybook/addon-actions";

export default {
  title: "Button",
  parameters: {
    notes: { markdown },
  },
};

export const withText = () => ({
  Component: Button,
  props: {
    text: "some text",
  },
});

export const withEmoji = () => ({
  Component: Button,
  props: {
    text: "😀 😎 👍 💯",
  },
  on: {
    click: action("I am logging in the actions tab too"),
  },
});

export const withTailwindClass = () => ({
  Component: Button,
  props: {
    text: "tailwindcss",
    className: "p-2 bg-blue-400 text-white",
  },
});
