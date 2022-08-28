import React from 'react'
import { SimpleGrid ,Box,Heading,Stack,Image} from '@chakra-ui/react'
import {
    ListItem,
    UnorderedList,
    Icon,HStack
  } from '@chakra-ui/react'

  import {FaInstagram ,FaFacebook} from 'react-icons/fa';
  import {BsYoutube,BsTwitter } from "react-icons/bs";


const Footer = () => {
  return (
    <SimpleGrid columns={[1,2,3,4]} spacing={20} w="100%" m="20px" bgColor="#eef4ff" mt="60px">
     <Box >
         <Stack spacing='30px'>
         <Box>
             <Stack  spacing='15px'>
           <Heading as='h4' size='md' mt="60px">Company </Heading>
            <UnorderedList listStyleType="none">
              <Stack>
              <ListItem>About Us</ListItem>
              <ListItem>Careers</ListItem>
              <ListItem>Blog</ListItem>
              <ListItem>Partner with PharmEasy</ListItem>
              <ListItem>Sell at PharmEasy</ListItem>
              </Stack>  
           </UnorderedList>
             </Stack>
         </Box>

         <Box>
         <Stack  spacing='15px'>
         <Heading as='h4' size='md' mt="60px">Our Services </Heading>
            <UnorderedList listStyleType="none">
                <Stack>
              <ListItem>Order Medicine</ListItem>
              <ListItem>Healthcare Products</ListItem>
              <ListItem>Lab Tests</ListItem>
              </Stack>
           </UnorderedList>
           </Stack>
         </Box>
         </Stack>
     </Box>


     <Box >
        <Box>
           <Stack spacing="15px">
            <Heading as='h4' size='md' mt="60px">Company </Heading>
            <UnorderedList listStyleType="none">
               <Stack>
              <ListItem>Covid Essentials</ListItem>
              <ListItem>Personal Care</ListItem>
              <ListItem>Health Food and Drinks</ListItem>
              <ListItem>Beauty</ListItem>
              <ListItem>Skin care</ListItem>
              <ListItem>Home Care</ListItem>
              <ListItem>Ayurvedic Care</ListItem>
              <ListItem>Sexual Wellness</ListItem>
              <ListItem>Fitness Supplement</ListItem>
              <ListItem>Mother and Baby care</ListItem>
              <ListItem>Healthcare Devices</ListItem>
              <ListItem>Health Condition</ListItem>
              <ListItem>Diabetic Care</ListItem>
              <ListItem>Elderly Care</ListItem>
              <ListItem>Accessories And Wearables</ListItem>
              <ListItem>Top Products</ListItem>
              </Stack> 
            </UnorderedList>
            </Stack> 
         </Box>
     </Box>


     <Box >
         <Stack spacing='30px'>
         <Box>
             <Stack  spacing='15px'>
           <Heading as='h4' size='md' mt="60px">Need Help</Heading>
            <UnorderedList listStyleType="none">
                <Stack>
              <ListItem>Browse All Medicines</ListItem>
              <ListItem>Browse All Molecules</ListItem>
              <ListItem>Browse All Cities</ListItem>
              <ListItem>Browse All Areas</ListItem>
              <ListItem>Browse All Stores</ListItem>
              <ListItem>FAQs</ListItem>
              </Stack>
           </UnorderedList>
             </Stack>
         </Box>

         <Box>
         <Stack  spacing='15px'>
         <Heading as='h4' size='md' mt="60px">Policy Info </Heading>
            <UnorderedList listStyleType="none">
                <Stack>
              <ListItem>Editorial Policy</ListItem>
              <ListItem>Privacy Policy</ListItem>
              <ListItem>Vulnerability Disclosure Policy</ListItem>
              <ListItem>Terms and Conditions</ListItem>
              <ListItem>Customer Support Policy</ListItem>
              <ListItem>Return Policy</ListItem>
             </Stack>
               </UnorderedList>
           </Stack>
         </Box>
         </Stack>
     </Box>

 <Box >
     <Stack spacing="20px">
     <Heading as='h4' size='md' mt="60px">Follow us on </Heading>
    <HStack spacing="25px"  display="flex" justifyContent="flex-start"  >
     <Box >
       <FaInstagram w="90px" />
     </Box>
     <Box>
       <FaFacebook/>
    </Box>
    <Box>
      <BsYoutube/>
    </Box>
    <Box>
      <BsTwitter/>
    </Box>
  </HStack>
  </Stack>
</Box>

<Box mb="60px"  w="800px"  ml="30px">
     <Stack spacing="20px">
     <Heading as='h4' size='md' mt="60px" textAlign="left">Our Payment Partners </Heading>
    <HStack spacing="25px"  display="flex" justifyContent="flex-start">
     <Box   w="60px">
     <Image  src="https://assets.pharmeasy.in/apothecary/images/gpay.png?dim=1440x0"/>
     </Box>
     <Box   w="60px" >
       <Image  src="https://assets.pharmeasy.in/apothecary/images/paytm.png?dim=1440x0"/>
    </Box>
    <Box   w="25px">
    <Image  src="https://assets.pharmeasy.in/apothecary/images/phonepe.png?dim=1440x0"/>
    </Box>
    <Box  w="40px">
    <Image  src="https://assets.pharmeasy.in/apothecary/images/amazon.png?dim=1440x0"/>
    </Box>
    <Box   w="40px">
    <Image  src="https://assets.pharmeasy.in/apothecary/images/mobikwik.png?dim=1440x0"/>
    </Box>
    <Box   w="40px">
    <Image  src="https://assets.pharmeasy.in/apothecary/images/olamoney.png?dim=1440x0"/>
    </Box>
    <Box w="40px">
    <Image  src="https://assets.pharmeasy.in/apothecary/images/maestro.png?dim=1440x0"/>
    </Box>
    <Box  w="40px">
    <Image  src="https://assets.pharmeasy.in/apothecary/images/mastercard.png?dim=1440x0"/>
    </Box>
    <Box   w="40px">
    <Image  src="https://assets.pharmeasy.in/apothecary/images/visa.png?dim=1440x0"/>
    </Box>
    <Box   w="40px">
    <Image  src="https://assets.pharmeasy.in/apothecary/images/rupay.png?dim=1440x0"/>
    </Box>
  </HStack>
  </Stack>
</Box>




   
</SimpleGrid>
  )
}

export default Footer