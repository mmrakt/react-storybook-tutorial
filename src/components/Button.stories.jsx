import { expect } from "@storybook/jest";
import Button from "./Button.jsx";
import { linkTo } from "@storybook/addon-links";
import { userEvent, within } from "@storybook/testing-library";

export default {
  component: Button,
  argTypes: {
    handleClick: {
      action: true,
    },
  },
  parameters: {
    backgrounds: {
      values: [
        { name: "red", value: "#f00" },
        { name: "green", value: "#0f0" },
        { name: "blue", value: "#00f" },
      ],
    },
    layout: "centered",
  },
  // decorators: [
  //   (Story) => (
  //     <div
  //       style={{
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //         height: "100vh",
  //       }}
  //     >
  //       <Story />
  //     </div>
  //   ),
  // ],
};
const Template = (args) => <Button {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: "Default",
};

export const Danger = Template.bind({});
Danger.args = {
  children: "Danger",
  color: "danger",
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
  color: "primary",
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  children: "Small",
  color: "primary",
  size: "sm",
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  children: "Large",
  color: "primary",
  size: "lg",
};
PrimaryLarge.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole("button"));
  await expect(args.handleClick).toHaveBeenCalled();
};
