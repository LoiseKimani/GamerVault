import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logInUser } from "../api/users/users";
import 'bootstrap/dist/css/bootstrap.min.css';

function Login () {

    const navigate = useNavigate();
    const [values, setValues] = useState({
        password: "",
        email: "",
    })

    const {
        name,
        password,
        email,
    } = values;

    // handle input change
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        console.log(values)
    };

    // handle submission
    function handleSubmit(e){
        e.preventDefault();
        return logInUser(name, email, password)
        .then( (res) => {
          if (res.status === 200) {
            console.log("Logged in successfully")
            navigate('/home')     
          } else {
            console.log(res.data.message) 
          }
        })
    }

    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="container">
                    <div className="row justify-content-center align-items-center min-vh-100">
                        <div className="col-md-6">
                            <div className="card shadow-lg border-0 rounded-lg">
                                <div className="card-header"><h3 className="text-center font-weight-light my-4">Sign In</h3></div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-floating mb-3">
                                            <input onChange={handleChange("email")} type="email" name="email" id="email" className="form-control" placeholder="name@company.com" required=""/>
                                            <label htmlFor="email">Email address</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input onChange={handleChange("password")} type="password" name="password" id="password" className="form-control" placeholder="••••••••" required=""/>
                                            <label htmlFor="password">Password</label>
                                        </div>
                                        <div className="form-check mb-3">
                                            <input className="form-check-input" type="checkbox" value="" id="rememberMe"/>
                                            <label className="form-check-label" htmlFor="rememberMe">
                                                Remember me
                                            </label>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                            <Link className="small" to="/forgot-password">Forgot Password?</Link>
                                            <button type="submit" className="btn btn-primary">Sign In</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="card-footer text-center py-3">
                                    <div className="small"><Link to="/register">Need an account? Sign up!</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;



// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { logInUser } from "../api/users/users";

// function Login () {

//     const navigate = useNavigate();
//     const [values, setValues] = useState({
//         password: "",
//         email: "",
//     })

//     const {
//         name,
//         password,
//         email,
//     } = values;

//     // handle input change
//     const handleChange = (prop) => (event) => {
//         setValues({ ...values, [prop]: event.target.value });
//         console.log(values)
//     };

//     // handle submission
//     function handleSubmit(e){
//         e.preventDefault();
//         return logInUser(name, email, password)
//         .then( (res) => {
//           if (res.status === 200) {
//             console.log("Logged in successfully")
//             navigate('/home')     
//           } else {
//             console.log(res.data.message) 
//           }
//         })
//     }

//     return (
//         <><section className="bg-gray-50 dark:bg-gray-900">
//         <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//             <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
//                 <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
//                 Enter your vault combination    
//             </a>
//             <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//                 <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//                     <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
//                         Sign in to your account
//                     </h1>
//                     <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
//                         <div>
//                             <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
//                             <input onChange={handleChange("email")} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
//                         </div>
//                         <div>
//                             <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
//                             <input onChange={handleChange("password")}type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
//                         </div>
//                         <div className="flex items-center justify-between">
//                             <div className="flex items-start">
//                                 <div className="flex items-center h-5">
//                                   <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
//                                 </div>
//                                 <div className="ml-3 text-sm">
//                                   <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
//                                 </div>
//                             </div>
//                             <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
//                         </div>
//                         <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
//                         <p className="text-sm font-light text-gray-500 dark:text-gray-400">
//                             Don't have an account yet? <Link to="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
//                         </p>
//                     </form>
//                 </div>
//             </div>
//         </div>
//       </section>

//         </>
//     )
// }

// export default Login;