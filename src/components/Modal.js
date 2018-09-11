import React, {Component, Fragment} from "react";
import ModalTrigger from './ModalTrigger';
import ReactDOM from 'react-dom';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }
  }

  onOpen = () => {
    this.setState({ isOpen: true });
  };
  onClose = () => {
    this.setState({ isOpen: false });
  }

  render() {
    const {isOpen} = this.state;
    const {triggerText} = this.props;
    
    const ModalContent = ({onClose, children}) => {
      return ReactDOM.createPortal(
        <aside className="c-modal-cover">
          <div className="c-modal">
            <button className="c-modal__close" aria-label="Close Modal" onClick={onClose}>
              <span className="u-hide-visually">Close</span>
              <svg className="c-modal__close-icon" viewBox="0 0 40 40"><path d="M 10,10 L 30,30 M 30,10 L 10,30"></path></svg>
            </button>
            <div className="c-modal__body">
              {children}
            </div>
          </div>
        </aside>,
        document.body
      );
    };

    return (
      <Fragment>
        <ModalTrigger 
          text={triggerText} 
          onOpen={this.onOpen}
        />
       { isOpen && <ModalContent onClose={this.onClose}>CONTENT WILL GO HERE :)</ModalContent> }
      </Fragment>
    );
  }
}

export default Modal;