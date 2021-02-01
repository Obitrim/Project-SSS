import './StudentDetailsForm.css';
import React from 'react';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const Index = ({onSubmit, heading}) => {
  return (
    <div className="StudentDetails">
        <Paper className="StudentDetails__Board">
            <h1 className="ViewHeading">{heading}</h1>
            <Formik
                initialValues={{
                    firstName: 'Obitrim',
                    lastName: 'Paul',
                    program: 'BSc. Computer Science',
                    level: 100,
                    address: '',
                    phoneNo: '',
                    email: '',
                    description: ''
                }}
                validationSchema={yup.object({
                    firstName: yup.string()
                        .trim()
                        .min(3, 'Minimum of 3 characters required')
                        .required('First name is required'),
                    lastName: yup.string()
                        .trim()
                        .min(4, 'Minimum of 3 characters required')
                        .required('Last name is required'),
                    level: yup.string()
                        .matches(/[1-7]0{2}/, { excludeEmptyString: false, message: 'Accepted values 100, 200, 300,..., 700' })
                        .required("Tell us your academic level"),
                    address: yup.string()
                        .min(15, 'Minimum of 15 characters required'),
                    phoneNo: yup.string().length(10).required('Phone number missing'),
                    email: yup.string()
                        .email("Incorrect email format")
                        .required('email missing'),
                    description: yup.string()
                        .min(25, 'A good description attract immediate response')
                        .required('You haven\'t told us your condition')
                })}
                onSubmit={onSubmit}>
                {({isSubmitting}) => (
                    <Form className="StudentDetails__Form">
                        <fieldset>
                            <legend className="Legend">Basic Information</legend>
                            <div className="FormGroup">
                                <label className="Label" htmlFor="firstName">First Name</label>
                                <Field type="text" 
                                    className="FormInput" 
                                    name="firstName" 
                                    id="firstName"
                                    placeholder="First name"
                                    disabled
                                />
                                <ErrorMessage component="small" className="ErrorLabel" name="firstName"/>
                            </div>
                             <div className="FormGroup">
                                <label className="Label" htmlFor="lastName">Last Name</label>
                                <Field type="text" 
                                    className="FormInput" 
                                    name="lastName" 
                                    id="lastName"
                                    placeholder="Last name"
                                    disabled
                                />
                                <ErrorMessage component="small" className="ErrorLabel" name="lastName"/>
                            </div>
                             <div className="FormGroup">
                                <label className="Label" htmlFor="firstName">Program of study</label>
                                <Field as="select" 
                                    className="FormInput" 
                                    name="program" 
                                    id="program"
                                    disabled
                                    >
                                    <option value="" disabled></option>
                                    <option value="computer science">BSc Computer Science</option>
                                </Field>
                            </div>
                             <div className="FormGroup">
                                <label className="Label" htmlFor="level">Level</label>
                                <Field as="select" 
                                    className="FormInput" 
                                    name="level" 
                                    id="level"
                                    >
                                    <option value="100">100</option>
                                    <option value="200">200</option>
                                    <option value="300">300</option>
                                    <option value="400">400</option>
                                    <option value="500">500</option>
                                    <option value="600">600</option>
                                    <option value="700">700</option>
                                </Field>
                                <ErrorMessage component="small" className="ErrorLabel" name="level"/>
                            </div>
                             <div className="FormGroup">
                                <label className="Label" htmlFor="address">Address</label>
                                <Field type="text" 
                                    className="FormInput" 
                                    name="address" 
                                    id="address"
                                    placeholder="Address"
                                />
                                <ErrorMessage component="small" className="ErrorLabel" name="address"/>
                            </div>
                             <div className="FormGroup">
                                <label className="Label" htmlFor="phoneNo">Phone</label>
                                <Field type="tel" 
                                    className="FormInput" 
                                    name="phoneNo" 
                                    id="phoneNo"
                                    placeholder="Phone number"
                                />
                                <ErrorMessage component="small" className="ErrorLabel" name="phoneNo"/>
                            </div>
                             <div className="FormGroup FormGroup--Email">
                                <label className="Label" htmlFor="email">Email</label>
                                <Field type="email" 
                                    className="FormInput" 
                                    name="email" 
                                    id="email"
                                    placeholder="Email"
                                />
                                <ErrorMessage component="small" className="ErrorLabel" name="email"/>
                            </div>
                        </fieldset>
                        <hr size="2"/>
                        <fieldset className="StudentDetails__Form__DescBox">
                            <legend className="Legend Legend--Desc">Description</legend>
                            <Field as="textarea" 
                                rows="5"
                                name="description" 
                                placeholder="Your message"
                                className="FormInput FormInput--TextArea"
                            />
                            <ErrorMessage component="small" className="ErrorLabel" name="description"/>
                        </fieldset>
                        <button type="submit" className="SendBtn" disabled={isSubmitting}>Send</button>
                    </Form>
                )}
            </Formik>
        </Paper>
    </div>
  )
}

Index.propTypes = {
    heading: PropTypes.string,
    onSubmit: PropTypes.func.isRequired
}

Index.defaultProps = {
    heading: 'Student Details'
}

export default Index;