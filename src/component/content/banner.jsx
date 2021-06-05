import React from "react";
import bannerImage from "../../images/header/banner.png"

export default function Banner() {
    return(
        <React.Fragment>
            <div style={{background:"#FFF7ED"}} className="flex items-center justify-center px-24 py-6 rounded-xl">
                <div className="h-full flex">
                    <img className="w-44 h-24" src={bannerImage} alt={bannerImage} />
                </div>
                <div style={{color:'#FB6D3A'}} className="ml-8 h-full font-bold">
                    <h1 className="text-3xl font-extrablack">Promo Hari Ini</h1>
                    <h2 className="text-2xl font-semibold">Perut kenyang, hati senang</h2>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <ul className="flex w-1/12 items-center justify-between mt-4">
                    <li>
                        <div className="w-2 h-2 rounded-full border bg-red-200"></div>
                    </li>
                    <li>
                        <div className="w-2 h-2 rounded-full border"></div>
                    </li>
                    <li>
                        <div className="w-2 h-2 rounded-full border"></div>
                    </li>
                    <li>
                        <div className="w-2 h-2 rounded-full border"></div>
                    </li>
                    <li>
                        <div className="w-2 h-2 rounded-full border"></div>
                    </li>
                    <li>
                        <div className="w-2 h-2 rounded-full border"></div>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}