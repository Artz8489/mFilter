import * as constant from '../constants/TicketConstants';

export const FetchTicketIncidents = (paginationParams) =>{
    return{
        type: constant.TICKET_INCIDENTS,
        paginationParams
        // ticketdata
    }
 };

 export const FetchTicketSearchIncidents = (ticketsearchdata) =>{
    return{
        type: constant.TICKETSEARCH_INCIDENTS,
        ticketsearchdata
    }
 };

 export const FetchTicketPriorityIncidents = () =>{
    return{
        type: constant.TICKETPRIORITY_INCIDENTS,
        
    }
 };

 export const FetchTicketAssigneeIncidents = () =>{
    return{
        type: constant.TICKETASSIGNEE_INCIDENTS,
    
    }
 };

 export const FetchTicketStatusIncidents = () =>{
    return{
        type: constant.TICKETSTATUS_INCIDENTS,
    }
 };

 export const UpdateTickets = (formData , id) =>{
    return{
        type: constant.TICKET_UPDATE_INIT,
        formData ,
        id
    }
 };
 
