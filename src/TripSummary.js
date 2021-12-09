function TripSummary({trip}) {

  return (
    <>
      <div className="card mt-5">
        <div className="card-header font-weight-bold">
          <h4>Trip Summary</h4>
        </div>
        <div className="card-body">
          <div className="d-flex justify-content-around">
            <p className="col"><span className="font-weight-bold">From:</span> {trip.from}</p>
            <p className="col"><span className="font-weight-bold">To:</span> {trip.to}</p>
          </div>
          <div className="d-flex justify-content-around mt-2">
            <p className="col"><span className="font-weight-bold">Depart Date:</span> {trip.depart_date}</p>
            <p className="col"><span className="font-weight-bold">Budget:</span> {trip.budget}</p>
          </div>

          <div className="d-flex justify-content-around mt-2">
            <p className="col"><span className="font-weight-bold">Total Spent:</span> { trip.costs.map(x => x.amount).reduce((x, y) => x + y) }</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default TripSummary;