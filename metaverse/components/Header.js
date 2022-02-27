import Image from "next/image";
import { useMoralis } from "react-moralis"
import Avatar from "./Avatar";

function Header() {
  const { user } = useMoralis();

  return (
    <div className="text-pink-500">
      <div>
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image src="https://kstu.edu.tr/kstu-file/uploads/default-user-image.png" layout="fill" objectFit="cover" className="rounded-full" />
        </div>

        <div>
          <div className="relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full">
            <Avatar logoutOnPress/>
          </div>

          <h1 className="text-3xl">Welcome to the Metaverse</h1>

          <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>
        </div>
      </div>
    </div>
  )
}

export default Header