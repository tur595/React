import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <div>
      <h1>Header</h1>

      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex ml-2 items-center rounded-full">
          <SearchIcon className="h-6" />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
    </div>
  );
}

export default Header;
