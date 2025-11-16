import React from "react";
import Home from "./home";
import { Link } from "react-router-dom";

const Register=()=>{
return(
    <div className="outer">
              <h1>Start Your Journey</h1>
        <div className="register">

            <div className="personalinfo">
                <h2> Personal Details</h2>
                <label className="text">Name:</label><br />
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name"/><br />
                <label className="text"> Parents Name:</label><br />
                <input type="text" placeholder="Father's Name" />
                <input type="text" placeholder="Mother's Name"/><br />
                <label className="text">Gender:</label><br />
                <input type="radio" name="gen"/>Male 
                <input type="radio" name="gen"/>Female 
                <input type="radio" name="gen"/>Others <br />
                
                <label className="text">D.O.B</label><br />
                <input type="date" />
            </div>
            <div className="contactinfo">
                <h2> Contact Details</h2>
                <label className="text">Phone number</label><br />
                <input type="number" /><br />
                <label className="text">E-mail</label><br />
                <input type="email" /><br />
                <label className="text">Address</label><br />
                <textarea name="" id=""></textarea>
            </div>
            <div className="academicinfo">
                <h2> Academic Details</h2>
                <label className="text">Course Enrolled </label><br />
                <select name="" id="">
                    <option>--SELECT COURSE</option>
                    <option value="">WEB DEV</option>
                    <option value="">C/C++</option>
                    <option value="">Python</option>
                    <option value="">DSA</option>
                </select><br />
                <label className="text">Expected Finish Date </label><br />
                <input type="date" name="" id="" />

            </div>
            <div className="upload">
                <h2 >Upload Photo</h2><br/>
                <input type="file" name="" id="" />
            </div>
        </div>
        <div className="btn3">
            <Link to="/home" className="button2" > Register</Link></div>
    </div>
)
}
export default Register