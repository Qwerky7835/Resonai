import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import energy from '../img/energy.webp'

import './daily.css';

function Daily(){
	return (
	<Container fluid style = {{height:"100vh"}}>
		<Row>
			<Col className="d-flex flex-column align-items-center">
				<Image src={energy} fluid style = {{height:"80%"}} />
			</Col>
			<Col className="d-flex flex-column align-items-center">
				<p style={{fontSize:"300%"}}>Reson.ai</p>
				<p style={{fontSize:"200%"}}>How are you feeling today?</p><p> Colour? Shape? Music?</p>
				<RecordButton variant="primary" label="Record Emotion" />
				<p>~ or ~</p>
				<RecordButton variant="success" label="Write Emotion" />
			</Col>
		</Row>
	</Container>);
}

function RecordButton(props){
	return <Button variant={props.variant} size="lg">{props.label}</Button>;
}

export default Daily;