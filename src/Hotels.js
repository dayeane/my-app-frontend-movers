function Hotels({trip}) {
  return(
    <>
      {trip.hotels.map( hotel => {
        return(
          <div key={hotel.id}>
            <p>Check in:{hotel.check_in}</p>
            <p>Check out:{hotel.check_out}</p>
            <p>Check location:{hotel.location}</p>
            <p>Cost:{hotel.cost}</p>
          </div>
        )
      })}
    </>
  )
}

export default Hotels;