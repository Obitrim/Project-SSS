import './FinancialAssistance.css';
import React from 'react';
import * as yup from 'yup';
import NewsCard from '../../../components/NewsCard';
import Container from '../../../components/Container';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const Index = (props) => {
  return (
    <section className="FinancialAssistance V-whitespace">
    	<Container>
    		<h1 className="ViewHeading">Financial Assistance</h1>
    		<div className="FinancialAssistance__Wrapper">
    			{/*Form*/}
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        program: '',
                        year: 1,
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
                        year: yup.number()
                            .integer('Decimal values are not allowed')
                            .min(1, 'Acceptable range 1 - 8')
                            .max(8, 'Acceptable range 1 - 8')
                            .required("Tell us your year"),
                        address: yup.string()
                            .min(25, 'Please tell us about your condition'),
                        phoneNo: yup.string().length(10).required('Phone number missing'),
                        email: yup.string()
                            .email("Incorrect email format")
                            .required('email missing'),
                        description: yup.string()
                            .min(25, 'A good description attract immediate response')
                            .required('You haven\'t told us your condition')
                    })}
                    onSubmit={formik => {
                        alert('Submitting request for help');
                    }}>
                    {formik => (
                        <Form className="FinancialAssistance__Form">
                            <fieldset>
                                <legend className="Legend">Basic Information</legend>
                                <div className="FormGroup">
                                    <label className="Label" htmlFor="firstName">First Name</label>
                                    <Field type="text" 
                                        className="FormInput" 
                                        name="firstName" 
                                        id="firstName"
                                        placeholder="Enter first name"
                                    />
                                    <ErrorMessage component="small" className="ErrorLabel" name="firstName"/>
                                </div>
                                 <div className="FormGroup">
                                    <label className="Label" htmlFor="lastName">Last Name</label>
                                    <Field type="text" 
                                        className="FormInput" 
                                        name="lastName" 
                                        id="lastName"
                                        placeholder="Enter last name"
                                    />
                                    <ErrorMessage component="small" className="ErrorLabel" name="lastName"/>
                                </div>
                                 <div className="FormGroup">
                                    <label className="Label" htmlFor="firstName">Program of study</label>
                                    <Field as="select" 
                                        className="FormInput" 
                                        name="firstName" 
                                        id="firstName">
                                        <option value="" disabled selected></option>
                                        <option value="computer science">BSc Computer Science</option>
                                    </Field>
                                </div>
                                 <div className="FormGroup">
                                    <label className="Label" htmlFor="year">Year</label>
                                    <Field type="number" 
                                        className="FormInput" 
                                        name="year" 
                                        id="year"
                                    />
                                    <ErrorMessage component="small" className="ErrorLabel" name="year"/>
                                </div>
                                 <div className="FormGroup">
                                    <label className="Label" htmlFor="address">Address</label>
                                    <Field type="text" 
                                        className="FormInput" 
                                        name="address" 
                                        id="address"
                                    />
                                    <ErrorMessage component="small" className="ErrorLabel" name="address"/>
                                </div>
                                 <div className="FormGroup">
                                    <label className="Label" htmlFor="phoneNo">Phone</label>
                                    <Field type="tel" 
                                        className="FormInput" 
                                        name="phoneNo" 
                                        id="phoneNo"
                                    />
                                    <ErrorMessage component="small" className="ErrorLabel" name="phoneNo"/>
                                </div>
                                 <div className="FormGroup">
                                    <label className="Label" htmlFor="email">Email</label>
                                    <Field type="email" 
                                        className="FormInput" 
                                        name="email" 
                                        id="email"
                                    />
                                    <ErrorMessage component="small" className="ErrorLabel" name="email"/>
                                </div>
                            </fieldset>
                            <hr size="2"/>
                            <fieldset>
                                <legend className="Legend Legend--Desc">Description</legend>
                                <Field as="textarea" 
                                    name="description" 
                                    placeholder="Your message..."
                                    className="FormInput FormInput--TextArea"
                                />
                                <ErrorMessage component="small" className="ErrorLabel" name="description"/>
                            </fieldset>
                            <button type="submit" className="SendBtn">Send</button>
                        </Form>
                    )}
                </Formik>
    			{/*News*/}
    		</div>
    	</Container>
    </section>
  )
}

export default Index;