import React from "react";
import {
  Box,
  Image,
  Stack,
  Divider,
  Text,
  Flex,
 
  
} from "@chakra-ui/react";

import { DrawerPin } from "../ChakraComponent/DrawerPin";
import { DrawerLogin } from "../ChakraComponent/DrawerLogin";

import {FiSmartphone,FiUser} from "react-icons/fi"
import {TbDiscount2} from "react-icons/tb"
import {BsCart} from "react-icons/bs"
import {NavLink,Link } from "react-router-dom"
const Navbar = () => {
  return (
      <div >
    <Box  display="flex" justifyContent="space-between" height="89px" boxShadow='xs' w="100%" m="auto"   position="fixed" top="0" zIndex="1" bg="#fafafa" >
      <Box display="flex" ml="40px" >
      <Link to="/"> <Box p="4">
          <Image src="https://assets.pharmeasy.in/apothecary/images/logo_big.svg?dim=360x0" />
        </Box></Link> 
        <Stack direction="row" h="75px" p={4}>
          <Divider
            orientation="vertical"
            colorScheme="colorSchem.500"
            variant="solid"
            border="1px"
          />
        </Stack>
        <Box p="4">
          <Box display="flex">
            <Image src="https://assets.pharmeasy.in/apothecary/images/ic_express%20delivery.svg?dim=32x0" />
            <Text>Express delivery to</Text>
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <DrawerPin />
           
          </Box>
        </Box>
      </Box>
 

     <Box display="flex" w="400px"justifyContent="space-around" alignItems="center" >
     <a href="https://apps.apple.com/IN/app/id982432643?mt=8"  _hover={{ textDecoration: 'none'}} >    <Box display="flex" justifyContent="space-evenly" alignItems="center" border="none" w="150px" bg="
#f2fdff" h="40px" borderRadius="5px"   _hover={{ bg:"#eef4ff" }}>
         
          <FiSmartphone/>
          <Text textDecoration="none">Dowlnoad App</Text>
        
        </Box></a>
        

         <Box display="flex" justifyContent="space-evenly" alignItems="center" w="250px"  height="35px" >
         <DrawerLogin/>
         <a href="https://pharmeasy.in/offers?src=header"  _hover={{ textDecoration: "dotted"}}><Box display="flex" w="75px" justifyContent="space-between"> <TbDiscount2 fontSize="22px" /><Text  >Offers</Text></Box></a>
        <Box display="flex" w="60px" justifyContent="space-between"><BsCart fontSize="22px" /><Text>Cart</Text></Box> 
         </Box>

     </Box>

    </Box>
    <Box  pos="fixed" top="85px" w="100%" bg="#eef4ff" h="50px">
 <Flex listStyleType="none"  display="flex" alignItems="center" justifyContent="center"  h="100%" >
 <NavLink to="/medicines"><Box>Medicines </Box></NavLink>
 <NavLink to="/labtests"> <Box  ml="10px">Lab Tests</Box></NavLink>
 <NavLink to="/healthcaree"> <Box  ml="10px">Healthcare</Box></NavLink>
 <NavLink to="/healthblogs"> <Box  ml="10px">Health Blogs</Box></NavLink>
 <NavLink to="/plus"><Box  ml="10px">PLUS</Box></NavLink>
 <NavLink to="/offers"><Box  ml="10px">Offers</Box></NavLink>
 <NavLink to="/surgeries"> <Box  ml="10px">Surgeries</Box></NavLink>
 <NavLink to="/valuestore"> <Box  ml="10px">Value Store</Box></NavLink>

</Flex>
 </Box>



    </div>
  );
};

export default Navbar;
