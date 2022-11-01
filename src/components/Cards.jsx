import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toastWarnNotify } from "../utils/toastNotify";
import SendIcon from "@mui/icons-material/Send";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ShareIcon from "@mui/icons-material/Share";

import { CardMedia } from "@mui/material";
import { Box } from "@mui/system";

const Cards = ({
  urlToImage,
  title,
  content,
  url,
  publishedAt,
  source,
  item,
  handleFav
}) => {
  const { currentUser } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const seeDetails = () => {
    navigate("/login");
    toastWarnNotify("Please login to see details");
  };

  return (
    <Box>
      <CardMedia
        component="img"
        height="250"
        image={
          urlToImage ??
          "https://ichef.bbci.co.uk/news/976/cpsprodpb/5A8B/production/_122497132_tesla.png"
        }
        alt="img"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title ?? "Tesla disables gaming while driving feature"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content ??
            "It follows an inquiry into Passenger Play, which allowed games to be played while a car was moving."}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {publishedAt ?? "2022"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {source ?? "Any source"}
        </Typography>
      </CardContent>
      <CardActions>
        {currentUser ? (
          <>
            <Button
              size="small"
              variant="contained"
              color="success"
              endIcon={<ShareIcon />}
              style={{ marginRight: "1rem" }}
            >
              Share
            </Button>
            <Button
              size="small"
              variant="contained"
              color="success"
              endIcon={<ThumbUpIcon />}
              style={{ marginRight: "1rem" }}
              onClick={() => handleFav(item)}
            >
              FAVOURITE
            </Button>
            <Button
              size="small"
              variant="contained"
              color="success"
              href={url}
              target="_blank"
              endIcon={<SendIcon />}
            >
              Detail
            </Button>
          </>
        ) : (
          <Box display="flex" sx={{ width: 1 }} justifyContent="center">
            <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={seeDetails}
            >
              Please login to see details
            </Button>
          </Box>
        )}
      </CardActions>
    </Box>
  );
};

export default Cards;
