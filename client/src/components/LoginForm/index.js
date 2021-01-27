import './LoginForm.css';
import React from 'react';
import * as yup from 'yup';
import swal from 'sweetalert';
import { Link, useHistory } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Index = (props) => {
	const history = useHistory();

	return (
		<Formik
			initialValues={{
				username: '',
				studentNo: '',
				password: '',
			}}
			validationSchema={
				yup.object({
					username: yup.string()
						.trim()
						.required('Username is required'),
					studentNo: yup.string()
						.trim()
						.length(8, 'Invalid student ID number. 8 characters required')
						.required('Student number is required'),
					password: yup.string()
						.min(8, 'Minimum of 8 characters expected')
						.required('Invalid password')
				})
			}
			onSubmit={formik => {
				// login request
				// success alert
				// route
				swal({
					title: 'Login Success!!',
					text: 'You have successfully logged in',
					icon: 'success'
				}).then(() => {
					history.push("/app");
				})
			}}
			>
			{formik => (
				<Form className="LoginForm">
					<fieldset className="LoginForm__Fieldset">
						<legend className="LoginForm__Legend">Login</legend>
						<p className="LoginForm__Instruction">Please provide your credentials</p>
						<div className="FormGroup">
		    				<label className="FormGroup__Label" htmlFor="username">Username</label>
		    				<Field className="FormGroup__Input" 
		    					type="text" 
		    					name="username" 
		    					id="username" 
		    					placeholder="Student name"
		    				/>
		    				<ErrorMessage component="small" className="FormGroup__ErrorLabel" name="username"/>
		    			</div>
		    			<div className="FormGroup">
		    				<label className="FormGroup__Label" htmlFor="studentNo">Student Number</label>
		    				<Field className="FormGroup__Input" 
		    					type="text" 
		    					name="studentNo" 
		    					id="Student Number" 
		    					placeholder="Student number"
		    				/>
		    				<ErrorMessage component="small" className="FormGroup__ErrorLabel" name="studentNo"/>
		    			</div>
		    			<div className="FormGroup">
		    				<label className="FormGroup__Label" htmlFor="password">Password</label>
		    				<Field className="FormGroup__Input" 
		    					type="password" 
		    					name="password" 
		    					id="password" 
		    					placeholder="Password"
		    				/>
		    				<ErrorMessage component="small" className="FormGroup__ErrorLabel" name="password"/>
		    			</div>
		    			<div className="LoginForm__Footer">
		    				<button type="submit" className="LoginForm__SubmitBtn">Login</button>
		    				<button type="button" className="LoginForm__EmailBtn">Login with KNUST email</button>
		    				<Link className="LoginForm__ForgotPasswordBtn" to="/forgot-password">Forgot Password?</Link>
		    			</div>
					</fieldset>
				</Form>
			)}
		</Formik>
	)
}

export default Index;