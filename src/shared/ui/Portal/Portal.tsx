import { createPortal } from "react-dom";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  element?: HTMLElement;
}

export const Portal = (props: Props) => {
  const { children, element = document.body } = props;
  return createPortal(children, element);
};
