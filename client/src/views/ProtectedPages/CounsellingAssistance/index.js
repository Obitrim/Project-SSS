import React from 'react';
import StudentDetailsForm from '../../../components/StudentDetailsForm';

const Index = (props) => {
  function onSubmit(formik){
    alert('Submitting counselling details');
  }

  return (
     <StudentDetailsForm 
        heading="Counselling Assistance"
        onSubmit={onSubmit}/>
  )
}

export default Index;