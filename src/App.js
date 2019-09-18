import React,{Component} from 'react';
import {Button,Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

//Components
import Header from '../src/components/header'
import CardContainer from '../src/components/cardContainer'
import apiBikes from '../src/containers/bikerentals.json'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bikes: [],       //array to hold bikes from json
      accesories: [],  //array to hold accesories from json
      addons: [],      //array to hold addons from json
      checkedOut:[],   //array to hold items clicked for checkout
      currentItem:'',  //array selected for deletion
      sum:0,           //variable to display total in cart
      isModalOpen:false   //state to check toggle cart if open
    }
  }


  componentDidMount() {
    let bikes = []
    let accesories = []
    let addons = []

  //loops through product_type to later push into empty array according to type 
    for (let product of apiBikes.products) {
      if (product.product_type === 'bike') {
        bikes.push(product)
      }
      if (product.product_type === 'accessory') {
        accesories.push(product)
      }
      if (product.product_type === 'addon') {
        addons.push(product)
      }

    }
    //sets state array with pushed items array according to its type
    this.setState({ bikes, accesories, addons })
  }


  //on click event listener attached to rentme
  rentMe=(product)=>{
    //creates copy of checkedout to be able to manipulate data
    let checkedOut=[...this.state.checkedOut]

    //pushed product selected to checkout
    checkedOut.push(product)
    let prices=[];
    let sum=0

    //loops through prices of the items checkedout and pushes it to price array
    for(let i=0;i<checkedOut.length;i++){
      prices.push(checkedOut[i].price)
    }

    //loops through each item price in price array to take the sum of each price
    for(let i=0;i<prices.length;i++){
      sum+=prices[i]
    }

    //sets state of checkedout items and sum total for those items
    this.setState({checkedOut,sum})
  }


  //attached to cart if toggle is open(clicked) modal will display
  toggleModal(){
    this.setState({isModalOpen:!this.state.isModalOpen
    })
  }

  //function to display reduction of items deleted from cart
  selectedItem=(e,index,item)=>{
    const{sum}=this.state
    //creates copy of checkedout item array
    let array=[...this.state.checkedOut];
    let newSum=0

    //looks at index of item selected to be removed from checkedout array and sets checkedOut state again with new array
    if(index !==-1){
      array.splice(index,1);
      this.setState({checkedOut:array})
    } 

    //takes new total with that item that was removed and sets checkedout total with new array total in the case of an item being removed
    newSum=sum-item.price
    this.setState({sum:newSum})
  }
 

  render(){
    const { bikes, accesories, addons } = this.state
  
  return (
<>

<Header count={this.state.checkedOut.length} popup={this.toggleModal.bind(this)}/>

<div class="container">
  <div class="row">
    <div class="col">
    
    {/* refers to cardcontainer to display cardcontainer html according to product_type */}
    <CardContainer products={bikes} title='Bikes' rentMe={this.rentMe}/>
      <CardContainer products={accesories} title='Accesories' rentMe={this.rentMe} />
      <CardContainer products={addons} title='Add ons' rentMe={this.rentMe}/>
    </div>
  </div>
</div>
 
{/* modal dispaly->handles the popup displayed for when the cart is clicked */}
<Modal isOpen={this.state.isModalOpen }>
          <ModalHeader toggle={this.toggleModal.bind(this)}>Shopping Cart</ModalHeader>
            <ModalBody toggle={this.toggleModal.bind(this)}>
         <div className="overflow-auto" style={{ height: 200 }}>  
         <ul class="list-group">
              {
                this.state.checkedOut.map((item,i)=>{
                  let activeItem="";
                  if(item===this.state.currentItem) activeItem="active"
                  return <li key={i} className={"list-group-item d-flex justify-content-between align-items-center"}>{item.name}            ${item.price}
                  <span class={"badge badge-primary badge-pill " + activeItem} onClick={(e) => this.selectedItem(e, i, item)} >x</span></li>
                })
              }
            </ul>
         </div>  
            <p>Total: ${this.state.sum}</p>
            </ModalBody>
          <ModalFooter> 
            
          <Button color='success'>Check Out</Button>
          <Button color='success' onClick={this.toggleModal.bind(this)}>Cancel</Button>          
          </ModalFooter>
  </Modal>



</>
  );
 }
}

export default App;
