import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import Carousel1 from '../img/Carousel1.webp';


function Personal(){
	return (
		<Container fluid>
			<h1 style={{marginTop:35, marginBottom:20}}>Emotional Journalling</h1>
			<Row>
				<Col>
					<Carousel>
				      <Carousel.Item>
				        <Image src={Carousel1} />
				        <Carousel.Caption>
				          <h3>NFT #1 - Blue, Still, Smooth</h3>
				          <p>Timestamp: 21.09.2023</p>
				        </Carousel.Caption>
				      </Carousel.Item>
				      <Carousel.Item>
				        <Image src={Carousel1} />
				        <Carousel.Caption>
				          <h3>NFT #2 - Brown, Energized, Pop</h3>
				          <p>Timestamp: 22.09.2023</p>
				        </Carousel.Caption>
				      </Carousel.Item>
				      <Carousel.Item>
				        <Image src={Carousel1} />
				        <Carousel.Caption>
				          <h3>NFT #3 - Red, Fire, Rock</h3>
				          <p>Timestamp: 23.09.23</p>
				        </Carousel.Caption>
				      </Carousel.Item>
				    </Carousel>
				</Col>
			</Row>
		</Container>
	);
}

export default Personal;