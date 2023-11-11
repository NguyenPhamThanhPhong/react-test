import { useState } from "react"
import CallUser from "../entity/user"

function Home(props) {
    // console.log(JSON.stringify(props.props.user))
    const [name, setName] = useState(props.props.user.name)
    var setUserfunc = props.props.setUserFunction
    
    var handleTextChange = (e)=>{
        setName(e.target.value)
    }

    var user123 = {
        id: 234,
        name: "t1323123",
        title: "title",
        completed: true
      }

    var callApi = async ()=>{
        var api_result= await CallUser();
        setUserfunc(api_result);
    }

    return (
        <div>
            <h1>{name}</h1>
            <button value={props} onClick={callApi} >
                click to call api
            </button>
            <input type="text" onChange={handleTextChange} value={props.name}></input>
        </div>
    )
}

export default Home
