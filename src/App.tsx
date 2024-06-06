import ResultCard from "./components/ResultCard";
import SearchDev from "./components/SearchDev";
import { useEffect, useState } from "react";

function App() {
  // API FETCHER
  
  return (
    <div className="flex h-screen min-h-screen flex-col items-center justify-center">
      <SearchDev />
      <ResultCard />
    </div>
  );
}

export default App;
