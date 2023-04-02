import React from "react";

export const ChildComp = React.memo(({ number, increment }) => {
  console.log("  Re-rendered component :(  ");

  return (
    <button className="btn btn-primary mr-3" onClick={() => increment(number)}>
      {number}
    </button>
  );
});
