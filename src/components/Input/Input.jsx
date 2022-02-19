import styled from "styled-components";

const Input = styled.input`
  font-size: 14px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 20px;
  margin-bottom: 8px;
  border: 1px solid #dcdcdc;
  box-sizing: border-box;
  border-radius: 10px;
  &::placeholder {
    font-size: 14px;
  }

  @media screen and (min-width: 768px) {
    width: 450px;
    font-size: 18px;
    padding-top: 20px;
    padding-bottom: 20px;
    &::placeholder {
      font-size: 18px;
    }
  }
  @media screen and (min-width: 1024px) {
    width: 100%;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 46px;
  }
`;

// const Input = ({ value, name, placeholder, type, onChange }) => {
//   return (
//     <StyledInput
//       type={type}
//       value={value}
//       name={name}
//       placeholder={placeholder}
//       onChange={onChange}
//     />
//   );
// };

export default Input;
