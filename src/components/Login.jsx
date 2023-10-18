import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.email.value;
        const password = form.password.value;
        console.log(name, password);
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 md:w-96 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
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
                        </div>
                        <div className="form-control">
                            <button className="btn btn-primary mt-2">Login</button>
                        </div>
                        <p className='text-center'>Do not have account?Please <Link to='/register' className='underline text-blue-600'>register</Link> </p>
                    </form>
                    <button className="btn btn-primary mx-8 mb-5">
                        <FcGoogle className='text-2xl'></FcGoogle>Google Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;