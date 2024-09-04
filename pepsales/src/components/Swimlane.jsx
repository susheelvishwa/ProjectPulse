import { useState } from "react";
import { Grid } from "@chakra-ui/react";
import Lane from "./Lane";

const initialLanes = {
  todo: { title: "To Do", blocks: [{ id: "1", content: "Task 1" }] },
  inProgress: {
    title: "In Progress",
    blocks: [{ id: "2", content: "Task 2" }],
  },
  done: { title: "Done", blocks: [] },
};

const Swimlane = () => {
  const [lanes, setLanes] = useState(initialLanes);

  const handleDrop = (item, targetLaneId) => {
    const { id, content, laneId } = item;
    if (laneId === targetLaneId) return;

    setLanes((prevLanes) => {
      const sourceLane = prevLanes[laneId];
      const targetLane = prevLanes[targetLaneId];

      return {
        ...prevLanes,
        [laneId]: {
          ...sourceLane,
          blocks: sourceLane.blocks.filter((block) => block.id !== id),
        },
        [targetLaneId]: {
          ...targetLane,
          blocks: [...targetLane.blocks, { id, content }],
        },
      };
    });
  };

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      {Object.keys(lanes).map((laneId) => (
        <Lane
          key={laneId}
          id={laneId}
          title={lanes[laneId].title}
          blocks={lanes[laneId].blocks}
          onDrop={handleDrop}
        />
      ))}
    </Grid>
  );
};

export default Swimlane;
