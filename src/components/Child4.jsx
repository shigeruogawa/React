import { memo } from "react";

const style = {
  height: "40px",
  backgroundColor: "gray",
  padding: "8px",
};

export const Child4 = memo(() => {
  console.log("Child4 レンダリング");

  return (
    <div style={style}>
      <p>Child4</p>
    </div>
  );
});
