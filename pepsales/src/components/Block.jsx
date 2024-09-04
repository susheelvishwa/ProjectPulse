import { useDrag } from "react-dnd";
import { Box } from "@chakra-ui/react";

const ItemType = "BLOCK";

const Block = ({ id, content, laneId }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType,
    item: { id, content, laneId },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <Box
      ref={drag}
      bg="blue.500"
      color="white"
      p={4}
      mb={4}
      borderRadius="md"
      boxShadow="md"
      textAlign="center"
      opacity={isDragging ? 0.5 : 1}
    >
      {content}
    </Box>
  );
};

export default Block;
