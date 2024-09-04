import  { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
} from "@chakra-ui/react";

const DataEntryModal = ({ isOpen, onClose, onSubmit }) => {
  const [inputData, setInputData] = useState("");

  const handleInputChange = (event) => setInputData(event.target.value);

  const handleSubmit = () => {
    onSubmit(inputData);
    setInputData(""); 
    onClose(); 
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Enter Additional Data</ModalHeader>
        <ModalBody>
          <FormControl>
            <FormLabel>Additional Information</FormLabel>
            <Input
              value={inputData}
              onChange={handleInputChange}
              placeholder="Enter details here"
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
            Submit
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DataEntryModal;
