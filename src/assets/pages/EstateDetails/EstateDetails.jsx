import NavBar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const EstateDetails = () => {
    const { id } = useParams();
    const [estate, setEstate] = useState(null);

    useEffect(() => {
        fetch('../../../../public/estates.json')
            .then(response => response.json())
            .then(data => {
                const selectedEstate = data.estates.find(estate => estate.id === parseInt(id));
                setEstate(selectedEstate);
            })
            .catch(error => console.error('Error fetching estate data:', error));
    }, [id]);

    if (!estate) {
        return <div>Loading...</div>;
    }

    const { image, estate_title, facilities, location, price, area, segment_name, description, status} = estate;

    return (
        <div>
            <NavBar />
            <div className="card card-side bg-base-100 shadow-xl mt-4 p-6">
                <figure> <img className="h-full rounded-xl" src={image} alt={estate_title} /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold">{estate_title}</h2>
                    <p className="mt-4 text-lg"><span className="font-semibold">Description : </span> {description}</p>
                    <p className="mb-3"><span className="font-semibold">Review : </span> {estate.reviews[0].review}</p> 
                    <div className="mb-2"><span className="font-semibold">Segment Name : </span>{segment_name}</div> 
                    <div className="mb-2"><span className="font-semibold">Location : </span> {location}</div>
                    <div className="mb-2"><span className="font-semibold">Facilities : </span> {facilities}</div>
                    <div className="mb-2"><span className="font-semibold">Status : </span>  {status}</div>
                        <div><span className="font-semibold">Price :</span>{price}</div>
                        <div><span className="font-semibold">Area :</span>{area}</div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default EstateDetails;
