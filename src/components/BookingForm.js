import { getDefaultDate } from "../utils"

export const BookingForm = (props) => {
    const { availableTimes, occassions, formState, handleChange, handleSubmit } = props
    const { date, time, guestNo, occassion, defaultDate } = formState
    const maxDate = new Date(defaultDate)
    maxDate.setDate(maxDate.getDate()+7) 
    return <form style={{ "display": "grid", maxWidth: "500px", "gap": "20px" }}>
        <div className="form-element">
            <label htmlFor="res-date">Choose date<span style={{color: "red"}}>*</span></label>
            <input type="date" id="res-date" value={date} name="date" onChange={handleChange} min={`${defaultDate}`} max={getDefaultDate(maxDate)}/>
        </div>
        <div className="form-element">
            <label htmlFor="res-time">Choose time<span style={{color: "red"}}>*</span></label>
            <select id="res-time" value={time} name="time" onChange={handleChange}>
                {
                    availableTimes.map(availableTime=>{
                        return <option key={availableTime}>{availableTime}</option>
                    })
                }
            </select>
        </div>
        <div className="form-element">
            <label htmlFor="guests">Number of guests<span style={{color: "red"}}>*</span></label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guestNo} name="guestNo" onChange={handleChange}/>
        </div>
        <div className="form-element">
            <label htmlFor="occassion">Occasion<span style={{color: "red"}}>*</span></label>
            <select id="occassion" value={occassion} name="occassion" onChange={handleChange}>
                {
                    occassions.map(occ=>{
                        return <option key={occ}>{occ}</option>
                    })
                }
            </select>
        </div>
        <button className="bookNow" data-testid="submitBtn" onClick={(e)=>{ e.preventDefault(); handleSubmit(e)}}>Book Now</button>
    </form>
}