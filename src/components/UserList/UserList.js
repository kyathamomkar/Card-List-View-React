import { UserCard } from "./UserCard"
import { createUser } from "../Utils/stringUtils"
import userData from "../../Constants/users.json"
import "./style.css"

const UserList = () => {
  return (
    <div className="userListContainer">
      {userData.map((user) => (
        <UserCard key={`${user.id}_${user.email}`} user={createUser(user)} />
      ))}
    </div>
  )
}

export default UserList
