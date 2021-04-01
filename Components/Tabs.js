import Link from "next/link";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const StyledNavContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-bottom: 2px var(--grey-3) solid;
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: space-around; */
  width: 100%;
/*
  max-width: ${({ theme }) => theme.globalMaxWidth};
*/
  height: 52px;
  background-color: var(--grey);
`;

const StyledList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  padding: 0;
  overflow-x: auto;
  list-style: none;

  li {
    display: flex;
    align-items: center;
    min-width: min-content;
    height: 100%;
    padding: 8px 24px;
    color: var(--grey-2);
    font-weight: bold;
    font-size: 14px;
    font-style: normal;
    white-space: nowrap;
    text-transform: capitalize;
    vertical-align: center;
    border-radius: 2px;
    cursor: pointer;
    transition: background-color 100ms ease-out;

    :hover {
      background-color: var(--grey-3);
    }
  }
  .active-link {
    background-color: var(--blue);
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const tabsArray = [
  {
    name: "Job Focus",
    href: "/",
  },
  {
    name: "Soft Skills",
    href: "/soft-skills",
  },
  {
    name: "Technical Skills",
    href: "/technical-skills",
  },
  {
    name: "Functional Expertise",
    href: "/functional-expertise",
  },
  {
    name: "Domain Expertise",
    href: "/domain-expertise",
  },
  {
    name: "Patent Expertise",
    href: "/patent-expertise",
  },
  {
    name: "Personal Expertise",
    href: "/personal-expertise",
  },
  {
    name: "Hard Expertise",
    href: "/hard-expertise",
  },
  {
    name: "Compliance Expertise",
    href: "/compliance-expertise",
  },
];

const Tabs = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <StyledNavContainer>
      <StyledNav>
        <StyledList>
          {tabsArray.map((tab, index) => {
            return (
              <li
                key={index}
                className={pathname === tab.href ? "active-link" : null}
              >
                <Link href={tab.href}>
                  <a>{tab.name}</a>
                </Link>
              </li>
            );
          })}
        </StyledList>
      </StyledNav>
    </StyledNavContainer>
  );
};

export default Tabs;
