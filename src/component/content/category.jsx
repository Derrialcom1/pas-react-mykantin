import React from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";
import Star from "../../images/navbar/star.png"


export default function Category() {
    const [populer, setPopuler] = React.useState([])

    const getPopuler = async() => {
        try {
            const url = "https://belajar-react.smkmadinatulquran.sch.id/api/populer/all"
            const response = await  axios.get(url);
            console.log(response.data.data);
            setPopuler(response.data.data)
        } catch (error) {
            console.log(error)
        }
    };

    React.useEffect(()=>{
        getPopuler();
    }, []);

    return(
        <React.Fragment>
            <div className="mt-20 pr-5">
                <div className="flex items-start">
                    <h1 className="font-extrabold text-2xl">Populer</h1>
                </div>
                <div className="mt-3">
                    <ul className="flex items-center w-full flex-wrap overflow-auto justify-between">
                        {populer.map((dt, index) => (
                            <li key={index} className="flex-none w-3/10 h-48 relative m-4">
                                <img src={dt.image} alt={dt.image} className="rounded-xl w-full h-32" />
                                <p className="absolute p-4 bg-white rounded-3xl h-1/10 flex items-center top-20 bottom-0 left-3 font-bold text-xs">{dt.waktu}</p>
                                <h1 className="font-black">{dt.name}</h1>
                                <div className="flex">
                                    <div className="flex"><img className="w-4 h-4 m-1" src={Star} alt={Star} /><p className="font-bold">{dt.rating}</p></div>
                                    <p className="font-bold px-20">Rp.{dt.harga}</p>
                                </div>
                            </li>
                        ))} 
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}