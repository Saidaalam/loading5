import { useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

const ClientReview = () => {
    const { estates } = useLoaderData();

    const margin = {
        marginLeft: '-80px',
    };

    return (
        <div className="mt-10">
            <h2 className="text-4xl font-bold text-center">Client Reviews</h2>
            <div className="grid grid-cols-3 gap-4">
                {estates.map((estate, index) => (
                    <div key={index} className="card card-side bg-base-200 shadow-xl mt-10">
                        <div className="card-body grid grid-cols-2">
                            <div className="avatar">
                                <div className="w-14 h-16 rounded-full">
                                    <img src={estate.reviews[0].client_pic} alt={estate.reviews[0].client} />
                                </div>
                            </div>
                            <div style={margin}>
                                <h2 className="card-title mb-3 font-bold text-xl">{estate.reviews[0].client}</h2>
                                <p className="mb-3">{estate.reviews[0].review}</p>
                                    <p className="font-semibold mb-2">Role: {estate.reviews[0].role}</p>
                                    <p className="font-semibold flex text-center  align-center">Rating: <FaStar className="text-yellow-500 ml-3 mt-1" /><FaStar className="text-yellow-500 mt-1" /><FaStar className="text-yellow-500 mt-1" /><FaStar className="text-yellow-500 mt-1" /><FaStar className="text-yellow-500 mt-1" /><FaStar className="text-yellow-500 mt-1"/></p>
                                </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClientReview;
