import styled from "@emotion/styled";
import PrincipalCircle from "./PrincipalCircle";
import LeftCircles from "./LeftCircles";
import RightCircle from "./RightCircle";

const StyledContainer = styled.div`
  display: flex;
`;

const CirclesDrawing = () => {
  return (
    <StyledContainer>
      <LeftCircles />
      <PrincipalCircle />
      <RightCircle />
    </StyledContainer>
  );
};

export default CirclesDrawing;
