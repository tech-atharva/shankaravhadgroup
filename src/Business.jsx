import React from 'react'
import Card from './Card'

const Carasole = () => {
    return(
        <>
            <div className="main">
                <div className="container">
                    <div className="row">
                        <div className="Sc mr-5 my-5 col-lg-3">
                            <Card text1="Shaan Enterprises" image="http://www.shankaravhadgroup.com/avadgrp/images/pc3.jpg" />
                        </div>
                        <div className="Sc mr-5 my-5 col-lg-3">
                            <Card text1="Infra Projects" image="http://www.shankaravhadgroup.com/avadgrp/images/pc4.jpg" />
                        </div>
                        <div className="Sc mr-5 my-5 col-lg-3">
                            <Card text1="Shaan Industries" image="http://www.shankaravhadgroup.com/avadgrp/images/ci5.jpg" />
                        </div>
                        <div className="text col-lg-1">
                            <p className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae aliquid facere autem, id aperiam accusantium enim voluptatibus dignissimos blanditiis, ab aliquam nobis modi voluptas quo fugiat quidem? Illum, saepe deserunt?</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carasole;