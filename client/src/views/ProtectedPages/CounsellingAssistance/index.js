import React from 'react';
import swal from 'sweetalert';

import "./CounsellingAssistance.css";
import StudentDetailsForm from '../../../components/StudentDetailsForm';

const Index = (props) => {
  function onSubmit(formik){
    swal({
      title: 'Success',
      text: 'We are happy to receive your message for Financial assistance. You will hear from us soon',
      icon: 'success'
    }).then(() => {
      formik.resetForm()
    })
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