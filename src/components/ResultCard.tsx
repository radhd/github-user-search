import { Users } from "../userInterfaces";
import {
  EnvelopeIcon,
  LinkIcon,
  MapPinIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

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
          <div>{user.name}</div>
          <div>{user.created_at}</div>
          <div>{user.login}</div>
          <div>{user.bio ? user.bio : "This profile has no bio"}</div>
          {/* REPOS INFO/FOLLOWERS/FOLLOWING */}
          <div>
            <div>
              <div>Repos</div>
              <div>{user.public_repos}</div>
            </div>
            <div>
              <div>Followers</div>
              <div>{user.followers}</div>
            </div>
            <div>
              <div>Following</div>
              <div>{user.following}</div>
            </div>
          </div>
          {/* Location/GITHUBURL */}

          <div>
            <div>
              <MapPinIcon className="size-5 text-blue-500" />
              <div>{user.location ? user.location : "Not Available"}</div>
            </div>
            <div>
              <LinkIcon className="size-5" />
              <div>{user.html_url}</div>
            </div>
            <div>
              <EnvelopeIcon className="size-5" />
              <div>{user.email ? user.email : "Not Available"}</div>
            </div>
            <div>
              <UserGroupIcon className="size-5" />
              <div>{user.type}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ResultCard;
