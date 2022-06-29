import styled from 'styled-components';
import { StyledError } from '../../ErrorMessage/styled';

export const StyledField = styled.div`
  width: 100%;
  border-radius: 14px;
  background-color: ${(props) => props.theme.white};
  font-size: 16px;
  padding: 16px;
  border: 2px solid
    ${({ touched, error, theme }) =>
      touched && error ? theme.error : theme.black};
  text-align: center;

  &:focus-visible {
    outline: none;
    border-color: ${(props) => props.theme.focus};
  }
`;

export const StyledInputContainer = styled.div`
  padding: 8px 0 20px 0;
  position: relative;
  margin-bottom: 8px;
`;

export const StyledLabel = styled.label`
  position: absolute;
  top: 0px;
  left: 8px;
  font-size: 14px;
  padding: 2px;
  background-color: gray;
  color: ${(props) => props.theme.white};
`;

export const StyledErrorMessage = styled(StyledError)`
  position: absolute;
  bottom: 0;
  left: 8px;
`;
