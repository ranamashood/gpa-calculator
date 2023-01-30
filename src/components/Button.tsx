import styled from "styled-components";

interface Props {
  title: string;
}

const Button = (props: Props) => {
  const { title } = props;

  return <StyledButton>{title}</StyledButton>;
};

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.tertiary};
  padding: 5px 10px;
  border-radius: ${(props) => props.theme.borderRadius};
  outline: none;
  border: none;
`;

export default Button;
