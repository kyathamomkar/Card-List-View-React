const responsiveSize = "max(2.5vw, 24px)"

export const GroupIcon = ({ color = "#000000" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={responsiveSize}
    viewBox="0 0 24 24"
    width={responsiveSize}
    fill={color}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
  </svg>
)

export const UserIcon = ({ color = "#000000" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="50"
    viewBox="0 0 24 24"
    width="50"
    fill={color}
    preserveAspectRatio="none"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
)

export const ExpandLessIcon = ({ color = "#7E7E7E" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill={color}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
  </svg>
)

export const ExpandMoreIcon = ({ color = "#7E7E7E" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill={color}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
  </svg>
)
