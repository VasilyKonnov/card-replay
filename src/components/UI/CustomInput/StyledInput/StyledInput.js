import TextField from "@material-ui/core/TextField";
import styled from "styled-components";

const StyledTextField = styled(TextField)`
  /* default */
  //   .MuiInput-underline:before {
  //     border-bottom: 2px solid #363d54;
  //   }
  /* hover (double-ampersand needed for specificity reasons. */
  && .MuiInput-underline:hover:before {
    border-bottom: 1px solid #495057;
  }
  /* focused */
  .MuiInput-underline:after {
    border-bottom: 2px solid #495057;
  }
  /* Error */
  .MuiInput-underline.Mui-error:after {
    transform: scaleX(1);
    border-bottom: 1px solid #f01f30;
    border-bottom-color: #f01f30;
  }
  /* Label*/
  .MuiFormLabel-root.Mui-focused {
    color: #495057;
  }
  .MuiFormLabel-root.Mui-error {
    color: #f01f30;
  }
  .MuiFormHelperText-root.Mui-error {
    color: #f01f30;
  }
`;

export default StyledTextField;
