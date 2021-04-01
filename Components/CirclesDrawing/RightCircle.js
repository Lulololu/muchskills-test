import styled from "@emotion/styled";

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 61px;
  height: 61px;
  color: var(--black);
  font-size: 7px;
  background-color: var(--blue);
  border: 1px dashed var(--black);
  border-radius: 50%;
`;

const RightCircle = () => {
  return <Circle>Sales</Circle>;
};

export default RightCircle;
