
import {Routes,Route} from "react-router-dom";
import { Login } from "../ChakraComponent/Login"
import CovidEssentials from "./CovidEssentials";
import Healthcare from "./Healthcare";
import HealthcareDevices from "./HealthcareDevices";
import HealthFoodAndDrink from "./HealthFoodAndDrink";
import Home from "./Home";
import Medicines from "./Medicines";
import PrivateRoute from "./PrivateRoute";
import SkinCare from "./SkinCare";
import { useContext} from "react";
import { AppContext } from "../Context/ContextProvider";

const AllRoutes=()=>{
     const {isModalVisible,setIsModalVisible,handleClick}=useContext(AppContext)
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>}   />
                <Route path="/login" element={<Login isOpen={isModalVisible}
                setIsOpen={setIsModalVisible}  handleModal={handleClick}/>}   />

                <Route path="/covidessential"  element={<CovidEssentials/>}   />
                <Route path="/healthcare" element={<Healthcare/>}   />
                <Route path="/healthfood" element={<HealthFoodAndDrink/>}   />
                <Route path="/skincare" element={<SkinCare/>}/>
                <Route path="/devices" element={<HealthcareDevices/>}/>
                <Route path="/skincare" element={<SkinCare/>}/>
               
               
                <Route path="/labtests" element={<h1>Labtest</h1>}/>
                <Route path="/healthcaree" element={<h1>HealthCare</h1>}/>
                <Route path="/healthblogs" element={<h1>HealthBlogs</h1>}/>
                <Route path="/plus" element={<h1>Plus</h1>}/>
                <Route path="/offers" element={<h1>offers</h1>}/>
                <Route path="/surgeries" element={<h1>surgeries</h1>}/>
                <Route path="/valuestore" element={<h1>VAluestore</h1>}/>
                <Route path="/medicines" element={<Medicines/>}/>
               



            </Routes>

        </div>
    )
}
export default AllRoutes;