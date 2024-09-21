import React from 'react';
import ProductMenu from '../components/ProductMenu';
const Menu = (props) => {
    let cnt=1;
    return ( 
    <>
    <div className="container">
        <table className="table table-hover m-2">
        <thead>
        <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Add</th>
            </tr>
        </thead>
        <tbody>
            {props.Products.map(prop=>(<ProductMenu product={prop} key={prop.id} cart={props.cart} cnt={cnt++}/>))}
        </tbody>
    </table>
    </div>
    </> );
}
 
export default Menu;