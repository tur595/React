import { ByMoralis, useMoralis } from "react-moralis"

function Messages() {
    const { user } = useMoralis();

  return (
    <div className="pb-56">
        <div className="my-5">
            <ByMoralis variant="dark" style={{ marginLeft: "auto", marginRight: "auto"}}/>
        </div>

        <div>

        </div>
        <div>
           
        </div>

        <div className="text-center text-gray-400 mt-5">
            <p>You're up to date {user.getUsername()}!</p>
        </div>
        <h1>Messages</h1>
    </div>
  )
}

export default Messages