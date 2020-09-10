import React from 'react'
import Card from './Card'

const Carasole = () => {
    return(
        <>
            <div className="main">
                <div className="container">
                    <div className="row">
                        <div className="Sc mr-5 my-5 col-lg-3">
                            <Card text1="CIVIL" text2="CONSTRUCTION" image="http://www.shankaravhadgroup.com/avadgrp/images/pc4.jpg" />
                        </div>
                        <div className="Sc mr-5 my-5 col-lg-3">
                            <Card text1="ENGINEERING" image="http://www.shankaravhadgroup.com/avadgrp/images/ci5.jpg" />
                        </div>
                        <div className="Sc mr-5 my-5 col-lg-3">
                            <Card text1="B2B HOLE SALE TRAILER" image="http://www.shankaravhadgroup.com/avadgrp/images/pc3.jpg" />
                        </div>
                        <div className="col-lg-1 text">
                            <p className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus quibusdam possimus libero commodi porro ipsa quis, voluptate dolorem deserunt quae, aliquid veritatis saepe quaerat magni maiores vel culpa aliquam nesciunt.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carasole;