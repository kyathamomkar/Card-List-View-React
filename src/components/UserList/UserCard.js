import { useState } from "react"
import { Text } from "../DomElements"
import { UserIcon, ExpandMoreIcon, ExpandLessIcon } from "../Icons"

const roleIconColor = {
  Administrator: "#2081C3",
  User: "#68AAAB",
  Viewer: "#7E7E7E",
}

export const UserCard = ({ user }) => {
  const [detailsOpen, setDetailsOpen] = useState(false)
  return (
    <div
      className="userContainer"
      style={{ cursor: "pointer" }}
      onClick={() => setDetailsOpen((prev) => !prev)}
    >
      <span className="userIcon">
        <UserIcon color={roleIconColor[user.role]} />{" "}
      </span>
      <span className="userPrimaryInfo">
        <Text label={user.firstName + ` ` + user.lastName} fontSize="12px">
          {user.role}
        </Text>
        <Text color="#7E7E7E">{user.email}</Text>
      </span>
      <span className="expandIcon">
        {detailsOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </span>

      <div className={detailsOpen ? "toAnimate show" : "toAnimate hide"}>
        <span className="userDetailInfo">
          <Text label="Address">
            {user.street +
              `, ` +
              user.city +
              `, ` +
              user.state +
              ` ` +
              user.zip}
          </Text>
          <Text label="Phone">{user.phone}</Text>
          <Text label="Created At">{user.createdAt}</Text>
          <Text label="Last Logged In">{user.lastLoggedIn}</Text>
        </span>
      </div>
    </div>
  )
}
