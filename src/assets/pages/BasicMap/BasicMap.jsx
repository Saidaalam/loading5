import { useState, useRef } from "react";

const BasicMap = () => {
    const mapContainerStyle = {
        height: '500px',
        width: '100%',
        overflow: 'hidden',
        borderRadius : '10px',
    };

    return (
        <>
            <div className="leaflet-container mt-10">
                <div className="col text-center">
                    <h2 className="text-3xl mb-10 font-bold text-center">Find the Location</h2>
                    <div className="col">
                        <div style={mapContainerStyle}>
                            <iframe src="https://api.maptiler.com/maps/basic-v2/?key=2vOJOCRNYSDbr4bEaHmQ#1.0/0.00000/0.00000" width="100%" height="500px"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BasicMap;
