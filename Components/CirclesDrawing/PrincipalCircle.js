import styled from "@emotion/styled";

const OuterCircle = styled.div`
  position: relative;
  width: 151px;
  height: 151px;
  background-color: var(--blue);
  border: 1px dashed var(--black);
  border-radius: 50%;
`;

const InnerCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 97px;
  height: 97px;
  margin: -48.5px 0 0 -48.5px;
  color: var(--white);
  font-size: 18px;
  text-align: center;
  background-color: var(--black);
  border-radius: 50%;
`;

const PrincipalCircle = () => {
  return (
    <OuterCircle>
      <InnerCircle>Future Skill Upgrade</InnerCircle>
    </OuterCircle>
  );
};

export default PrincipalCircle;
