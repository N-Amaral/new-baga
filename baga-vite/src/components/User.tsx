import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import React from "react";

function UserPage() {
  return (
    <Container className="d-flex justify-content-center">
      <div className="userCard">
        <div className="userCardImage">
          <span>Image</span>
        </div>
        <div className="userCardBody">
          <span>User Name</span>
          <span>User Email</span>
        </div>
        <button>Change</button>
      </div>
    </Container>
  );
}

export default UserPage;
