// import { ColoredMessage } from "./components/ColoredMessage";

// const onClickButton = () => alert();

// const contentColorStyle = {
//   color: "pink",
//   fontSize: "30px",
// };

// export const App = () => {
//   return (
//     <>
//       <h1 style={{ color: "purple" }}>hello world</h1>
//       <p style={contentColorStyle}>お元気ですか</p>
//       <ColoredMessage color="blue">お元気ですか</ColoredMessage>
//       <ColoredMessage color="pink">元気です。</ColoredMessage>
//       <button onClick={onClickButton}>ボタン</button>
//     </>
//   );
// };

import { useEffect, useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    alert("数字が変わりました。");
  }, [num]);

  const onclickButton = () => {
    // setNum(num + 1);
    // setNum(num + 1);
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
  };

  return (
    <>
      <h1 style={{ color: "purple" }}>hello world </h1>
      <ColoredMessage color="orange">元気ですか</ColoredMessage>
      <ColoredMessage color="pink">元気です</ColoredMessage>
      <button onClick={onclickButton}>ボタン</button>
      <p>{num}</p>
    </>
  );
};
