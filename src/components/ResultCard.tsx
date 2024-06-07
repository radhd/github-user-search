import { Users } from "../userInterfaces";

interface ResultCardProps {
  userArray: Users[];
}

function ResultCard({ userArray }: ResultCardProps): React.ReactElement {
  return (
    <div>
      {userArray.map((user) => (
        <div key={user.id}>
          <div>
            <img src={user.avatar_url} alt="" />
          </div>
          <span>{user.name}</span>
          <span>{user.created_at}</span>
          <span>{user.login}</span>
          <span>{user.bio ? user.bio : "This profile has no bio"}</span>
          {/* REPOS INFO/FOLLOWERS/FOLLOWING */}
          <div>
            <div>
              <span>Repos</span>
              <span>{user.public_repos}</span>
            </div>
            <div>
              <span>Followers</span>
              <span>{user.followers}</span>
            </div>
            <div>
              <span>Following</span>
              <span>{user.following}</span>
            </div>
          </div>
          {/* Location/GITHUBURL */}
          <div>
            <div>
              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ResultCard;
