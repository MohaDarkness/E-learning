import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header/Header'
import SideBar from '../../SideBar/SideBar'
import Select from "react-select";





const AddSection = () => {
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedClassroom, setSelectedClassroom] = useState(null);

  const times = [
    { value: "8am", label: "8:00am - 9:00am" },
    { value: "9am", label: "9:00am - 10:00am" },
    { value: "10am", label: "10:00am - 11:00am" },
    { value: "11am", label: "11:00am - 12:00pm" },
    { value: "12pm", label: "12:00pm - 13:00pm" },
    { value: "13pm", label: "13:00pm - 14:00pm" },
    { value: "14pm", label: "14:00pm - 15:00pm" },
    { value: "15pm", label: "15:00pm - 16:00pm" },
  ];

  const classrooms = [
    { value: "101", label: "101" },
    { value: "102", label: "102" },
    { value: "103", label: "103" },
    { value: "104", label: "104" },
    { value: "105", label: "105" },
    { value: "106", label: "106" },
    { value: "107", label: "107" },
    { value: "201", label: "201" },
    { value: "202", label: "202" },
    { value: "203", label: "203" },
    { value: "301", label: "301" },
    { value: "302", label: "302" },
    { value: "303", label: "303" },
    { value: "304", label: "304" },
    { value: "305", label: "305" }
  ];


  const handleTimeChange = (selectedTime) => {
    setSelectedTime(selectedTime);
  };
  const handleClassroomChange = (selectedClassroom) => {
    setSelectedClassroom(selectedClassroom);
  };
    return (
        <>
            <div className="main-wrapper">
                {/* Header */}
                <Header />

                {/* Sidebar */}
                <SideBar />

                {/* Page Wrapper */}

                <div className="page-wrapper">
                    <div className="content container-fluid">
                        {/* Page Header */}
                        <div className="page-header">
                            <div className="row align-items-center">
                                <div className="col">
                                    <h3 className="page-title">Add Section</h3>
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to="/addsubject">Add Section</Link>
                                        </li>
                                        <li className="breadcrumb-item active">Sections</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* /Page Header */}
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card">
                                    <div className="card-body">
                                        <form>
                                            <div className="row">
                                                <div className="col-12">
                                                    <h5 className="form-title">
                                                        <span>Section Information</span>
                                                    </h5>
                                                </div>
                                                <div className="col-12 col-sm-4">
                                                    <div className="form-group local-forms">
                                                        <label>
                                                            Course ID <span className="login-danger">*</span>
                                                        </label>
                                                        <input type="text" className="form-control" required/>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-4">
                                                    <div className="form-group local-forms">
                                                        <label>
                                                            Teacher ID <span className="login-danger">*</span>
                                                        </label>
                                                        <input type="text" className="form-control" required/>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-4">
                                                    <div className="form-group local-forms">
                                                        <label>
                                                        Time <span className="login-danger">*</span>
                                                        </label>
                                                        <Select
                                                        className="w-100 local-forms  select"
                                                        value={selectedTime}
                                                        onChange={handleTimeChange}
                                                        options={times}
                                                        placeholder="Chose Time"
                                                        required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-4">
                                                    <div className="form-group local-forms">
                                                        <label>
                                                        Classroom <span className="login-danger">*</span>
                                                        </label>
                                                        <Select
                                                        className="w-100 local-forms  select"
                                                        value={selectedClassroom}
                                                        onChange={handleClassroomChange}
                                                        options={classrooms}
                                                        placeholder="Chose Classroom"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-form-label col-md-2">Days</label>
                                                    <div className="col-md-10">
                                                        <div className="checkbox">
                                                            <label>
                                                                <input type="checkbox" name="checkbox" /> Sunday
                                                            </label>
                                                        </div>
                                                        <div className="checkbox">
                                                            <label>
                                                                <input type="checkbox" name="checkbox" /> Monday
                                                            </label>
                                                        </div>
                                                        <div className="checkbox">
                                                            <label>
                                                                <input type="checkbox" name="checkbox" /> Tuesday
                                                            </label>
                                                        </div>
                                                        <div className="checkbox">
                                                            <label>
                                                                <input type="checkbox" name="checkbox" /> Wednesday
                                                            </label>
                                                        </div>
                                                        <div className="checkbox">
                                                            <label>
                                                                <input type="checkbox" name="checkbox" /> Thursday
                                                            </label>
                                                        </div>
                                                        <div className="checkbox">
                                                            <label>
                                                                <input type="checkbox" name="checkbox" /> Satarday
                                                            </label>
                                                        </div>
											        </div>
										        </div>
                                                <div className="col-12">
                                                    <div className="student-submit">
                                                        <button type="submit" className="btn btn-primary">
                                                            Submit
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* /Main Wrapper */}

        </>
    )
}

export default AddSection
