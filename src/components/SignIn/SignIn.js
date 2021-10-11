import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './SignIn.css'

const SignIn = () => {

    const { googleSignIn } = useAuth();
    const location = useLocation();
    console.log(location.state?.form)

    return (
        <div className="sign-in">
            <div>
                <h2>Sign In</h2>
                <form>
                    <input type="email" name="" id="" placeholder="Your Email" /> <br /> <br />
                    <input type="password" name="" id="" placeholder="Input Your Password" /> <br /> <br />
                    <input className="btn-regular" type="submit" value="Sign In" />
                </form>
                <br />
                <h4>----------- or ---------</h4>
                <button onClick={googleSignIn} className="btn-regular">Google Sign In</button>
                <br /><br /><br />
                <p>new to ema-jhon?</p>
                <Link to="/signup">Sign Up Here</Link>
            </div>
        </div>
    );
};

export default SignIn;