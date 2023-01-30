import styled from "styled-components";

const TextInput = () => {
  return <Input type="text" />;
};

const Input = styled.input`
  outline: none;
  border: none;
  padding: 5px 10px;
  border-radius: ${(props) => props.theme.borderRadius};
`;

export default TextInput;
