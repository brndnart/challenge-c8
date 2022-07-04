import React from "react";
import { Card, Button, Form } from "react-bootstrap";

function AddPlayerForm({ getUserList, handleAddUser, handleSubmit }) {
  return (
    <>
      <div className="add-player mb-5">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Card bg="dark" text="white">
                <Card.Header className="text-center">Add Player</Card.Header>
                <Card.Body>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Label>ID</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="enter new ID"
                        name="id"
                        value={getUserList.id}
                        onChange={handleAddUser}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="enter new username"
                        name="username"
                        value={getUserList.username}
                        onChange={handleAddUser}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="enter new email"
                        name="email"
                        value={getUserList.email}
                        onChange={handleAddUser}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Experience</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="enter new experience"
                        name="experience"
                        value={getUserList.experience}
                        onChange={handleAddUser}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Level</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="enter new level"
                        name="level"
                        value={getUserList.level}
                        onChange={handleAddUser}
                      />
                    </Form.Group>

                    <div className="text-center pt-3">
                      <Button type="submit" variant="primary">
                        Submit Player
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddPlayerForm;
