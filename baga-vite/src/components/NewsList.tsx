import React from "react";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import { baseNews } from "../helpers/newsListing";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Col, Row, Image } from "react-bootstrap";

function NewsCard(props: { content: { title: string; src: string; content: string; date: string; author: string } }) {
  return (
    <Card bg="dark" text="light" style={{ width: "auto" }}>
      <Row className="no-gutters">
        <Col className="m-auto p-auto" sm={"1"} md={"5"} lg={"3"}>
          <Card.Img className="card-image" variant="top" src={props.content.src} />
        </Col>
        <Col className="p-0">
          <Card.Body>
            <Card.Title>{props.content.title}</Card.Title>
            <Card.Subtitle className="text-muted">{props.content.author}</Card.Subtitle>
            <Card.Text className="pt-1 pb-1">{props.content.content}</Card.Text>
            <Card.Footer>{props.content.date}</Card.Footer>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

function NewsListing() {
  return (
    <div className="newsList-wrapper mt-2 mb-2">
      <Container>
        <ListGroup as="ul">
          {baseNews.map((element, i) => {
            return (
              <ListGroup.Item as="li" className="m-1 p-0 border-0" key={i}>
                <NewsCard content={element} />
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Container>
    </div>
  );
}

export default NewsListing;
