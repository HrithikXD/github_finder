import React from "react";
import { useContext } from "react";
import Spinner from "../shared/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";

function UserResults() {
  const { users, loading } = useContext(GithubContext);

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <h3 key={user.id}>
            <UserItem key={user.id} user={user} />
          </h3>
        ))}
      </div>
    );
  } else {
    return (
      <>
        <Spinner />
      </>
    );
  }
}

export default UserResults;
