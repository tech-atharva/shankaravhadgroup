import React from 'react'

const Carasole = () => {
    return(
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="https://i2.wp.com/essblog.wpengine.com/wp-content/uploads/2018/05/unique-home-features.jpg?fit=1000%2C752&ssl=1" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src="https://wallpaperaccess.com/full/1802100.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                </div>
        </>
    )
}

export default Carasole;