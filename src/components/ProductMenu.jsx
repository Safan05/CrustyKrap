import React from 'react';
const ProductMenu = (props) => {
    let Added=props.product.added;
    return ( 
        <>
        <tr>
            <td>{props.cnt}</td>
            <td>{props.product.name}</td>
            <td>{props.product.price}</td>
            <td><i className="fa-solid fa-cart-shopping"  style={ Added?{color:"black",cursor:"pointer"}:{color:"grey",cursor:"pointer"}} 
            onClick={()=>{props.cart(props.product)}} ></i></td>
       </tr>
        </>
     );
}
 
export default ProductMenu;