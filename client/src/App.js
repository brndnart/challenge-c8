import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const [user, setUser] = useState({
    id: "",
    username: "",
    email: "",
    experience: "",
    level: "",
  });

  const [addedUser, setAddedUser] = useState([]);
  const addedUserList = (user) => {
    setAddedUser([...addedUser, user]);
  };

  const handleAddUser = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addedUserList(user);
    console.log(user);
  };

  const [isEditing, setIsEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const handleEditCurrentUser = (event) => {
    const { name, value } = event.target;
    setCurrentUser({
      ...currentUser,
      [name]: value,
    });
  };

  function handleEditClick(user) {
    setIsEditing(true);
    setCurrentUser({ ...user });
  }

  function handleUpdateUser(id, updatedUser) {
    const updatedObject = addedUser.map((user) =>
      user.id === id ? updatedUser : user
    );
    setIsEditing(false);
    setCurrentUser(updatedObject);
  }

  function handleEditFormSubmit(e) {
    e.preventDefault();
    handleUpdateUser(currentUser.username, currentUser);
    addedUserList(currentUser);
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              getUserList={user}
              handleAddUser={handleAddUser}
              handleSubmit={handleSubmit}
              addedUser={addedUser}
              getCurrentUser={currentUser}
              getIsEditing={isEditing}
              getSetIsEditing={setIsEditing}
              handleEditCurrentUser={handleEditCurrentUser}
              handleEditClick={handleEditClick}
              handleUpdateUser={handleUpdateUser}
              handleEditFormSubmit={handleEditFormSubmit}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
