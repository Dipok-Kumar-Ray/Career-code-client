import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import loginLottie from '../../assets/lotties/login.json'
import Lottie from "lottie-react";

const Login = () => {

  const {userLogin} = useContext(AuthContext);
  
      const handleLogin = e => {
          e.preventDefault();
          const form = e.target;
          const email = form.email.value;
          const password = form.password.value;
          console.log(email, password);
  
  
          //create user
          userLogin(email, password)
          .then(result => {
              console.log(result.user);
          })
          .catch(error => {
              console.log(error.message);
          })
  
      }
   
  return (
  <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
            <Lottie style={{width: '250px'}} animationData={loginLottie} loop={true}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
          <h1 className="text-3xl font-bold">Login now!</h1>
          <form onSubmit={handleLogin}>
               <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" name="email" placeholder="Email" required />
              <label className="label">Password</label>
              <input type="password" className="input" name="password" placeholder="Password"  required/>
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
