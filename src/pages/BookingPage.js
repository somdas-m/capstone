import React, { useState } from "react"
import { BookingForm } from "../components/BookingForm"
import restaurantImg from "../images/restaurant.jpg"
import tick from "../images/tick.png"

export const BookingPage = (props) => {
    const { availableTimes, formState, occassions, handleChange } = props
    const [isModalOpen, setModalOpen] = useState(false)
    const handleSubmit = (props) => {
        setModalOpen(true)
    }
    return <section className="reservation-section">
        <div id="myModal" className={`${isModalOpen?"modal-open": "modal"}`}>
            <div class="modal-content">
                <span class="close" onClick={(e)=>{e.preventDefault(); setModalOpen(false)}}>&times;</span>
                <img src={tick} width={"5%"} style={{display: "flex", float: "left"}}/>
                <h3 >Your Reservation is Confirmed! Boooking Reference No: LITTLELEMONT{Math.round(Math.random()*10)}</h3>
            </div>

        </div>
        <div className="container reservation-container">
            <img src={restaurantImg} width={"50%"} />
            <BookingForm
                formState={formState}
                availableTimes={availableTimes}
                occassions={occassions}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </div>
    </section>
}