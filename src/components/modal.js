import React, {Component} from 'react'
import {Modal,ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

class ModalPopUp extends Component{
    constructor(props){
      super(props)
      this.state={
        isModalOpen:false
      }
    }

toggleModal(){
  this.setState({isModalOpen:!this.state.visible
  })
}

    render(){
      return(<>

        <Modal isOpen={this.state.isModalOpen }>
          <ModalHeader toggle={this.toggleModal.bind(this)}>Cart</ModalHeader>
            <ModalBody>
                <h2>things i need to pass as props</h2>
            </ModalBody>
          <ModalFooter> 
          <div className="btn btn-success btn-lg btn-block ">Check Out</div>
          </ModalFooter>
        </Modal>


      </>)
    }
}
export default ModalPopUp;