import { useState, useEffect } from "react";
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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FeedbackIcon from "@mui/icons-material/Feedback";

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
  const [resultsType, setResultsType] = useState<string>("all");
  const [searchResults, setSearchResults] = useState<titleType[]>([]);

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

  useEffect(() => {
    setSearchResults(
      results?.data?.d.filter((title: titleType) => {
        if (resultsType === "movies")
          return title.q === "feature" || title.q === "TV movie";
        else if (resultsType === "series")
          return title.q === "TV series" || title.q === "TV mini-series";
        else if (resultsType === "other")
          return (
            title.q !== "feature" &&
            title.q !== "TV movie" &&
            title.q !== "TV series" &&
            title.q !== "TV mini-series"
          );
        else return true;
      })
    );
  }, [resultsType, results?.data?.d]);

  if (isFetching) return <Loader />;

  if (isError)
    return (
      <Error msg="Sorry, we seem to be having a problem. Please try again later" />
    );

  return (
    <FullScreen>
      <Stack
        direction="row"
        sx={{
          pt: { xs: "5rem", sm: "6rem" },
          justifyContent: "space-between",
          alignItems: "end",
        }}
      >
        <IconButton onClick={() => navigate(-1)} size="large">
          <ArrowBack />
        </IconButton>
        <FormControl variant="standard" sx={{ minWidth: 120 }}>
          <InputLabel id="filtring-select">type</InputLabel>
          <Select
            labelId="filtring-select"
            id="type-filtring-select"
            variant="standard"
            value={resultsType}
            onChange={(e) => setResultsType(e.target.value)}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="movies">Movies</MenuItem>
            <MenuItem value="series">Series</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </FormControl>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Lexend",
          }}
        >
          Search Results
        </Typography>
      </Stack>
      {searchResults?.length === 0 ? (
        <Stack
          spacing={2}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            mt: "6rem",
          }}
        >
          <FeedbackIcon fontSize="large" />
          <Typography
            variant="h5"
            maxWidth="sm"
            textAlign="center"
          >{`No search results for "${searchTerm}", type: ${resultsType}`}</Typography>
        </Stack>
      ) : (
        <Grid
          container
          spacing={4}
          sx={{
            paddingBlock: "1rem",
            justifyContent: "center",
          }}
        >
          {searchResults?.map((title: titleType) => (
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
                  <Stack
                    direction="row"
                    sx={{ justifyContent: "space-between" }}
                  >
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
      )}
    </FullScreen>
  );
};

export default SearchResults;
