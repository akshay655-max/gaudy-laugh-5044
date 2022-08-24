import React from 'react'
import { skincare } from '../api/api'
import { SimpleGrid } from '@chakra-ui/react';
import { useState,useEffect } from 'react';
import SkinCareList from '../Components/SkinCareList';


const SkinCare = () => {
  const[data,setData]=useState([]);
  
  
  
    useEffect(()=>{
     skincare().then((res)=>{setData(res)}).catch((err)=>{
       console.log(err);
     })
    },[])
  
  // console.log(data);
  
    
  
    return (
      <div>
         <SimpleGrid columns={[1,3,3,3]}  spacingX='30px' spacingY='5px'  w='50%' margin="auto"  marginTop="20px">
        {data && data.map((ele)=><SkinCareList
         {...ele}      
         key={ele._id}
        
        />)}
  
       </SimpleGrid>
        
         
      </div>
    )
}

export default SkinCare