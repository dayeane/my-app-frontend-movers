function HotelsForm({trip}) {
  return(
    <div className="card mt-5 mb-2" >
     <div className="card-header"><h2>New Hotel</h2></div>
       <form>
        <input className=" mr-4" type="text" name="check in" placeholder="Check in"/> 
        <input className=" mr-4" type="text" name="check out" placeholder="Check out"/> 
        <input className=" mr-4" type="text" name="location" placeholder="Location"/> 
        <input className=" mr-4" type="text" name="cost" placeholder="Cost"/> 
        <button type="submit" className="btn btn-primary mb-2 mt-2 mr-6">Submit</button>
      </form>
    </div>
  )
}

export default HotelsForm;