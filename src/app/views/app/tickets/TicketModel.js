import React, { useState, useEffect } from 'react'
import { Modal , Spinner } from "react-bootstrap";


const TicketModel = (props) =>{
   
    const { show, handleClose, singleRow} = props;
    console.log(singleRow)

    return(
         <>
             <Modal 
             show={show} 
             onHide={handleClose}
              size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Ticket Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                    <div className="col-md-4">
                            <h6>Ticket ID</h6>
                            <span>{singleRow?.id}</span>
                        </div>
                        <div className="col-md-4">
                            <h6>Subject</h6>
                            <span>{singleRow?.subject}</span>
                        </div>
                        <div className="col-md-4">
                            <h6>Priority</h6>
                            <span>{singleRow?.priority.name}</span>
                        </div>
                        <div className="col-md-4">
                            <h6>Project</h6>
                            <span>{singleRow?.project.name}</span>
                        </div>
                        <div className="col-md-4">
                            <h6>Status</h6>
                            <span>{singleRow?.status.name}</span>
                        </div>
                        <div className="col-md-4">
                            <h6>Start Date</h6>
                            <span>{singleRow?.start_date}</span>
                        </div>
                        <div className="col-md-4">
                            <h6>Due Date</h6>
                            <span>{singleRow?.due_date}</span>
                        </div>

                        <div className="col-md-12">
                            <h6>Description</h6>
                            <span>{singleRow?.description}</span>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
         
         
         </>
    );
}
export default TicketModel