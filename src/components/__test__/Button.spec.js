import { render } from "@testing-library/svelte";
import Button from "../Button.svelte";

describe("Button component", () => {
  test("should render component correctly", () => {
    const text = "CLICK!";
    const { container, getByText } = render(Button, {
      props: {
        text,
      },
    });

    expect(container).toContainHTML("<button>CLICK!</button>");
    expect(getByText(text)).toBeInTheDocument();
  });
});
