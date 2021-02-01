import React, { useState } from 'react';
import './DistressCall.css';
import swal from 'sweetalert';
import Paper from '@material-ui/core/Paper'
import Alert from '@material-ui/lab/Alert'
import Container from '../../../components/Container';
import SettingsVoiceIcon from '@material-ui/icons/SettingsVoice';

const Index = (props) => {
	const [isRecording, setIsRecording] = useState(false);
	const [distressMessage, setDistressMessage] = useState("");

	function startRecording(){
		// set recording state
		setIsRecording(!isRecording);
		// initiate recording procedure
	}

	function sendRecording(){
		// end recording
		setIsRecording(false);
		// validate non-empty distress message
		// If distress description was added, add message
		// Get recording data and send to appropriate agency.
		//send a success or failure alert
		swal({
			title: 'Signal sent',
			text: 'Distress signal has been sent to the appropriate agency.',
			icon: 'success'
		});
	}

	function onChangeHandler(evt){
		setDistressMessage(evt.target.value);
	}

	return (
		<div className="DistressCall V-whitespace">
			<Container>
				<div className="DistressCall__ImgBox">
					<img className="DistressCall__ImgBox__Img" src="/svgs/SOS.svg" alt="SOS" />
				</div>
				<Paper elevation={2} className="DistressCall__DetailsBox">
					<Alert className="DistressCall__DetailsBox__Info" color="info">
						<h3>Info</h3> 
						Would you care to tell us the details of your distress?
					</Alert>
					<textarea 
						className="MsgBox" 
						rows="7" 
						onChange={onChangeHandler}
						placeholder="Send us a message"
						value={ distressMessage }></textarea>
					{isRecording && <p className="RecordingMsg">Click the record button to cancel</p>}
					<div className="ButtonBar">
						<button type="button"
							className={`DistressCall__ButtonBar__Btn RecordingBtn ${isRecording && 'Recording'}`}  
							onClick={ startRecording }>
							<SettingsVoiceIcon className="DistressCall__SettingsVoiceIcon"/>
							{isRecording && 'Recording...'}
						</button>
						<button 
							type="button"
							className="DistressCall__ButtonBar__Btn SendBtn" 
							onClick={sendRecording}>
							send
						</button>
					</div>
				</Paper>
			</Container>
		</div>
	)
}

export default Index;