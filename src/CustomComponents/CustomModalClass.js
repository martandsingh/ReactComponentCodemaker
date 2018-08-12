import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

//class based component
class CustomModalClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            displayText : false,
            anotherValue : ""
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.setState({
            displayText : !this.state.displayText
        })
    }
    render(){
        return(
            <Modal trigger={<Button>{this.props.buttonText}</Button>}>
            <Modal.Header>{this.props.headerText}</Modal.Header>
            <Modal.Content image>
              <Image wrapped size='medium' src='/images/avatar/large/rachel.png' />
              <Button onClick = {this.handleClick}>Toggle Text</Button>
              <div style = {{display : this.state.displayText ? "block" : "none"}}>
                 <h1>Hello This is a toggle text
                     </h1> 
              </div>
              <Modal.Description>
                  
                {/* <Header>{this.props.headingText}</Header> */}
                <p>{this.props.bodyText}</p>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        )
    }
}

export default CustomModalClass