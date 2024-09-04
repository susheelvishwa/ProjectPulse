import { useDrop } from "react-dnd";
import { Box, Heading } from "@chakra-ui/react";
import Block from "./Block";

const ItemType = "BLOCK";

const Lane = ({ id, title, blocks, onDrop }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemType,
    drop: (item) => onDrop(item, id),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <Box
      ref={drop}
      bg={isOver ? "green.100" : "gray.100"}
      p={4}
      borderRadius="md"
      boxShadow="md"
    >
      <Heading size="md" mb={4}>
        {title}
      </Heading>
      {blocks.map((block) => (
        <Block
          key={block.id}
          id={block.id}
          content={block.content}
          laneId={id}
        />
      ))}
    </Box>
  );
};

export default Lane;
