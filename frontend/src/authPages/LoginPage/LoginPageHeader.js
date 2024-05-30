import React from "react";
import { Typography } from "@mui/material";

const LoginPageHeader = () => {
  return (
    <>
      <Typography variant="h5" sx={{ color: "white", textAlign: "center" }}>
        WELCOME BACK
      </Typography>
      <Typography sx={{ color: "#b9bbbe", textAlign: "center" }}>
        We are happy that you are with Us 
      </Typography>
    </>
  );
};

export default LoginPageHeader;
