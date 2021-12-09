function TripForm({trip}) {
  return(
    <div className="card mt-5 mb-2" >
     <div className="card-header"><h2>New Trip</h2></div>
       <form>
        <input className="  mb-2 mr-2" type="text" name="from" placeholder="From"/> 
        <input className=" mr-4" type="text" name="to" placeholder="To"/> 
        <input className=" mr-4" type="text" name="depart-date" placeholder="Depart Date"/> 
        <input className=" mr-4" type="text" name="budget" placeholder="Budget"/> 
        <input className=" mr-4" type="text" name="total expenses" placeholder="Total Expenses"/>  
        <button type="submit" className="btn btn-primary mb-2 mt-2 mr-6">Submit</button>
      </form>
    </div>
  )
}

export default TripForm;