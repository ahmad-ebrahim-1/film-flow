import { Box } from "@mui/material";
import React from "react";

const FullScreen = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        maxWidth: "1400px",
        minHeight: "100vh",
        paddingInline: {
          xs: "0.6rem",
          xl: "0",
        },
      }}
    >
      {children}
    </Box>
  );
};

export default FullScreen;
