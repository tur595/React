import { useSession } from "next-auth/client";
import React from "react";

function Sidebar() {
  const [session, lodaing] = useSession();

  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      <h1>Sidebar</h1>
    </div>
  );
}

export default Sidebar;
