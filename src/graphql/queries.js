import { gql } from "@apollo/client";

const GET_AUTHORS_INFO = gql`
  query {
    authors {
      name
      id
      slug
      avatar {
        url
      }
    }
  }
`;

const GET_BLOGS_INFO = gql`
  query {
    posts {
      author {
        name
        avatar {
          url
        }
      }
      coverPhoto {
        url
      }
      id
      slug
      title
    }
  }
`;

const GET_AUTHOR_INFO = gql`
  query GetAuthor($slug: String) {
    author(where: { slug: $slug }) {
      avatar {
        url
      }
      field
      name
      description {
        html
      }
      posts {
        coverPhoto {
          url
        }
        id
        slug
        title
      }
    }
  }
`;

const GET_BLOG_INFO = gql`
  query GetPost($slug: String) {
    post(where: { slug: $slug }) {
      author {
        avatar {
          url
        }
        name
        field
      }
      content {
        html
      }
      coverPhoto {
        url
      }
      title
    }
  }
`;

const GET_post_COMMENTS = gql`
  query GetPostComments($slug: String) {
    comments(where: { post: { slug: $slug } }) {
      id
      name
      text
    }
  }
`;

export {
  GET_AUTHORS_INFO,
  GET_BLOGS_INFO,
  GET_AUTHOR_INFO,
  GET_BLOG_INFO,
  GET_post_COMMENTS,
};
