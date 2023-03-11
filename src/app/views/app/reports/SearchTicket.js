import React, { useState, useEffect } from 'react'
import { Modal , Spinner } from "react-bootstrap";


const SearchTicket = (props) =>{
   
    const { show, handleClose, currentView} = props;


    return(
         <>
             <Modal 
             show={show} 
             onHide={handleClose}
              size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Ticket By ID</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                    <div className="col-md-10">
                            <h6>ID</h6>
                            <span>{currentView?.mfe_id}</span>
                        </div>
                        <div className="col-md-10">
                            <h6>Date</h6>
                            <span>{currentView?.inserted_date}</span>
                        </div>
                        <div className="col-md-10">
                            <h6 >Channel</h6>
                            <span>{currentView?.channel_name}</span>
                        </div>
                        <div className="col-md-10">
                            <h6>Location</h6>
                            <span>{currentView?.country}</span>
                        </div>
                        <div className="col-md-10">
                            <h6>Brand</h6>
                            <span>{currentView?.brand}</span>
                        </div>
                        <div className="col-md-10">
                            <h6>Keyword</h6>
                            <span>{currentView?.keyword_term}</span>
                        </div>
                        <div className="col-md-10">
                            <h6>Country</h6>
                            <span>{currentView?.location}</span>
                        </div>
                        <div className="col-md-10">
                            <h6>Category</h6>
                            <span>{currentView?.category}</span>
                        </div>
                        <div className="col-md-10">
                            <h6>Sub Category</h6>
                            <span>{currentView?.sub_category}</span>
                        </div>

                        <div className="col-md-12">
                            <h6>Priority</h6>
                            <span>{currentView?.priority}</span>
                        </div>
                        <div className="col-md-12">
                            <h6>Status</h6>
                            <span>{currentView?.status}</span>
                        </div>
                        <div className="col-md-12">
                            <h6>Status Update Date</h6>
                            <span>{currentView?.status_update_date}</span>
                        </div>
                        <div className="col-md-12">
                            <h6>Ad Heading</h6>
                            <span>{currentView?.ad_heading}</span>
                        </div>
                        <div className="col-md-12">
                            <h6>Ad Description</h6>
                            <span>{currentView?.ad_description}</span>
                        </div>
                        <div className="col-md-12">
                            <h6>Screenshot</h6>
                            <span>{currentView?.screenshot}</span>
                        </div>
                        <div className="col-md-12">
                            <h6>Case Reports</h6>
                            <span>{currentView?.case_reports}</span>
                        </div>
                        <div className="col-md-12">
                            <h6>Destination URL</h6>
                            <span>{currentView?.ad_description}</span>
                        </div>
                        <div className="col-md-12">
                            <h6>Ad Display Url</h6>
                            <span>{currentView?.ad_display_url}</span>
                        </div>
                        <div className="col-md-12">
                            <h6>Source Url</h6>
                            <span>{currentView?.source_url}</span>
                        </div>
                        <div className="col-md-12">
                            <h6>Destination Url Domain</h6>
                            <span>{currentView?.destination_url}</span>
                        </div>
                        <div className="col-md-12">
                            <h6>Publisher</h6>
                            <span>{currentView?.publisher}</span>
                        </div>
                        <div className="col-md-12">
                            <h6>Sub Publisher</h6>
                            <span>{currentView?.sub_publisher}</span>
                        </div>
                        <div className="col-md-12">
                            <h6>Campaign</h6>
                            <span>{currentView?.campaign}</span>
                        </div>
                        <div className="col-md-12">
                            <h6>Campaign Name</h6>
                            <span>{currentView?.campaign_name}</span>
                        </div>
                        <div className="col-md-12">
                            <h6>Additional Info1</h6>
                            <span>{currentView?.additional_info1}</span>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
         
         
         </>
    );
}
export default SearchTicket