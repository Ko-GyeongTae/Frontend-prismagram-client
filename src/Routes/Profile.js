import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import { withRouter } from "react-router-dom";

const GET_USER = gql`
  query seeUser($username: String!) {
    seeUser(username: $username) {
      id
      avatar
      username
      fullName
      isFollowingisSelf
      bio
      followingCount
      followersCount
      postsCount
      posts {
        id
        files {
          id
          url
        }
        likeCount
        commentCount
      }
    }
  }
`;

export default withRouter((props) => {
    const { data, loading } = useQuery(GET_USER);
    if(loading) return <p>loading...</p>
    console.log(props);
    return null;
});
