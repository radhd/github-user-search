import { useState } from "react";
import { Users } from "../userInterfaces";
import { fetchUsers } from "./fetchUsers";
import ResultCard from "./ResultCard";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

function SearchDev() {
  const [search, setSearch] = useState<string>("");
  const [userArray, setUserArray] = useState<Users[]>([]);

  const onClick = async () => {
    const userData = await fetchUsers(search);
    // console.log(typeof userData?.public_repos);
    if (userData) {
      setUserArray([userData]);
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <div className="flex h-20 w-full items-center gap-6 rounded-2xl bg-white py-6 pe-[0.625rem] ps-8 text-lg shadow-2xl dark:bg-[#1E2A47]">
        <MagnifyingGlassIcon className="size-6 text-[#0079FF]" />
        <input
          onChange={(event) => onChange(event)}
          value={search}
          type="text"
          className="w-full rounded-md border-none caret-[#697C9A] focus:outline-none dark:bg-[#1E2A47] dark:text-white dark:caret-white"
          placeholder="Search GitHub username…"
        />
        <button
          onClick={onClick}
          className="space-mono-bold ms-auto rounded-xl bg-blue-500 px-6 py-3 text-white"
        >
          Search
        </button>
      </div>
      <ResultCard userArray={userArray} />
    </>
  );
}

export default SearchDev;
