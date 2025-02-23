import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  const isRouteError = isRouteErrorResponse(error);
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Oops</Heading>
        <Text>{isRouteError ? "Page not found" : "Something went wrong"}</Text>
      </Box>
    </>
  );
};

export default ErrorPage;
