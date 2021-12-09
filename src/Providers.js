function Providers({trip}) {
  return(
    <>
      <div className="card mt-5">
        <div className="card-header font-weight-bold">
          <h4>Providers</h4>
        </div>
        <div className="card-body d-flex justify-content-around flex-wrap">
          {trip.providers.map((provider, index ) => {
            return(
              
              <div  className="card text-white bg-info mb-3" key={provider.id}>
                <div className="card-header"><h5>Provider {index + 1}</h5></div>
                <div className="card-body">
                  <p><span className="font-weight-bold">Name:</span> {provider.name}</p>
                  <p><span className="font-weight-bold">Date:</span> {provider.date}</p>
                  <p><span className="font-weight-bold">Note:</span> {provider.note}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Providers;