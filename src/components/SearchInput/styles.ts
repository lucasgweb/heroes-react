import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  background-color: ${(props) => props.theme['gray-800']};
  border: 0;
  color: ${(props) => props.theme['gray-400']};
  display: flex;
  align-items: center;
  padding: 5px;
  width: 100%; /* Adjust width to 100% for smaller screens */
  max-width: 20rem; /* Set a maximum width */
  border-radius: 15px;
`;

export const StyledInput = styled.input`
  width: 100%;
  border: 0;
  margin: 2px 2px 2px 15px;
  background-color: ${(props) => props.theme['gray-800']};
  color: ${(props) => props.theme['gray-100']};

  &:focus {
    outline: none;
  }
`;
