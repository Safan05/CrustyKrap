import React from 'react';
const Home = (props) => {
    return ( 
    <div className="container">
        <h1>أهلا بك في مطعم مقرمشات سلطع</h1>
        <h2>سبونج بوب ومستر سلطع يرحبون بك</h2>
        {props.user&&(<h3>welcome {props.user.name} To CrustyKrap !</h3>)}
    </div> 
);
}
 
export default Home;