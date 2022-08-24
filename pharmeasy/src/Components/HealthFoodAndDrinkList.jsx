import React from 'react'

import {Box,Badge,Image, SimpleGrid} from '@chakra-ui/react'


const HealthFoodAndDrinkList = ({image,price,title,_id}) => {

  return (
    <Box  borderWidth='1px' borderRadius='lg' overflow='hidden' mt="100px" display="flex" flexDirection="column" justifyContent="space-around" border="1px" >
    <Image src={image} alt="err"  w="75%" display="block" margin="auto" mt="20px" />

    <Box p='6'>
      <Box >
        <Badge borderRadius='full' px='2' colorScheme='red'>
          New
        </Badge>
      </Box>

      <Box
        mt='1'
        fontWeight='semibold'
        as='h4'
        lineHeight='tight'
        noOfLines={1}
      >
        {title}
      </Box>

      <Box>
      ₹ {price}
      </Box>
    </Box>
  </Box>

)
}

export default HealthFoodAndDrinkList