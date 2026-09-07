const API_URL = "https://api.github.com";

export async function fetchGithubUser(username) {
  const response = await fetch(`${API_URL}/users/${username}`);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("GitHub user not found.");
    }

    if (response.status === 403) {
      throw new Error("GitHub API rate limit exceeded. Please try again later.");
    }

    throw new Error("Something went wrong while fetching the user.");
  }

  return response.json();
}