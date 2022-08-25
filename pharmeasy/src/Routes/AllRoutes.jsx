
import {Routes,Route} from "react-router-dom";
import CovidEssentials from "./CovidEssentials";
import Healthcare from "./Healthcare";
import HealthcareDevices from "./HealthcareDevices";
import HealthFoodAndDrink from "./HealthFoodAndDrink";
import Home from "./Home";
import Medicines from "./Medicines";
import SkinCare from "./SkinCare";


const AllRoutes=()=>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>}   />
                <Route path="/covidessential"  element={<CovidEssentials/>}   />
                <Route path="/healthcare" element={<Healthcare/>}   />
                <Route path="/healthfood" element={<HealthFoodAndDrink/>}   />
                <Route path="/skincare" element={<SkinCare/>}/>
                <Route path="/devices" element={<HealthcareDevices/>}/>
                <Route path="/skincare" element={<SkinCare/>}/>
               
               
                <Route path="/labtests" element={<h1>akshay</h1>}/>
                <Route path="/healthcaree" element={<h1>suman</h1>}/>
                <Route path="/healthblogs" element={<h1>meenakshi</h1>}/>
                <Route path="/plus" element={<h1>ramesh</h1>}/>
                <Route path="/offers" element={<h1>suresh</h1>}/>
                <Route path="/surgeries" element={<h1>suresh</h1>}/>
                <Route path="/valuestore" element={<h1>suresh</h1>}/>
                <Route path="/medicines" element={<Medicines/>}/>
               



            </Routes>

        </div>
    )
}
export default AllRoutes;