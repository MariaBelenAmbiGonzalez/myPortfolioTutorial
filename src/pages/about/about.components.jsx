import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import Profile from "../../assets/img/profile/profile.webp";

import "./about.style.css";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">About Me</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            {/*Profile Pic*/}
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2">
                <Image
                  className="profile justify-content-end"
                  alt="profile"
                  src={Profile}
                  thumbnail
                  fluid
                />
              </Row>
            </Col>

            {/* About me description*/}
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                {/* description */}
                Bienvenidos/as,{" "}
                <strong>&nbsp;Soy Ma. Belén Ambi González</strong>
                <br />
                Soy Belén Ambi, soy estudiante del CFGS de DAM en Barcelona. En
                esta formación he aprendido herramientas indispensables para el
                desarrollo de aplicaciones tanto web como móviles y útiles para
                el manejo de base de datos, tales como la Programación Orientada
                a Objetos en Java y MySql.
                <br />
                Estoy muy interesado en el desarrollo de webs y programas a
                medida, según las necesidades y gustos de los clientes. Deseo
                aprender mucho dentro de mi ámbito de referencia, y crecer en el
                equipo como programador junior.
                <br />
                Soy una profesional graduada en Turismo con experiencia de 1 año
                en ventas y atención al cliente y de 1 año en el área de
                administración, poseo un gran interés en las TIC, puedo hablar
                con fluidez en español, catalán e inglés, y tengo base de
                alemán, chino mandarín, entre otros.
                <br />
                Me considero una persona que valora el respeto y la confianza,
                empática y comprometida, observadora de los detalles y sobre
                todo motivada en trabajar en equipo para obtener los mejores
                resultados posibles.
                <br /> Me encanta aprender y ayudar a los demás.
                <br /> <br />
              </Row>

              <Row>
                {/* buttons */}
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        {" "}
                        Hablemos!{" "}
                      </Button>
                    </a>
                  </div>

                  <div>
                    <a
                      href="https://drive.google.com/file/d/1V2_LJCU7FkZMiJs3MJEio6_q25qae5Mq/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-success">
                        Mi CV
                      </Button>
                    </a>
                  </div>

                  <div>
                    <a
                      href="https://github.com/MariaBelenAmbiGonzalez"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>

                  <div>
                    <a
                      href="https://www.linkedin.com/in/MariaBelenAmbiGonzalez/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
