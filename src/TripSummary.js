function TripSummary({trip}) {

  return (
    <>
      <p>From:</p>{trip.from}
      <p>To:</p>{trip.to}
      <p>Depart Date:</p>{trip.depart_date}
      <p>Budget:</p>{trip.budget}
    </>
  )
}

export default TripSummary;