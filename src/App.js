
import {useState, useEffect, useRef} from "react"
import './App.css';
import TripSummary from "./TripSummary";
import Hotels from "./Hotels";
import Providers from "./Providers";
import Stops from "./Stops";
import TripForm from "./TripForm";
import StopsForm from "./StopsForm";
import ProvidersForm from "./ProvidersForm";
import HotelsForm from "./HotelsForm";

function App() {
  const [trip, setTrip] = useState({});
  const tripId = useRef('');

  // useEffect(() => {
  //   fetch("http://localhost:9292/trips")
  //   .then((r) => r.json())
  //   .then((data) => console.log(data));
  // },[])


  function getTrip(e) {
    e.preventDefault()
    fetch(`http://localhost:9292/trips/${tripId.current.value}`)
    .then((r) => r.json())
    .then((data) => {
      console.log(data)
      setTrip(data)
    });
  }

  if (!trip.from) {
    return (
      <>
        <div className="card mt-5 text-center">
          <div className="card header bg-light"></div>
          <h1>Moving Cost Trip</h1>
        </div>
        <div className="card mt-5 text-center">
          <div className="card-header">
            Select A trip ID
          </div>
          <form className="col-6 offset-3 mt-5 mb-5" onSubmit={getTrip}>
            <div className="form-group">
              <input ref={tripId} placeholder="Trip ID"  className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </>
    )
  }

  return (
  <>
    

  
    <TripSummary trip={trip} />
    <Hotels trip={trip} />
    <Providers trip={trip} />
    <Stops trip={trip} />
    <TripForm trip={trip} />
    <StopsForm trip={trip} />
    <ProvidersForm trip={trip} />
    <HotelsForm trip={trip} />

    {/* <form>
     <div className="card row mt-5"></div>
    <div className="card-header"><h2>List of Travels</h2></div>
    <div className="form-group">
    </div>
    <button>Create Travel</button>
    </form>

    <div>
    <div className="card row mt-5">
    <div>Travel info</div>
              <button>Edit</button>
              <button>Continue Trip</button>
           
          </div>
    <table className="form-group">
        <thead>
          <tr>
              <th scope="row 1">Providers contact info</th>
              <th scope="row 2">Add providers</th>
              <th scope="row 3">Trips history </th>
              <button className="btn btn-primary mt-3 mb-3" type='submit' id='submit' name='submit'>Start Trip</button>
          </tr>
        </thead>
          <tbody> </tbody>
        </table>

    </div> */}



    </>

  
      
  )
  
}

export default App;
