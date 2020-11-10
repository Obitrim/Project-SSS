import React from 'react';
import StudentDetailsForm from '../../../components/StudentDetailsForm';

const Index = (props) => {
  function onSubmit(formik){
    alert('Submitting Financial Assistance details');
  }

  return (
     <StudentDetailsForm 
        heading="Financial Assistance"
        onSubmit={onSubmit}/>
  )
}

export default Index;