import { Link, useLocation, useNavigate } from "react-router-dom";
import NaveBar from "../Shared/NaveBar/NaveBar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {
    const { loginUserWithEmailPass } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        // Sign In User
        loginUserWithEmailPass(email, password)
            .then(result => {
                console.log(result.user);

                // navigate after login
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => console.log(error))
    }
    return (
        <div className="container mx-auto">
            <NaveBar></NaveBar>
            <div className="py-5 space-y-2">
                <h2 className="text-xl font-semibold text-center">Login Your Account</h2>
                <form className="card-body lg:w-2/4 mx-auto md:w-2/3 w-full shadow rounded-xl" onSubmit={handleLogin}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className=" text-center">Dont’t Have An Account ? <Link to='/register' className=' text-orange-500 font-medium'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;