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
        subtitle: 'Web-documentary made with Camera Lucida about the Tour de France for Radio France.',
        image: '/images/projects/tour-en-tete-838f4494.jpg',
        text: 'Stack: Ruby on Rails, CoffeeScript, Backbone, EaselJS, Canvas, HTML5, Soundmanager2, Sass, Haml, PostgreSQL, Facebook API, etc.',
        link: { href: '', title: 'Check out the website' }
      },
      {
        title: 'Tour en tête',
        subtitle: 'Web-documentary made with Camera Lucida about the Tour de France for Radio France.',
        image: '/images/projects/tour-en-tete-838f4494.jpg',
        text: 'Stack: Ruby on Rails, CoffeeScript, Backbone, EaselJS, Canvas, HTML5, Soundmanager2, Sass, Haml, PostgreSQL, Facebook API, etc.',
        link: { href: '', title: 'Check out the website' }
      }
    ]
    let projects = [
      {
        title: 'Tour en tête',
        subtitle: 'Web-documentary made with Camera Lucida about the Tour de France for Radio France.',
        image: '/images/projects/tour-en-tete-838f4494.jpg',
        text: 'Stack: Ruby on Rails, CoffeeScript, Backbone, EaselJS, Canvas, HTML5, Soundmanager2, Sass, Haml, PostgreSQL, Facebook API, etc.',
        link: { href: '', title: 'Check out the website' }
      },
      {
        title: 'Tour en tête',
        subtitle: 'Web-documentary made with Camera Lucida about the Tour de France for Radio France.',
        image: '/images/projects/tour-en-tete-838f4494.jpg',
        text: 'Stack: Ruby on Rails, CoffeeScript, Backbone, EaselJS, Canvas, HTML5, Soundmanager2, Sass, Haml, PostgreSQL, Facebook API, etc.',
        link: { href: '', title: 'Check out the website' }
      },
      {
        title: 'Tour en tête',
        subtitle: 'Web-documentary made with Camera Lucida about the Tour de France for Radio France.',
        image: '/images/projects/tour-en-tete-838f4494.jpg',
        text: 'Stack: Ruby on Rails, CoffeeScript, Backbone, EaselJS, Canvas, HTML5, Soundmanager2, Sass, Haml, PostgreSQL, Facebook API, etc.',
        link: { href: '', title: 'Check out the website' }
      },
      {
        title: 'Tour en tête',
        subtitle: 'Web-documentary made with Camera Lucida about the Tour de France for Radio France.',
        image: '/images/projects/tour-en-tete-838f4494.jpg',
        text: 'Stack: Ruby on Rails, CoffeeScript, Backbone, EaselJS, Canvas, HTML5, Soundmanager2, Sass, Haml, PostgreSQL, Facebook API, etc.',
        link: { href: '', title: 'Check out the website' }
      },
      {
        title: 'Tour en tête',
        subtitle: 'Web-documentary made with Camera Lucida about the Tour de France for Radio France.',
        image: '/images/projects/tour-en-tete-838f4494.jpg',
        text: 'Stack: Ruby on Rails, CoffeeScript, Backbone, EaselJS, Canvas, HTML5, Soundmanager2, Sass, Haml, PostgreSQL, Facebook API, etc.',
        link: { href: '', title: 'Check out the website' }
      },
      {
        title: 'Tour en tête',
        subtitle: 'Web-documentary made with Camera Lucida about the Tour de France for Radio France.',
        image: '/images/projects/tour-en-tete-838f4494.jpg',
        text: 'Stack: Ruby on Rails, CoffeeScript, Backbone, EaselJS, Canvas, HTML5, Soundmanager2, Sass, Haml, PostgreSQL, Facebook API, etc.',
        link: { href: '', title: 'Check out the website' }
      },
      {
        title: 'Tour en tête',
        subtitle: 'Web-documentary made with Camera Lucida about the Tour de France for Radio France.',
        image: '/images/projects/tour-en-tete-838f4494.jpg',
        text: 'Stack: Ruby on Rails, CoffeeScript, Backbone, EaselJS, Canvas, HTML5, Soundmanager2, Sass, Haml, PostgreSQL, Facebook API, etc.',
        link: { href: '', title: 'Check out the website' }
      },
      {
        title: 'Tour en tête',
        subtitle: 'Web-documentary made with Camera Lucida about the Tour de France for Radio France.',
        image: '/images/projects/tour-en-tete-838f4494.jpg',
        text: 'Stack: Ruby on Rails, CoffeeScript, Backbone, EaselJS, Canvas, HTML5, Soundmanager2, Sass, Haml, PostgreSQL, Facebook API, etc.',
        link: { href: '', title: 'Check out the website' }
      },
      {
        title: 'Tour en tête',
        subtitle: 'Web-documentary made with Camera Lucida about the Tour de France for Radio France.',
        image: '/images/projects/tour-en-tete-838f4494.jpg',
        text: 'Stack: Ruby on Rails, CoffeeScript, Backbone, EaselJS, Canvas, HTML5, Soundmanager2, Sass, Haml, PostgreSQL, Facebook API, etc.',
        link: { href: '', title: 'Check out the website' }
      }
    ]
    this.state = { featuredProjects: featuredProjects, projects: projects, value: '' }
  }

  render() {
    return (
      <div>
        <Helmet title="Sébastien Bourdu - Freelance Web Developer and UX Designer | Portfolio" />
        <Jumbotron>
          <Container fluid>
            <Row className="text-center my-3">
              <Col md="4">
                <img alt="Logo of the portfolio of Sébastien Bourdu" src="/images/logo-b66e4bf2.png" />
              </Col>
              <Col md="8">
                <h1>Hi, I'm <strong>Sébastien Bourdu</strong></h1>
                <h2>Freelance Web Developer and UX Designer</h2>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <Container fluid>
          <section>
            <h3 className="my-3">Featured <strong>projects</strong></h3>
            <div className="card-columns card-columns-count-2">
              {this.state.featuredProjects.map((project) =>
                <Card>
                  <CardBlock>
                    <CardTitle>{project.title}</CardTitle>
                    <CardSubtitle>{project.subtitle}</CardSubtitle>
                  </CardBlock>
                  <img width="100%" src={project.image} alt='Project picture' />
                  <CardBlock>
                    <CardText>{project.text}</CardText>
                    <CardLink href={project.link.href}>{project.link.title}</CardLink>
                  </CardBlock>
                </Card>
              )}
            </div>
          </section>
          <section>
            <Card block outline color="secondary" className="my-3">
              <CardBlock>
                <Row className="text-center justify-content-md-center">
                  <Col md="2">
                    <img src="/images/sebastien-bourdu-9ad5ff9c.jpg" alt="Sébastien Bourdu" className="rounded" />
                  </Col>
                  <Col md="auto">
                    <CardTitle>Let's get connected</CardTitle>
                    <CardSubtitle>I don't bite! <small>and I'm always up for a drink</small></CardSubtitle>
                    <CardText>
                      <ul className="list-inline mt-3 small">
                        <li className="list-inline-item">
                          <a className="zocial linkedin" href="http://linkedin.com/in/sebastienbourdu/" target="_blank">Hire me on Linkedin</a>
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
          <section>
            <div className="card-columns">
              {this.state.projects.map((project) =>
                <Card>
                  <CardBlock>
                    <CardTitle>{project.title}</CardTitle>
                    <CardSubtitle>{project.subtitle}</CardSubtitle>
                  </CardBlock>
                  <img width="100%" src={project.image} alt='Project picture' />
                  <CardBlock>
                    <CardText>{project.text}</CardText>
                    <CardLink href={project.link.href}>{project.link.title}</CardLink>
                  </CardBlock>
                </Card>
              )}
            </div>
          </section>
        </Container>
      </div>
    );
  }
}

export default App;
