import React from 'react'
import './Dos.css'

import swal from 'sweetalert';

import StudentDetailsForm from '../../../components/StudentDetailsForm';

const Index = (props) => {
  function onSubmit(formik){
    swal({
      title: 'Success',
      text: 'Your appointment with the Dean Of student has been received. You will hear from us soon',
      icon: 'success'
    }).then(() => {
      formik.resetForm()
    })
  }

  return (
    <section className="Dos">
    	 <StudentDetailsForm 
	        heading="Appointment with Dean Of Student"
	        onSubmit={onSubmit}
          />
    </section>
  )
}

export default Index;