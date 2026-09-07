function SearchBar({ username, setUsername, onSearch }) {
  function handleSubmit(event) {
    event.preventDefault();
    onSearch();
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search GitHub username..."
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />

      <button type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;