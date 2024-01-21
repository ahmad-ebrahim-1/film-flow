import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchApi } from "../api/fetchApi";

import FullScreen from "../components/FullScreen";
import Loader from "./Loader";
import Error from "./Error";
import {
  Typography,
  Stack,
  Button,
  IconButton,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Divider,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";

// title type
type titleType = {
  i: {
    height: number;
    imageUrl: string;
    width: number;
  };
  id: string;
  l: string;
  q: string;
  qid: string;
  rank: number;
  s: string;
  y: number;
  yr: string;
};

const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const SearchResults = () => {
  const {
    state: { searchTerm },
  } = useLocation();
  const navigate = useNavigate();
  const {
    data: results,
    isFetching,
    isError,
  } = useQuery({
    queryKey: ["searchResults", searchTerm],
    queryFn: () => fetchApi(`/auto-complete?q=${searchTerm}`),
    // enabled: false,
  });

  if (isFetching) return <Loader />;

  if (isError || !results) return <Error msg="Oops! Please try again later" />;

  return (
    <FullScreen>
      <Stack
        direction="row"
        sx={{
          pt: { xs: "5rem", sm: "6rem" },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <IconButton onClick={() => navigate(-1)} size="large">
          <ArrowBack />
        </IconButton>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Lexend",
          }}
        >
          Search Results
        </Typography>
      </Stack>
      <Grid
        container
        spacing={4}
        sx={{
          paddingBlock: "1rem",
          justifyContent: "center",
        }}
      >
        {results?.data?.d.map((title: titleType) => (
          <Grid item key={title?.id}>
            <Card
              variant="outlined"
              sx={{
                maxWidth: "300px",
              }}
            >
              <CardMedia
                sx={{
                  height: "400px",
                  aspectRatio: "3 / 4",
                  objectFit: "cover",
                }}
                image={title?.i?.imageUrl || demoImage}
                title={title?.l}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {`${title?.l} (${title?.y})`}
                </Typography>
                <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                  <Typography variant="subtitle1">
                    Rank: {title?.rank}
                  </Typography>
                  <Typography variant="subtitle1">{title?.q}</Typography>
                </Stack>
                <Divider />
              </CardContent>
              <CardActions sx={{ justifyContent: "space-between" }}>
                <Button>Show more</Button>
                <IconButton>
                  <FavoriteIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </FullScreen>
  );
};

export default SearchResults;
