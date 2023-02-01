import { useEffect, useState } from "react";
import { courseInfo } from "../data";
import { CourseInfoInterface, CourseInterface } from "../models";
import Select from "./Select";
import TextInput from "./TextInput";

interface Props {
  course: CourseInterface;
  editCourse: (id: string, course: CourseInfoInterface) => void;
}

const CourseInfo = (props: Props) => {
  const { editCourse } = props;
  const { id, grade, gpa } = props.course;

  const [course, setCourse] = useState<CourseInterface>(props.course);

  useEffect(() => {
    editCourse(id, course);
  }, [course]);

  return (
    <div>
      <TextInput />
      <Select
        course={props.course}
        options={courseInfo}
        optionKey="grade"
        value={grade}
        setCourse={setCourse}
      />
      <Select
        course={props.course}
        options={courseInfo}
        optionKey="gpa"
        value={gpa}
        setCourse={setCourse}
      />
    </div>
  );
};

export default CourseInfo;
