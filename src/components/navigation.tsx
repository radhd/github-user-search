import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

function Navigation() {
  const [isDark, setIsDark] = useState<string>("light");

  useEffect(() => {
    if (isDark === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const onClick = () => {
    setIsDark(isDark === "dark" ? "light" : "dark");
  };

  return (
    <>
      <div className="flex h-screen items-center justify-between">
        <p className="space-mono-bold mb-2 text-3xl text-[#222731] dark:text-white">
          devfinder
        </p>
        <div className="space-mono-bold flex space-x-4 text-sm text-[#697C9A] dark:text-white">
          {
            <p>
              <p>{isDark === "dark" ? "LIGHT" : "DARK"}</p>
            </p>
          }
          {isDark === "dark" ? (
            <SunIcon className="size-5 text-white" onClick={onClick} />
          ) : (
            <MoonIcon onClick={onClick} className="size-5 text-[#697C9A]" />
          )}
        </div>
      </div>
    </>
  );
}

export default Navigation;
