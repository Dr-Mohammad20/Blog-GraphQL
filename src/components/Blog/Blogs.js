import React from "react";
import { Grid } from "@mui/material";
import { useQuery } from "@apollo/client";

import { GET_BLOGS_INFO } from "../../graphql/queries";
import CardEl from "../shared/CardEl";
import Loader from "../shared/Loader";
function Blogs() {
  const { data, loading, error } = useQuery(GET_BLOGS_INFO);
  // console.log("Post data : ", { data });
  if (loading) return <Loader />;
  if (error) return <h4>Error ...</h4>;
  return (
    <Grid container spacing={2}>
      {data.posts.map((post) => (
        <Grid key={post.id} item xs={12} sm={6} md={4}>
          <CardEl {...post} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Blogs;
