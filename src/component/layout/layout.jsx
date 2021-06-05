import React from 'react'
import Header from '../header/header'
import Content from '../content/index'
import Scontent from '../scontent/index'
function Layout() {
    return(
        <React.Fragment>
            {/* ini bagian header */}
            <div className="h-screen w-screen pl-8 font-poppins">
                <header className="flex items-center h-1/10 w-full">
                    <Header/>
                </header>
                {/* ini bagian header */}
                <main className="h-9/10 w-full flex pt-10">
                    {/* ini bagian utama */}
                    <section className="w-5/6 h-full">
                        <Content/>
                    </section>
                    {/* ini bagian pesanan */}
                    <section className="w-1/6 h-full">
                        <Scontent/>
                    </section>
                </main>
            </div>
        </React.Fragment>
    );
}

export default Layout;