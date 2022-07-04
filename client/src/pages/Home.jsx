import React from "react";
import AddPlayerForm from "../components/AddPlayerForm";
import Navbars from "../components/Navbars";
import UserCards from "../components/UserCards";

function Home({
  getUserList,
  handleAddUser,
  handleSubmit,
  addedUser,
  getCurrentUser,
  getIsEditing,
  getSetIsEditing,
  handleEditCurrentUser,
  handleEditClick,
  handleUpdateUser,
  handleEditFormSubmit,
}) {
  return (
    <>
      <Navbars />
      <UserCards
        addedUser={addedUser}
        getCurrentUser={getCurrentUser}
        getIsEditing={getIsEditing}
        getSetIsEditing={getSetIsEditing}
        handleEditCurrentUser={handleEditCurrentUser}
        handleEditClick={handleEditClick}
        handleUpdateUser={handleUpdateUser}
        handleEditFormSubmit={handleEditFormSubmit}
      />
      <AddPlayerForm
        getUserList={getUserList}
        handleAddUser={handleAddUser}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default Home;
