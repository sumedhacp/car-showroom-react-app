import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'
import axios from 'axios'

const ViewCar = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {

        axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/car-data.json").then(
            (response) => {
                changeData(response.data)
            }
        ).catch()

    }

    useEffect(

        () => {
            fetchData()
        }, []

    )

    return (
        <div>
            <NavigationBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            {
                                data.map
                                    (
                                        (value, index) => {
                                            return (
                                                <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                                    <div className="card">
                                                        <img src={value.image} className="card-img-top" style={{ height: "220px", width: "100%" }} alt="..." />
                                                        <div className="card-body">
                                                            <h5 className="card-title">Details: </h5>
                                                            <b>Car ID:: </b><p className="card-text">{value.carId}</p>
                                                            <b>Brand: </b><p className="card-text">{value.brand}</p>
                                                            <b>Model: </b><p className="card-text">{value.model}</p>
                                                            <b>Fuel type:: </b><p className="card-text">{value.fuelType}</p>
                                                            <b>Transmission: </b><p className="card-text">{value.transmission}</p>
                                                            <b>Price: </b><p className="card-text">{value.price}</p>
                                                            <b>Color: </b><p className="card-text">{value.color}</p>
                                                            <b>Year: </b><p className="card-text">{value.year}</p>
                                                            <a href="#" className="btn btn-primary">Select</a>
                                                        </div>
                                                    </div>

                                                </div>
                                            )
                                        }
                                    )
                            }
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewCar