import React, { useState, useEffect } from 'react'
import { Modal , Spinner } from "react-bootstrap";


const ErrorModel = (props) =>{
    const { show, handleClose} = props;

    return(
         <>
             <Modal 
             show={show} 
             onHide={handleClose}
              size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Error</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                    <div className="col-md-12 wrapper_model">
                            
                            <p>Ticketing system is not configured. Contact administrator</p>
                        </div>
                       
                    </div>
                </Modal.Body>
            </Modal>
         
         
         </>
    );
}
export default ErrorModel