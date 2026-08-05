import { useState } from "react";

const GitHubUserSearch = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const searchUser = async () => {
    if (!username.trim()) return;
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}`
      );

      if (!response.ok) {
        throw new Error("User not found");
      }
      const data = await response.json();
      setUser(data);
      setError("");
    } catch (error) {
      setUser(null);
      setError(error.message);
    }
  };
  return (
    <div>
      <h1>GitHub User Search</h1>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={searchUser}>
        Search
      </button>
      {error && <p>{error}</p>}
      {user && (
        <div>
          <h2>{user.name || user.login}</h2>
          <img
            src={user.avatar_url}
            alt="GitHub User"
            width="150"
          />
          <p>
            Location: {user.location || "N/A"}
          </p>
          <p>
            Public Repos: {user.public_repos}
          </p>
          <p>
            Followers: {user.followers}
          </p>
          <a href={user.html_url} target="_blank">
            View GitHub Profile
          </a>
        </div>
      )}

    </div>
  );
};

export default GitHubUserSearch;