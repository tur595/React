import { useMoralis } from "react-moralis"

function ChangeUsername() {
    const { setUserData, isUserUpdating, userError, user } = useMoralis();

    const setUsername = () => {
        const username = prompt(`Enter your new username (current: ${user.getUsername()})`);

        if(!username) return;

        setUserData({
            username,
        })
    }
  return (
    <div className="border-2 rounded-full border-pink-700 text-sm absolute top-5 right-5 hover:opacity-75 cursor-pointer">
        <button disabled={isUserUpdating} onClick={setUsername} className="p-2">Change your username</button>
    </div>
  )
}

export default ChangeUsername