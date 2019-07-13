import styled from 'styled-components';
// Importing Global Variables
import * as palette from 'styles/variables';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px;
  background-color: ${palette.BRAND_COLOR};
`;

export const LoginForm = styled.form`
  max-width: 275px;
  min-height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LogoIcon = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: center;
  text-transform: uppercase;
  color: #FFF;
`;

export const Label = styled.label`
  font-size: 16px;
  color: #FFF;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  font-size: 16px;
  padding: 5px;
  border: 0px;
  margin-bottom: 15px;
  ::placeholder {
    font-size: 14px;
  }
`;

export const LoginBtn = styled.button`
  margin-top: 15px;
  padding: 5px;
  background-color: ${palette.BUTTON_PRIMARY_COLOR};
  border: 0px;
  color: ${palette.PRIMARY_TXT_COLOR};
  &:hover {
    cursor: pointer;
  }
`;
