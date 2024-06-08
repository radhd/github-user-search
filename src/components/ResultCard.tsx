import { Users } from "../userInterfaces";
import {
  EnvelopeIcon,
  LinkIcon,
  MapPinIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import ReposInformation from "./ReposInformation.tsx";
import MediaInfo from "./MediaInfo.tsx";
import UserJoined from "./UserJoined.tsx";

interface ResultCardProps {
  userArray: Users[];
}

function ResultCard({ userArray }: ResultCardProps): React.ReactElement {
  return (
    <div>
      {userArray.map((user) => (
        <div
          key={user.id}
          className="grid grid-cols-12 bg-white p-12 dark:bg-[#1E2A47]"
        >
          {/* Image */}
          <div className="col-span-3 h-28 w-28">
            <img className="rounded-full" src={user.avatar_url} alt="" />
          </div>

          <div className="col-span-8 space-y-4">
            <div className="flex">
              <p className="space-mono-bold text-3xl dark:text-white">
                {user.name}
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

            {/* Repos info */}
            <div className="grid grid-cols-3 rounded-xl bg-[#F6F8FF] px-8 py-4 dark:bg-[#141D2F]">
              <ReposInformation
                infoType={"Repos"}
                infoApi={user.public_repos}
              />
              <ReposInformation
                infoType={"Followers"}
                infoApi={user.followers}
              />
              <ReposInformation
                infoType={"Following"}
                infoApi={user.following}
              />
            </div>
            <div className="grid grid-cols-2 gap-5">
              <MediaInfo
                icon={
                  <MapPinIcon className="size-5 text-[#4B6A9B] dark:text-white" />
                }
                infoApi={user.location}
              />

              <MediaInfo
                icon={
                  <EnvelopeIcon className="size-5 text-[#4B6A9B] dark:text-white" />
                }
                infoApi={user.email}
              />

              <MediaInfo
                icon={
                  <LinkIcon className="size-5 text-[#4B6A9B] dark:text-white" />
                }
                infoApi={user.blog}
              />

              <MediaInfo
                icon={
                  <UserGroupIcon className="size-5 text-[#4B6A9B] dark:text-white" />
                }
                infoApi={user.type}
              />
            </div>
          </div>
          <div>
            <UserJoined created={user.created_at} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ResultCard;
