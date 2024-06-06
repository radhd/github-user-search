import { useState } from "react";

function SearchDev() {
  const [search, setSearch] = useState<string>("");

  const onClick = () => {};

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
    </div>
  );
}

export default SearchDev;
