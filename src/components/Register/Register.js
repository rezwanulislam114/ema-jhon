import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="sign-in">
            <div>
                <h2>Sign Up</h2>
                <form>
                    <input type="email" name="" id="" placeholder="Your Email" /> <br /> <br />
                    <input type="password" name="" id="" placeholder="Enter Your Password" /> <br /> <br />
                    <input type="password" name="" id="" placeholder="Re-enter Your Password" /> <br /> <br />
                    <input className="btn-regular" type="submit" value="Sign Up" />
                </form>
                <br />
                <h4>----------- or ---------</h4>
                <button className="btn-regular">Google Sign Up</button>
                <br /><br /><br />
                <p>Already have an account?</p>
                <Link to="/signin">Sign In Here</Link>
            </div>
        </div>
    );
};

export default Register;