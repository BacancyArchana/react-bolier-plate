import Button from "../pages/button";
import Card from "../pages/card";
import Home from "../pages/home";
import Input from "../pages/input";

export const menuOptions = [
  { path: "/", label: "Home", Component: Home },
  { path: "/input", label: "Input", Component: Input },
  { path: "/button", label: "Button", Component: Button },
  { path: "/card", label: "Card", Component: Card },
];
