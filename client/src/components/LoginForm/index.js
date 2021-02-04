import React, { useContext } from 'react';
import * as yup from 'yup';
import swal from 'sweetalert';
import { Link, useHistory } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import './LoginForm.css';
import axios from '../../axios';
import {StoreContext} from '../../store';

const Index = (props) => {
	const history = useHistory();
	const { dispatch } = useContext(StoreContext);
	/**
	 *
	 * Shows alerts for both successfull and failed situations
	 *
	 */
	function showAlert(title, text, icon, onOk){
		swal({ title, text, icon}).then(value => {
			if (value && onOk) onOk();
		})
	}

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
						.length(8, 'Invalid student ID. 8 numerical characters expected')
						.required('Student number is required'),
					password: yup.string()
						.min(8, 'Minimum of 8 alphanumeric characters expected')
						.required('Invalid password')
				})
			}
			onSubmit={(data, formik) => {
				// login request
				axios.post('/login', { 
					username: data.username, 
					refNumber: data.studentNo, 
					password: data.password
				}).then(res => res.data)
				.then(resData => {
					if (resData.error) {
						showAlert(
							'Login Failed!!', 'Invalid reference number, username or password', 'error',
							() => formik.setSubmitting(false)
						);
					} else {
						showAlert(
							'Login Success!!', 'You have successfully logged in', 'success', 
							() => {
								dispatch({ type: 'LOGIN_USER', user: {...resData.data}});
								history.push('/app')
							}
						);
					}
				})
				.catch(err => {
					showAlert(
						'Login Failed!!', 
						'There was a problem logging you in. Please check your internet connection', 
						'error',
						() => formik.setSubmitting(false)
					);
				})
			}}
			>
			{({isSubmitting}) => (
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
		    				<button 
		    					type="submit" 
		    					className="LoginForm__SubmitBtn"
		    					disabled={isSubmitting}
		    					>Login
		    				</button>
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