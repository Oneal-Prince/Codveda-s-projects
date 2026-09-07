import { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";
import { fetchGithubUser } from "./services/githubApi";
function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSearch() {
    if (!username.trim()) {
      setError("Please enter a GitHub username.");
      return;
    }

    setLoading(true);
    setError("");
    setUser(null);

    try {
      const data = await fetchGithubUser(username.trim());
      setUser(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="app">
      <section className="container">
        <header className="header">
          <h1>GitHub User Finder</h1>

          <p>
            Search for GitHub users and explore their profiles.
          </p>
        </header>

        <SearchBar
          username={username}
          setUsername={setUsername}
          onSearch={handleSearch}
        />

        {loading && <Loading />}

        {error && <ErrorMessage message={error} />}

        {user && !loading && <UserCard user={user} />}
      </section>
    </main>
  );
}

export default App;