import styled from "@emotion/styled";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  margin-top: 50px;
`;

const FirstRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-family: "Lato-Thin", sans-serif;

  strong {
    font-family: "Lato", sans-serif;
  }
`;

const StyledButton = styled.button`
  padding: 2px 8px 2px 8px;
  color: var(--black);
  font-family: "Lato", sans-serif;
  background-color: var(--grey);
  border-radius: 100px;
`;

const SecondRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const MonthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledMonth = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
`;

const StyledCircle1 = styled.div`
  width: 8px;
  height: 8px;
  background-color: red;
  border-radius: 50%;
`;

const StyledCircle2 = styled.div`
  width: 12px;
  height: 12px;
  background-color: var(--black);
  border-radius: 50%;
`;

const StyledCircle3 = styled.div`
  width: 16px;
  height: 16px;
  background-color: var(--blue);
  border-radius: 50%;
`;

const TimeLine = () => {
  return (
    <StyledContainer>
      <FirstRow>
        <div>
          Back to <strong>Today</strong>
        </div>
        <StyledButton>2021 &#x25BC;</StyledButton>
      </FirstRow>
      <SecondRow>
        <MonthContainer>
          <StyledCircle1 />
          <StyledMonth>APR</StyledMonth>
        </MonthContainer>
        <MonthContainer>
          <StyledCircle1 />
          <StyledMonth>MAY</StyledMonth>
        </MonthContainer>
        <MonthContainer>
          <StyledCircle2 />
          <StyledMonth>JUN</StyledMonth>
        </MonthContainer>
        <MonthContainer>
          <StyledCircle3 />
          <StyledMonth>JUL</StyledMonth>
        </MonthContainer>
        <MonthContainer>
          <StyledCircle1 />
          <StyledMonth>AUG</StyledMonth>
        </MonthContainer>
        <MonthContainer>
          <StyledCircle1 />
          <StyledMonth>SEP</StyledMonth>
        </MonthContainer>
        <MonthContainer>
          <StyledCircle1 />
          <StyledMonth>OCT</StyledMonth>
        </MonthContainer>
      </SecondRow>
    </StyledContainer>
  );
};

export default TimeLine;
