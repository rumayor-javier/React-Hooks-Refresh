import React from "react";

export const ShowIncrement = React.memo(({ increment }) => {
  console.log("ShowIncrement was rendered");
  return (
    <button className="btn btn-primary" onClick={() => increment(5)}>
      +
    </button>
  );
});
