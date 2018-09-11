import React, {Component, Fragment} from "react";
import Modal from './Modal';
import ModalContent from './ModalContent';

class PageModal extends Component {
  render() {
    const {modalStatus, onOpen, onClose} = this.props;
    return (
      <Fragment>
        <main className="page__main">
          <h1 className="page__title">Modal sample</h1>
          <div className="page__content">
            <button className="button" onClick={onOpen} >Abrir modal</button>
          </div>
          {modalStatus && 
            <Modal title="Mi modal" onClose={onClose} >
              <ModalContent />
            </Modal>
          }
        </main>
      </Fragment>
    );
  }
}

export default PageModal;