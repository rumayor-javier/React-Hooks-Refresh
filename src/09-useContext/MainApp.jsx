import { Navbar } from "./Navbar";
import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {
  return (
    <UserProvider>
      <Navbar />
    </UserProvider>
  );
};
