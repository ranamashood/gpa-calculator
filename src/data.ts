import { CourseInfoInterface, CourseInterface } from "./models";

const courseInfo: CourseInfoInterface[] = [
  { grade: "A", gpa: 4, minMarks: 85, maxMarks: 100 },
  { grade: "A-", gpa: 3.67, minMarks: 80, maxMarks: 85 },
  { grade: "B+", gpa: 3.33, minMarks: 75, maxMarks: 79.99 },
  { grade: "B", gpa: 3, minMarks: 71, maxMarks: 74.99 },
  { grade: "B-", gpa: 2.67, minMarks: 68, maxMarks: 70.99 },
  { grade: "C+", gpa: 2.33, minMarks: 64, maxMarks: 67.99 },
  { grade: "C", gpa: 2, minMarks: 60, maxMarks: 63.99 },
  { grade: "C-", gpa: 1.87, minMarks: 57, maxMarks: 59.99 },
  { grade: "D+", gpa: 1.33, minMarks: 53, maxMarks: 56.99 },
  { grade: "D", gpa: 1, minMarks: 50, maxMarks: 52.99 },
  { grade: "F", gpa: 0, minMarks: 0, maxMarks: 49.99 },
];

const sampleCourse: CourseInterface = {
  id: "",
  name: "",
  grade: "A",
  gpa: 4,
  minMarks: 85,
  maxMarks: 100,
};

export { courseInfo, sampleCourse };
