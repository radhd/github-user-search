import { MoonIcon } from "@heroicons/react/24/solid";

function Navigation() {
  return (
    <nav>
      <div className="flex justify-between">
        <p>devfinder</p>
        <div className="flex space-x-4">
          <p>Night</p>
          <MoonIcon className="size-6" />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
