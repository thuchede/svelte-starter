import { addDecorator } from "@storybook/svelte";
import PaddingWrapper from "./PaddingWrapper.svelte";
import { withA11y } from "@storybook/addon-a11y";

function centered(storyFn) {
  const { Component: OriginalComponent, props, on } = storyFn();

  return {
    Component: OriginalComponent,
    props,
    on,
    Wrapper: PaddingWrapper,
  };
}

addDecorator(centered);
addDecorator(withA11y);
