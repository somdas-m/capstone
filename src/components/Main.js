import { BrowserRouter, Route, Routes } from "react-router-dom"
import { BookingForm } from "./BookingForm"
import { BookingPage } from "../pages/BookingPage"
import { useReducer, useState } from "react"
import { getDefaultDate } from "../utils"
import { HomePage } from "../pages/HomePage"
import { NotFound } from "../pages/NotFound"

const reducer = (state, action) => {
    const { type, availableTimes } = action
    if(type === "AVAILABLE_TIMES") return {availableTimes: availableTimes}
    return state
}

export const Main = (props) => {
    const initialState = {
        availableTimes: ["17:00","18:00","19:00","20:00","21:00"]//fetchAPI(getDefaultDate())//["17:00","18:00","19:00","20:00","21:00"]
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    const { availableTimes } = state
    const updateTimes = (availableTimes) => {
        dispatch({
            type: "AVAILABLE_TIMES",
            availableTimes
        })
    }
    const occassions = ["Birthday", "Anniversary"]
    const [formState, setFormState] = useState({
        date: getDefaultDate(),
        time: availableTimes[0],
        guestNo: "1",
        occassion: occassions[0]
    })
    const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        const newState = {
            ...formState,
            [name]: value
        }
        setFormState(newState)
    }

    return <main>
        <div className="main-grid">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}></Route>
                    <Route path="/booking" element={<BookingPage availableTimes={availableTimes}  formState={formState} occassions={occassions} handleChange={handleChange}/>}></Route>
                    <Route path="*" element={<NotFound/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    </main>
}