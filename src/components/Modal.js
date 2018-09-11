import React, {Component, Fragment} from "react";
import ModalTrigger from './ModalTrigger';
import ReactDOM from 'react-dom';

class Modal extends Component {
  render() {
    const {triggerText} = this.props;
    
    const ModalContent = () => {
      return ReactDOM.createPortal(
        <aside className="c-modal-cover">
          <div className="c-modal">
            <button className="c-modal__close">
              <span className="u-hide-visually">Close</span>
              <svg className="c-modal__close-icon" viewBox="0 0 40 40"><path d="M 10,10 L 30,30 M 30,10 L 10,30"></path></svg>
            </button>
            <div className="c-modal__body">
              CONTENT WILL GO HERE
            </div>
          </div>
        </aside>,
        document.body
      );
    };

    return (
      <Fragment>
        <ModalTrigger text={triggerText} />
        <ModalContent />
      </Fragment>
    );
  }
}

export default Modal;