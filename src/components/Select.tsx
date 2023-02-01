import { ChangeEvent } from "react";
import { courseInfo } from "../data";
import { CourseInfoInterface, CourseInterface } from "../models";

interface Props {
  course: CourseInterface;
  options: CourseInfoInterface[];
  optionKey: "gpa" | "grade";
  value: string | number;
  setCourse: React.Dispatch<React.SetStateAction<CourseInterface>>;
}

const Select = (props: Props) => {
  const { course, options, optionKey, value, setCourse } = props;

  const changeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const index = courseInfo.findIndex((course) =>
      optionKey === "gpa"
        ? course.gpa === parseFloat(event.target.value)
        : course.grade === event.target.value
    );
    setCourse({
      ...course,
      grade: courseInfo[index].grade,
      gpa: courseInfo[index].gpa,
    });
  };

  return (
    <select value={value} onChange={changeHandler}>
      {options.map((option, key) => {
        const value = optionKey === "gpa" ? option.gpa : option.grade;

        return (
          <option key={key} value={value}>
            {value}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
