export const convertPhoneUS = (phone = "") => {
  return phone && phone.length === 10
    ? phone.replace(/\D+/g, "").replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")
    : "---"
}

export const convertTimeStamptoDate = (date = "") => {
  if (date && date.length === 24) {
    let convertedDate = new Date(date)
    let month = convertedDate.getMonth() + 1
    let dateNo = convertedDate.getDate()
    let year = convertedDate.getFullYear().toString().substr(2)
    return (
      month +
      "/" +
      dateNo +
      "/" +
      year +
      " " +
      convertedDate.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })
    )
  }
  return "---"
}

export const createUser = (user) => {
  return {
    id: user.id || Math.random(0.34),
    firstName: user.firstName || "",
    lastName: user.lastName || "",
    role: user.role || "Viewer",
    email: user.email || "",
    street: user.street || "",
    city: user.city || "",
    state: user.state || "",
    zip: user.zip || "",
    phone: convertPhoneUS(user.phone),
    createdAt: convertTimeStamptoDate(user.createdAt),
    lastLoggedIn: convertTimeStamptoDate(user.lastLoggedIn),
  }
}
