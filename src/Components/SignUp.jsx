import React, { useContext } from 'react';
import { AuthContex } from '../Provider/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContex)
    const habdleSubmitSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                const createTime = result?.user?.metadata
                    ?.creationTime
                const newUser = { name, email,createTime }
                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('create new user to db', data)
                    })
            })
            .then(error => {
                console.log(error)
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={habdleSubmitSignUp} className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" className="input" placeholder="User Name" name='name' required />
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" name='email' required />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" name='password' required />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;