import React from 'react';


function Header(props){
  return(
  <>
 
 
 <div className="jumbotron jumbotron-fluid" style={{backgroundColor:"#b0e0e6"}}>
  <div className="container">
      <div class="col-lg-auto">
    <h1 className="display-4" style={{fontFamily: 'Saira Stencil One'}}>Bike Rentals</h1>
  </div>

<div className="float-right" >
<i className="fa fa-shopping-cart fa-2x"   style={{cursor:"pointer"}} onClick={props.popup}> {props.count} </i>
</div>

</div>
</div> 

  </>
  )
}
export default Header;