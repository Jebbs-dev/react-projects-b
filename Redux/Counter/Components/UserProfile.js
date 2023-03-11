import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { UserMain, UserH2 } from "./UserProfileStyles";

const UserProfile = () => {
  // const dispatch = useDispatch();
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <UserMain><UserH2>My User Profile</UserH2></UserMain>
    </>
  );
};

export default UserProfile;
