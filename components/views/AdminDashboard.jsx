import React from "react";
import WriteData from "../cloudFirestore/Write";
import ReadData from "../cloudFirestore/Read";

const AdminDashboard = (props) => {
  return (
    <>
      <h1>{props.user.name}</h1>
      <h3>{props.user.email}</h3>
      <WriteData />
      <ReadData />
    </>
  );
};

export default AdminDashboard;
