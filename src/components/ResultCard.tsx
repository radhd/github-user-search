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
    <div className="bg-red-500 p-12">
      {userArray.map((user) => (
        <div key={user.id} className="">
          <div className="h-28 w-28">
            <img className="rounded-full" src={user.avatar_url} alt="" />
          </div>
          <div className="flex">
            <p>{user.name}</p>
            <p>{user.created_at}</p>
          </div>
          <p>{user.login}</p>
          <p>{user.bio ? user.bio : "This profile has no bio"}</p>
          {/* REPOS INFO/FOLLOWERS/FOLLOWING */}
          <div className="flex">
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
            <div className="flex">
              <MapPinIcon className="size-5 text-blue-500" />
              <div>{user.location ? user.location : "Not Available"}</div>
            </div>
            <div className="flex">
              <LinkIcon className="size-5" />
              <div>{user.html_url}</div>
            </div>
            <div className="flex">
              <EnvelopeIcon className="size-5" />
              <div>{user.email ? user.email : "Not Available"}</div>
            </div>
            <div className="flex">
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
