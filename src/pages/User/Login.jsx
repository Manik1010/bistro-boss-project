import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/others/cupcake.gif'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
     console.log('Login page location: ', location);
     console.log(location.state?.from?.pathname);
    const {signIn} = useContext(AuthContext)

    // const capterRef = useRef(null)  
    const [disabled, setDisable] = useState(true)
    useEffect( ()=>{
        loadCaptchaEnginge(6); 
    } , [])

    const handelCapter = (e) =>{
        const user_captcha_value = e.target.value;
        // console.log(user_captcha_value);
        if (validateCaptcha(user_captcha_value)==true) {
            alert('Captcha Matched');
            setDisable(false)
        }
   
        else {
            alert('Captcha Does Not Match');
            setDisable(true)
        }
    }

    const handelLogin = event => {
        event.preventDefault();

        const frm = event.target;
        const pass = frm.pass.value;
        const email = frm.email.value;
        // console.log(pass, email)
        signIn(email, pass)
        .then(result => {
            const user = result.user;
            console.log(user);
            // navigate('/')
            navigate(from, { replace: true });

        })
        .catch(error => console.log(error));
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center">Login now!</h1>
                        <form onSubmit={handelLogin}>
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

                            <div className="form-control">
                                <label className="label">
                                 <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handelCapter} type="text" name='captchar' placeholder="Type the captchar" className="input input-bordered" />
                            </div>

                            <div className="form-control mt-6">
                                <input disabled={disabled} className="btn btn-primary" type='submit' value='Login'></input>
                            </div>
                        </form>
                        <p className='my-3 text=center'>Create a Accoutn Plz..<Link className='text-orange-500 font-bold' to="/register">Sing Up</Link></p>
                    </div>
                </div>
                <div className="w-1/2 mr-12">
                    <img src={login}></img>
                </div>
            </div>
        </div>
    );
};

export default Login;