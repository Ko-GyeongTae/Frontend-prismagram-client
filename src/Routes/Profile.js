import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import { withRouter } from "react-router-dom";
import Loader from "../Components/Loader";

const GET_USER = gql`
  query seeUser($username: String!) {
    seeUser(username: $username) {
      id
      avatar
      username
      fullName
      isFollowing
      isSelf
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



export default withRouter(({match:{params:{username}}}) => {
    const { data, loading } = useQuery(GET_USER, {variables:{username}});
    if(loading) {
      return <Loader />;
    } else {
      console.log(data);
      const {
        seeUser: {
          avatar,
          username,
          fullName,
          isFollowing,
          isSelf,
          bio,
          followingCount,
          followersCount,
          postsCount,
          posts
        }
      } = data;
      return null;
    }
    
});
