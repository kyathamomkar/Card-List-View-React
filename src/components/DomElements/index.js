export const Text = (props) => {
  const {
    children,
    label = "",
    textTransform,
    color = "#4A4A4A",
    fontSize = "10px",
  } = props
  return (
    <span>
      {label && (
        <p
          style={{
            color,
            fontWeight: 600,
            fontSize: `max(1.7vmin,${fontSize})`,
          }}
        >
          {label}
        </p>
      )}
      <p
        style={{
          color,
          textTransform,
          fontSize: `max(1.5vmin,${fontSize})`,
        }}
      >
        {children}
      </p>
    </span>
  )
}
