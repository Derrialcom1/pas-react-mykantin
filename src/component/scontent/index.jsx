import React from "react";
import Bar from "./bar"
import List from "./list"
import Order from "./order";

export default function Scontent() {
    return(
        <React.Fragment>
            <nav className=" h-full fixed bg-white z-20">
            <header className="font-extrabold text-2xl h-1/10">Pesanan Saya</header>
            <nav className="h-2/10">
                <Bar/>
            </nav>
            <section className="h-4/10">
                <List/>
            </section>
            <section className="h-3/10">
                <Order/>    
            </section>
            </nav>
        </React.Fragment>
    )
}