import React from 'react';

const ProductCart = (props) => {
    function getClasses(){
        return (props.Product.count===0)? 'badge bg-warning m-2': 'badge bg-primary m-2'
    }
    return ( 
        <>
        <div>
            <div className='row gx-3'>
            {//this.props.children
            }
       { //    <img src={this.state.logoUrl}></img>
       }
       <div className='col-4'>
            <span className='m-2' style={{color:"red",
                fontSize:"20px",
            }}>{props.Product.name}</span>
            </div>
            <div className='col'>
            <span className={getClasses()}>{props.Product.count}</span>
            <button onClick={()=>{
                props.onInc(props.Product);
            }} className='btn btn-primary btn-sm'> + </button>
            <span style={{ cursor: "pointer" }} onClick={()=>props.onDelete(props.Product)}> <i className="fa-solid fa-trash m-2"></i> </span>
            </div>
            </div>
            </div>
        </>
     );
}
 
export default ProductCart;