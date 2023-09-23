import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Carousel1 from '../img/Carousel1.webp';


function Personal(){
	return (
		<Container fluid>
		<h1 style={{margin:35}}>Mood Journalling</h1>
		<Row>
			<Col>
				<Image src={Carousel1} fluid />
			</Col>
			<Col>
				<Image src={Carousel1} fluid />
			</Col>
			<Col>
				<Image src={Carousel1} fluid />
			</Col>
		</Row>
	</Container>
	);
}

export default Personal;