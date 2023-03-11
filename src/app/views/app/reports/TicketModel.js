import React, { useState, useEffect } from 'react'
import { Modal , Spinner } from "react-bootstrap";


const TicketModel = (props) =>{
   
    const { show, handleClose, singleRow,currentView} = props;
    return(
         <>
             <Modal 
             show={show} 
             onHide={handleClose}
              size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Incident information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                    <div className="col-md-4 wrapper_model">
                            <h6>ID :</h6>
                            <p>{currentView?.mfe_id}</p>
                        </div>
                        <div className="col-md-4 wrapper_model">
                            <h6>Date :</h6>
                            <p>{currentView?.inserted_date}</p>
                        </div>
                        <div className="col-md-4 wrapper_model">
                            <h6 >Channel :</h6>
                            <p>{currentView?.channel_name}</p>
                        </div>
                        <div className="col-md-4 wrapper_model">
                            <h6>Location :</h6>
                            <p>{currentView?.location}</p>
                        </div>
                        <div className="col-md-4 wrapper_model">
                            <h6>Brand :</h6>
                            <p>{currentView?.brand}</p>
                        </div>
                        <div className="col-md-4 wrapper_model">
                            <h6>Keyword :</h6>
                            <p>{currentView?.keyword_term}</p>
                        </div>
                        <div className="col-md-4 wrapper_model">
                            <h6>Country :</h6>
                            <p>{currentView?.country}</p>
                        </div>
                        <div className="col-md-4 wrapper_model">
                            <h6>Category :</h6>
                            <p>{currentView?.category}</p>
                        </div>
                        <div className="col-md-4 wrapper_model">
                            <h6>Sub Category :</h6>
                            <p>{currentView?.sub_category}</p>
                        </div>

                        <div className="col-md-4 wrapper_model">
                            <h6>Priority :</h6>
                            <p>{currentView?.priority}</p>
                        </div>
                        <div className="col-md-4 wrapper_model">
                            <h6>Status :</h6>
                            <p>{currentView?.status}</p>
                        </div>
                        <div className="col-md-4 wrapper_model">
                            <h6>Status Update Date :</h6>
                            <p>{currentView?.status_update_date}</p>
                        </div>
                        <div className="col-md-4 wrapper_model">
                            <h6>Ad Heading :</h6>
                            <p>{currentView?.ad_heading}</p>
                        </div>
                        <div className="col-md-4 wrapper_model">
                            <h6>Ad Description :</h6>
                            <p>{currentView?.ad_description}</p>
                        </div>
                        <div className="col-md-4 wrapper_model">
                            <h6>Screenshot :</h6>
                            <p>{currentView?.screenshot}</p>
                        </div>
                        <div className="col-md-4 wrapper_model">
                            <h6>Case Reports :</h6>
                            <p>{currentView?.case_reports}</p>
                        </div>
                        <div className="col-md-4 wrapper_model">
                            <h6>Destination URL :</h6>
                            <p>{currentView?.destination_url}</p>
                        </div>
                        <div className="col-md-4 wrapper_model">
                            <h6>Ad Display Url :</h6>
                            <p>{currentView?.ad_display_url}</p>
                        </div>
                        <div className="col-md-4 wrapper_model">
                            <h6>Source Url :</h6>
                            <p>{currentView?.source_url}</p>
                        </div>
                        <div class="col-md-4  wrapper_model" >
                            <h6>Destination Url Domain :</h6>
                            <p>{currentView?.destination_url_domain}</p>
                        </div>
                        <div className="col-md-4 wrapper_model">
                            <h6>Publisher :</h6>
                            <p>{currentView?.publisher}</p>
                        </div>
                        <div className="col-md-4 wrapper_model">
                            <h6>Sub Publisher :</h6>
                            <p>{currentView?.sub_publisher}</p>
                        </div>
                        <div className="col-md-4 wrapper_model">
                            <h6>Campaign :</h6>
                            <p>{currentView?.campaign}</p>
                        </div>
                        <div className="col-md-4 wrapper_model">
                            <h6>Campaign Name :</h6>
                            <p>{currentView?.campaign_name}</p>
                        </div>
                        <div className="col-md-4 wrapper_model">
                            <h6>Additional Info1 :</h6>
                            <p>{currentView?.additional_info1}</p>
                        </div>
                        <div className="col-md-4 wrapper_model">
                            <h6>Ticket ID :</h6>
                            <p>{currentView?.ticket_id}</p>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
         
         
         </>
    );
}
export default TicketModel