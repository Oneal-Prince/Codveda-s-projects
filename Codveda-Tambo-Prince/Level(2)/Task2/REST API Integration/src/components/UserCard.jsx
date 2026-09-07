function UserCard({ user }) {
  return (
    <div className="user-card">
      <img
        src={user.avatar_url}
        alt={`${user.login}'s avatar`}
        className="avatar"
      />

      <h2>{user.name || user.login}</h2>

      <p className="username">@{user.login}</p>

      {user.bio && <p className="bio">{user.bio}</p>}

      {user.location && (
        <p className="location">📍 {user.location}</p>
      )}

      <div className="stats">
        <div>
          <strong>{user.public_repos}</strong>
          <span>Repositories</span>
        </div>

        <div>
          <strong>{user.followers}</strong>
          <span>Followers</span>
        </div>

        <div>
          <strong>{user.following}</strong>
          <span>Following</span>
        </div>
      </div>

      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="profile-link"
      >
        View GitHub Profile →
      </a>
    </div>
  );
}

export default UserCard;