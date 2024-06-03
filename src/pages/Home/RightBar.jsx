import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa6";
import swimming from '../../../src/assets/qZone1.png'
import classes from '../../../src/assets/qZone2.png'
import playground from '../../../src/assets/qZone3.png'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const RightBar = () => {
    const { createUserWithGoogle, createUserWithGitHub } = useContext(AuthContext);
    // Google Login
    const handleGoogleLogin = () => {
        createUserWithGoogle()
            .then(result => console.log(result.user))
            .catch(error => console.error(error))
    }

    // Github Login
    const handleGitHubLogin = () => {
        createUserWithGitHub()
            .then(result => console.log(result.user))
            .catch(error => console.error(error))
    }
    return (
        <div className="p-3">
            {/* Login */}
            <div className="mb-5 space-y-2">
                <h2 className="text-lg font-semibold">Login With</h2>
                <button onClick={handleGoogleLogin} className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    <span>Google</span>
                </button>

                <button onClick={handleGitHubLogin} className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    <span>GitHub</span>
                </button>
            </div>

            {/* Find Us */}
            <div className="mb-5">
                <h2 className="text-lg font-semibold">Find Us on</h2>
                <div className="flex items-center gap-2 border py-2 pl-2 rounded-t">
                    <p className="bg-slate-100 p-2 rounded-full"><FaFacebookF size='20px'></FaFacebookF></p>
                    <a href="#">FaceBook</a>
                </div>
                <div className="flex items-center gap-2 border-x py-2 pl-2">
                    <p className="bg-slate-100 p-2 rounded-full"><FaTwitter size='20px'></FaTwitter></p>
                    <a href="#">Twitter</a>
                </div>
                <div className="flex items-center gap-2 border py-2 pl-2 rounded-b">
                    <p className="bg-slate-100 p-2 rounded-full"><FaInstagram size='20px'></FaInstagram></p>
                    <a href="#">Instagram</a>
                </div>
            </div>

            {/* Q-Zone */}
            <div className="p-3 mb-5 bg-slate-200 rounded">
                <h2 className="text-lg font-semibold">Q-Zone</h2>
                <img src={swimming} alt="" />
                <img src={classes} alt="" />
                <img src={playground} alt="" />
            </div>
        </div>
    );
};

export default RightBar;