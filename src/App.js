import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBlock, CardLink,
  CardTitle, CardSubtitle,
  Container, Row, Col,
  Jumbotron,
  Button
} from 'reactstrap';
import Helmet from 'react-helmet';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    let featuredProjects = [
      {
        title: 'Tour en tête',
        subtitle: 'Web-documentary made with Camera Lucida about the Tour de France for Radio France',
        image: '/images/projects/tour-en-tete-838f4494.jpg',
        text: 'My work: interactive design, Ruby on Rails, Backbone, EaselJS, Canvas, HTML5, Soundmanager2, Sass, CoffeeScript, Haml, PostgreSQL, Facebook API, etc.',
        linkHref: '',
        linkTitle: 'Check out the website'
      },
      {
        title: 'Leeftr',
        subtitle: 'Remote assistance community co-founded with 3 friends',
        image: '/images/projects/leeftr-672cfa4c.jpg',
        text: 'My work: Ruby on Rails, Paypal adaptive, CoffeeScript, Backbone, jQuery, HTML, CSS, Twitter Bootstrap, Sass, Haml, PostgreSQL, Heroku, Amazon (AWS), etc.',
        linkHref: '',
        linkTitle: 'Check out the website'
      }
    ]
    let projects = [
      {
        title: 'Orange labs',
        image: '/images/projects/orange-6d349f8a.jpg',
        text: 'I was an API evangelist at Orange labs (Paris) for 2 years (2008 - 2010). For example, I developed SingTheWorld, a mashup using Google maps, YouTube and Flickr.'
      },
      {
        title: 'iko',
        image: '/images/projects/iko-f776cf2e.png',
        text: "I'm a co-creator, a UX designer and a developer of iko (the pupil's best friend). We made this project at the school of Gobelins. We won a World Summit Youth Award."
      },
      {
        title: 'MakeSense',
        image: '/images/projects/makesense-0b0d0f36.jpg',
        text: 'Social Business Community. I worked on 3 different versions of the website as a web developer and designer.'
      },
      {
        title: 'Soufflet Group',
        image: '/images/projects/soufflet-d3d5424c.jpg',
        text: 'I developed a greeting card for the Soufflet Group, it is the France’s leading privately-owned cereal collection company.'
      },
      {
        title: 'Comemo',
        image: '/images/projects/comemo-73eaa59a.jpg',
        text: 'I am a co-founder and CTO of Comemo. It is a website to commemorate events and give tribute to people.'
      },
      {
        title: 'Thima',
        image: '/images/projects/thima-14a02610.jpg',
        text: 'I developed Thima with Jocelyn Lecamus for Julie Gombert and Faustine Clavert. It is a web documentary about water issues in Thailand.'
      },
      {
        title: 'Comme des garçons',
        image: '/images/projects/cdg-62e33569.jpg',
        text: 'I developed a website for the fashion company Comme des garçons.'
      },
      {
        title: 'Wiithaa',
        image: '/images/projects/wiithaa-d050f2cc.jpg',
        text: "I have helped a bit. It is a project about a subject I really like: collaborative consumption."
      },
      {
        title: 'Unishared',
        image: '/images/projects/unishared-10c27b35.jpg',
        text: "I worked on the UX design of the Unishared website"
      },
      {
        title: 'Voxe',
        image: '/images/projects/voxe-logo-c2b76d24.png',
        text: "Voxe is a comparator of political parties. I participated in the back-end development."
      },
      {
        title: 'Alumnis from Gobelins',
        image: '/images/projects/rag-8521f81f.png',
        text: "I helped in the front-end development of the website. We made this website with Thomas Poblete, Léna Mazilu, Hans Lemuet and Florent Messa."
      },
      {
        title: 'Icarus dream',
        image: '/images/projects/icarus-dream-695bb242.jpg',
        text: "Icarus dreams is a project I made with Yannis Smesny at Gobelins. The subject was to \"create an interactive application to (re)visit a moment of History\"."
      },
      {
        title: 'W5',
        image: '/images/projects/w5-49c8757d.png',
        text: "W5 is a project I made with Valentin de Bruyn, Yannis Smesny and Bertrand Riché at Gobelins. The subject was to \"rediscover a way to read newspaper\""
      },
      {
        title: 'Volkswagen',
        image: '/images/projects/volkswagen-366595bf.jpg',
        text: 'I developed with Jocelyn Lecamus a touch screen application for the launch of the Volkswagen Up.'
      }
    ]
    this.state = { featuredProjects: featuredProjects, projects: projects, value: '' }
  }

  render() {
    return (
      <div>
        <Helmet title="Sébastien Bourdu - Freelance Web Developer and UX Designer | Portfolio" />
        <Jumbotron className="mb-0 pb-3">
          <Container fluid>
            <Row className="text-center my-3">
              <Col md="4">
                <img alt="Logo of the portfolio of Sébastien Bourdu" src="/images/logo-b66e4bf2.png" />
              </Col>
              <Col md="8">
                <h1 className="mt-3">Hi, I'm <strong>Sébastien Bourdu</strong></h1>
                <h2 className="h4">Freelance Web Developer and UX Designer</h2>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <Container fluid>
          <section className="my-3 py-3">
            <h3 className="my-3 pb-3 h5">Featured <strong>projects</strong></h3>
            <div className="card-columns columns-count-2 pt-3">
              {this.state.featuredProjects.map((project) =>
                <Card>
                  <CardBlock>
                    <CardTitle className="pb-2">{project.title}</CardTitle>
                    <CardSubtitle>{project.subtitle}</CardSubtitle>
                  </CardBlock>
                  <img width="100%" src={project.image} alt='Project picture' />
                  <CardBlock>
                    <CardText>{project.text}</CardText>
                    <CardLink href={project.linkHref}>{project.linkTitle}</CardLink>
                  </CardBlock>
                </Card>
              )}
            </div>
          </section>
          <section className="my-3 py-3">
            <Card block outline color="secondary" className="my-3">
              <CardBlock className="py-0">
                <Row className="text-center justify-content-md-center">
                  <Col md="2">
                    <img src="/images/sebastien-bourdu-9ad5ff9c.jpg" alt="Sébastien Bourdu" className="rounded" />
                  </Col>
                  <Col md="auto">
                    <CardTitle>Contact me to hire me</CardTitle>
                    <CardSubtitle>I don't bite! <small>and I can work in English or French</small></CardSubtitle>
                    <CardText>
                      <ul className="list-inline mt-3 small">
                        <li className="list-inline-item">
                          <a className="zocial linkedin" href="http://linkedin.com/in/sebastienbourdu/" target="_blank">See my CV on LinkedIn</a>
                        </li>
                        <li className="list-inline-item">
                          <a className="zocial icon github" href="http://github.com/ekkans" target="_blank">Fork me on Github</a>
                        </li>
                        <li className="list-inline-item">
                          <a className="zocial icon facebook" href="http://www.facebook.com/ekkans" target="_blank">Follow me on Facebook</a>
                        </li>
                        <li className="list-inline-item">
                          <a className="zocial icon twitter" href="https://twitter.com/ekkans" target="_blank">Follow ekkans on Twitter</a>
                        </li>
                      </ul>
                    </CardText>
                  </Col>
                </Row>
              </CardBlock>
            </Card>
          </section>
          <section className="my-3 py-3">
            <h3 className="my-3 pb-3 h5">Awesome <strong>websites</strong> made with love</h3>
            <div className="card-columns pt-3">
              {this.state.projects.map((project) =>
                <Card className="mb-3">
                  <img width="100%" src={project.image} alt='Project picture' />
                  <CardBlock>
                    <CardSubtitle className="mb-2">{project.title}</CardSubtitle>
                    <CardText>{project.text}</CardText>
                  </CardBlock>
                </Card>
              )}
            </div>
          </section>
        </Container>
        <footer className="mt-3 py-3">
          <Container fluid className="py-3">
            <Row>
              <Col md="9">
                <h4>About me</h4>
                <p>
                  I’m a full-stack web developer and UX designer for social justice,
                  working in freelance on great projects since 2010.
                  Prior to that, I studied at Gobelins in Paris and worked two years in the R&D center of Orange.
                </p>
                <small>
                  <a className="zocial linkedin" href="http://linkedin.com/in/sebastienbourdu/" target="_blank">See my CV and hire me on LinkedIn</a>
                </small>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    );
  }
}

export default App;
