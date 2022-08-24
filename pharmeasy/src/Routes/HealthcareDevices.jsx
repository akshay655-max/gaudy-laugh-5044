import React from 'react'
import {useState,useEffect} from "react";
import { deviceslist } from '../api/api';
import DevicesList from '../Components/DevicesList';
import { SimpleGrid } from '@chakra-ui/react';


const HealthcareDevices = () => {
  const[data,setData]=useState([]);



  useEffect(()=>{
   deviceslist().then((res)=>{setData(res)}).catch((err)=>{
     console.log(err);
   })
  },[])

// console.log(data);

  

  return (
    <div>
       <SimpleGrid columns={[1,3,3,3]}  spacingX='30px' spacingY='5px'  w='50%' margin="auto"  marginTop="20px">
      {data && data.map((ele)=><DevicesList
       {...ele}      
       key={ele._id}
      
      />)}

     </SimpleGrid>
      
       
    </div>
  )
}


export default HealthcareDevices;