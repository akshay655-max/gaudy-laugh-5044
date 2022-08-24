import React from 'react'
import { Image,Heading,Box ,HStack} from '@chakra-ui/react'

const SimplifyLogo = () => {

  return (
      <div>
        <Box pos="relative" mt="40px">
        <Heading size='2xl' pos="absolute" w="30%"  left="500px" top="30px">
         Simplifying
         Healthcare
         Impacting Lives
       </Heading>
         <Heading size='lg' pos="absolute" w="40%"  left="450px" top="250px" >Download the App for Free</Heading>
           <Image mt="60px"  bgColor="#d7faf8"  src="https://assets.pharmeasy.in/apothecary/images/downloadBanner.webp?dim=1440x0&q=100"/>
            
           <HStack spacing='15px' pos="absolute"  left="550px" top="300px" display="flex" justifyContent="center" alignItems="center">
             <Box w='170px' >
             <a href="https://apps.apple.com/IN/app/id982432643?mt=8"> <Image src="https://assets.pharmeasy.in/apothecary/images/googlePlay.svg?dim=360x0" w="90%"/></a>
            </Box>
           <Box w='170px' >
             <a href="https://apps.apple.com/IN/app/id982432643?mt=8"> <Image src="https://assets.pharmeasy.in/apothecary/images/appStore.svg?dim=360x0" w="90%"/></a>
             </Box>
 
           </HStack>
       </Box>
    </div>
  )
}

export default SimplifyLogo