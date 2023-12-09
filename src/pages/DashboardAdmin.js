import React from "react";
import '../css/DashBoardAdmin.css';
import { Link } from "react-router-dom";
const DashboardAdmin=()=>{
    return(
        <div className="BackGround">
        <aside className="sideBar">
            <div
            className="link">
            <Link className="Links" to={'/'}>DashBoard</Link>
            </div>
            <hr/>
            
            <hr/>
            <div className="link">
            <Link className="Links" to={'editUser'}>Add Item Product</Link>
            </div>
            <hr/>
            <div className="link">
            <Link className="Links" to={'editProduct'}>Update Item Product</Link>
            </div>
            <hr/>
            <div className="link">
            <Link className="Links" to={'editProduct'}>Delete Item Product</Link>
            </div>
        </aside>
        </div>
    )
}
export default DashboardAdmin;