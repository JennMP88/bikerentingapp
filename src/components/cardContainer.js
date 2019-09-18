import React from 'react';

function CardContainer(props) {
  return (<>
    <h3>{props.title}</h3>

    <div class="container"> 
      <div class="row mb-5">
      <div class="col-sm-auto">

{/* maps through the json to get each product's image, name, and title and displays each in a card.
***takes in rentme props from app file */}
    <div class="card-deck center">
      {
        props.products.map((product, i) => {
          
          return (
          
            <div className="card" key={i}>
              <img src={product.image} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title" >{product.name}</h5>
                <p class="card-text">${product.price}</p>
                <div className="btn btn-success btn-lg btn-block " style={{cursor:"pointer"}} onClick={() => props.rentMe(product)}>Rent It</div>
              </div>
              </div>
          
              )
            })
          }
    </div>
    </div>
    </div>
    </div>
  </>)
    }
export default CardContainer;