import axios from "axios";
export function getCovidData(){
   return axios.get("https://pharmeasyapinodejs.herokuapp.com/covids").then((res)=>{return res.data}).catch((err)=>{
      console.log(err);
    })
  }

  export function getHeatlthFoodAndDrink(){
    return axios.get( "https://pharmeasyapinodejs.herokuapp.com/HealthFoodandDrinks").then((res)=>{return res.data}).catch((err)=>{
       console.log(err);
     })
   }

   export function skincare(){
    return axios.get( "https://pharmeasyapinodejs.herokuapp.com/skincares").then((res)=>{return res.data}).catch((err)=>{
       console.log(err);
     })
   }
   export function deviceslist(){
    return axios.get( "https://pharmeasyapinodejs.herokuapp.com/HealthcareDevices").then((res)=>{return res.data}).catch((err)=>{
       console.log(err);
     })
   }


