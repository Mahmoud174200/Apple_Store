import React from "react";
import '../css/admin_dashboard.css';

const DBUser =()=>{
    return(
        <>
        <div className="con">
      <div class="ProfilePic">
        <div class="image"><img src='https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?size=626&ext=jpg&uid=R20689868&ga=GA1.1.2128443553.1687617830&semt=sph'/>
        </div>
      </div>
      <hr/>
        <div className="user_Name">
            <h3> User name : Sample</h3>
            <button>Edit User Name</button>
        </div>
        <hr/>
        <div className="Mobile">
            <h3> Mobile_Number : Sample</h3>
            <button>Edit Mobile Number</button>
        </div>
        <hr/>
        <div className="Change_Password">
            <h3> Current Password : Sample</h3>
            <button>Change Password</button>
        </div>
        </div>
        </>
    );
}
export default DBUser;
