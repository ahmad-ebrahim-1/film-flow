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
          <ErrorIcon
            sx={{ width: "4rem", height: "4rem", color: "error.main" }}
          />
          <Typography variant="h4" maxWidth="md" textAlign="center">
            {msg}
          </Typography>
        </Stack>
      </Box>
    </FullScreen>
  );
};

export default Error;
