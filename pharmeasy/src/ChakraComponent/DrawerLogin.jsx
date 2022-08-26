import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Stack,
  Input,
  Box,
  Image,
  Text,
  Badge,
  Button,
  FormLabel,
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  AlertDialog
} from "@chakra-ui/react";
import axios from "axios";
import{useState,useContext} from "react"
import { FiUser } from "react-icons/fi";
import { PasswordInput } from "./PasswordInput";

import { AppContext } from "../Context/ContextProvider";
import {useNavigate } from "react-router-dom";
import {BsDot} from"react-icons/bs";













export function DrawerLogin() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const {isAuth,userLogin,setIsAuth,email,password,setEmail,setPassword}=useContext(AppContext);
  const navigate=useNavigate();
  const[isLoading,setIsLoading]=useState(false);
  const[isError,setError]=useState(false)


  const handleClick = () => {
    axios
      .post(`https://reqres.in/api/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
     
        // console.log(res.data.token);
     
        userLogin(res.data.token);
        alert("Login Successful")
       
       
        onClose();
        navigate("/")
      })
      .catch((err) => {
       
        setIsLoading(false);
        setError(true);
        onClose();
      });
  };
    
  // console.log(token);

  //  console.log(email);
  //  console.log(password);


  return (
    <>
      <Button bg="#fafafa" onClick={onOpen} >
        <FiUser fontSize="22px" /><Text fontSize='xs'>login</Text><BsDot color="red"/>
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton bg="#c6f6d4" _hover={{ bg: "#c6f6d4" }} />
          <DrawerHeader borderBottomWidth="1px" w="100%">
            <Box p="4" bg="#0f847d" w="100%">
              <Image src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png?dim=360x0" />
            </Box>
          </DrawerHeader>
         
          <DrawerBody mt="40px">
            <Stack spacing="24px">
              <Box >
              <FormLabel htmlFor='username' >Email</FormLabel>
                <Input
                  id="username"
                  placeholder="Enter your email id"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Box>
              <Box >
              <FormLabel htmlFor='username' >Password</FormLabel>
                <PasswordInput password={password} setPassword={setPassword} />
              </Box>

              <Box >
                <Button
                  bg="#0f847d"
                  w="100%"
                  _hover={{ bg: "#0f847d" }}
                  onClick={handleClick}
                  mt="20px"
                >
                  Submit {isLoading && <div>
                    <Spinner color='red.500' />
                    </div>}
                </Button>
              </Box>
              <Box>
                <Text fontSize="xs">
                  By clickng, you agree with our{" "}
                  <a
                    color="#0f847d"
                    href="https://pharmeasy.in/legal/privacy-policy"
                  >
                    {" "}
                    <Badge
                      display="inline"
                      variant="subtle"
                      textTransform="lowercase"
                      colorScheme="green"
                    >
                      Privacy Policy
                    </Badge>
                  </a>
                </Text>
              </Box>
            </Stack>
          </DrawerBody>
         

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose} bg="#0f847d">
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      {isError && alert("password and email do not match")}
    </>
  );
}
