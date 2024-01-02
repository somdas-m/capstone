export const BookingForm = (props) => {
    const { availableTimes, occassions, formState, handleChange, handleSubmit } = props
    const { date, time, guestNo, occassion } = formState
    return <form style={{ "display": "grid", maxWidth: "200px", "gap": "20px" }}>
        <div>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} name="date" onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} name="time" onChange={handleChange}>
                {
                    availableTimes.map(availableTime=>{
                        return <option key={availableTime}>{availableTime}</option>
                    })
                }
            </select>
        </div>
        <div>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guestNo} name="guestNo" onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="occassion">Occasion</label>
            <select id="occassion" value={occassion} name="occassion" onChange={handleChange}>
                {
                    occassions.map(occ=>{
                        return <option key={occ}>{occ}</option>
                    })
                }
            </select>
        </div>
        <input type="submit" value="Book Now" data-testid="submitBtn" onClick={(e)=>{ e.preventDefault(); handleChange(e)}}/>
    </form>
}