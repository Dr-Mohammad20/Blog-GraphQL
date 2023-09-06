import React from "react";
import { useQuery } from "@apollo/client";
import { GET_AUTHORS_INFO } from "../../graphql/queries";
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import Loader from "../shared/Loader";
import { Link } from "react-router-dom";

function Authors() {
  const { data, loading, error } = useQuery(GET_AUTHORS_INFO);
  // console.log("Authors data : ", { data });

  if (loading) return <Loader />;
  if (error) return <h4>Error ...</h4>;
  const { authors } = data;
  return (
    <Grid
      container
      sx={{ borderRadius: 4, boxShadow: "rgba(0,0,0,0.1) 0px 12px 4px" }}>
      {authors.map((author, index) => (
        <React.Fragment key={author.id}>
          <Grid item xs={12} padding={2}>
            <Link
              to={`/authors/${author.slug}`}
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                width: "100%",
              }}>
              <Avatar src={author.avatar.url} sx={{ marginLeft: 2 }} />
              <Typography component="p" variant="p" color="text.secondary">
                {author.name}
              </Typography>
            </Link>
          </Grid>
          {index !== authors.length - 1 && (
            <Grid item xs={12}>
              <Divider variant="middle" />
            </Grid>
          )}
        </React.Fragment>
      ))}
    </Grid>
  );
}

export default Authors;
