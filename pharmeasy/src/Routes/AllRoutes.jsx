import {Routes,Route} from "react-router-dom";
import CovidEssentials from "./CovidEssentials";
import Healthcare from "./Healthcare";
import HealthcareDevices from "./HealthcareDevices";
import HealthFoodAndDrink from "./HealthFoodAndDrink";
import Home from "./Home";
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
                <Route path="/devices" element={<HealthcareDevices/>}></Route>
            </Routes>

        </div>
    )
}
export default AllRoutes;