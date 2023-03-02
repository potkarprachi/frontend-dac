import "./App.css";
import { TransactionPage } from "./Components/Farmer/TransactionPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./Components/MainPage/LandingPage";
import Signup from "./Components/MainPage/Signup";
import { FarmerCropStatus } from "./Components/Farmer/FarmerCropStatus";
import CustomerLogin from "./Components/Customer/CustomerLogin";
import AdminLogin from "./Components/Admin/AdminLogin";
import { Footer } from "./Components/Layout/Footer";
import FarmerLogin from "./Components/Farmer/FarmerLogin";
import { FarDashboard } from "./Components/Farmer/FarDashboard";
import { FarmerSideNav } from "./Components/Layout/FarmerSideNav";
import TopNav from "./Components/Layout/TopNav";
import { AddCrop } from "./Components/Farmer/Addcrop";
import { CropStatusFamer } from "./Components/Admin/CropStatusFarmer";
import AdminDashBoard from "./Components/Admin/AdminDashBoard";
import AdminSideNav from "./Components/Layout/AdminSideNav";
import AdminTransaction from "./Components/Admin/AdminTransaction";

//hi 
//hii by Akshay
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <TopNav></TopNav>
          <Routes>
            <Route path="/" element={<LandingPage></LandingPage>}></Route>
            <Route path="/transaction" element={<TransactionPage></TransactionPage>}></Route>
            <Route path="/signup" element={<Signup></Signup>}></Route>
            <Route path="/farmerlogin" element={<FarmerLogin></FarmerLogin>}></Route>
            <Route path="/adminCropTable" element={<CropStatusFamer></CropStatusFamer>}></Route>
            <Route path="/cropStatusFarmer" element={<FarmerCropStatus></FarmerCropStatus>}></Route>
            <Route path="/customerlogin" element={<CustomerLogin></CustomerLogin>}></Route>
            <Route path="/adminlogin" element={<AdminLogin></AdminLogin>}></Route>
            <Route path="/farmerdashboard" element={<FarDashboard></FarDashboard>}></Route>
            <Route path="/farmersidenavbar" element={<FarmerSideNav></FarmerSideNav>}></Route>
            <Route path="/addCrop" element={<AddCrop></AddCrop>}></Route>
            <Route path="/admindashboard" element={<AdminDashBoard></AdminDashBoard>}></Route>
            <Route path="/adminsidebar" element={<AdminSideNav></AdminSideNav>}></Route> 
            <Route path="/admintransaction" element={<AdminTransaction></AdminTransaction>}></Route> 
            </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;