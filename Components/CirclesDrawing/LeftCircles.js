import styled from "@emotion/styled";

const StyledContainer = styled.div`
  position: relative;
  top: 20px;
  display: flex;
  flex-direction: column;

  /* Second Circle */
  div:nth-of-type(2) {
    position: relative;
    left: 10px;
  }
`;

const BlackCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 81px;
  height: 81px;
  color: var(--white);
  font-size: 9px;
  background-color: var(--black);
  border-radius: 50%;
`;

const LeftCircles = () => {
  return (
    <StyledContainer>
      <BlackCircle>Skill title</BlackCircle>
      <BlackCircle className="second-circle">Skill title</BlackCircle>
    </StyledContainer>
  );
};

export default LeftCircles;
