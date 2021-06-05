import React from "react";
import car from "../../images/car.png"

export default function List() {
    return(
        <React.Fragment>
            <div className="mt-6">
                <div className="flex items-center justify-center">
                    <img className="w-6 h-4 m-1" src={car} alt={car}/>
                    <p className="text-sm font-bold px-2">Jonggol, Bogor </p>
                    <p className="text-sm px-2 text-gray-500">Gratis</p>
                </div>
            </div>
        </React.Fragment>
    )
}