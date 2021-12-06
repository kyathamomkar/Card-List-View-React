import { useState, useEffect } from "react"
import { Text } from "../DomElements"
import { UserCard } from "./UserCard"
import { createUser } from "../Utils/stringUtils"
import "./style.css"

const UserList = () => {
  const [userData, setUserData] = useState([])
  const [errors, setErrors] = useState("")
  useEffect(() => {
    fetch("Constants/users.json")
      .then((res) => res.json())
      .then((data) => {
        if (data.length === 0) setErrors("No Users to Display")
        setUserData((_) => data)
      })
      .catch((_) => {
        setErrors("Error fetching the users")
      })
  }, [])

  return (
    <div className="userListContainer">
      {userData &&
        userData.map((user) => (
          <UserCard key={`${user.id}_${user.email}`} user={createUser(user)} />
        ))}
      <center>
        <Text color="red">{errors}</Text>
      </center>
    </div>
  )
}

export default UserList
