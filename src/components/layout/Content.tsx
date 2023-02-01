import { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { courseInfo, sampleCourse } from "../../data";
import { CourseInfoInterface, CourseInterface } from "../../models";
import Button from "../Button";
import CourseInfo from "../CourseInfo";

const Content = () => {
  const [courses, setCourses] = useState<CourseInterface[]>([
    { ...sampleCourse, id: uuidv4() },
  ]);

  const addNewCourse = () => {
    setCourses([...courses, { ...sampleCourse, id: uuidv4() }]);
  };

  const editCourse = (id: string, course: CourseInfoInterface) => {
    setCourses(courses.map((c) => (c.id === id ? { ...c, ...course } : c)));
  };

  return (
    <Wrapper>
      {courses.map((course, key) => (
        <CourseInfo key={key} course={course} editCourse={editCourse} />
      ))}
      <Button title="Add" onClick={addNewCourse} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  height: 100vh;
`;

export default Content;
