import React from 'react'
import { Box,Stack,Image ,Text,SimpleGrid,Heading} from '@chakra-ui/react'
import { Link } from "react-router-dom"



const ShopByCategory = () => {
  return (
    <div>
   <Box display="flex" justifyContent="flex-start" w="90%"   margin="auto"  marginTop="20px">
   <Heading as='h3' size='lg'>Shop by Categories</Heading>
   </Box>
    
    
 <SimpleGrid columns={[1,2,6,8]} spacing={10}  w='90%' margin="auto"  marginTop="20px">
    <Box w='150px' h='150px' border="0.5px" borderRadius="10px" boxShadow='xs' ><Link to="/covidessential">
    <Stack spacing='24px'>
        <Image src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/6d462f424a43372ea8b7b6f8ca13e052.png?f=png?dim=360x0"  boxSize='100%'/>
        <Text   fontWeight='semibold' >Covid essentials</Text> 
    </Stack>
    </Link>
    
   
  </Box>

  <Box w='150px' h='150px' boxShadow='xs' borderRadius="10px" ><Link to="/devices"  target="_blank">
     <Stack spacing='24px' >
       <Image src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/ac80578390a23bcfb1ed5a4551886ea7.png?f=png?dim=360x0"/>
       <Text   fontWeight='semibold' marginTop="20px"  >Healthcare Devices</Text>
     </Stack></Link>
  </Box>

 <Box w='150px' h='150px'boxShadow='xs' borderRadius="10px"  >
 <Link to="/healthfood" target="_blank">
     <Stack spacing='24px'>
       <Image src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/aace6d1f0dc03f1f8c6e26dd880e1934.png?f=png?dim=360x0"/>
        <Text  fontWeight='semibold'>Health food and drinks</Text>
     </Stack> </Link> 
  </Box>
 

  <Box w='150px' h='150px' boxShadow='xs' borderRadius="10px">
   <Stack spacing='24px'>
       <Image src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/3c7ab4d29c6631f7a5cb7eafd3bfbc79.png?f=png?dim=360x0" />
       <Text   fontWeight='semibold'>Beauty</Text>
   </Stack>   
  </Box>

  <Box w='150px' h='150px'boxShadow='xs'borderRadius="10px" ><Link to="/skincare"  target="_blank">
    <Stack spacing='24px'>
        <Image src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/9b3ad6971475304e9e1614ac30d4545a.png?f=png?dim=360x0"/>
         <Text   fontWeight='semibold'>Skin care</Text>
    </Stack></Link>
  </Box>

  <Box w='150px' h='150px' boxShadow='xs' borderRadius="10px" >
    <Stack spacing='24px'>
        <Image src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/dc96175686f135b5a22d1e57165d0246.png?f=png?dim=360x0"/>
        <Text   fontWeight='semibold'>Home care</Text>
    </Stack>
  </Box>

  <Box w='150px' h='150px'boxShadow='xs'borderRadius="10px" >
     <Stack spacing='24px'>
        <Image src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/ecad9a974e003fb987858b3ee81413c6.png?f=png?dim=360x0"/>
        <Text  fontWeight='semibold'>Ayurvedic care</Text>
     </Stack>
  </Box>

  <Box w='150px' h='150px'boxShadow='xs'borderRadius="10px" >
     <Stack spacing='24px'>
        <Image src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f970ef9868093acb9d1d37a9387912f9.png?f=png?dim=360x0"/>
        <Text  fontWeight='semibold'>Sexual wellness</Text>
     </Stack>
  </Box>



  </SimpleGrid>




    </div>
  )
}

export default ShopByCategory