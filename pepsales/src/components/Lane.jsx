import { Box, Heading } from "@chakra-ui/react";
import Block from "./Block";
import { useDrop } from "react-dnd";

const Lane = ({ title, blocks, onDrop }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "BLOCK",
    drop: (item) => {
      onDrop(item.id);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <Box
      ref={drop}
      bg={isOver ? "gray.200" : "gray.100"}
      p={4}
      borderRadius="md"
      boxShadow="md"
    >
      <Heading size="md" mb={4}>
        {title}
      </Heading>
      {blocks.map((block) => (
        <Block key={block.id} id={block.id} content={block.content} />
      ))}
    </Box>
  );
};

export default Lane;
