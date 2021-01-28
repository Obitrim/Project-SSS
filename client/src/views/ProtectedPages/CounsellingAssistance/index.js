import React from 'react';
import "./CounsellingAssistance.css";
import StudentDetailsForm from '../../../components/StudentDetailsForm';

const Index = (props) => {
  function onSubmit(formik){
    alert('Submitting counselling details');
  }

  return (
    <section className="CounsellingAssistance">
    	 <StudentDetailsForm 
	        heading="Counselling Assistance"
	        onSubmit={onSubmit}/>
    </section>
  )
}

export default Index;