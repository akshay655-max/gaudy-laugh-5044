import {
  Input,
  InputGroup,
  InputLeftElement,
  Box,
  Button,
  Heading,
} from "@chakra-ui/react";
import { BiSearchAlt2 } from "react-icons/bi";

const SearchBar = () => {
  return (
       
      <Box w="39%" m="auto" mt="200px"  zIndex="51" top="23px" pos="sticky" >

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<BiSearchAlt2 opacity="0.5" fontSize="25px" />}
          />
          <Input
            type="tel"
            placeholder="Search for"
            borderRadius="20px"
            _focus={{outline:"none"}}
            focusBorderColor="none
            "
         
        
          />
        </InputGroup>
        <Box
          display="flex"
          alignItems="center"
          pos="absolute"
          top="0px"
          right="0px"
          h="100%"
        >
          <Button colorScheme="teal" h="90%" borderRadius="20px" mr="4px" >
            Search
          </Button>
        </Box>
      </Box>
      
  );
};

export default SearchBar;
