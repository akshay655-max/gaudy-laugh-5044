import React, { useEffect,useState } from 'react'
import { getCovidData } from '../api/api';
import CovidList from '../Components/CovidList';
import { SimpleGrid } from '@chakra-ui/react';
import { CircularProgress } from '@chakra-ui/react';



const CovidEssentials = () => {
  const[data,setData]=useState([]);
  const[isLoading,setIsLoading]=(false);



  useEffect(()=>{
   getCovidData().then((res)=>
   { setIsLoading(true);
     setData(res);
     setIsLoading(false);
    }).catch((err)=>{
      setIsLoading(false);
     console.log(err);
   })
  },[])

// console.log(data);

  if(isLoading){
    return <CircularProgress isIndeterminate color='green.300' />
  }

  return (
    <div>
       <SimpleGrid columns={[1,3,3,3]}  spacingX='30px' spacingY='5px'  w='50%' margin="auto"  marginTop="20px">
      {data && data.map((ele)=><CovidList
       {...ele}      
       key={ele._id}
      
      />)}

     </SimpleGrid>
      
       
    </div>
  )
}

export default CovidEssentials

// let url = "https://pharmeasyapinodejs.herokuapp.com/covids";
// image: "https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fproducts_otc%2FI40695%2Fdettol-antiseptic-liquid-bottle-of-550-ml-2-1643880193.jpg&w=256&q=75"
// price: 190
// title: "Dettol Antiseptic Liquid Bottle Of 550 Ml"
// updatedAt: "2022-03-30T17:53:52.141Z"
// _id: "624499300e262b2c8270d423"