import React from 'react';
import swal from 'sweetalert';
import StudentDetailsForm from '../../../components/StudentDetailsForm';

const Index = (props) => {

  function onSubmit(data, formik){
    swal({
    	title: 'Success',
    	text: 'We are happy to receive your message for Financial assistance. You will hear from us soon',
    	icon: 'success'
    }).then(() => {
    	formik.resetForm()
    });
  }

  return (
     <StudentDetailsForm 
        heading="Financial Assistance"
        onSubmit={onSubmit}/>
  )
}

export default Index;