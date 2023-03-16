import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import http from "./api/http";


function App(){
  const [loading, setLoading] = useState(false)
  const username = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate() 

  const onLogin = async (event) => {
    event.preventDefault()
    try {
      setLoading(true)
      let data = {
        username: username.current.value,
        password: password.current.value
      }
      const response = await http.post("/login", data)
      localStorage.setItem('access_token', response.data.token)
      setTimeout(() => {
        navigate('/admin')
      }, 2000)
    } catch (error) {
      console.log("Login failed")
    }finally{
      setLoading(false)
    }
  }
  return (
    <main>
       <main className="row p-3">
           <div className="col-sm">
                <form onSubmit={onLogin} className="card card-body shadow w-50 mx-auto mt-5">
                    <input ref={username} type="text" className="form-control" placeholder="Username " />
                    <br />
                    <input ref={password} type="password" className="form-control" placeholder="Password" />
                    <br />
                    <button className="btn btn-primary" >
                       <span hidden={!loading} className="spinner-border spinner-border-sm"></span>
                       <span> Login</span>
                    </button>
                </form>
           </div>


           <div>
              <button>Check if Login</button>
           </div>
       </main>
    </main>
  )
}

export default App;