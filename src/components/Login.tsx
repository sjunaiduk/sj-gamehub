import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import useAuthStore from "../store/useAuth";
import { useNavigate } from "react-router-dom";
import {
  Box,
  VStack,
  CardHeader,
  Heading,
  Card,
  Container,
} from "@chakra-ui/react";

const Login = () => {
  const { login } = useAuthStore();
  const nav = useNavigate();
  const responseMessage = (response: CredentialResponse) => {
    login(jwtDecode(response.credential || ""));
    nav("home");
  };

  return (
    <Container mt={20}>
      <Card
        height={"250px"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <CardHeader>
          <VStack>
            <Heading size={"2xl"}>Login</Heading>
            <Heading mt={6} size={"sm"}>
              Please login with Google
            </Heading>
          </VStack>
        </CardHeader>
        <Box pb={5}>
          <GoogleLogin onSuccess={responseMessage} />
        </Box>
      </Card>
    </Container>
  );
};

export default Login;
