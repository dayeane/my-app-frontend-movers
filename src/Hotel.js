function Hotel({hotel, index, deleteId}) {
  return(
    <div  className="card text-white bg-info mb-3">
      <div className="card-header d-flex justify-content-between">
        <h5>Hotel {index + 1} </h5>
        <div onClick={() => deleteId(hotel.id)} className="btn btn-danger">X</div>
      </div>
      <div className="card-body">
        <p><span className="font-weight-bold">Check in:</span> {hotel.check_in}</p>
        <p><span className="font-weight-bold">Check out:</span> {hotel.check_out}</p>
        <p><span className="font-weight-bold">Location:</span> {hotel.location}</p>
        <p><span className="font-weight-bold">Cost:</span> {hotel.cost.amount}</p>
      </div>
    </div>
  )
}

export default Hotel;