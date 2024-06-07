import { useState } from "react";
import { Users } from "../userInterfaces";
import { fetchUsers } from "./fetchUsers";
import ResultCard from "./ResultCard";

function SearchDev() {
  const [search, setSearch] = useState<string>("");
  const [userArray, setUserArray] = useState<Users[]>([]);

  const onClick = async () => {
    const userData = await fetchUsers(search);
    console.log(userData);
    if (userData) {
      setUserArray([userData]);
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div className="">
      <input
        onChange={(event) => onChange(event)}
        value={search}
        type="text"
        className="border border-slate-500 focus:outline-none"
      />
      <button onClick={onClick} className="bg-blue-500">
        Search
      </button>
      <div>
        <ResultCard userArray={userArray} />
      </div>
    </div>
  );
}

export default SearchDev;
