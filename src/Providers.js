import {useState} from "react"

function Providers({trip}) {
  const [providers, setProviders] = useState(trip.providers);

  function deleteId(id) {
    fetch(`http://localhost:9292/trips/${trip.id}/providers/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json"  }
    }).then((r) => r.json())
      .then((data) => setProviders(data));
  }


  if (providers.length == 0) {
    return (<h1>No Providers found</h1>)
  }

  return(
    <>
      <div className="card mt-5">
        <div className="card-header font-weight-bold">
          <h4>Providers</h4> 
        </div>
        <div className="card-body d-flex justify-content-around flex-wrap">
          {providers.map((provider, index ) => {
            return(
              
              <div  className="card text-white bg-info mb-3" key={provider.id}>
                <div className="card-header d-flex justify-content-between">
                  <h5>Provider {index + 1}</h5>
                  <div onClick={() => deleteId(provider.id)} className="btn btn-danger">X</div>
                </div>
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