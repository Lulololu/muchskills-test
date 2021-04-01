import styled from "@emotion/styled";
import CirclesDrawing from "./CirclesDrawing/CirclesDrawing";
import TimeLine from "./TimeLine";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  min-width: 320px;
  max-width: 600px;
  padding: 42px 10px 20px 10px;
  background-color: var(--white);
  border-radius: 10px;
`;

const StyledHeadline = styled.h3`
  padding: 2px 6px;
  color: var(--green-1);
  text-transform: uppercase;
  background-color: var(--green-2);
`;

const StyledCardTitle = styled.h2`
  font-weight: 900;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  text-transform: capitalize;
`;

const StyledSubtitle = styled.p`
  font-size: 12px;
  font-family: "Lato-Thin", sans-serif;

  strong {
    font-family: "Lato", sans-serif;
  }
`;

const JobFocusCard = ({ pageTitle }) => {
  return (
    <StyledContainer>
      <StyledHeadline>Showing</StyledHeadline>
      <StyledCardTitle>{pageTitle}</StyledCardTitle>
      <StyledSubtitle>
        <strong>Edit</strong> or <strong>Add</strong> a new skill that you would
        like to focus on
      </StyledSubtitle>
      <CirclesDrawing />
      <TimeLine />
    </StyledContainer>
  );
};

export default JobFocusCard;
