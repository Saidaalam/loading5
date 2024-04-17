import { Link, useLoaderData } from "react-router-dom";

const EstateInfo = ({ estateDetails }) => {
    const { estates } = useLoaderData();

    return (
        <div className="mt-10">
            <h2 className="text-4xl font-bold text-center">Choose your favorite Estate</h2>
            <p className="text-center mt-6">Discover Tranquility and Elegance at Windermere: A Stately Manor Nestled <br/> Amongst Rolling Hills, Where Every Corner Holds the Promise of Enchantment and Wonder</p>
            <div className="grid grid-cols-3 gap-6 mt-10">
                {estates.map((estate, index) => (
                    <div key={index} className="card bg-base-100 shadow-xl">
                        <figure>
                            <img src={estate.image} alt={estate.estate_title} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{estate.estate_title}</h2>
                            <p>{estate.description}</p>
                            <div className="mb-2 font-semibold">Location: {estate.location}</div>
                            <div className="card-actions justify-between">
                                <div className="badge badge-outline p-4">Price: {estate.price}</div>
                                <div className="badge badge-outline p-4">Area: {estate.area}</div>
                            </div>
                            <div className="card-actions justify-center mt-4">
                            <button className="btn w-full bg-slate-900 text-white">
                            <Link to={`/estateDetails/${estate.id}`}>View Details</Link>
                            </button>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EstateInfo;
