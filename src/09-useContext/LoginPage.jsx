import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);
  console.log(user);

  return (
    <>
      <h1>Login Page</h1>
      <hr />
      <pre aria-label="pre">{JSON.stringify(user, null, 3)}</pre>
      <button
        role="setUserButton"
        className="btn btn-primary"
        onClick={() =>
          setUser({ id: 123, name: "Rudolph", email: "rudo@google.con" })
        }
      >
        Set user
      </button>
    </>
  );
};
