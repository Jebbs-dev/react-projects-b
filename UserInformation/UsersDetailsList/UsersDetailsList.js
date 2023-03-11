import React from "react";
import {
  DetailsListContainer,
  DetailsList,
  DetailsListItem,
} from "./UsersDetailsListStyle";

// this is to display the details gotten from our inputs

const UsersDetailsList = (props) => {
  return (
    <>
      <DetailsListContainer className="template">
        <DetailsList>
          {/* map executes a function on every item of the array(users) and the item is gotten as input(user) */}
          {/* we return a JSX element for every user of that users array expected to be gotten on the prop. */}
          {/* we are extracting users from props. */}
          {props.users.map((user) => (
            <>
              <DetailsListItem key={user.id}>Name: {user.name}. Username: {user.username}. Email: {user.email}. Birthday: {user.birth}</DetailsListItem>
              {/* <DetailsListItem></DetailsListItem>
              <DetailsListItem></DetailsListItem>
              <DetailsListItem></DetailsListItem> */}
            </>
          ))}
        </DetailsList>
      </DetailsListContainer>
    </>
  );
};
export default UsersDetailsList;
