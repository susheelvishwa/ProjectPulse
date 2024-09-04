import { ChakraProvider, Container } from "@chakra-ui/react";
import Swimlane from "./components/Swimlane";

function App() {
  return (
    <ChakraProvider>
      <Container maxW="container.xl" py={5}>
        <Swimlane />
      </Container>
    </ChakraProvider>
  );
}

export default App;
