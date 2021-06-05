import React from 'react'
import Banner from './banner'
import Nav from './nav'
import Category from './category'
import {Switch, Route} from 'react-router-dom'

export default function Content() {
    return (
        <React.Fragment>
            <header className="h-2/10 w-full pr-5 ">
                <Banner/>
            </header>
            <nav className="h-2/10 w-full">
                <Nav/>
            </nav>
            <section className="h-6/10 w-full">
                <Switch>
                    <Route path="">
                        <Category/>
                    </Route>
                </Switch>
            </section>
        </React.Fragment>
    )
}