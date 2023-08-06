import React from "react";
import { Outlet,Navigate } from "react-router-dom";
let PrivateComponent=()=>
{
console.log("hello");
const auth=JSON.parse(localStorage.getItem('user'));
console.log("auth");
console.log(auth+" enjoy baby");
return auth ? <Outlet /> : <Navigate to={'/sign'}/>;
}
export default PrivateComponent;