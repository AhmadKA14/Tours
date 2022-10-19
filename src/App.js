import React, { useState, useEffect } from "react";
import Loading from "./componenets/Loading";
import Tours from "./componenets/Tours";
import data from "./componenets/data"

export default function App() {
    const [loading, setLoading] = useState(false)
    const [tours, setTours] = useState(data)

    function removeTour(id) {
        const newTours = tours.filter(tour => tour.id !== id)
        setTours(newTours)
    }

    if (loading) {
        return (
            <main>
                <Loading />
            </main>
        )
    }

    if (tours.length === 0) {
        return (
            <main>
                <div className="title">
                    <h2>no tours left</h2>
                    <button className="btn" onClick={() => setTours(data)}>refresh</button>
                </div>
            </main>
        )
    }

    return (
        <main>
            <Tours tours={tours} removeTour={removeTour} />
        </main>
    )
}