import { Link } from "react-router-dom";
import NaveBar from "../Shared/NaveBar/NaveBar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {
    const { createUserWithEmailPass } = useContext(AuthContext);
    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget)
        const name = form.get('name');
        const email = form.get('email');
        const photo = form.get('photo');
        const password = form.get('password');
        console.log(name, email, photo, password);

        // Create User
        createUserWithEmailPass(email, password)
            .then(result => console.log(result.user))
            .catch(error => console.error(error))
    }
    return (
        <div className="container mx-auto">
            <NaveBar></NaveBar>
            <div className="py-5 space-y-2">
                <h2 className="text-xl font-semibold text-center">Register Your Account</h2>
                <form className="card-body lg:w-2/4 mx-auto md:w-2/3 w-full shadow rounded-xl" onSubmit={handleRegister}>

                    {/* Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" placeholder="name" className="input input-bordered" name="name" required />
                    </div>

                    {/* Photo */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" placeholder="photo url" className="input input-bordered" name="photo" required />
                    </div>

                    {/* Email */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                    </div>

                    {/* Password */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>

                    {/* Photo */}
                    <div className="flex items-center gap-1">
                        <input type="checkbox" name="terms" id="" />
                        <label className="label">
                            <span className="label-text"><Link to='/terms' className="text-orange-500">Accept</Link> Terms & Condition</span>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className=" text-center">Already Have An Account ? <Link to='/login' className=' text-orange-500 font-medium'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;