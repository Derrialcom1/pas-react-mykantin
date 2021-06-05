import React from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";
import Star from "../../images/navbar/star.png"
import Popup from 'reactjs-popup'


export default function Populer() {
    const [populer, setPopuler] = React.useState([])
    const [angka, setAngka] = React.useState(0)

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
    const nambahNumber = () => {
        setAngka(angka + 1)
    }
    const minusNumber = () => {
        setAngka(angka - 1)
    }
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
                    {populer.map((dt, id)=>(
                            <li className={`flex-none relative w-3/10 h-full m-3`} key={id}>
                                <Popup trigger={
                                    <img className={`rounded-xl w-full h-32`} src={dt.image} alt={dt.name} />
                                } modal>
                                    {(
                                        <div className="modal rounded-xl bg-white shadow-lg p-5 w-96 font-poppins">
                                            <img className='w-full h-32 rounded-xl' src={dt.image} alt={dt.name}/>
                                            <div className="flex justify-between font-bold mt-5">
                                                <h1 className="text-lg">{dt.name}</h1>
                                                <h1 className="text-lg">Rp. {dt.harga}</h1>
                                            </div>
                                            <div className="mt-5 text-sm">
                                                {`${dt.name} adalah hidangan yg bisa dinikmati oleh segala usia, hidangan dengan rating ${dt.rating} ini sangat populer baik bagi wanita atau pria makanan ini memerlukan waktu sekitar ${dt.waktu} hingga dikirimkan`}
                                            </div>
                                            <p className="font-bold mt-5">{`stok: ${dt.jumlah}`}</p>
                                            <div className="mt-5 flex items-center justify-between">
                                                <div className="flex items-center justify-between bg-yellow-100 rounded-lg p-1">
                                                    <button disabled={angka === 0} onClick={minusNumber} className={`text-xl bg-white p-2 rounded-lg`}>-</button>
                                                    <p className="m-3">{angka}</p>
                                                    <button disabled={angka === dt.jumlah} onClick={nambahNumber} className='text-xl bg-white p-2 rounded-lg'>+</button>
                                                </div>
                                                <button className="bg-yellow-300 font-bold p-4 rounded-xl">Tambah Pesanan</button>
                                            </div>
                                        </div>
                                    )}
                                </Popup>
                                <p className='bg-gray-50 rounded-full absolute bottom-20 left-2 p-3 text-xs font-bold'>{dt.waktu}</p>
                                <p className=' font-bold text-xl mt-5 justify-center'>{dt.name}</p>
                                <div className="flex justify-between mt-2">
                                    <div className="flex">
                                        <i className="far fa-star"></i>
                                        <p className='font-bold text-sm'>{dt.rating}</p>
                                    </div>
                                    <p className='font-bold text-sm'>Rp. {dt.harga}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}