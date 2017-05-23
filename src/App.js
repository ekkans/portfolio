import React, { Component } from 'react';
import ReactGA from 'react-ga';
import {
  Card, CardText, CardBlock,
  CardTitle, CardSubtitle,
  Container, Row, Col,
  Jumbotron
} from 'reactstrap';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    ReactGA.initialize('UA-4052025-2');
    ReactGA.set({ page: window.location.pathname + window.location.search });
    ReactGA.pageview(window.location.pathname + window.location.search);
    let featuredProjects = [
      {
        title: 'Tour en tête',
        subtitle: 'Web-documentary about the Tour de France for Radio France',
        iframe: 'https://player.vimeo.com/video/68294299?color=ffffff&title=0&byline=0&portrait=0',
        text: 'My work: interactive design, Rails, EaselJS, Backbone.js, Sass, CoffeeScript, PostgreSQL, Facebook API, etc.',
        linkHref: '',
        linkTitle: 'Check out the website'
      },
      {
        title: 'DIY Manifesto',
        subtitle: 'Web-documentary about Detroit and the Do It Yourself movement for Cinétévé, Mediapart, etc.',
        // image: '/images/projects/diy-manifesto-1495181568.png',
        iframe: 'https://player.vimeo.com/video/78603031?color=ffffff&title=0&byline=0&portrait=0',
        text: 'My work: front-end and back-end (Rails, Twitter Bootstrap, SEO, etc)'
      },
      {
        title: 'Le magazine du Monde',
        subtitle: 'I was in charge of redesigning the magazine website pages',
        image: '/images/projects/M-lemagazine-1495173620.svg',
        text: 'My work: UX and graphic design',
        linkHref: '',
        linkTitle: 'Check out the website'
      }
    ]
    let projects = [
      {
        title: 'Leeftr',
        // image: '/images/projects/leeftr-672cfa4c.jpg',
        iframe: 'https://player.vimeo.com/video/49225741?color=ffffff&title=0&byline=0&portrait=0',
        text: 'Remote assistance community co-founded with 3 friends. My work: Rails, Paypal, Heroku, AWS, etc.',
      },
      {
        title: 'Artificial Intelligence',
        image: '/images/projects/samantha-1495181568.png',
        text: "I like spending time exploring AI using Hubot (Node.js), React and services like IBM Watson"
      },
      {
        title: 'Orange labs',
        image: '/images/projects/orange-6d349f8a.jpg',
        text: 'I was an API evangelist at Orange labs (Paris) for 2 years (2008 - 2010). For example, I developed a mashup using Google maps, YouTube and Flickr.'
      },
      {
        title: 'Moringa',
        image: '/images/projects/moringa-1495181568.png',
        text: "E-commerce website made with Ruby on Rails and Paypal"
      },
      {
        title: 'Reporting 21',
        image: '/images/projects/reporting21-1495181568.svg',
        text: "SaaS solution making your financial and extra-financial information actionable. I worked on the design and the full stack (Rails, MySQL, Angular, etc)."
      },
      {
        title: 'Aéroports de Paris',
        image: '/images/projects/adp-1495181568.png',
        text: 'Website showing in 4 different languages the duty free shops of the airports'
      },
      {
        title: 'La Ruche qui dit oui – Forum',
        image: '/images/projects/lrqdo-forum-1495181568.png',
        text: 'Discourse plugin, theme and inline editor using Ruby on Rails and Ember.js'
      },
      {
        title: 'Arduin\'Hockey',
        // image: '/images/projects/arduin-hockey-1495181568.jpg',
        iframe: 'https://player.vimeo.com/video/12275133?color=ffffff&title=0&byline=0&portrait=0',
        text: "Mix of pong and air hockey controlled by hand gestures with Arduino."
      },
      {
        title: 'Animafac – Voting system',
        image: '/images/projects/animafac-1495181568.png',
        text: "My work: graphic design, ux design and code with Sails.js (Node.js) and MongoDB"
      },
      {
        title: "iko, the pupil's best friend",
        // image: '/images/projects/iko-f776cf2e.png',
        iframe: 'https://player.vimeo.com/video/12400412?color=ffffff&title=0&byline=0&portrait=0',
        text: "We won a World Summit Youth Award for this project made at the school of Gobelins."
      },
      {
        title: 'Les Exaltés',
        image: '/images/projects/les-exaltes-1495181568.png',
        text: "My work: front-end and back-end using Angular (Typescript) and LoopBack (Node.js)"
      },
      {
        title: 'Frecious',
        image: '/images/projects/frecious-1495181568.png',
          text: "My work: the shop in JavaScript by implementing Stripe and an e-commerce solution made with Rails and Angular"
      },
      {
        title: 'MakeSense',
        image: '/images/projects/makesense-0b0d0f36.jpg',
          text: 'Social Business Community. I worked on 3 different versions of the website as a web developer and designer. I also worked on a community website for Suez Environnement.'
      },
      // {
      //   title: 'Soufflet Group',
      //   image: '/images/projects/soufflet-d3d5424c.jpg',
      //   text: 'I developed a greeting card for the Soufflet Group.'
      // },
      // {
      //   title: 'Comemo',
      //   image: '/images/projects/comemo-73eaa59a.jpg',
      //   text: 'I am a co-founder and CTO of Comemo. It is a website to commemorate events and give tribute to people.'
      // },
      // {
      //   title: 'Thima',
      //   image: '/images/projects/thima-14a02610.jpg',
      //   text: 'I developed Thima with Jocelyn Lecamus for Julie Gombert and Faustine Clavert. It is a web documentary about water issues in Thailand.'
      // },
      // {
      //   title: 'Comme des garçons',
      //   image: '/images/projects/cdg-62e33569.jpg',
      //   text: 'I developed a website for the fashion company Comme des garçons.'
      // },
      // {
      //   title: 'Wiithaa',
      //   image: '/images/projects/wiithaa-d050f2cc.jpg',
      //   text: "I have helped a bit. It is a project about a subject I really like: collaborative consumption."
      // },
      // {
      //   title: 'Unishared',
      //   image: '/images/projects/unishared-10c27b35.jpg',
      //   text: "I worked on the UX design of the Unishared website"
      // },
      {
        title: 'Volkswagen',
        image: '/images/projects/volkswagen-366595bf.jpg',
        text: 'I developed with Jocelyn Lecamus a touch screen application for the launch of the Volkswagen Up.'
      },
      {
        title: 'Alumnis from Gobelins',
        image: '/images/projects/rag-8521f81f.png',
        text: "I helped in the front-end development of the website. I also worked in the R&D center of the school on two projects."
      },
      {
        title: 'Super Social Movie',
        iframe: 'https://player.vimeo.com/video/67077393?color=ffffff&title=0&byline=0&portrait=0',
        text: "Facebook application made with Make Me Pulse and JWT for Crunch and Norman. My work: back-end and the front-end JavaScript"
      },
      {
        title: 'Charities donations',
        image: '/images/projects/doog-1495181568.png',
        text: "I worked on a smartphone prototype using Ionic and Angular."
      },
      {
        title: 'Icarus dream',
        image: '/images/projects/icarus-dream-695bb242.jpg',
        text: "Icarus dreams is a project I made with Yannis Smesny at Gobelins. The subject was to \"create an interactive application to (re)visit a moment of History\"."
      },
      // {
      //   title: 'W5',
      //   image: '/images/projects/w5-49c8757d.png',
      //   text: "W5 is a project I made with Valentin de Bruyn, Yannis Smesny and Bertrand Riché at Gobelins. The subject was to \"rediscover a way to read newspaper\""
      // },
      {
        title: 'Voxe',
        image: '/images/projects/voxe-logo-c2b76d24.png',
        text: "Voxe is a comparator of political parties. I participated in the back-end development."
      }
    ]
    this.state = { featuredProjects: featuredProjects, projects: projects, value: '' }
  }

  render() {
    return (
      <div>
        <Jumbotron className="mb-0 pb-3">
          <Container fluid>
            <Row className="text-center my-3">
              <Col md="4">
                <img alt="Logo of the portfolio of Sébastien Bourdu" src="/images/logo-b66e4bf2.png" />
              </Col>
              <Col md="6">
                <h1 className="mt-3">Hi, I'm <strong>Sébastien Bourdu</strong></h1>
                <h2 className="h4">Freelance Web Developer and UX Designer</h2>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <Container fluid>
          <section className="my-3 py-3">
            <h3 className="my-3 pb-3 h5">Featured <strong>projects</strong></h3>
            <div className="card-columns card-columns-lg pt-3">
              {this.state.featuredProjects.map((project) =>
                <Card className="mb-3">
                  {project.image &&
                    <img className='card-img-top img-fluid' src={project.image} alt='Project picture' />
                  }
                  {project.iframe &&
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe className="embed-responsive-item" src={project.iframe} allowFullScreen></iframe>
                    </div>
                  }
                  <CardBlock>
                    <CardSubtitle className="pb-2">{project.subtitle}</CardSubtitle>
                    <CardText>{project.text}</CardText>
                  </CardBlock>
                </Card>
              )}
            </div>
          </section>
          <section className="my-3 py-3">
            <Row className="justify-content-md-center">
              <Col md="7">
                <Card block outline color="secondary" className="my-3">
                  <CardBlock className="py-0">
                    <Row className="text-center justify-content-md-center">
                      <Col xs="3">
                        <img src="/images/sebastien-bourdu-9ad5ff9c.jpg" alt="Sébastien Bourdu" className="rounded" />
                      </Col>
                      <Col md="auto">
                        <CardTitle>Contact me to hire me</CardTitle>
                        <CardSubtitle>I don't bite! <small><a href="mailto:sebastien@sebastienbourdu.com">sebastien@sebastienbourdu.com</a></small></CardSubtitle>
                        <CardText>
                          <ul className="list-inline mt-3 small">
                            <li className="list-inline-item">
                              <a className="zocial linkedin" href="https://linkedin.com/in/sebastienbourdu/" target="_blank">See my CV on LinkedIn</a>
                            </li>
                            <li className="list-inline-item">
                              <a className="zocial icon github" href="https://github.com/ekkans" target="_blank">Fork me on Github</a>
                            </li>
                            <li className="list-inline-item">
                              <a className="zocial icon facebook" href="https://www.facebook.com/ekkans" target="_blank">Follow me on Facebook</a>
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
              </Col>
            </Row>
          </section>
          <section className="my-3 py-3">
            <h3 className="my-3 pb-3 h5">Awesome <strong>websites</strong> made with love</h3>
            <div className="card-columns pt-3">
              {this.state.projects.map((project) =>
                <Card className="mb-3">
                  {project.image &&
                    <img className='card-img-top img-fluid' src={project.image} alt='Project picture' />
                  }
                  {project.iframe &&
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe className="embed-responsive-item" src={project.iframe} allowFullScreen></iframe>
                    </div>
                  }
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
                  working as a freelancer on great projects since 2010.
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
