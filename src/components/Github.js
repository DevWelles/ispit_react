import React from "react";
import "./github.css";

const Github = ({ user, repos, reset }) => {
  return (
    <div className="list-group">
      {repos !== undefined ? (
        <div className="mojcontainer">
          <img src={user.avatar_url} alt="logo" width="100" height="100"></img>
          <h2>{user.name}</h2>
          <p>
            <b>Bio:</b> {user.bio}
          </p>
          <p>
            <b>Location: </b>
            {user.location}
          </p>
          <p>
            <b>Repositories: </b>:
          </p>
          <ul>
            {repos.map((repo) => {
              return <li key={repo.id}>{repo.name}</li>;
            })}
          </ul>
          <button onClick={reset}>Reset</button>
        </div>
      ) : (
        <p>Ovdje će se prikazati rezultati</p>
      )}
    </div>
  );
};

export default Github;
