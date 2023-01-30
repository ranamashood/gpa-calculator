import styled from "styled-components";
import CourseInfo from "../CourseInfo";

const Content = () => {
  return (
    <Wrapper>
      <CourseInfo />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  height: 100vh;
`;

export default Content;
