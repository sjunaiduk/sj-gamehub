import { Button, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchGamesInput from "./SearchGamesInput";
import { googleLogout } from "@react-oauth/google";
import useAuthStore from "../store/useAuth";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { logout, user } = useAuthStore();
  const nav = useNavigate();
  const loggedIn = user?.email !== undefined;
  return (
    <HStack>
      <HStack>
        <Image src={logo} minWidth={"65px"} width={"65px"}></Image>
      </HStack>
      <SearchGamesInput />
      <ColorModeSwitch />
      {loggedIn && (
        <Button
          onClick={() => {
            googleLogout();
            logout();
            nav("/");
          }}
        >
          Logout
        </Button>
      )}
    </HStack>
  );
};

export default Navbar;
