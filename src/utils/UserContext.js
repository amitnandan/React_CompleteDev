import { createContext } from "react";

//kinda central global object
const UserContext = createContext({
  loggedInUser: "Default User",
});

export default UserContext;
