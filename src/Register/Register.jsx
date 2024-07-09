import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const Register = () => {
    const { createUser } = useContext(AuthContext);


    const handleRegister = e => {
        const name = e.target.name.value;
        const photo = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name,photo,email, password)

        createUser(email, password)
        
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className="text-3xl my-10 text-center">Please login</h2>

                <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">photo</span>
                        </label>
                        <input type="text" name="photo" placeholder="photo" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center mt-4"> Allready have an account <Link className="text-blue-600 font-bold" to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;