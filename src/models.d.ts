import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    borderRadius: string;
  }
}

export interface CourseInfoInterface {
  grade: string;
  gpa: number;
  minMarks: number;
  maxMarks: number;
}
