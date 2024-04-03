import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";


const Register = () => {
  const navigate = useNavigate()
  const {createUser} = useContext(AuthContext)

  const [registerSuccess, setRegisterSuccess] = useState('') 
  const [errorRegister, setErrorRegister] = useState('')
  
 
    const handleRegister=e=>{
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirm = e.target.confirm.value;
        console.log(name,email, password,confirm)


        if(!/@gmail\.com$/.test(email)){
          setErrorRegister('not valid email')
          return
        }
        else if(password!== confirm){
         setErrorRegister('password and confirm password did not match')
         return
        }
        else if(password.length<6){
          setErrorRegister('password must be atleast 6 charectar or longer')
          return
        }
        else if(!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/.test(password)){
          setErrorRegister('password contains at least one number and one special character')
          return
        }
       
        setErrorRegister('')
        setRegisterSuccess('')
        createUser(email, password)
        .then(result=>{
          console.log(result.user)
          e.target.reset()
          setTimeout(()=>{
            navigate('/')
          },3000)
          
          setRegisterSuccess('Registration done succesfully')
        })
        .catch(error=>{
          console.error(error)
          e.target.reset()
          setErrorRegister(error.code.split('auth/'))
        })

    }

     

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="password" name="confirm" placeholder="confirm password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control ">
                <button className="btn btn-primary ">Register</button>
              </div>
              <p className="text-red-600">{errorRegister}</p>
              <p className="text-green-800">{registerSuccess}</p>
              <p>Already have Account? Please <Link to='/login' className="btn-link">Login</Link> </p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;