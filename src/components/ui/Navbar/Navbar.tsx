import { FC } from "react";

interface Props {
  isLoggedIn: boolean;
}

const Navbar: FC<Props> = ({ isLoggedIn }) => {
  return <div>Navbar {isLoggedIn ? "yes" : "no"}</div>;
};

export default Navbar;
