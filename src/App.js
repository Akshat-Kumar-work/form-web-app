import { useState } from "react";

function App() {
  const [formData , setformData] = useState({
    firstName:"",
    lastName:"",
    Email:"",
    Country:"",
    StreetAddress:"",
    City:"",
    State:"",
    ZIP:"",
    Comments:false,
    Candidates:false,
    Offers:false,
    pushNotification:""

  })

  function changeHandler (event){
    const {name , value , checked , type} = event.target;
    setformData( (prevdata) =>{
      return( {...prevdata, [name]:type === "checkbox" ? checked : value })
    })
  }

  function saveHandler (event){
    event.preventDefault();
    console.log(formData)

  }
  

  return (
    <div className=" w-[50%]   mt-8 border-solid border-2 border-indigo-600 mx-auto">

          <form  onSubmit={saveHandler} className="m-8">

            <label htmlFor="firstname">First name</label> <br></br>
            <input id="firstname" type="text" placeholder="Akshat" name="firstName" value={formData.firstName} onChange={changeHandler}
            className=" placeholder-gray-400 w-full"></input>
<br></br>
<label htmlFor="lastname">Last name</label> <br></br>
            <input id="lastname" type="text" placeholder="Dhoundiyal" name="lastName" value={formData.lastName} onChange={changeHandler}
            className=" placeholder-gray-400 w-full"></input>
<br></br>
<label htmlFor="email">Email Address</label> <br></br>
            <input id="email" type="text" placeholder="iamakku0.0.0.1@gmail.com" name="Email" value={formData.Email} onChange={changeHandler}
            className=" placeholder-gray-400 w-full"></input>
<br></br>
<label htmlFor="country">Country</label> <br></br>
<select name="Country" id="country" value={formData.Country} onChange={changeHandler}> 
  <option >India</option>
  <option >Russia</option>
  <option >Nepal</option>
  <option >Bangladesh</option>
  <option >china</option>
  <option >pakistan</option>
</select>

<br></br>

<label htmlFor="streetAddress">Street Address</label> <br></br>
  <input id="streetAddress" type="text" placeholder="A-1/64 street no 2" name="StreetAddress" value={formData.StreetAddress} onChange={changeHandler}
            className=" placeholder-gray-400 w-full"></input>
<br></br>
<label htmlFor="city">City</label> <br></br>
            <input id="city" type="text" placeholder="Uttam Nagar" name="City" value={formData.City} onChange={changeHandler}
            className=" placeholder-gray-400 w-full"></input>
<br></br>
<label htmlFor="state">State</label> <br></br>
            <input id="state" type="text" placeholder="New Delhi" name="State" value={formData.State} onChange={changeHandler}
            className=" placeholder-gray-400 w-full"></input>
<br></br>
<label htmlFor="zip">ZIP</label> <br></br> 
            <input id="zip" type="text" placeholder="110059" name="ZIP" value={formData.ZIP} onChange={changeHandler}
            className=" placeholder-gray-400 w-full"></input>
<br></br>

<br></br>

<p>By Email</p>

<input id="comments" type="checkbox" name="Comments" checked={formData.Comments} onChange={changeHandler}></input>
<label htmlFor="comments">Comments</label> 
 <p>Get notfied when someones posts a comment on a posting</p>


<input id="candidates" type="checkbox" name="Candidates" checked={formData.Candidates} onChange={changeHandler}></input>
<label htmlFor="candidates">Candidates</label>
<p>Get notified when a candidate applies for a job</p>


<input id="offers" type="checkbox" name="Offers" checked={formData.Offers} onChange={changeHandler}></input>
<label htmlFor="offers">Offers</label>
<p>Get notified when a candidate accepts or rejects an offer</p>



<br></br>

<p>Push Notifications</p>
<p>These are delivered via SMS to your mobile phone</p>

<input type="radio" id="everything" name="pushNotification" onChange={changeHandler} value="everything"></input>
<label htmlFor="everything">Everything</label> <br></br>
<input type="radio" id="same" name="pushNotification" onChange={changeHandler} value="same as email"></input>
<label htmlFor="same">Same as Email</label> <br></br>
<input type="radio" id="no push" name="pushNotification" onChange={changeHandler} value="no push notifications"></input>
<label htmlFor="no push">No push notifications</label>

<br></br>

<button>
  Save
</button>
            
          </form>

    </div>
  );
}

export default App;
