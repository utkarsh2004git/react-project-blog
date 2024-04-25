import "./Register.css"
import { NavLink } from "react-router-dom";
import { useState } from "react";
const Register = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",
    });

    const handleInput = (e) => {
        let name = e.target.name
        let value = e.target.value
        setUser({
            ...user,
            [name]: value,
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // alert(user);
        console.log(user);
        const response = fetch()
    }
    return (
        <>
            <section>
                <main>
                    <div className="h-screen section-registration pt-3 bg-slate-600">
                        <div className="font-bold text-center text-2xl text-white">SIGN UP</div>
                        <div className="container w-2/5 flex-column items-center border-white border-4 rounded-lg p-3 px-5 bg-slate-200 mt-3 " >
                            <form action="" onSubmit={handleSubmit}>
                                <div class="form-group my-2">
                                    <label for="name" className="font-semibold ">Name</label>
                                    <input type="text" className="form-control rounded-md" onChange={handleInput}
                                        value={user.name} name="name" id="" placeholder="Enter your name"
                                        required autoComplete="off" />
                                </div>
                                <div class="form-group my-2">
                                    <label for="email" className="font-semibold ">Email</label>
                                    <input type="email" className="form-control rounded-md" onChange={handleInput}
                                        value={user.email} name="email" id="" placeholder="Enter your email"
                                        required autoComplete="off"
                                        errorText="Please enter valid email" />
                                </div>
                                <div class="form-group my-2">
                                    <label for="password" className="font-semibold ">Password</label>
                                    <input type="password" className="form-control rounded-md" onChange={handleInput} name="password"
                                        value={user.password} id="" placeholder="Enter your password"
                                        required autoComplete="off" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="gender" className="font-semibold">Gender</label>
                                    <select className="form-control" name="gender" id="gender" required onChange={handleInput} value={user.gender}>
                                        <option value="" disabled>Select</option>
                                        <option value="M">Male</option>
                                        <option value="F">Female</option>
                                        <option value="O">Other</option>
                                    </select>
                                </div>

                                <div class="text-center">
                                    <button type="submit" className="btn btn-primary text-center bg-blue-600 mt-3" >Register</button>
                                </div>
                                <NavLink to="/login" className="font-semibold text-primary">Already Registered?</NavLink>
                            </form>
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}

export default Register;