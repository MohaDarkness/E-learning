import React, {useEffect , useState} from 'react';
import { Link } from 'react-router-dom'
import Header from "../header";
import Sidebar from '../sidebar';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

import DatePicker from "react-datepicker";
import Modal  from 'react-bootstrap/Modal'

const Event = (props) => {
	const [startDate, setDate] = useState(new Date()),
            [showCategory, setshowCategory] = useState(false),
            [showEvents, setshowEvents] = useState(false),
            [show, setshow] = useState(false),
            [iseditdelete, setiseditdelete] = useState(false),
            [addneweventobj, setaddneweventobj] = useState(null),
            [isnewevent, setisnewevent] = useState(false),
            [event_title, setevent_title] = useState(""),
            [category_color, setcategory_color] = useState(""),
            [calenderevent, setcalenderevent] = useState(""),
            [weekendsVisible, setweekendsVisible] = useState(true),
            [currentEvents, setscurrentEvents] = useState([]),
            defaultEvents = [{						
                title: 'Event Name 4',
                start: Date.now() + 148000000,
                className: 'bg-purple'
              },
              {
                  title: 'Test Event 1',
                  start: Date.now(),
                  end: Date.now(),
                  className: 'bg-success'
              },
              {
                  title: 'Test Event 2',
                  start: Date.now() + 168000000,
                  className: 'bg-info'
              },
              {
                  title: 'Test Event 3',
                  start: Date.now() + 338000000,
                  className: 'bg-primary'
              }]
    ;
	
    useEffect(() => {
        let elements = Array.from(document.getElementsByClassName('react-datepicker-wrapper'));
        elements.map(element => element.classList.add("width-100"))
	},[]);

    const handleChange = (date) => {
        setDate(date)
    }
    const addEvent = () => {
        setshowEvents(true)
    }
    const categoryHandler = () => {
        setshowCategory(true)
    } 
      
      const handleClose=()=>{
          setisnewevent(false)
          setiseditdelete(false)
          setshow(false)
          setshowCategory(false)
          setshowEvents(false)
    }
    const handleEventClick = (clickInfo) => {  
        setiseditdelete(false)
        setevent_title(clickInfo.event.title)
        setcalenderevent(clickInfo.event) 
    }
    
    const handleDateSelect = (selectInfo) => {
        setisnewevent(true)
        setaddneweventobj(selectInfo)
    }
    const addnewevent=()=>{
        let calendarApi = addneweventobj.view.calendar

        calendarApi.unselect() // clear date selection

        if (event_title) {
            calendarApi.addEvent({
            id: 10,
            title : event_title,
            className: category_color,
            start: addneweventobj.startStr,
            end: addneweventobj.endStr,
            allDay: addneweventobj.allDay
            })
        }   
        setisnewevent(false)
    }
      
    const onupdateModalClose=()=> {
        setiseditdelete(false)
        setevent_title('')
    }
    const oncreateeventModalClose=()=> {
        setevent_title("")
        setisnewevent(false)
    }
    const removeevent=()=>{
        calenderevent.remove()
        setiseditdelete(false)
    }
    const clickupdateevent=()=>{
        const newArray = defaultEvents
        for(let i=0;i<newArray.length;i++){
            if(newArray[i].id === parseInt(calenderevent.id)){
            newArray[i].title = event_title
            }
        }
        defaultEvents = newArray
        setiseditdelete(false)
    }
    
    const handleClick=()=>{
        setshow(true)
    }

    const rendereventclick=()=>{            
        return(
         <form className='event-form'>
           <label>Change event name</label>
           <div className='input-group'>
             <input className='form-control' type="text" value={event_title} 
             onChange={(event) => setevent_title(event.target.value) } />
             <span className='input-group-append'>
               <button type="button" className='btn btn-success btn-md'
                 onClick={()=>clickupdateevent}>Save</button>
             </span>
           </div>
         </form>
        )
    }
   
        return (
        
        <div className="main-wrapper">
		
			<Header />
            <Sidebar />
			
			  {/* Page Wrapper */ }
            <div className="page-wrapper">
                <div className="content container-fluid">
				
					{/* Page Header */ }
					<div className="page-header">
						<div className="row align-items-center">
							<div className="col">
								<h3 className="page-title">Events</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
									<li className="breadcrumb-item active">Events</li>
								</ul>
							</div>
							<div className="col-auto text-right float-right ml-auto">
								<a href="/addevents" className="btn btn-primary"><i className="fas fa-plus"/></a>
							</div>
						</div>
					</div>
					{/*  /Page Header */ }
					
					<div className="row">						
						<div className="col-lg-12 col-md-12">
							<div className="card">
								<div className="card-body">
									<div id="calendar"></div>
                                <FullCalendar
                                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                                    headerToolbar={{
                                        left: 'prev,next today',
                                        center: 'title',
                                        right: 'dayGridMonth,timeGridWeek,timeGridDay',
                                    }}
                                    
                                    initialView='dayGridMonth'
                                    editable={true}
                                    selectable={true}
                                    selectMirror={true}
                                    dayMaxEvents={true}
                                    weekends={weekendsVisible}
                                    initialEvents={defaultEvents} // alternatively, use the `events` setting to fetch from a feed
                                    select={handleDateSelect}
                                    // eventContent={renderEventContent} // custom render function
                                    eventClick={clickInfo=>handleEventClick(clickInfo)}
                                    // eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
                                    /* you can update a remote database when these fire:
                                    eventAdd={function(){}}
                                    eventChange={function(){}}
                                    eventRemove={function(){}}
                                    */
                                    />
								</div>
							</div>
						</div>
					</div>
											
					{/*  Create Event modal */ }
					<div className="modal custom-modal fade none-border" id="my_event">
						<div className="modal-dialog modal-dialog-centered">
							<div className="modal-content">
								<div className="modal-header">
									<h4 className="modal-title">Add Event</h4>
									<button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
								</div>
								<div className="modal-body"></div>
								<div className="modal-footer justify-content-center">
									<button type="button" className="btn btn-success save-event submit-btn">Create event</button>
									<button type="button" className="btn btn-danger delete-event submit-btn" data-dismiss="modal">Delete</button>
								</div>
							</div>
						</div>
					</div>
					{/*  /Create Event modal */ }
																			
				</div>	

				{/* <!-- Footer --> */}
				<footer>
					<p>Copyright © 2020 Dreamguys.</p>					
				</footer>
				{/* <!-- /Footer --> */}

			</div>
			{/*  /Main Wrapper*/ }
		
        </div> 
		

    );
}

export default Event;
