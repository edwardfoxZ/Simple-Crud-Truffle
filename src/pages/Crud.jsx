import React, { useState, useRef } from "react";
import { form, inputGroup } from "./index";
import Button from "react-bootstrap/Button";

export const Crud = () => {
  const [name, setName] = useState("");
  const [update, setUpdate] = useState("");
  const [id, setId] = useState("");
  const [del, setDelete] = useState("");
  const [find, setFind] = useState("");

  const nameRef = useRef();
  const updateRef = useRef();
  const idRef = useRef();
  const deleteRef = useRef();
  const findRef = useRef();

  const handleSubmit = () => {
    console.log("Name:", nameRef.current.value);
  };

  const handleUpdateRef = () => {
    console.log("Update:", updateRef.current.value);
  };

  const handleIdRef = () => {
    console.log("Id:", idRef.current.value);
  };

  const handleDeleteRef = () => {
    console.log("Deleted:", deleteRef.current.value);
  };

  const handleFindRef = () => {
    console.log("Find:", findRef.current.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleUpdate = (e) => {
    setUpdate(e.target.value);
  };
  const handleId = (e) => {
    setId(e.target.value);
  };
  const handleDelete = (e) => {
    setDelete(e.target.value);
  };
  const handleFind = (e) => {
    setFind(e.target.value);
  };

  return (
    <div className="w-100 d-flex flex-column mt-5 gap-5">
      <inputGroup className="w-50 mb-3 d-flex flex-column gap-3 mx-auto">
        <form.Control
          ref={nameRef}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder="name..."
          value={name}
          onChange={handleName}
        />
        <Button
          variant="primary"
          disabled={!name}
          onClick={handleSubmit}
          className="w-25"
        >
          Submit
        </Button>
      </inputGroup>
      <inputGroup className="w-50 mb-3 d-flex flex-column gap-3 mx-auto">
        <form.Control
          ref={updateRef}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder="address the id... eg: 0,1,3, etc. "
          value={update}
          onChange={handleUpdate}
        />
        <Button
          onClick={handleUpdateRef}
          disabled={!update}
          variant="warning"
          className="w-25"
        >
          Update
        </Button>
      </inputGroup>
      <inputGroup className="w-50 mb-3 d-flex flex-column gap-3 mx-auto">
        <form.Control
          ref={deleteRef}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder="delete the id... eg: 0,1,3, etc. "
          value={del}
          onChange={handleDelete}
        />
        <Button
          onClick={handleDeleteRef}
          disabled={!del}
          variant="danger"
          className="w-25"
        >
          Delete
        </Button>
      </inputGroup>
      <inputGroup className="w-50 mb-3 d-flex flex-column gap-3 mx-auto">
        <form.Control
          ref={findRef}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder="find the user by id... eg: 0,1,3, etc. "
          value={find}
          onChange={handleFind}
        />
        <Button
          onClick={handleFindRef}
          disabled={!find}
          variant="success"
          className="w-25"
        >
          Find
        </Button>
      </inputGroup>
    </div>
  );
};
