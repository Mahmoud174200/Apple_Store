import React from "react";
import '../css/DashBoardAdmin.css';
import { Link } from "react-router-dom";
const EditProduct=()=>{
    return(
        <div className="BackGround">
        <aside className="sideBar">
            <div
            className="link">
            <Link className="Links" to={'/'}>DashBoard</Link>
            </div>
            <hr/>
            <div className="link">
            <Link className="Links" to={'listAllUsers'}>list all users</Link>
            </div>
            <hr/>
            <div className="link">
            <Link className="Links" to={'editUser'}>edit user</Link>
            </div>
            <hr/>
            <div className="link">
            <Link className="Links" to={'listAllProducts'}>list all products</Link>
            </div>
            <hr/>
            <div className="link">
            <Link className="Links" to={'editProduct'}>edit product</Link>
            </div>
        </aside>
        </div>
    )
}

export default EditProduct;