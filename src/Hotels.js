import {useState} from "react"
import HotelsForm from './HotelsForm'
import Hotel from "./Hotel"

function Hotels({trip}) {
  const [hotels, setHotels] = useState(trip.hotels);

  function deleteId(id) {
    fetch(`http://localhost:9292/trips/${trip.id}/hotels/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json"  }
    }).then((r) => r.json())
      .then((data) => setHotels(data));
  }

  return(
    <>
       <div className="card mt-5">
        <div className="card-header font-weight-bold">
          <h4>Hotels</h4>
          {/* <button className="btn btn-black">Create</button> */}
        </div>
        
        <div className="card-body d-flex justify-content-around flex-wrap5">
          {hotels.map((hotel, index) => <Hotel key={hotel.id} hotel={hotel} index={index} deleteId={deleteId} /> )}
        </div>
      </div>
      <HotelsForm trip={trip} />

    </>
  )
}

export default Hotels;