import React from 'react';
const Dashboard = (props) => {
    let Added=props.product.added;
    return ( 
        <>
        <tr>
            <td>{props.cnt}</td>
            <td>{props.product.name}</td>
            <td>{props.product.price}</td>
            <td><i className="fa-solid fa-trash-can"  style={ Added?{color:"black",cursor:"pointer"}:{color:"grey",cursor:"pointer"}} 
            onClick={()=>{props.Rem(props.product)}} ></i></td>
       </tr>
        </>
     );
}
 
export default Dashboard;