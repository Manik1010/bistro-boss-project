import { Link, useNavigate } from 'react-router-dom';
import login from '../../assets/others/cupcake.gif'
import { AuthContext } from '../../providers/AuthProvider';
import { useContext } from 'react';

const Registation = () => {
    const navigate = useNavigate()
    const {createUser} = useContext(AuthContext)
    const handelSingup = event => {
        event.preventDefault();

        const frm = event.target;

        const name = frm.name.value;
        const pass = frm.pass.value;
        const email = frm.email.value;
        console.log(name, email, pass); 

        createUser( email, pass)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                // ...
                navigate('/login')
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                // ..
            });
            frm.reset();

    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className="text-3xl font-bold text-center">Register Here...!</h1>
                    <form onSubmit={handelSingup}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='pass' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type='submit' value='Login'></input>
                        </div>
                    </form>
                    <p className='my-3 text=center'>Already hae an account <Link className='text-orange-500 font-bold' to="/login">Login</Link></p>
                </div>
            </div>
            <div className="w-1/2 mr-12">

                <img src={login}></img>
            </div>
        </div>
    </div>
    );
};

export default Registation;