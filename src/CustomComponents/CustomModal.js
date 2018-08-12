import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

//functional component
const CustomModal = (props) => (
  <Modal trigger={<Button>{props.buttonText}</Button>}>
    <Modal.Header>{props.headerText}</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='/images/avatar/large/rachel.png' />
      <Modal.Description>
        <Header>{props.headingText}</Header>
        <p>{props.bodyText}</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default CustomModal