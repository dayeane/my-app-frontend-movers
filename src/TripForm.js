import {useRef} from 'react'

function TripForm({trip, setTrip}) {

  const from = useRef('')
  const to = useRef('');
  const date = useRef('')
  const budget = useRef('false')

  function createTrip(e) {
    e.preventDefault();

    const newTrip = {
      trip: {
        from: from.current.value,
        to: to.current.value, //
        depart_date: date.current.value,
        budget: budget.current.value,
      }
    }

    fetch("http://localhost:9292/trips", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newTrip)
    })
    .then(res => res.json())
    .then(data => {
      setTrip(data)
    })
   
  }

  return(
    <div className="card mt-5 mb-2" >
     <div className="card-header"><h2>New Trip</h2></div>
      <form className="ml-4" onSubmit={createTrip}>
        <input ref={from}className="mb-2 mr-2" type="text" name="from" placeholder="From"/> 
        <input ref={to} className="mr-4" type="text" name="to" placeholder="To"/> 
        <input ref={date} className="mr-4"  type='date' name="depart-date" placeholder="Depart Date"/> 
        <input ref={budget} className="mr-4" type="text" name="budget" placeholder="Budget"/> 
        <button type="submit" className="btn btn-primary mb-2 mt-2 mr-6">Submit</button>
      </form>
    </div>
  )
}

export default TripForm;