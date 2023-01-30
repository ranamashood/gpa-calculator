import { useState } from "react";
import courseInfo from "../data";
import { CourseInfoInterface } from "../models";
import Button from "./Button";
import Select from "./Select";
import TextInput from "./TextInput";

const CourseInfo = () => {
  const [course, setCourse] = useState<CourseInfoInterface>(courseInfo[0]);

  return (
    <div>
      <TextInput />
      <Select
        options={courseInfo}
        optionKey="grade"
        value={course.grade}
        setCourse={setCourse}
      />
      <Select
        options={courseInfo}
        optionKey="gpa"
        value={course.gpa}
        setCourse={setCourse}
      />
      <Button title="Add" />
    </div>
  );
};

export default CourseInfo;
