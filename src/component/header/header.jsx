import React from 'react'
import logo from '../../images/header/logo.png'
import vector from '../../images/header/vector.png'
import vector2 from '../../images/header/vector2.png'
import profile from '../../images/header/profile.png'
import yellow from '../../images/header/yellow.png'

export default function Header() {
    return(
        <React.Fragment>
            <nav className='w-full h-1/10 flex fixed bg-white z-20'>
            <section className="w-5/6 flex items-center">
                <div className="w-1/3">
                    <img src={logo} alt={logo}/>
                </div>
                <div className="w-2/3 relative">
                    <svg className="w-6 h-6 absolute top-4 left-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    <input placeholder="Cari Makan Bang?" className="w-5/6 text-lg pl-16 pr-2 py-3 rounded-3xl bg-gray-100" type="text" />
                </div>
            </section>
            <section style={{background: 'rgba(252, 252, 252, 0.9);'}} className="w-1/6 h-full pl-10 pr-10 flex items-center justify-between">
                <div className="w-1/4">
                    <img src={vector} alt={vector} />
                </div>
                <div className="w-1/4">
                    <img src={vector2} alt={vector2} />
                </div>
                <div className="w-1/4 flex justify-center">
                    <img src={yellow} alt={yellow} className="w-8 h-8" />
                    <p className="absolute text-lg font-bold">3</p>
                </div>
                <div className="w-1/4">
                    <img src={profile   } alt={profile } />
                </div>
            </section>
            </nav>
        </React.Fragment>
    )
}