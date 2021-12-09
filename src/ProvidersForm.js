function ProvidersForm({trip}) {
  return(
    <div className="card mt-5 mb-2" >
     <div className="card-header"><h2>New Provider</h2></div>
       <form>
        <input className=" mr-4" type="text" name="name" placeholder="Name"/> 
        <input className=" mr-4" type="text" name="date" placeholder="Date"/> 
        <input className=" mr-4" type="text" name="notes" placeholder="Notes"/> 
        <button type="submit" className="btn btn-primary mt-2 mb-2 mr-6">Submit</button>
      </form>
    </div>
  )
}

export default ProvidersForm;