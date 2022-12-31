import React, {useState} from 'react'

const Form = () => {
    const [location, setLocation]= useState("")
    const [minimum, setMinimum]= useState("")
    const [maximum, setMaximum]= useState("")
    const [average, setAverage]= useState("")
    const [results, setResults]= useState([])
    
    const locationHandleChange=(event)=>{
        setLocation(event.target.value)
    }
    const minimumHandleChange=(event)=>{
        setMinimum(event.target.value)
    }
    const maximumHandleChange=(event)=>{
        setMaximum(event.target.value)
    }
    const averageHandleChange=(event)=>{
        setAverage(event.target.value)
    }

    const formHandler=(event)=>{
        event.preventDefault()
        // console.log("submit")
        let obj={
            "location": location || "Empty !!",
            "minimum": minimum || "Empty !!",
            "maximum": maximum || "Empty !!",
            "average": average || "Empty !!",
        }
        setResults([...results,obj])
    }
    
  return (
    <div>
        <form onSubmit={formHandler}>
            <label>Location: </label>
            <input type="text" name="location" id={location} onChange={locationHandleChange}/>
            <section>
                <div>
                    <label>Minimum Customers per Hour</label><br/>
                    <input type="text" name="minimum" onChange={minimumHandleChange}/>
                </div>
                <div>
                    <label>Maximum Customers per Hour</label><br/>
                    <input type="text" name="maximum" onChange={maximumHandleChange}/>
                </div>
                <div>
                    <label>Average Cookies per Sale</label><br/>
                    <input type="text" name="average" onChange={averageHandleChange}/>
                </div>
            </section>
            <section>
                <input type="submit" value="Create"/>
            </section>
        </form>
        <div>
            {results.map((item,idx)=>{
                return (
                    <div key={idx}>
                        <h5>`"location":"{item.location}", "minCustomers":"{item.minimum}", "maxCustomers":"{item.maximum}", "avgCookies":"{item.average}"`</h5>
                    </div>
                    // <div>`location: {item.location}`</div>
                )
            })}
        </div>
    </div>
  )
}

export default Form