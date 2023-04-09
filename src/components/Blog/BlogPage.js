import React from "react";
import { useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import { GET_BLOG_INFO } from "../../graphql/queries";

import sanitizeHtml from "sanitize-html";

import Loader from "../shared/Loader";
import CommentForm from "../Comment/CommentForm";

import { Container } from "@mui/system";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import Comments from "../Comment/Comments";

function BlogPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { data, loading, error } = useQuery(GET_BLOG_INFO, {
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

  const { post } = data;
  const { author } = data.post;
  // console.log(post);
  return (
    <Container maxWidth="lg">
      <Grid container mt={9}>
        <Grid item xs={12} display="flex" justifyContent="space-between">
          <Typography
            component="h2"
            variant="h4"
            color="primary"
            fontWeight={700}>
            {post.title}
          </Typography>
          <ArrowBackRoundedIcon onClick={() => navigate(-1)} />
        </Grid>
        <Grid item xs={12} mt={6}>
          <img
            src={post.coverPhoto.url}
            alt={post.slug}
            width="100%"
            height="500px"
            style={{ borderRadius: 15 }}
          />
        </Grid>
        <Grid item xs={12} mt={6} display="flex" alignItems="center">
          <Box component="div" marginLeft={2}>
            <Avatar src={author.avatar.url} sx={{ width: 80, height: 80 }} />
          </Box>
          <Box component="div">
            <Typography component="p" variant="h5" fontWeight={700}>
              {author.name}
            </Typography>
            <Typography component="p" variant="p" color="text.secondary">
              {author.field}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} mt={6}>
          <Typography component="p" variant="p" color="text.secondary">
            <div
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(post.content.html),
              }}></div>
          </Typography>
        </Grid>
        <Grid item xs={12} mt={6}>
          <CommentForm slug={slug} />
        </Grid>
        <Grid item xs={12} mt={6}>
          <Comments slug={slug} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default BlogPage;
