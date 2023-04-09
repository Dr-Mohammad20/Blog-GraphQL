import React from "react";
import { useParams } from "react-router-dom";

import sanitizeHtml from "sanitize-html";

import Loader from "../shared/Loader";

import { useQuery } from "@apollo/client";
import { GET_AUTHOR_INFO } from "../../graphql/queries";

import { Avatar, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import CardEL from "../shared/CardEl";

function AuthorPage() {
  const { slug } = useParams();

  const { data, loading, error } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug: slug },
  });

  // console.log({ data });

  if (loading)
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          marginTop: "70px",
        }}>
        <Loader />
      </div>
    );

  if (error)
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          marginTop: "70px",
        }}>
        {" "}
        <h4>Something Went Wrong ...</h4>{" "}
      </div>
    );

  const { author } = data;
  return (
    <Container maxWidth="lg">
      <Grid container mt={10}>
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="column"
          alignItems="center">
          <Avatar src={author.avatar.url} sx={{ width: 200, height: 200 }} />
          <Typography component="h3" variant="h5" fontWeight={700} mt={4}>
            {author.name}
          </Typography>
          <Typography component="p" variant="h5" mt={2} color="text.secondary">
            {author.field}
          </Typography>
        </Grid>
        <Grid item xs={12} mt={6}>
          <Typography component="p" variant="p" color="text.secondary">
            <div
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(author.description.html),
              }}></div>
          </Typography>
        </Grid>
        <Grid item xs={12} mt={6}>
          <Typography component="h3" variant="h5" fontWeight={700}>
            مقالات {author.name}
          </Typography>
          <Grid container mt={3}>
            {author.posts.map((post) => (
              <Grid item key={post.id} xs={12} sm={6} md={4}>
                <CardEL
                  title={post.title}
                  coverPhoto={post.coverPhoto}
                  slug={post.slug}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AuthorPage;
