import React from 'react';
const ProtectedRoute = ({children,user}) => {
    if(user&&user.isAdmin)
        return children
    return(
    <>
    <h1> You are not authenticated to this page ! </h1>
    </>)
}
 
export default ProtectedRoute;