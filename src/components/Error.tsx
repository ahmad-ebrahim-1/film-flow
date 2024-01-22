import FullScreen from "./FullScreen";
import { Box, Stack, Typography } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";

const Error = ({ msg }: { msg: string }) => {
  return (
    <FullScreen>
      <Box sx={{ minHeight: "inherit", display: "grid", placeItems: "center" }}>
        <Stack
          spacing={2}
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <ErrorIcon fontSize="large" sx={{ color: "error.main" }} />
          <Typography variant="h5" maxWidth="sm" textAlign="center">
            {msg}
          </Typography>
        </Stack>
      </Box>
    </FullScreen>
  );
};

export default Error;
