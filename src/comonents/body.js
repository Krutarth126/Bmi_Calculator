import "../App.css"
import {useState} from "react"

function Field(){
    const [title, setTitle] = useState('')
    const [title2, setTitle2] = useState('')

    function BMI(){
        let Bmi= (title2/((title/100)*(title/100)))

        let low = Math.floor(18*(title/100)*(title/100));
        let high= Math.floor(25*(title/100)*(title/100));

        if(Bmi>25 ){
            return(` Your BMI is ${Math.floor(Bmi)}, You are in overweight range, prefered weight for healthy range is ${low}-${high}`)
        }else if (Bmi<18){
            return(` Your BMI is ${Math.floor(Bmi)}, You are in under over underweight range, prefered weight for healthy range is ${low}-${high}`)
        }else {
            return( `Your BMI is ${Math.floor(Bmi)}, You are in normal weight range, prefered weight for healthy range is ${low}-${high}`)
        }
        
    }

    return(
       <div className="body">
           <div>
           <label for="weight">Weight in KG:</label>
           <input onChange={event => setTitle2(event.target.value)} type="number" name="weight"/>
           </div>
           <div>
           <label for="height">Height in cm:</label>
           <input onChange={event => setTitle(event.target.value)} type="number" name="height"/>
           </div>
           <button onClick={()=>document.querySelector(".Index").style="display:block"} >Submit</button>
           <div className="Index">
                <h3>{BMI()}</h3>
                <h3>Normal BMI ranges between 18-25</h3>
           </div>
       </div>
       
      
    )
}

export default Field;