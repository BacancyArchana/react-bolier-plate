import Button from "../pages/button";
import Card from "../pages/card";
import Home from "../pages/home";
import Input from "../pages/input";

export const menuOptions = [
  { path: "/", label: "Home", Component: Home },
  {
    path: "/input",
    label: "Input",
    Component: Input,
    isComponent: true,
    description: "Different type of inputs and it's states",
  },
  {
    path: "/button",
    label: "Button",
    Component: Button,
    isComponent: true,
    description: "Button states",
  },
  {
    path: "/card",
    label: "Card",
    Component: Card,
    isComponent: true,
    description: "Different sizes of cards",
  },
];
