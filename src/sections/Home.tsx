import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  TextField,
  Stack,
  Box,
  IconButton,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FullScreen from "../components/FullScreen";

import "../App.css";

const Home = ({ isDark }: { isDark: boolean }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  return (
    <FullScreen>
      <Box
        component="div"
        className={`home-container ${isDark ? "dark-bg" : "light-bg"}`}
      >
        <Typography
          variant="h1"
          maxWidth="lg"
          sx={{
            fontFamily: "Lexend",
            fontSize: { xs: "2.6rem", sm: "4rem", lg: "4.6rem" },
            fontWeight: "900",
            textAlign: "center",
          }}
        >
          <Box sx={{ color: "primary.main" }}>Discover</Box> Movies, Series &
          more..!
        </Typography>
        <Stack
          direction="row"
          spacing="2px"
          sx={{
            width: { xs: "100%", sm: "500px", md: "600px" },
          }}
        >
          <TextField
            id="search-bar"
            label="Search title, album, song, etc..."
            fullWidth
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <IconButton
            disabled={!searchTerm}
            onClick={() => {
              navigate("/results", {
                state: { searchTerm: searchTerm },
              });
            }}
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
