import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../utils/types";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
    const isMobile = useMediaQuery("(max-width: 639px)")
  return (
    <AnchorLink
      className={`rounded-md bg-secondary-500 ${!isMobile ? 'px-10' : 'px-4'} text-sm text-center lg:text-base py-2 hover:bg-primary-500 hover:text-white`}
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;