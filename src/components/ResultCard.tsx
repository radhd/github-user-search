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
        <div key={user.id} className="grid grid-cols-10 bg-white p-12">
          <div className="col-span-2 h-28 w-28">
            <img className="rounded-full" src={user.avatar_url} alt="" />
          </div>
          <div className="col-span-7 space-y-4">
            <div className="flex">
              <p className="text-3xl">
                <strong>{user.name}</strong>
              </p>
            </div>
            <a
              href={user.html_url}
              target="_blank"
              className="cursor-pointer text-[#0079FF]"
            >
              @{user.login}
            </a>
            <p className="text-[#4B6A9B]">
              {user.bio ? user.bio : "This profile has no bio"}
            </p>
            <div className="grid grid-cols-3">
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
            <div className="grid grid-cols-2">
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
          {/* REPOS INFO/FOLLOWERS/FOLLOWING */}
          <div>
            <p>{user.created_at}</p>
          </div>
          {/* Location/GITHUBURL */}
        </div>
      ))}
    </div>
  );
}

export default ResultCard;
