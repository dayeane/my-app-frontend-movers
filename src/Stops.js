function Stops({trip}) {
  return(
    <>
      {trip.stops.map( stop => {
        return(
          <div key={stop.id}>
            <p>Stop reason:{stop.stop_reason}</p>
            <p>Cost:{stop.cost}</p>
            <p>Notes:{stop.notes}</p>
          </div>
        )
      })}
    </>
  )
}

export default Stops;