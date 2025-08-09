import { useContext } from "react";
import { AuthContex } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";


const SignIn = () => {
    const { signInUser}=useContext(AuthContex)
    const habdleSubmitSignin = (e) => {
        e.preventDefault();
        const form=e.target
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email,password)
        .then(result=>{
            console.log(result.user)
            const lastSignInTime=result?.user?.metadata?.lastSignInTime;
            const loginInfo={email,lastSignInTime}
            fetch('http://localhost:5000/users',{
                method:"PATCH",
                headers:{'content-type':'application/json'},
                body:JSON.stringify(loginInfo)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log('sign in info update in db',data)
            })
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign in now</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={habdleSubmitSignin} className="fieldset">

                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" name='email' required />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" name='password' required />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Sign in</button>
                            <p>New coffee drinker create account <Link to={'/signup'}>SignUp</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
   
};

export default SignIn;