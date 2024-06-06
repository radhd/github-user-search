import ResultCard from "./components/ResultCard";
import SearchDev from "./components/SearchDev";
import { Users } from "./userInterfaces";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/radhd`);
        if (!response.ok) {
          throw new Error("failed to fetch users");
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);
  return (
    <div className="flex h-screen min-h-screen flex-col items-center justify-center">
      <SearchDev />
      <ResultCard />
    </div>
  );
}

export default App;
