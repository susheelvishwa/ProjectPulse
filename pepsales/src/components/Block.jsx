import { Box } from "@chakra-ui/react";
import { useDrag } from "react-dnd";

const Block = ({ content, id }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "BLOCK",
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <Box
      ref={drag}
      bg={isDragging ? "blue.300" : "blue.500"}
      color="white"
      p={4}
      mb={4}
      borderRadius="md"
      boxShadow="md"
      textAlign="center"
      opacity={isDragging ? 0.5 : 1}
      cursor="move"
    >
      {content}
    </Box>
  );
};

export default Block;
