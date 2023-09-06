import React from "react";
import { useQuery } from "@apollo/client";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import { GET_post_COMMENTS } from "../../graphql/queries";

import Loader from "../shared/Loader";

function Comments({ slug }) {
  const { data, loading, error } = useQuery(GET_post_COMMENTS, {
    variables: { slug },
  });

  console.log(data);

  if (loading) return <Loader />;

  return (
    <Grid
      container
      sx={{
        borderRadius: 4,
        boxShadow: "rgba(0,0,0,0.1) 0px 12px 4px",
        mt: 5,
        py: 1,
      }}>
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          کامنت ها
        </Typography>
      </Grid>
      <Grid item xs={12} m={2}>
        {data.comments.length === 0 && (
          <Typography component="span" variant="p" fontWeight={700} mr={1}>
            برای این پست کامنتی گذاشته نشده است
          </Typography>
        )}
        {data.comments.map((comment) => (
          <Grid
            item
            key={comment.id}
            xs={12}
            m={2}
            p={2}
            border="1px solid silver"
            borderRadius={1}>
            <Box component="div" display="flex" alignItems="center" mb={3}>
              <Avatar>{comment.name[0]}</Avatar>
              <Typography component="span" variant="p" fontWeight={700} mr={1}>
                {comment.name}
              </Typography>
            </Box>
            <Typography component="p" variant="p" mr={3}>
              {comment.text}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default Comments;
