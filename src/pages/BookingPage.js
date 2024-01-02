import React, { useState } from "react"
import { BookingForm } from "../components/BookingForm"

export const BookingPage = (props) => {
    const { availableTimes, formState, occassions, handleChange } = props   

    return <section>
        <BookingForm
            formState={formState}
            availableTimes={availableTimes}
            occassions={occassions}
            handleChange={handleChange}
            />
    </section>
}