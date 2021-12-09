import {useState, useEffect} from "react"

function Stops({trip}) {
  const [stops, setStop] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/trips/${trip.id}/stops`)
    .then((r) => r.json())
    .then((data) => {
      debugger
      setStop(data)});
  }, [])

  if (stops.length == 0) {
    return (<h1>nope</h1>)
  }

  return(
    <>
      <div className="card mt-5">
        <div className="card-header font-weight-bold">
          <h4>Stops</h4>
        </div>
        <div className="card-body d-flex justify-content-around flex-wrap">
          {stops.map( (stop, index) => {
            return(
              <div  className="card text-white bg-info mb-3" key={stop.id}>
                <div className="card-body">
                <div className=""><h5>Stop {index + 1}</h5></div>
                  <div><span className="font-weight-bold">Stop Reason:</span> {stop.stop_reason} </div>
                  <div><span className="font-weight-bold">Notes:</span> {stop.note}</div>
                  <div><span className="font-weight-bold">Cost:</span> {stop.cost}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Stops;