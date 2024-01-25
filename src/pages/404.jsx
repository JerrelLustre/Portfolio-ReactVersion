import Button from "../components/Button/Button";
import { Col, Row, Container } from "../components/LayoutBlocks/LayoutBlocks";
import errorMascot from "../assets/svg/est-404.svg"

export default function MissingPage() {
  return (
    <Container>
      <Row>
        <Col className={'w-full'}>
          <div className="pt-28 flex flex-col justify-center items-center mb-20 text-white">
            <img src={errorMascot} className="w-16 lg:w-32 relative top-0 lg:top-5"/>
            <p className="font-oswald text-6xl lg:text-[14rem] mb-12 underline" >
              404
            </p>
            <p className="font-oswald text-4xl lg:text-7xl mb-8">
              Page Not Found
            </p>
            <p className="font-robcon text-xl lg:text-3xl mb-8">
              The page you are looking for is not available or doesn't exist
            </p>
            <Button label='Return to Home' >
              
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
