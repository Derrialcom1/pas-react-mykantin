import React from "react";

export default function Order() {
    return(
        <React.Fragment>
            <div className="h-full">
                <div className="flex justify-start">
                    <p className="font-bold">Total:</p>
                    <p className="px-16 font-bold text-lg">Rp. ..........</p>
                </div>
                <div className="bg-yellow-300 m-1 rounded-2xl h-12 justify-center flex">
                    <p className="font-bold py-3 text-lg">Pesan</p>
                </div>
            </div>
        </React.Fragment>
    )
}