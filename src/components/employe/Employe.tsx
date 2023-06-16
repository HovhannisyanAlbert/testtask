import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, usedispatch } from "../features/store/store";
import { DeleteUser, GetAllEmployees } from "../features/employe/employeThunk";
import EmployePagination from "./EmployePagination";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import style from "./employe.module.css";
import { User } from "../features/employe/type";
import EditUser from "./EditUser";
import { editUser } from "../features/employe/employeSlice";
import { useNavigate } from "react-router-dom";

const styles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const Employe = () => {
  const { allEmploye } = useSelector((state: RootState) => state.employe);
  const [open, setOpen] = useState(false);
  const [checkId, setCheckId] = useState(null);
  const dispatch = usedispatch();
  useEffect(() => {
    dispatch(GetAllEmployees());
  }, []);

  const handleDelete = (id: number) => {
    dispatch(DeleteUser(id));
  };
  const navigate = useNavigate();

  const createAccount = () => {
    navigate("/employe/form");
  };

  const handleEdit = (id: any) => {
    setCheckId(id);
    dispatch(editUser(id));
    setOpen(true);
  };

  const handleCreateTask = (id: any, name: string) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    navigate("/task");
  };

  const handleShowUserTask = (id:any) => {
      localStorage.setItem("id",id)
      navigate("/showtask")
  }
  return (
    <div className={style.employe}>
      {allEmploye.map((user: User) => (
        <div key={user.id} className={style.userContainer}>
          <span onClick={() => handleShowUserTask(user.id)}> {user.name}</span>
          <span> {user.sureName}</span>
          <span> {user.email} </span>
          <span> {user.position}</span>
          <button
            onClick={() => handleDelete(user.id)}
            className={style.delete}
          >
            
            Delete
          </button>
          <button onClick={() => handleEdit(user.id)} className={style.edit}>
            
            Edit
          </button>
          {checkId === user.id && (
            <Modal
              open={open}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={{ ...styles }}>
                <EditUser setOpen={setOpen} />
              </Box>
            </Modal>
          )}
          <button
            onClick={() => handleCreateTask(user.id, user.name)}
            className={style.task}
          >
            {" "}
            Create Task
          </button>
        </div>
      ))}

      <EmployePagination />
      <button onClick={createAccount}> create User</button>
    </div>
  );
};

export default Employe;
