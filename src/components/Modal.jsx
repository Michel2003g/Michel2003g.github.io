const Modal = ({children, openModal, buttons}) => {

    return (
      <div className={
        "cover " + (openModal ? '' : 'hidden')
      }>
        <div className="modal-body">
          {children}
        </div>
        <div className="button-container">
          {buttons}
        </div>
      </div>
    )
  }
  
  export default Modal
  