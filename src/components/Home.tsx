import {
  Typography,
  TextField,
  Stack,
  Box,
  IconButton,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FullScreen from "./FullScreen";

import lightBg from "../assets/lightBackground.svg";
import darkBg from "../assets/darkBackground.svg";

const Home = ({ isDark }: { isDark: boolean }) => {
  return (
    <FullScreen>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "3.5rem",
          minHeight: "inherit",
          background: `url(${isDark ? darkBg : lightBg})`,
          backgroundPosition: "center",
        }}
      >
        <Typography
          variant="h1"
          maxWidth="lg"
          sx={{
            fontFamily: "Lexend",
            textAlign: "center",
            fontSize: { xs: "2.6rem", sm: "4rem", md: "5rem" },
            fontWeight: "900",
          }}
        >
          <Box sx={{ color: "primary.main" }}>Discover</Box> Movies, Series &
          more..!
        </Typography>
        <Stack
          direction="row"
          spacing="2px"
          sx={{
            width: { sx: "75%", sm: "60%", md: "55%" },
          }}
        >
          <TextField fullWidth placeholder="Search a movie, series..." />
          <IconButton
            sx={{
              padding: "1rem",
              borderRadius: "4px",
              backgroundColor: "action.hover",
              backdropFilter: "blur(2px)",
              ":hover": { opacity: ".8" },
            }}
          >
            <SearchIcon />
          </IconButton>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" size="large">
            Show more
          </Button>
          <Button
            variant="outlined"
            size="large"
            sx={{ backdropFilter: "blur(2px)" }}
          >
            About us
          </Button>
        </Stack>
      </Box>
    </FullScreen>
  );
};

export default Home;
