const Modal = ({children, openModal, buttons, type}) => {

    if (type === undefined) {
      type = ""
    }

    return (
      <div className={
        "cover " + (openModal ? '' : 'hidden')
      }> 
      <div className={"modal-body " + type}>
        <div className="modal-body-inner">
            {children}
            <div className="button-container">
              {buttons}
            </div>
        </div>
      </div>
        
      </div>
    )
  }
  
  export default Modal
  