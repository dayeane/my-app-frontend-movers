import {useState} from 'react'

function TripEditForm({trip, setCurrentTrip, setEditMode, editMode}) {
  const [from, setFrom] = useState(trip.from)
  const [to, setTo] = useState(trip.to)
  const [date, setDate] = useState(trip.depart_date)
  const [budget, setBudget] = useState(trip.budget)
 
  function updateTrip(e) {
    e.preventDefault();

    const editedTrip = {
      trip: {
        from: from,
        to: to,
        depart_date: date,
        budget: budget,
      }
    }

    fetch(`http://localhost:9292/trips/${trip.id}`, {
      method: "PUT",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(editedTrip)
    })
    .then(res => res.json())
    .then(data => {
      setCurrentTrip(data)
      setEditMode(false)
    })
  }

  return(
    <div className="card mt-5 mb-2" >
      <div className="card-header d-flex justify-content-between">
        <h4>Edit Trip</h4>
        <div className="custom-control custom-switch">
          <input onChange={() => setEditMode(!editMode)} checked={editMode} type="checkbox" className="custom-control-input" id="customSwitch1" />
          <label className="custom-control-label" htmlFor="customSwitch1">Toggle this box exit edit mode</label>
        </div>
      </div>
      <form className="ml-4" onSubmit={updateTrip}>
        <input onChange={(e) => {setFrom(e.target.value)}} value={from} className="mb-2 mr-2" type="text" name="from" placeholder="From"/> 
        <input onChange={(e) => {setTo(e.target.value)}} value={to}  className="mr-4" type="text" name="to" placeholder="To"/> 
        <input onChange={(e) => {setDate(e.target.value)}} value={date}  className="mr-4"  type='date' name="depart-date" placeholder="Depart Date"/> 
        <input onChange={(e) => {setBudget(e.target.value)}} value={budget}  className="mr-4" type="text" name="budget" placeholder="Budget"/> 
        <button type="submit" className="btn btn-primary mb-2 mt-2 mr-6">Submit</button>
      </form>
    </div>
  )
}

export default TripEditForm;