import React from 'react'
import {Box,Badge,Image} from '@chakra-ui/react'

const DevicesList = ({image,price,title,_id}) => {
    
  return (
   
    <Box  borderWidth='1px' borderRadius='lg' overflow='hidden' mt="200px" display="flex" flexDirection="column" justifyContent="space-around" border="1px" >
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

export default DevicesList;


// let url = "https://pharmeasyapinodejs.herokuapp.com/covids";
// image: "https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fproducts_otc%2FI40695%2Fdettol-antiseptic-liquid-bottle-of-550-ml-2-1643880193.jpg&w=256&q=75"
// price: 190
// title: "Dettol Antiseptic Liquid Bottle Of 550 Ml"
// updatedAt: "2022-03-30T17:53:52.141Z"
// _id: "624499300e262b2c8270d423"