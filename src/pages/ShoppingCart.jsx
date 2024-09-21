import React from 'react';
import ProductCart from '../components/ProductCart';
const ShoppingCart = (props) => {
    let cnt=0;
    for(let i in props.Products){
        cnt+=parseInt(props.Products[i].price)*props.Products[i].count;
    }
    return ( 
        <>
        <div className="container">
        <button onClick={props.onReset} className="btn btn-secondary btn-sm m-2">Reset</button>
        { props.Products.map((prod)=>{
            if(prod.added)
              return <ProductCart key={prod.id} Product={prod} onDelete={props.onDelete} onInc={props.onInc} > <h3>{prod.id}</h3> </ProductCart>
            return ""
})}

        <div className='badge bg-secondary lg'> TotalPrice = {cnt} </div>
        </div>
         </>
     );
}
 
export default ShoppingCart;