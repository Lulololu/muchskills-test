import Link from "next/link";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import useWindowSize from "../custom-hooks.js/useWindowSize";
import { useEffect, useRef, useState } from "react";

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: ${({ theme }) => theme.globalMinWidth};
  max-width: ${({ theme }) => theme.globalMaxWidth};
  height: 52px;
  background-color: var(--grey);
  box-shadow: ${({ displayShadow }) =>
    displayShadow
      ? `inset 25px 0px 25px -25px rgba(0, 0, 0, 0.45),
    inset -25px 0px 25px -25px rgba(0, 0, 0, 0.45)`
      : "none"};
`;

const StyledList = styled.ul`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100%;
  padding: 0;
  overflow-x: auto;
  list-style: none;

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--grey-2);
    border-radius: 10px;
  }

  li {
    display: flex;
    align-items: center;
    height: 100%;
    color: var(--grey-2);
    font-weight: bold;
    font-size: 14px;
    font-style: normal;
    white-space: nowrap;
    text-transform: capitalize;
    vertical-align: center;
    border-radius: 2px;
    transition: background-color 100ms ease-out;

  /*  :hover {
      background-color: var(--grey-3);
    }*/
  }
  .active-link {
    background-color: var(--blue);
    z-index: -1;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: inherit;
    text-decoration: none;
    height: 100%;
    padding: 8px 24px;

    .active-link {
      background-color: var(--blue);
      z-index: -1;
    }
  }
`;

const tabsArray = [
  {
    name: "Job Focus",
    href: "/",
    className: "job-focus",
  },
  {
    name: "Soft Skills",
    href: "/soft-skills",
    className: "soft-skills",
  },
  {
    name: "Technical Skills",
    href: "/technical-skills",
    className: "technical-skills",
  },
  {
    name: "Functional Expertise",
    href: "/functional-expertise",
    className: "functional-expertise",
  },
  {
    name: "Domain Expertise",
    href: "/domain-expertise",
    className: "domain-expertise",
  },
  {
    name: "Patent Expertise",
    href: "/patent-expertise",
    className: "patent-expertise",
  },
  /*{
    name: "Personal Expertise",
    href: "/personal-expertise",
    className: "personal-expertise",
  },
  {
    name: "Hard Expertise",
    href: "/hard-expertise",
    className: "hard-expertise",
  },
  {
    name: "Compliance Expertise",
    href: "/compliance-expertise",
    className: "compliance-expertise",
  },*/
];

const Tabs = () => {
  // useState
  const [windowWidth, setWindowWidth] = useState(null);

  // useRouter - Next.js - To get the Active Link
  const router = useRouter();
  const { pathname } = router;

  // Custom Hook - Window Size
  const clientWindow = useWindowSize();
  useEffect(() => {
    setWindowWidth(clientWindow.width);
  });

  // Width from which the Tabs Component displays the scroll - To display the Box Shadow
  const scrollTabsWidth = 912;

  const tabRef = useRef();

  // Center the Displayed Tab
  useEffect(() => {
    tabRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  });

  return (
    <>
      <StyledNav displayShadow={windowWidth <= scrollTabsWidth}>
        <StyledList>
          {tabsArray.map((tab, index) => {
            return (
              <li
                ref={pathname === tab.href ? tabRef : null} /* */
                key={index}
                className={
                  pathname === tab.href
                    ? `active-link ${tab.className}`
                    : `${tab.className}`
                }
              >
                <Link href={tab.href}>
                  <a>{tab.name}</a>
                </Link>
              </li>
            );
          })}
        </StyledList>
      </StyledNav>
    </>
  );
};

export default Tabs;
