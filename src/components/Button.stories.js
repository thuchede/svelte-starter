import Button from "../components/Button.svelte";

export default { title: "Button" };

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
});
