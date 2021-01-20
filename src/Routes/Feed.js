import React from "react";
import { gql } from "apollo-boost";

const FEED_QUERY = gql`
    {
        seeFeed{
            id
            location
            caption
            user{
                id
                avatar
                username
            }
            files{
                id
                url
            }
            likeCount
            isLiked
            comments{
                id
                text
                user{
                    id
                    avatar
                    username
                }
            }
        }
    }
`;