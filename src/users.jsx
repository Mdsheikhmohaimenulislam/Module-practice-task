import { use } from "react";
import User from "./user";

export default function UserApi({fetchApiPromise}) {

    const users = use(fetchApiPromise)

    return(
        <div className="card">
            <h1>User: {users.length}</h1>

            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
        </div>
    )
}