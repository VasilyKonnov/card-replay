import styled from "styled-components";
import Dialog from "@material-ui/core/Dialog";

const StyledDialog = styled(Dialog)`
  .MuiBackdrop-root {
    background-color: rgba(18, 36, 62, 0.1);
  }
  .MuiPaper-elevation24 {
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    width: 100%;
    max-width: 550px;
  }
  .MuiDialog-paper {
    margin: 10px;
  }

  @media (max-width: 663.95px) {
    .MuiDialog-paperWidthSm.MuiDialog-paperScrollBody {
      max-width: 100%;
      margin: 0 auto;
    }
  }
`;

export default StyledDialog;
