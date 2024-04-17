import {useLoaderData} from "react-router-dom";
import NavBar from "../shared/Navbar/Navbar";
import Slider from "../slider/slider";
import TeamInfo from "../teamInfo/teamInfo";
import EstateInfo from "../EstateInfo/EstateInfo";
import BasicMap from "../BasicMap/BasicMap";
import Footer from "../shared/Footer/Footer";
import ClientReview from "../ClientReview/ClientReview";
import { useEffect } from "react";

const Home = () => {
    useEffect(() =>{
         document.title = "LuxeNext | Home";
    },[]);

const estates = useLoaderData();
 console.log(estates);

    return (
        <div>
            <NavBar></NavBar>
            <Slider></Slider>
            <TeamInfo></TeamInfo>
            <EstateInfo></EstateInfo>
            <BasicMap></BasicMap>
            <ClientReview></ClientReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;