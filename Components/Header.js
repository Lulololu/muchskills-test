import styled from "@emotion/styled";
import Link from "next/link";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 56px;
  padding-right: 32px;
  padding-left: 32px;
  background-color: var(--black);
`;

const StyledHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  min-width: ${({ theme }) => theme.globalMinWidth};
  max-width: ${({ theme }) => theme.globalMaxWidth};
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  max-width: 350px;
  height: 100%;
`;

const StyledList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  padding: 0;
  list-style: none;

  li {
    display: flex;
    align-items: center;
    height: 100%;
    color: var(--white);
    font-weight: bold;
    font-size: 14px;
    font-style: normal;
    text-transform: uppercase;
    vertical-align: center;
    border-bottom: var(--white) 4px solid;
    cursor: pointer;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderWrapper>
        <Link href="/">
          <a>
            <img src="/muchskills-logo.svg" alt="MuchSkills Logo" />
          </a>
        </Link>
        <StyledNav>
          <StyledList>
            <li>Challenge</li>
          </StyledList>
        </StyledNav>
      </StyledHeaderWrapper>
    </StyledHeader>
  );
};

export default Header;
