export const ColoredMessage = (props) => {
  const contentStyle = {
    color: props.color,
    fontSize: "50px",
  };

  return <p style={contentStyle}>{props.chidren}</p>;
};
