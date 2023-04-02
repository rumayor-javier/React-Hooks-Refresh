import React from "react";

export const Small = React.memo(({ value }) => {
  console.log("Small component was rendered");
  return <small>{value}</small>;
});
