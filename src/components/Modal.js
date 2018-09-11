import React, {Component} from "react";
import ReactDOM from 'react-dom';

class Modal extends Component {
  render() {
    const {title, children, onClose} = this.props;
    return ReactDOM.createPortal(
      <section className="modal">
        <div className="modal__panel">
          <header className="modal__header">
            <h2 className="modal__title">{title}</h2>
            <button className="modal__close-btn" onClick={onClose} >Cerrar</button>
          </header>
          <div className="modal__container">
           {children}
          </div>
        </div>
        <div className="modal__overlay" onClick={onClose} ></div>
      </section>,
      document.body
    );
  }
}

export default Modal;