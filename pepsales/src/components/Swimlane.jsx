import { useState } from "react";
import { Grid, useDisclosure } from "@chakra-ui/react";
import Lane from "./Lane";
import DataEntryModal from "./DataEntryModal";

const Swimlane = () => {
  const [lanes, setLanes] = useState([
    {
      id: 1,
      title: "To Do",
      blocks: [
        { id: 1, content: "Task 1" },
        { id: 2, content: "Task 2" },
      ],
    },
    {
      id: 2,
      title: "In Progress",
      blocks: [
        { id: 3, content: "Task 3" },
        { id: 4, content: "Task 4" },
      ],
    },
    {
      id: 3,
      title: "Done",
      blocks: [
        { id: 5, content: "Task 5" },
        { id: 5, content: "Task 6" },
      ],
    },
  ]);

  const [currentBlockId, setCurrentBlockId] = useState(null);
  const [targetLaneId, setTargetLaneId] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDrop = (blockId, targetLaneId) => {
    setCurrentBlockId(blockId);
    setTargetLaneId(targetLaneId);
    onOpen();
  };

  const handleDataSubmit = (data) => {
    setLanes((prevLanes) => {
      const updatedLanes = prevLanes.map((lane) => {
        const updatedBlocks = lane.blocks.filter(
          (block) => block.id !== currentBlockId
        );
        return { ...lane, blocks: updatedBlocks };
      });

      const block = prevLanes
        .flatMap((lane) => lane.blocks)
        .find((block) => block.id === currentBlockId);

      if (block && targetLaneId) {
        const targetLane = updatedLanes.find(
          (lane) => lane.id === targetLaneId
        );
        if (targetLane) {
          targetLane.blocks.push({ ...block, additionalData: data });
        }
      }

      return updatedLanes;
    });
    setCurrentBlockId(null);
    setTargetLaneId(null);
  };

  return (
    <>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {lanes.map((lane) => (
          <Lane
            key={lane.id}
            title={lane.title}
            blocks={lane.blocks}
            onDrop={(blockId) => handleDrop(blockId, lane.id)}
          />
        ))}
      </Grid>

      <DataEntryModal
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleDataSubmit}
      />
    </>
  );
};

export default Swimlane;
