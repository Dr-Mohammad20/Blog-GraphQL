import { Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <footer>
      <Typography
        component="p"
        variant="p"
        bgcolor="#f7f7f7"
        color="primary"
        padding="10px"
        textAlign="center"
        mt={10}>
        پروژه وبلاگ با GraphQl | نویسنده : محمد مومنی
      </Typography>
    </footer>
  );
}

export default Footer;
