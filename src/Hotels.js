function Hotels({trip}) {
  return(
    <>
       <div className="card mt-5">
        <div className="card-header font-weight-bold">
          <h4>Hotels</h4>
          {/* <button className="btn btn-black">Create</button> */}
        </div>
        
        <div className="card-body d-flex justify-content-around flex-wrap5">
          {trip.hotels.map( (hotel, index) => {
            return(
              <div  className="card text-white bg-info mb-3" key={hotel.id}>
                <div className="card-header d-flex justify-content-between">
                  <h5>Hotel {index + 1} </h5>
                  <button className="btn btn-danger">X</button>
                </div>
                <div className="card-body">
                  <p><span className="font-weight-bold">Check in:</span> {hotel.check_in}</p>
                  <p><span className="font-weight-bold">Check out:</span> {hotel.check_out}</p>
                  <p><span className="font-weight-bold">Location:</span> {hotel.location}</p>
                  <p><span className="font-weight-bold">Cost:</span> {hotel.cost.amount}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Hotels;