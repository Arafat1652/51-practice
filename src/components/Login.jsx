import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider/AuthProvider";


const Login = () => {

  const navigate = useNavigate()
  const {loggedInUser,googleSignIn,gitHubSignIn,facbookSignIn} = useContext(AuthContext)
  
  const [loginSuccess, setLoginSuccess] = useState('') 
  const [errorLogin, setErrorLogin] = useState('')

  
    const handleLogin=e=>{

        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        setErrorLogin('')
        setLoginSuccess('')

        loggedInUser(email, password)
        .then(result=>{
          console.log(result.user)
          setLoginSuccess('Login succesfully') 
            navigate('/')
        })
        .catch(error=>{
          console.error(error)
          setErrorLogin(error.code.split('auth/'))
        })
    }
       //google sign in
        const handleGoogleSignIn=()=>{
          googleSignIn()
          .then(result=>{
            console.log(result.user)
          })
          .catch(error=>{
            console.error(error)
          })
       }

       // github sign in 
       const handleGithubSignIn=()=>{
        gitHubSignIn()
        .then(result=>{
          console.log(result.user)
        })
        .catch(error=>{
          console.error(error)
        })
     }
      //facebook sign in
     const handleFacebook=()=>{
      facbookSignIn()
      .then(result=>{
        console.log(result.user)
      })
      .catch(error=>{
        console.error(error)
      })
   }



    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now! </h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
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
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary mb-4">Login</button>
                <button onClick={handleGoogleSignIn} className="btn ghost mb-4"><img className="h-6" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR8hkAtzF5ncVP5ja6-fXsu4wk45cRwbEwrwTJ1TPMzA&s" alt=""/> Sign In With Google</button>
                <button onClick={handleGithubSignIn} className="btn ghost mb-4"><img className="h-8" src="https://w7.pngwing.com/pngs/646/324/png-transparent-github-computer-icons-github-logo-monochrome-head-thumbnail.png" alt=""/> Sign In With Github</button>
                <button onClick={handleFacebook} className="btn ghost"><img className="h-6" src="https://w7.pngwing.com/pngs/561/460/png-transparent-fb-facebook-facebook-logo-social-media-icon.png" alt=""/> Sign In With Facebook</button>
              </div>
             <p className="text-green-800">{loginSuccess}</p>
             <p className="text-red-800">{errorLogin}</p>
              <p>New to this Website? Please <Link to='/register' className="btn-link">Register</Link> </p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;