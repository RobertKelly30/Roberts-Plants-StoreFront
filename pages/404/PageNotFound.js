import React from "react";

import Link from "next/link";

import { Brand } from 'components/branding/'
import { PageNotFoundPageStyles } from "./styles"

function PageNotFound (props){
    return(
        <>
        <PageNotFoundPageStyles>
            <header>
                <div className="branding">
                    <Brand size="2rem" iconSize="3rem" color="black" fill="forestgreen"/>
                </div>
                <h1>404 | Page Not Found</h1>
                <p>We are sorry, but the page you are looking for does not exist.</p>
                <p>
                    Please click<Link to="/"> here </Link>to return to the website.
                </p>
            </header>
        </PageNotFoundPageStyles>
            
        </>
    )
}

export default PageNotFound