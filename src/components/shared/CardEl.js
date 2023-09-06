import React from "react";
import { Link } from "react-router-dom";

import {
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Divider,
} from "@mui/material";

function CardEL({ author, coverPhoto, title, slug }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: 4,
        boxShadow: "rgba(0,0,0,0.1) 0px 12px 4px",
      }}>
      {author && (
        <CardHeader
          avatar={
            <Avatar
              alt="Avatar"
              src={author.avatar.url}
              aria-label="recipe"
              sx={{ marginLeft: 2 }}>
              {author.name}
            </Avatar>
          }
          title={
            <Typography component="p" variant="p" color="text.secondary">
              {author.name}
            </Typography>
          }
        />
      )}
      <CardMedia
        component="img"
        height="194"
        image={coverPhoto.url}
        alt={slug}
      />
      <CardContent>
        <Typography
          component="h3"
          variant="h6"
          color="text.primary"
          fontWeight={600}>
          {title}
        </Typography>
      </CardContent>
      <Divider variant="middle" sx={{ margin: "10px" }} />
      <CardActions>
        <Link
          to={`/blogs/${slug}`}
          style={{ textDecoration: "none", width: "100%" }}>
          <Button variant="outlined" sx={{ width: "100%", borderRadius: 3 }}>
            مطالعه مقاله
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default CardEL;
