import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const AboutPage = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <h1>
        About Page<small> {user?.name}</small>
      </h1>
      <hr />
      <pre aria-label="pre">{JSON.stringify(user, null, 3)}</pre>
    </>
  );
};
