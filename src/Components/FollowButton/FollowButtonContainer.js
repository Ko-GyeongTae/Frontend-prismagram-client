import React from "react";
import PropTypes from "prop-types";
import { useMutation } from "react-apollo-hooks";
import { FOLLOW, UNFOLLOW } from "./FollowButtonQueries";
import FollowButtonPresenter from "./FollowButtonPresenter";

const FollowButtonContainer = ({isFollowing, id}) => {
    const [followMutation] = useMutation(FOLLOW, {variables:id});
    const [unfollowMutation] = useMutation(UNFOLLOW, {variables:id});
    return <FollowButtonPresenter isFollowing={isFollowing}/>;
};  

FollowButtonContainer.propTypes = {
    isFollowing: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired
};

export default FollowButtonContainer;