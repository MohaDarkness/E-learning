import React from 'react';
import { useState } from 'react';
import AdminSideBar from './AdminSideBar';
import TeacherSideBar from './TeacherSideBar';
import StudentSideBar from './StudentSideBar';
import FullSideBar from './FullSideBar';



const MySideBar = () => {
  const jsonRole = localStorage.getItem('role');
  const role = jsonRole ? JSON.parse(jsonRole) : null;

  switch (role) {
    case 'A':
      return <AdminSideBar />;
      // return <FullSideBar/>
    case 'T':
      return <TeacherSideBar />;
    case 'S':
      return <StudentSideBar />;
    default:
      // Handle other cases or show an error message
      console.error('Invalid role:', role);
      return null;
  }
};

export default MySideBar;
