import React from 'react';
import Dashboard from './../components/Dashboard';
import { useNavigate } from 'react-router-dom';

const Admin = (props) => {
    let cnt=1;
    const navigate = useNavigate();
    const handleClick=()=>{
        navigate("/AddItem");
    }
    return ( 
        <>
    <div className="container">
        <button className='btn btn-primary mt-3 px-3' onClick={handleClick}>Add</button>
        <table className="table table-hover m-2">
        <thead>
        <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Remove</th>
            </tr>
        </thead>
        <tbody>
            {props.Products.map(prop=>(<Dashboard product={prop} key={prop.id} Rem={props.Rem} cnt={cnt++}/>))}
        </tbody>
    </table>
    </div>        </>
     );
}
 
export default Admin;