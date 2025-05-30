import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <h1>Link das dashboard</h1>
      <div>{children}</div>
    </div>
  );
};

export default layout;
