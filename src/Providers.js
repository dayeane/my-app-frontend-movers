function Providers({trip}) {
  return(
    <>
      {trip.providers.map( provider => {
        return(
          <div key={provider.id}>
            <p>Name:{provider.name}</p>
            <p>Date:{provider.date}</p>
            <p>Location:{provider.location}</p>
          </div>
        )
      })}
    </>
  )
}

export default Providers;